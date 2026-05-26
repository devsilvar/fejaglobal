import { createFileRoute, Link } from "@tanstack/react-router";
import { Trophy } from "@phosphor-icons/react/dist/ssr/Trophy";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/scholarships")({
  head: () => ({
    meta: [
      { title: "Scholarships for African Students — Canada & UK | Feja Global" },
      {
        name: "description",
        content:
          "Fully and partially funded scholarships for African students pursuing undergraduate, master's and PhD study in Canada and the United Kingdom.",
      },
      { property: "og:title", content: "Scholarships for African Students | Feja Global" },
      {
        property: "og:description",
        content:
          "Chevening, Commonwealth, Vanier, Trudeau, Mastercard Foundation and more — eligibility and deadlines.",
      },
      { property: "og:url", content: "https://fejaglobal.com/scholarships" },
    ],
    links: [{ rel: "canonical", href: "/scholarships" }],
  }),
  component: ScholarshipsPage,
});

const scholarships = [
  {
    name: "Chevening Scholarship",
    country: "United Kingdom",
    funding: "Fully funded",
    level: "Master's",
    deadline: "November",
    blurb:
      "UK Government's flagship scholarship covering tuition, stipend, flights and visa for one-year master's programmes.",
  },
  {
    name: "Commonwealth Scholarship",
    country: "United Kingdom",
    funding: "Fully funded",
    level: "Master's & PhD",
    deadline: "October",
    blurb:
      "For high-performing Commonwealth citizens; covers tuition, monthly stipend, return flights and thesis grants.",
  },
  {
    name: "Vanier CGS",
    country: "Canada",
    funding: "$50,000/yr",
    level: "PhD",
    deadline: "November",
    blurb:
      "Canada's most prestigious doctoral scholarship — three years of funding for outstanding PhD candidates.",
  },
  {
    name: "Trudeau Foundation Scholarship",
    country: "Canada",
    funding: "Up to $60,000/yr",
    level: "PhD",
    deadline: "December",
    blurb:
      "For doctoral students working on the foundation's pillars: human rights, responsible citizenship, Canada in the world, and people in their natural environment.",
  },
  {
    name: "Mastercard Foundation Scholars",
    country: "Canada & UK",
    funding: "Fully funded",
    level: "Undergraduate & Master's",
    deadline: "Varies",
    blurb:
      "Comprehensive scholarship for academically talented yet economically disadvantaged African students at partner universities including UofT, McGill, UBC and Edinburgh.",
  },
  {
    name: "Rhodes Scholarship",
    country: "United Kingdom",
    funding: "Fully funded",
    level: "Master's & DPhil",
    deadline: "September (West Africa)",
    blurb:
      "Two to three years of fully funded study at Oxford for outstanding young leaders.",
  },
  {
    name: "Gates Cambridge Scholarship",
    country: "United Kingdom",
    funding: "Fully funded",
    level: "Master's & PhD",
    deadline: "December",
    blurb:
      "Full-cost scholarship at the University of Cambridge for students with strong academic record and leadership potential.",
  },
  {
    name: "Lester B. Pearson Scholarship",
    country: "Canada",
    funding: "Fully funded",
    level: "Undergraduate",
    deadline: "November",
    blurb:
      "University of Toronto's most prestigious international undergraduate award — covers tuition, books, fees and residence for four years.",
  },
];

function ScholarshipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Scholarships"
        title="Funding routes for"
        accent="African students."
        description="The major scholarships we help students win each year. We won't waste your time on awards you can't realistically get."
        image="scholarships"
      />


      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {scholarships.map((s) => (
            <article
              key={s.name}
              className="bg-white p-7 border border-brand-navy/10 hover:border-brand-navy/40 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-25px_oklch(0.16_0.04_265_/_0.4)] transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="size-11 bg-brand-blue-soft text-brand-blue grid place-items-center">
                  <Trophy className="size-5" weight="duotone" />
                </div>
                <span className="font-mont text-[10px] font-bold uppercase tracking-[0.16em] text-brand-blue bg-brand-blue-soft px-3 py-1.5">
                  {s.funding}
                </span>
              </div>
              <h2 className="font-display text-2xl font-medium text-brand-navy mb-2 tracking-[-0.01em]">
                {s.name}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {s.blurb}
              </p>
              <dl className="grid grid-cols-3 gap-3 pt-5 border-t border-brand-navy/10 text-xs">
                <div>
                  <dt className="font-mont uppercase tracking-[0.14em] text-muted-foreground mb-1 text-[10px]">Country</dt>
                  <dd className="font-medium text-brand-navy">{s.country}</dd>
                </div>
                <div>
                  <dt className="font-mont uppercase tracking-[0.14em] text-muted-foreground mb-1 text-[10px]">Level</dt>
                  <dd className="font-medium text-brand-navy">{s.level}</dd>
                </div>
                <div>
                  <dt className="font-mont uppercase tracking-[0.14em] text-muted-foreground mb-1 text-[10px]">Deadline</dt>
                  <dd className="font-medium text-brand-navy">{s.deadline}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-40" aria-hidden />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-[-0.03em] mb-4 leading-[1.05]">
            Not sure which one fits <span className="italic text-brand-blue">you?</span>
          </h2>
          <p className="text-white/70 mb-8">
            Book a free 20-minute call. We'll tell you honestly which awards you have a real shot at.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-navy py-3.5 px-6 rounded-full font-mont font-semibold hover:-translate-y-0.5 transition-all"
          >
            Book a Free Consultation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
