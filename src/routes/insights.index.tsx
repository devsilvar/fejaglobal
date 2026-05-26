import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "@/components/site/PageHero";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { Calendar } from "@phosphor-icons/react/dist/ssr/Calendar";
import { Clock } from "@phosphor-icons/react/dist/ssr/Clock";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr/CheckCircle";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";
import { articles } from "@/lib/insights-data";
import { siteConfig } from "@/lib/site-config";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Blog — Study in Canada & the UK | Feja Global" },
      {
        name: "description",
        content:
          "Honest, founder-written articles on Canadian study permits, UK Graduate Route, scholarships, SOPs and life as an African student abroad.",
      },
      { property: "og:title", content: "Blog | Feja Global" },
      {
        property: "og:description",
        content:
          "Practical articles on visas, scholarships and university applications — written for African students.",
      },
      { property: "og:url", content: `${siteConfig.siteUrl}/insights` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.siteUrl}/insights` }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const categories = useMemo(() => {
    const set = new Set(articles.map((a) => a.category));
    return ["All", ...Array.from(set)];
  }, []);
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");

  const [featured, ...rest] = articles;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rest.filter((a) => {
      const matchesCategory = active === "All" || a.category === active;
      const matchesQuery =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [active, query, rest]);

  return (
    <>
      <PageHero
        eyebrow="The Feja Blog"
        title="Honest writing on"
        accent="studying abroad."
        description="Founder-written articles on visas, scholarships and applications — no fluff, no recycled posts. Written for African students by advisors who do the work."
        image="insights"
      />

      {/* Featured post */}
      <section className="py-20 border-b border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="size-1.5 rounded-full bg-brand-blue" aria-hidden />
            <span className="font-mont text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue">
              Featured this week
            </span>
          </div>
          <Link
            to="/insights/$slug"
            params={{ slug: featured.slug }}
            className="group grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-navy">
                <img
                  src={
                    featured.cover ??
                    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=72"
                  }
                  alt={featured.title}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white px-3 py-1.5 font-mont text-[10px] font-bold uppercase tracking-[0.18em] text-brand-navy">
                  {featured.category}
                </span>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.025em] leading-[1.1] text-brand-navy text-balance mb-5 group-hover:text-brand-blue transition-colors">
                {featured.title}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-7 max-w-2xl">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-5 font-mont text-xs text-muted-foreground">
                <span className="font-semibold text-brand-navy">{featured.author}</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-3.5" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  {featured.read}
                </span>
              </div>
              <span className="mt-7 inline-flex items-center gap-2 font-mont text-sm font-semibold text-brand-blue border-b-2 border-brand-blue/30 group-hover:border-brand-blue transition-colors pb-1">
                Read the article
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Filter + search */}
      <section className="pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 pb-6 border-b border-brand-navy/10">
            <div>
              <div className="font-mont text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-3">
                All Articles
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-[-0.02em] text-brand-navy leading-[1.1]">
                Browse by <span className="italic">topic.</span>
              </h2>
            </div>
            <label className="relative w-full lg:max-w-sm">
              <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles…"
                className="w-full bg-white border border-brand-navy/15 pl-11 pr-4 py-3 font-mont text-sm text-brand-navy placeholder:text-muted-foreground/60 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition"
              />
            </label>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-mont text-xs font-semibold uppercase tracking-[0.14em] px-4 py-2 border transition-colors ${
                  active === cat
                    ? "bg-brand-navy text-white border-brand-navy"
                    : "bg-white text-brand-navy border-brand-navy/15 hover:border-brand-navy/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <p className="font-mont text-sm text-muted-foreground">
                No articles match that filter yet. Try another topic.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((a) => (
                <Link
                  key={a.slug}
                  to="/insights/$slug"
                  params={{ slug: a.slug }}
                  className="group bg-white border border-brand-navy/10 hover:border-brand-navy/40 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-25px_oklch(0.16_0.04_265_/_0.4)] transition-all flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-brand-cream/60 border-b border-brand-navy/10 relative">
                    {a.cover ? (
                      <img
                        src={a.cover}
                        alt={a.title}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <>
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-brand-blue-soft/60 to-brand-cream"
                          aria-hidden
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-display text-6xl font-light text-brand-navy/15 italic">
                            {a.category[0]}
                          </span>
                        </div>
                      </>
                    )}
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-white px-2.5 py-1 font-mont text-[10px] font-bold uppercase tracking-[0.18em] text-brand-navy">
                      {a.category}
                    </span>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-medium text-brand-navy leading-snug mb-3 tracking-[-0.01em] group-hover:text-brand-blue transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                      {a.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-5 border-t border-brand-navy/10">
                      <div className="flex items-center gap-2 font-mont text-[11px] text-muted-foreground">
                        <Calendar className="size-3.5" />
                        <span>{a.date}</span>
                        <span aria-hidden>·</span>
                        <span>{a.read}</span>
                      </div>
                      <ArrowRight className="size-4 text-brand-blue group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <SectionHeading
            align="center"
            title="Get new articles in your inbox."
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
