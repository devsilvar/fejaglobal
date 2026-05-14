import { createFileRoute, Link } from "@tanstack/react-router";
import canadaImg from "@/assets/canada.jpg";
import ukImg from "@/assets/uk.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Check } from "@phosphor-icons/react";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Study Destinations — Canada & the UK | LuminaEdu" },
      {
        name: "description",
        content:
          "Compare studying in Canada and the UK: tuition, scholarships, visa process, career opportunities and student life.",
      },
      { property: "og:title", content: "Study Destinations — Canada & the UK" },
      { property: "og:description", content: "Compare tuition, visas, scholarships and student life across Canada and the UK." },
      { property: "og:url", content: "/destinations" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-pinstripe opacity-[0.45]" />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="font-mont text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
            Study Destinations
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-light tracking-[-0.035em] leading-[1] text-balance text-brand-navy max-w-3xl">
            Two welcoming education{" "}
            <span className="italic text-brand-blue">systems.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Whether you choose Canada or the UK, you&apos;ll graduate with a
            globally respected degree and a clear path to work after study.
          </p>
        </div>
      </header>

      <Country
        flag="🇨🇦"
        name="Canada"
        img={canadaImg}
        intro="Canada offers world-class universities, a strong post-study work permit, and one of the clearest paths to permanent residency for international graduates."
        tuition="$15,000 – $35,000 CAD per year"
        visa="Study Permit · 8–12 weeks processing"
        career="Up to 3-year Post-Graduation Work Permit (PGWP); pathways to PR via Express Entry."
        life="Safe cities, vibrant African student communities in Toronto, Ottawa, Vancouver and Montreal."
        scholarships="Vanier, Trudeau, Lester B. Pearson, university-specific entrance awards."
      />

      <Country
        flag="🇬🇧"
        name="United Kingdom"
        img={ukImg}
        flip
        intro="The UK offers concentrated 1-year Master's programmes from globally elite institutions, plus a 2-year Graduate Route work visa."
        tuition="£12,000 – £28,000 GBP per year"
        visa="Student Visa · 3–5 weeks processing"
        career="2-year Graduate Route post-study work; 3 years for PhD graduates."
        life="Diverse, well-connected campuses across London, Manchester, Edinburgh, Birmingham and beyond."
        scholarships="Chevening, Commonwealth, GREAT Scholarships, university bursaries."
      />

      <section className="py-24 bg-secondary/40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            align="center"
            title="Not sure which one is right for you?"
            description="A 30-minute call with a senior consultant is enough to clarify your best path."
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

function Country({
  flag,
  name,
  img,
  intro,
  tuition,
  visa,
  career,
  life,
  scholarships,
  flip = false,
}: {
  flag: string;
  name: string;
  img: string;
  intro: string;
  tuition: string;
  visa: string;
  career: string;
  life: string;
  scholarships: string;
  flip?: boolean;
}) {
  const rows = [
    { label: "Tuition Overview", value: tuition },
    { label: "Visa Process", value: visa },
    { label: "Career Opportunities", value: career },
    { label: "Student Life", value: life },
    { label: "Scholarships", value: scholarships },
  ];
  return (
    <section className="py-24 border-b border-border">
      <div className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center ${flip ? "lg:[&>div:first-child]:order-2" : ""}`}>
        <div>
          <img
            src={img}
            alt={`Study in ${name}`}
            loading="lazy"
            width={1280}
            height={896}
            className="w-full aspect-[4/3] object-cover border border-brand-navy/15 shadow-[0_28px_60px_-25px_oklch(0.16_0.04_265_/_0.45)]"
          />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{flag}</span>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-[-0.03em] text-brand-navy">{name}</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">{intro}</p>
          <dl className="divide-y divide-border border-y border-border">
            {rows.map((r) => (
              <div key={r.label} className="py-4 grid grid-cols-3 gap-4">
                <dt className="font-mont text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <Check className="size-3 text-brand-blue" weight="bold" /> {r.label}
                </dt>
                <dd className="col-span-2 text-sm text-foreground">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
