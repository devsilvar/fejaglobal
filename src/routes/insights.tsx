import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "@/components/site/PageHero";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { Calendar } from "@phosphor-icons/react/dist/ssr/Calendar";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr/CheckCircle";
import { articles } from "@/lib/insights-data";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights & Guides — Study in Canada & the UK | Feja Global" },
      {
        name: "description",
        content:
          "Honest, founder-written guides on Canadian study permits, UK Graduate Route, scholarships, SOPs and life as an African student abroad.",
      },
      { property: "og:title", content: "Insights & Guides | Feja Global" },
      {
        property: "og:description",
        content:
          "Practical articles on visas, scholarships and university applications — written for African students.",
      },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights & Guides"
        title="Honest writing on"
        accent="studying abroad."
        description="Founder-written guides on visas, scholarships and applications — no fluff, no recycled blog posts."
        image="insights"
      />


      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <Link
              key={a.slug}
              to="/insights/$slug"
              params={{ slug: a.slug }}
              className="group bg-white border border-brand-navy/10 hover:border-brand-navy/40 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-25px_oklch(0.16_0.04_265_/_0.4)] transition-all p-7 flex flex-col"
            >
              <div className="font-mont text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-4">
                {a.category}
              </div>
              <h2 className="font-display text-2xl font-medium text-brand-navy leading-snug mb-3 tracking-[-0.01em]">
                {a.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {a.excerpt}
              </p>
              <div className="flex items-center justify-between pt-5 border-t border-brand-navy/10">
                <div className="flex items-center gap-2 font-mont text-xs text-muted-foreground">
                  <Calendar className="size-3.5" />
                  <span>{a.date}</span>
                  <span aria-hidden>·</span>
                  <span>{a.read}</span>
                </div>
                <ArrowRight className="size-4 text-brand-blue group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <SectionHeading
            align="center"
            title="Get new guides in your inbox."
            description="One short email a month. No spam — just the next deadline you should know about."
          />
          <SubscribeForm />
        </div>
      </section>
    </>
  );
}

function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status !== "idle") return;
    setStatus("submitting");

    const { error } = await supabase
      .from("subscribers")
      .insert({ email: email.trim().toLowerCase(), source: "insights" });

    // 23505 = unique_violation. Already subscribed → treat as success, don't leak
    // membership status to the user.
    if (!error || error.code === "23505") {
      setStatus("success");
      return;
    }

    console.error("[SubscribeForm] supabase insert failed", error);
    toast.error("Couldn't subscribe — please try again in a moment.");
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <div className="mt-8 inline-flex items-center gap-3 bg-white border border-brand-navy/10 rounded-full pl-5 pr-6 py-3 shadow-sm">
        <CheckCircle weight="fill" className="size-5 text-brand-blue" />
        <span className="font-mont text-sm text-brand-navy">
          You're in. Check <span className="font-semibold">{email}</span> for a confirmation.
        </span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 mx-auto flex flex-col sm:flex-row gap-3 max-w-md"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className="flex-1 bg-white border border-brand-navy/15 rounded-full px-5 py-3.5 text-sm font-mont text-brand-navy placeholder:text-muted-foreground/60 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center bg-brand-blue text-white py-3.5 px-6 rounded-full font-mont font-semibold text-sm shadow-[0_10px_30px_-10px_oklch(0.52_0.24_264_/_0.55)] hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? "Subscribing…" : "Subscribe"}
      </button>
    </form>
  );
}
