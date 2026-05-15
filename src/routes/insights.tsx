import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowRight, Calendar } from "@phosphor-icons/react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights & Guides — Study in Canada & the UK | LuminaEdu" },
      {
        name: "description",
        content:
          "Honest, founder-written guides on Canadian study permits, UK Graduate Route, scholarships, SOPs and life as an African student abroad.",
      },
      { property: "og:title", content: "Insights & Guides | LuminaEdu" },
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

const articles = [
  {
    category: "Canada",
    title: "The 2026 Canadian Study Permit: what actually changed",
    excerpt:
      "PAL letters, financial proof updates and what IRCC's new caps mean for Nigerian applicants this intake.",
    date: "May 12, 2026",
    read: "8 min read",
  },
  {
    category: "United Kingdom",
    title: "UK Graduate Route in 2026 — still worth it?",
    excerpt:
      "A clear-eyed look at the 2-year post-study visa, salary realities and which courses still convert to long-term roles.",
    date: "May 5, 2026",
    read: "6 min read",
  },
  {
    category: "Scholarships",
    title: "Six fully-funded scholarships open to Nigerian students this year",
    excerpt:
      "Chevening, Commonwealth, Vanier, Trudeau, Rhodes and Mastercard Foundation — eligibility, deadlines and what wins.",
    date: "April 28, 2026",
    read: "10 min read",
  },
  {
    category: "Applications",
    title: "How to write an SOP that actually gets read",
    excerpt:
      "The three-paragraph structure our consultants use to turn average essays into offers from top-30 universities.",
    date: "April 14, 2026",
    read: "7 min read",
  },
  {
    category: "Visa",
    title: "Proof of funds, demystified",
    excerpt:
      "GIC, sponsor letters, Form A and bank statements — what each visa officer is actually looking for.",
    date: "April 2, 2026",
    read: "9 min read",
  },
  {
    category: "Life Abroad",
    title: "Your first 30 days in Canada: a survival checklist",
    excerpt:
      "SIN number, banking, transit cards, SIM, accommodation and where to find Nigerian community.",
    date: "March 21, 2026",
    read: "5 min read",
  },
];

function InsightsPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-pinstripe opacity-[0.45]" />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="font-mont text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
              Insights & Guides
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-light tracking-[-0.035em] leading-[1] text-balance text-brand-navy">
              Honest writing on{" "}
              <span className="italic text-brand-blue">studying abroad.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Founder-written guides on visas, scholarships and applications —
              no fluff, no recycled blog posts.
            </p>
          </div>
        </div>
      </header>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article
              key={a.title}
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
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            align="center"
            title="Get new guides in your inbox."
            description="One short email a month. No spam — just the next deadline you should know about."
          />
          <Link
            to="/contact"
            className="inline-flex mt-8 items-center bg-brand-blue text-white py-3.5 px-6 rounded-full font-mont font-semibold shadow-[0_10px_30px_-10px_oklch(0.52_0.24_264_/_0.55)] hover:-translate-y-0.5 transition-all"
          >
            Subscribe
          </Link>
        </div>
      </section>
    </>
  );
}
