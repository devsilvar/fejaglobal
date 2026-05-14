import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Personal Study-Abroad Guidance | LuminaEdu" },
      {
        name: "description",
        content:
          "LuminaEdu is a small, founder-led consultancy helping African students apply to universities in Canada and the UK with care and honesty.",
      },
      { property: "og:title", content: "About LuminaEdu" },
      { property: "og:description", content: "Our mission, our team and how we work." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const team = [
  { name: "Adaeze Nwosu", role: "Founder & Lead Consultant", initials: "AN" },
  { name: "Tunde Bakare", role: "Visa Operations", initials: "TB" },
  { name: "Funmi Adesina", role: "Admissions Consultant", initials: "FA" },
  { name: "Kelechi Eze", role: "Scholarship & Funding", initials: "KE" },
];

const principles = [
  { v: "1:1", l: "Personal attention" },
  { v: "24h", l: "Reply window" },
  { v: "2", l: "Focus countries" },
  { v: "0", l: "Hidden fees" },
];

function AboutPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-pinstripe opacity-[0.45]" />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="font-mont text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
              About LuminaEdu
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-light tracking-[-0.035em] leading-[1] text-balance text-brand-navy">
              Built to make global education feel{" "}
              <span className="italic text-brand-blue">personal.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              LuminaEdu is a small, founder-led consultancy guiding African
              students through admissions, scholarships and visas to
              universities in Canada and the UK.
            </p>
          </div>
        </div>
      </header>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <SectionHeading
            eyebrow="Mission"
            title="Make world-class education accessible to every African student with the ambition to claim it."
          />
          <SectionHeading
            eyebrow="Vision"
            title="A generation of African leaders shaped by the world's best universities — and ready to shape it back."
          />
        </div>
      </section>

      <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-40" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {principles.map((m) => (
            <div key={m.l}>
              <div className="font-display text-5xl md:text-6xl font-light tracking-[-0.04em] mb-3">{m.v}</div>
              <div className="font-mont text-[11px] text-white/55 uppercase tracking-[0.18em]">{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Our Team" title="Senior consultants. Real attention." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="bg-white p-6 border border-brand-navy/10 hover:border-brand-navy/40 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-25px_oklch(0.16_0.04_265_/_0.4)] transition-all">
                <div className="size-16 bg-brand-blue-soft text-brand-blue grid place-items-center text-lg font-semibold mb-4 font-mont">
                  {t.initials}
                </div>
                <div className="text-base font-semibold text-brand-navy">{t.name}</div>
                <div className="font-mont text-sm text-muted-foreground">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            align="center"
            title="How we work."
            description="Transparent pricing. Senior-only consultants. Weekly updates. Honest advice — even when it's not what you want to hear."
          />
          <Link
            to="/contact"
            className="inline-flex mt-8 items-center bg-brand-blue text-white py-3.5 px-6 rounded-full font-mont font-semibold shadow-[0_10px_30px_-10px_oklch(0.52_0.24_264_/_0.55)] hover:-translate-y-0.5 transition-all"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
