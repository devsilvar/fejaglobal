import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroStudent from "@/assets/hero-student.jpg";
import canadaImg from "@/assets/canada.jpg";
import ukImg from "@/assets/uk.jpg";
import { LeadForm } from "@/components/site/LeadForm";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  GraduationCap,
  FileText,
  AirplaneTakeoff,
  Buildings,
  Sparkle,
  ShieldCheck,
  Globe,
  Users,
  CaretDown,
  Check,
  Star,
  Trophy,
  Briefcase,
  Code,
  Stethoscope,
  PaintBrush,
  Atom,
  Scales,
  GoogleLogo,
  ArrowLeft,
  ArrowRight,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LuminaEdu — Study in Canada & the UK from Nigeria" },
      {
        name: "description",
        content:
          "Founder-led education consultancy guiding Nigerian and African students through admissions, scholarships and visas to universities in Canada and the UK.",
      },
      { property: "og:title", content: "LuminaEdu — Study in Canada & the UK" },
      {
        property: "og:description",
        content:
          "Personal, hands-on guidance from application to departure. Canada and the UK.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Promise />
      <Destinations />
      <Programs />
      <Services />
      <Process />
      <Testimonials />
      <AwardMarquee />
      <Visa />
      <WhyUs />
      <FAQ />
      <LeadCapture />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-cream via-background to-background">
      {/* World-map dot backdrop */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, color-mix(in oklab, var(--color-brand-navy) 22%, transparent) 1px, transparent 0)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(70% 60% at 75% 35%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(70% 60% at 75% 35%, black 0%, transparent 75%)",
        }}
        aria-hidden
      />
      {/* Warm glow */}
      <div
        className="absolute -top-32 left-1/3 -z-10 size-[640px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(closest-side, oklch(0.93 0.06 70) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-20 lg:pt-20 lg:pb-28 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT — copy */}
        <div className="lg:col-span-6 animate-fade-up relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white ring-1 ring-border/80 mb-7 shadow-sm">
            <span className="size-1.5 rounded-full bg-brand-blue animate-pulse" />
            <span className="font-mont text-[11px] font-semibold text-brand-navy uppercase tracking-[0.14em]">
              September 2026 intake · Now open
            </span>
          </div>

          <h1 className="font-display text-[2.75rem] sm:text-[3.5rem] lg:text-[5rem] xl:text-[5.5rem] font-light tracking-[-0.035em] leading-[0.95] text-balance text-brand-navy mb-7">
            Your bridge to{" "}
            <span className="relative inline-block">
              <span className="italic font-normal text-brand-blue">global education.</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 9 Q 75 2, 150 6 T 298 5"
                  fill="none"
                  stroke="oklch(0.52 0.24 264)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.45"
                />
              </svg>
            </span>
          </h1>

          <p className="text-lg lg:text-[1.2rem] text-foreground/65 mb-9 max-w-[54ch] text-pretty leading-relaxed">
            A founder-led consultancy guiding African students through admissions,
            scholarships and visas to top universities in{" "}
            <span className="text-brand-navy font-medium">Canada</span> and the{" "}
            <span className="text-brand-navy font-medium">United Kingdom</span>.
          </p>

          <div className="flex flex-wrap gap-3 items-center mb-12">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-brand-navy text-white py-4 px-7 rounded-full font-mont font-semibold shadow-[0_12px_30px_-10px_oklch(0.16_0.04_265_/_0.45)] hover:shadow-[0_18px_44px_-12px_oklch(0.16_0.04_265_/_0.6)] hover:-translate-y-0.5 transition-all"
            >
              Schedule a meeting
              <span className="grid place-items-center size-5 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors">
                →
              </span>
            </Link>
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-brand-navy py-4 px-6 rounded-full font-mont font-semibold ring-1 ring-brand-navy/15 hover:ring-brand-navy/30 hover:bg-white transition-all"
            >
              Explore destinations
              <span aria-hidden>↗</span>
            </Link>
          </div>

          {/* Inline mini-stats row (Elab cue) */}
          <div className="grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "98%", l: "visa success" },
              { v: "500+", l: "students placed" },
              { v: "24h", l: "reply window" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-medium text-brand-navy tracking-[-0.02em] leading-none">
                  {s.v}
                </div>
                <div className="font-mont text-[10px] text-muted-foreground uppercase tracking-[0.14em] mt-2 leading-tight">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — image with curved mask + decorations */}
        <div className="lg:col-span-6 animate-fade-up [animation-delay:120ms] relative">
          <div className="relative">
            {/* Backdrop circle */}
            <div
              className="absolute -right-10 -top-10 size-72 rounded-full bg-brand-blue-soft -z-10 hidden lg:block"
              aria-hidden
            />

            {/* Image with curved diagonal mask */}
            <div
              className="relative aspect-[5/6] w-full overflow-hidden bg-brand-navy shadow-[0_40px_80px_-30px_oklch(0.16_0.04_265_/_0.45)]"
              style={{
                borderRadius: "200px 32px 32px 32px",
              }}
            >
              <img
                src={heroStudent}
                alt="Confident African student on a modern university campus"
                width={1024}
                height={1280}
                className="size-full object-cover"
              />
              {/* Soft gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/30 via-transparent to-transparent" aria-hidden />
            </div>

            {/* Airplane trajectory (dashed arc) */}
            <svg
              className="absolute -top-4 -left-10 w-[110%] h-32 hidden md:block pointer-events-none"
              viewBox="0 0 600 120"
              fill="none"
              aria-hidden
            >
              <path
                d="M 10 100 Q 200 -10, 580 30"
                stroke="oklch(0.52 0.24 264)"
                strokeWidth="2"
                strokeDasharray="6 8"
                strokeLinecap="round"
                opacity="0.55"
              />
              <g transform="translate(575 28) rotate(15)">
                <path
                  d="M0 0 L-18 -7 L-14 0 L-18 7 Z M-14 0 L6 0"
                  fill="oklch(0.52 0.24 264)"
                />
              </g>
            </svg>

            {/* Floating award seal (top right) */}
            <div className="absolute -top-6 -right-6 sm:-right-10 size-32 sm:size-36 grid place-items-center bg-white rounded-full shadow-xl ring-1 ring-border rotate-[-8deg]">
              <div className="absolute inset-2 rounded-full ring-1 ring-dashed ring-brand-blue/40" />
              <div className="text-center px-3">
                <Trophy className="size-5 text-brand-blue mx-auto mb-1" weight="fill" />
                <div className="font-mont text-[8px] font-bold uppercase tracking-[0.18em] text-brand-navy leading-tight">
                  Top study<br/>abroad
                </div>
                <div className="font-display text-sm font-medium text-brand-blue leading-none mt-1">
                  2026
                </div>
              </div>
            </div>

            {/* Floating quote card (bottom left) */}
            <div className="absolute -bottom-6 -left-4 sm:-left-10 bg-white rounded-2xl p-5 shadow-[0_20px_50px_-20px_oklch(0.16_0.04_265_/_0.35)] ring-1 ring-border max-w-[240px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-[oklch(0.78_0.18_85)]">
                  {[0,1,2,3,4].map((i) => <Star key={i} className="size-3" weight="fill" />)}
                </div>
                <span className="font-mont text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Google · 4.9
                </span>
              </div>
              <div className="font-display text-[15px] text-brand-navy leading-snug">
                &ldquo;One <span className="italic text-brand-blue">team</span>, handled my entire UK application end-to-end.&rdquo;
              </div>
            </div>

            {/* Floating reply chip (mid right) */}
            <div className="absolute top-1/2 -right-3 sm:-right-6 -translate-y-1/2 bg-brand-navy text-white rounded-2xl px-4 py-3 shadow-xl rotate-3 hidden sm:block">
              <div className="font-mont text-[9px] uppercase tracking-[0.18em] opacity-60">
                Reply within
              </div>
              <div className="font-display text-base font-medium">24 hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const partners = [
  "UNIVERSITY OF TORONTO",
  "UCL",
  "MCGILL",
  "UNIVERSITY OF MANCHESTER",
  "UBC",
  "UNIVERSITY OF EDINBURGH",
];

function TrustStrip() {
  return (
    <section className="py-10 border-y border-border bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mont text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-6">
          We help students apply to leading institutions like
        </p>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-10 gap-y-4 opacity-60">
          {partners.map((p) => (
            <span key={p} className="font-mont text-sm md:text-base font-semibold tracking-tight text-brand-navy">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const promises = [
  { v: "98%", u: "visa", l: "Approval rate to date" },
  { v: "500+", u: "students", l: "Guided since founding" },
  { v: "40+", u: "universities", l: "Active partner network" },
  { v: "24h", u: "reply", l: "From every enquiry" },
];

function Promise() {
  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-40" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="font-mont text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue mb-3">
            By the numbers
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-[-0.03em] leading-[1.05]">
            Quiet work, <span className="italic text-brand-blue">measurable results.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          {promises.map((m) => (
            <div key={m.l} className="relative pl-5 border-l border-white/15">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display text-5xl md:text-6xl font-light tracking-[-0.04em]">{m.v}</span>
                <span className="font-mont text-sm font-medium text-brand-blue lowercase">{m.u}</span>
              </div>
              <div className="font-mont text-[12px] text-white/55 uppercase tracking-[0.16em] leading-relaxed">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  return (
    <section className="py-24 border-t border-brand-navy/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-14 pb-8 border-b border-brand-navy/10">
          <div className="max-w-2xl">
            <div className="font-mont text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4">
              Destinations
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-brand-navy leading-[1.05]">
              Two corridors. <span className="italic font-normal">Focused expertise.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg leading-relaxed">
              We focus on Canada and the UK — two of the highest-ROI study paths for African students, with clear post-study work routes.
            </p>
          </div>
          <Link
            to="/destinations"
            className="font-mont text-sm font-semibold text-brand-blue inline-flex items-center gap-2 border-b-2 border-transparent hover:border-brand-blue transition-colors self-start md:self-auto pb-1 w-fit"
          >
            Compare destinations
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <DestinationCard
            img={canadaImg}
            flag="🇨🇦"
            title="Canada"
            tag="PGWP eligible"
            blurb="A leading destination for Post-Graduation Work Permits and clear permanent residency pathways."
            tuition="$18k – $35k CAD"
            processing="8 – 12 weeks"
          />
          <DestinationCard
            img={ukImg}
            flag="🇬🇧"
            title="United Kingdom"
            tag="2-year graduate visa"
            blurb="World-class heritage, accelerated 1-year Master's programmes, and the Graduate Route."
            tuition="£12k – £22k GBP"
            processing="3 – 5 weeks"
          />
        </div>
      </div>
    </section>
  );
}

function DestinationCard({
  img,
  flag,
  title,
  tag,
  blurb,
  tuition,
  processing,
}: {
  img: string;
  flag: string;
  title: string;
  tag: string;
  blurb: string;
  tuition: string;
  processing: string;
}) {
  return (
    <div className="group bg-white border border-brand-navy/10 hover:border-brand-navy/30 transition-colors overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-brand-navy/10">
        <img
          src={img}
          alt={`Study in ${title}`}
          loading="lazy"
          width={1280}
          height={720}
          className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-4 left-4 font-mont text-[10px] font-bold uppercase tracking-widest bg-brand-navy text-white px-3 py-1.5">
          {tag}
        </span>
      </div>
      <div className="p-8">
        <div className="flex items-center justify-between mb-6 pb-5 border-b border-brand-navy/10">
          <div className="flex items-center gap-3">
          <span className="text-2xl" aria-hidden>{flag}</span>
            <h3 className="font-display text-2xl font-semibold text-brand-navy tracking-[-0.01em]">{title}</h3>
          </div>
        </div>
        <p className="text-muted-foreground mb-6">{blurb}</p>
        <div className="grid grid-cols-2 mb-6 border-t border-l border-brand-navy/10">
          <Stat label="Avg. Tuition" value={tuition} />
          <Stat label="Processing" value={processing} />
        </div>
        <Link
          to="/destinations"
          className="group/btn flex items-center justify-between w-full py-3 px-4 font-mont text-xs font-bold uppercase tracking-widest text-brand-navy border border-brand-navy hover:bg-brand-navy hover:text-white transition-colors"
        >
          Explore Universities
          <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 border-r border-b border-brand-navy/10">
      <div className="font-mont text-[10px] text-muted-foreground uppercase tracking-widest mb-1.5 font-bold">{label}</div>
      <div className="font-display text-lg font-semibold text-brand-navy tracking-[-0.01em]">{value}</div>
    </div>
  );
}

const services = [
  { Icon: GraduationCap, title: "Admission Consulting", body: "Profile assessment, school matching and a personalised application strategy." },
  { Icon: FileText, title: "Visa Application Support", body: "End-to-end visa documentation, financial proof guidance and mock interviews." },
  { Icon: Buildings, title: "School Matching", body: "A curated shortlist of universities across Canada and the UK, ranked to your goals." },
  { Icon: Sparkle, title: "SOP & Essay Coaching", body: "We work with you to craft Statements of Purpose that feel like you." },
  { Icon: Users, title: "Interview Preparation", body: "Live mock interviews with structured, candid feedback." },
  { Icon: AirplaneTakeoff, title: "Pre-Departure & Settling", body: "Flights, accommodation guidance and an arrival briefing — no loose ends." },
];

function Services() {
  return (
    <section className="py-24 bg-brand-cream/40 border-t border-brand-navy/10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="font-mont text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4">
            Services
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-brand-navy leading-[1.05] mb-6">
            Everything you need,<br />
            <span className="italic font-normal">under one roof.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-md">
            From your first conversation to your first day on campus — one team handles it all.
          </p>
        </div>
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {services.map(({ Icon, title, body }) => (
              <div key={title} className="flex gap-5 group">
                <div className="text-brand-blue shrink-0 pt-0.5">
                  <Icon className="size-6" weight="duotone" />
                </div>
                <div>
                  <h4 className="font-mont font-bold text-brand-navy mb-1.5 text-[15px]">
                    {title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Free Profile Review", d: "We assess grades, budget and ambitions to find your best-fit schools." },
  { n: "02", t: "Application & SOP", d: "We help craft applications, SOPs and references that stand out." },
  { n: "03", t: "Offer & Scholarships", d: "We pursue every scholarship and bursary your profile qualifies for." },
  { n: "04", t: "Visa Preparation", d: "Documentation, financial evidence and biometrics — handled with you." },
  { n: "05", t: "Departure & Arrival", d: "Flights, housing guidance and settling-in support, end-to-end." },
];

function Process() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="The Process"
          title="From your living room to campus, in 5 clear steps."
          description="A streamlined process designed for students and parents who value clarity over chaos."
          align="center"
        />
        <div className="mt-16 grid md:grid-cols-5 gap-6 relative">
          <div className="hidden md:block absolute top-5 left-[10%] right-[10%] h-px bg-border -z-10" />
          {steps.map((s) => (
            <div key={s.n} className="text-center md:text-left">
              <div className="mx-auto md:mx-0 size-10 rounded-full bg-white ring-1 ring-border grid place-items-center font-mont text-xs font-semibold text-brand-blue mb-4">
                {s.n}
              </div>
              <h4 className="text-sm font-semibold text-brand-navy mb-2">{s.t}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const programs = [
  { Icon: Briefcase, t: "Business & Management", d: "MBA, finance, marketing and analytics tracks at top business schools." },
  { Icon: Code, t: "Computer Science", d: "AI, software engineering and data science programmes in Canada and the UK." },
  { Icon: Stethoscope, t: "Health Sciences", d: "Public health, nursing, biomedical sciences and allied health pathways." },
  { Icon: Atom, t: "Engineering", d: "Mechanical, electrical, civil and chemical engineering at research universities." },
  { Icon: PaintBrush, t: "Art, Design & Media", d: "Creative programmes at UAL, OCAD and other leading design schools." },
  { Icon: Scales, t: "Law & Social Sciences", d: "LLB, LLM, international relations and policy programmes." },
];

function Programs() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-14">
          <SectionHeading
            eyebrow="Popular Programs"
            title="Fields our students choose."
            description="A snapshot of the courses we most commonly place students into across Canada and the UK."
          />
          <Link
            to="/services"
            className="font-mont text-sm font-semibold text-brand-blue inline-flex items-center gap-2 border-b-2 border-transparent hover:border-brand-blue transition-colors self-start md:self-auto pb-1 w-fit"
          >
            See all services
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-brand-navy/10">
          {programs.map(({ Icon, t, d }) => (
            <div
              key={t}
              className="group p-8 border-r border-b border-brand-navy/10 bg-white hover:bg-brand-cream/60 transition-colors"
            >
              <div className="size-10 rounded-sm bg-brand-navy text-white grid place-items-center mb-6 group-hover:bg-brand-blue transition-colors">
                <Icon className="size-5" weight="duotone" />
              </div>
              <h3 className="font-mont text-lg font-bold text-brand-navy mb-3">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    initials: "CO",
    name: "Chiamaka O.",
    meta: "UK · MSc Public Health",
    quote:
      "Every step was explained — from school shortlisting to the visa interview. My UK Student Visa came through first time. They made what felt overwhelming feel manageable.",
  },
  {
    initials: "TA",
    name: "Tunde A.",
    meta: "Canada · BSc Computer Science",
    quote:
      "They matched my grades and budget to a programme that actually fit — not the most expensive option. WhatsApp replies even at 10pm when we had visa questions. That level of care is rare.",
  },
  {
    initials: "PA",
    name: "Mrs. Adeyemi",
    meta: "Parent · Daughter at UofT",
    quote:
      "Airport pickup, accommodation, health insurance, SIM card — everything was handled before she landed. As a mum back in Lagos, that peace of mind was priceless.",
  },
  {
    initials: "JE",
    name: "Joshua E.",
    meta: "UK · MSc Data Science",
    quote:
      "Professional, patient and honest about what was realistic for my profile. When my first application was refused elsewhere, they handled the appeal and I got the visa on the second try.",
  },
  {
    initials: "AB",
    name: "Aisha B.",
    meta: "Canada · MA International Business",
    quote:
      "Transparent from day one — no hidden fees, no over-promises. My counsellor recommended a school that was cheaper than my first choice but a better academic fit. That honesty built real trust.",
  },
  {
    initials: "OM",
    name: "Oluwaseun M.",
    meta: "UK · MSc Cybersecurity",
    quote:
      "The SOP coaching was properly structured, not just templates. I went from 'I don't know what to write' to a personal statement that genuinely sounded like me. Five stars easily.",
  },
];

function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setSnapCount(emblaApi.scrollSnapList().length);
      onSelect();
    });
  }, [emblaApi]);

  return (
    <section className="py-24 bg-secondary/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with trust cluster */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <SectionHeading
            eyebrow="What Families Say"
            title="Real reviews. Real outcomes."
            description="Verified stories from students and parents we've supported into Canadian and UK universities."
          />
          <div className="flex flex-wrap items-stretch gap-3">
            <div className="flex items-center gap-3 bg-white px-5 py-4 border border-brand-navy/10">
              <GoogleLogo className="size-7" weight="duotone" />
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-medium text-brand-navy leading-none">4.9</span>
                  <span className="flex text-[oklch(0.78_0.18_85)]">
                    {[0,1,2,3,4].map((i) => <Star key={i} className="size-3.5" weight="fill" />)}
                  </span>
                </div>
                <div className="font-mont text-[11px] text-muted-foreground mt-1">
                  120+ Google reviews
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white px-5 py-4 border border-brand-navy/10">
              <div className="size-7 bg-emerald-50 grid place-items-center">
                <ShieldCheck className="size-4 text-emerald-600" weight="fill" />
              </div>
              <div>
                <div className="font-display text-2xl font-medium text-brand-navy leading-none">100%</div>
                <div className="font-mont text-[11px] text-muted-foreground mt-1">Verified students</div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden -mx-3" ref={emblaRef}>
            <div className="flex">
              {reviews.map((r) => (
                <div
                  key={r.name}
                  className="px-3 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                >
                  <figure className="bg-white p-6 sm:p-7 border border-brand-navy/10 hover:border-brand-navy/30 transition-colors flex flex-col h-full">
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-0.5 text-[oklch(0.78_0.18_85)]" aria-label="5 out of 5 stars">
                        {[0,1,2,3,4].map((i) => <Star key={i} className="size-[14px] sm:size-4" weight="fill" />)}
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200/70">
                        <ShieldCheck className="size-3 shrink-0" weight="fill" />
                        <span className="font-mont text-[10px] font-semibold uppercase tracking-[0.14em] leading-none">Verified</span>
                      </span>
                    </div>
                    <blockquote className="text-[15px] sm:text-base text-foreground leading-relaxed flex-1 text-pretty">
                      &ldquo;{r.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 pt-5 border-t border-brand-navy/10 flex items-center gap-3">
                      <div className="size-10 shrink-0 bg-brand-navy text-white grid place-items-center font-mont text-xs font-semibold tracking-wider">
                        {r.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-brand-navy leading-tight truncate">{r.name}</div>
                        <div className="font-mont text-[11px] text-muted-foreground mt-1 leading-tight truncate">{r.meta}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {Array.from({ length: snapCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === selected
                      ? "w-8 bg-brand-navy"
                      : "w-1.5 bg-brand-navy/20 hover:bg-brand-navy/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Previous review"
                className="size-11 rounded-full grid place-items-center bg-white ring-1 ring-border hover:ring-brand-navy hover:-translate-y-0.5 transition-all text-brand-navy"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Next review"
                className="size-11 rounded-full grid place-items-center bg-brand-navy text-white ring-1 ring-brand-navy hover:-translate-y-0.5 transition-all"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function AwardMarquee() {
  const items = [
    "Award-winning consultancy",
    "ICEF-aware partners",
    "PGWP & Graduate Route specialists",
    "Founder-led care",
    "100% transparent fees",
    "24h reply guarantee",
  ];
  const loop = [...items, ...items];
  return (
    <section className="py-6 bg-brand-navy text-white border-y border-white/10 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap" aria-hidden>
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-5 px-7">
            <Trophy className="size-4 text-brand-blue shrink-0" weight="fill" />
            <span className="font-display text-2xl md:text-3xl font-light tracking-[-0.02em] italic">
              {t}
            </span>
            <span className="size-1.5 rounded-full bg-white/30 shrink-0" />
          </span>
        ))}
      </div>
    </section>
  );
}

function Visa() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading
            eyebrow="Visa Assistance"
            title="Visa applications, decoded."
            description="We've supported students through Canada study permits and UK Student Visas, and we know what immigration officers look for — and what hurts an application."
          />
          <ul className="mt-8 border-t border-l border-brand-navy/10">
            {[
              "Personalised document checklist for your profile",
              "Statement of purpose & study plan review",
              "Financial evidence guidance (proof of funds)",
              "Biometrics and interview preparation",
              "Refusal recovery & re-application strategy",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm p-4 border-r border-b border-brand-navy/10">
                <span className="size-5 bg-brand-blue-soft text-brand-blue grid place-items-center mt-0.5 shrink-0">
                  <Check className="size-3" weight="bold" />
                </span>
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-brand-navy text-white p-10 border border-brand-navy">
          <ShieldCheck className="size-10 text-brand-blue mb-5" weight="duotone" />
          <div className="font-display text-4xl md:text-5xl font-light tracking-[-0.03em] mb-3 leading-tight">
            We won&apos;t submit until <span className="italic text-brand-blue">it&apos;s ready.</span>
          </div>
          <p className="text-white/80 leading-relaxed mb-8">
            Visa applications are too consequential to rush. We work with you
            until every section is genuinely strong — then we submit.
          </p>
          <Link
            to="/contact"
            className="group/btn inline-flex items-center justify-between gap-6 py-3 px-4 font-mont text-xs font-bold uppercase tracking-widest text-brand-navy bg-white border border-white hover:bg-transparent hover:text-white transition-colors"
          >
            Speak to a Visa Advisor
            <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { Icon: ShieldCheck, t: "Honest, transparent process", d: "Clear pricing, weekly updates and no hidden fees — ever." },
  { Icon: Globe, t: "Focused on Canada & the UK", d: "We go deep on two corridors instead of spreading thin across many." },
  { Icon: Users, t: "Senior consultants only", d: "No interns. Every applicant is paired with a senior consultant." },
];

function WhyUs() {
  return (
    <section className="py-24 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          <div className="lg:col-span-5">
            <div className="font-mont text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4">
              Why LuminaEdu
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-balance leading-[1.05]">
              A different kind of <span className="italic font-normal">consultancy.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-white/70 text-pretty leading-relaxed text-lg">
              We&apos;re a small, founder-led team. That means fewer clients, more
              attention, and a partner who actually picks up the phone.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 border-l border-white/10">
          {reasons.map(({ Icon, t, d }, i) => (
            <div key={t} className="p-10 border-r border-b border-white/10 group hover:bg-white/[0.03] transition-colors">
              <div className="flex items-start justify-between mb-8">
                <div className="size-10 rounded-sm bg-white/5 grid place-items-center group-hover:bg-brand-blue transition-colors">
                  <Icon className="size-5 text-brand-blue group-hover:text-white transition-colors" weight="duotone" />
                </div>
                <span className="font-mont text-xs font-bold text-white/30 tracking-widest">
                  0{i + 1} / 0{reasons.length}
                </span>
              </div>
              <h3 className="font-mont text-lg font-bold mb-3">{t}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "How much does your service cost?",
    a: "Initial consultations are free. Service packages are tailored per student and discussed transparently before any commitment.",
  },
  {
    q: "Can you help if I've been refused a visa before?",
    a: "Yes. We offer refusal recovery: we audit your prior application, identify the gaps and help rebuild a stronger case.",
  },
  {
    q: "Do you only work with students in Nigeria?",
    a: "We work with students across Africa, both in person in Nigeria and remotely.",
  },
  {
    q: "Do you guarantee admissions or scholarships?",
    a: "No honest consultant can guarantee outcomes. What we promise is the strongest possible application and full follow-through.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading eyebrow="FAQ" title="Questions, answered." align="center" />
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left py-5 flex items-start justify-between gap-6 group"
            >
              <div>
                <div className="text-base font-medium text-brand-navy">{f.q}</div>
                {open === i && (
                  <div className="mt-3 text-sm text-muted-foreground leading-relaxed animate-fade-up">
                    {f.a}
                  </div>
                )}
              </div>
              <CaretDown
                className={`size-5 mt-1 text-muted-foreground transition-transform ${
                  open === i ? "rotate-180 text-brand-blue" : ""
                }`}
                weight="bold"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadCapture() {
  return (
    <section className="py-24 bg-brand-cream/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-navy p-8 md:p-16 rounded-sm relative overflow-hidden">
          {/* Architectural corner line */}
          <div className="absolute top-0 right-0 size-64 border-r border-t border-white/10 -mr-20 -mt-20" aria-hidden />
          <div className="absolute bottom-0 left-0 size-48 border-l border-b border-white/10 -ml-16 -mb-16" aria-hidden />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="font-mont text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-5">
                Free Consultation
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-white leading-[1.05]">
                Ready to <span className="italic font-normal">start?</span>
              </h2>
              <p className="mt-6 text-white/70 text-lg max-w-md leading-relaxed">
                Book a 30-minute call with a senior consultant. No fee, no pressure — just clear next steps.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Tailored 1-on-1 strategy",
                  "Transparent cost breakdown",
                  "Reply within 24 hours",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/85 text-sm">
                    <Check className="size-5 text-brand-blue shrink-0" weight="bold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-cream p-8 md:p-10 rounded-sm">
              <LeadForm variant="underline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
