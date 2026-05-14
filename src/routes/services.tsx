import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, FileText, Buildings, Sparkle, Users, ChatCircle } from "@phosphor-icons/react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Admission, Visa & SOP Support | LuminaEdu" },
      {
        name: "description",
        content:
          "Admission consulting, visa support, school matching, career counseling, SOP coaching and interview preparation — delivered by senior consultants.",
      },
      { property: "og:title", content: "Services | LuminaEdu" },
      { property: "og:description", content: "End-to-end support: admissions, visas, SOPs, interviews and pre-departure." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    Icon: GraduationCap,
    title: "Admission Consulting",
    body: "Profile assessment, school shortlisting and a clear application timeline tailored to your goals.",
    bullets: ["Academic profile audit", "Course & university shortlist", "Application timeline & strategy"],
  },
  {
    Icon: FileText,
    title: "Visa Application Support",
    body: "End-to-end documentation, financial proof guidance and biometrics support.",
    bullets: ["Document checklist & review", "Financial proof guidance", "Biometrics & decision tracking"],
  },
  {
    Icon: Buildings,
    title: "School Matching",
    body: "A curated list of universities in Canada and the UK, matched to your goals and budget.",
    bullets: ["Course-fit analysis", "Conditional offer support", "Honest school-by-school feedback"],
  },
  {
    Icon: ChatCircle,
    title: "Career Counseling",
    body: "Pick a course that maps to a real career — not just a popular one.",
    bullets: ["Career-to-course mapping", "ROI & salary insights", "Post-study work planning"],
  },
  {
    Icon: Sparkle,
    title: "SOP & Essay Assistance",
    body: "Senior consultants help you write SOPs that admissions officers actually remember.",
    bullets: ["Story workshop", "Multiple drafts & edits", "Tone & voice coaching"],
  },
  {
    Icon: Users,
    title: "Interview Preparation",
    body: "Live mock interviews with structured, candid feedback.",
    bullets: ["Mock interview sessions", "Personalised feedback", "Body-language & delivery"],
  },
];

function ServicesPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-pinstripe opacity-[0.45]" />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="font-mont text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
              Our Services
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-light tracking-[-0.035em] leading-[1] text-balance text-brand-navy">
              Six services. One outcome:{" "}
              <span className="italic text-brand-blue">you, on campus.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Every service is delivered by a senior consultant — never an
              intern.
            </p>
          </div>
        </div>
      </header>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, title, body, bullets }) => (
            <article
              key={title}
              className="bg-white p-7 rounded-2xl ring-1 ring-black/5 hover:ring-brand-blue/30 hover:-translate-y-0.5 transition-all"
            >
              <div className="size-11 rounded-xl bg-brand-blue-soft text-brand-blue grid place-items-center mb-5">
                <Icon className="size-5" weight="duotone" />
              </div>
              <h2 className="text-lg font-semibold text-brand-navy mb-2">{title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{body}</p>
              <ul className="space-y-2 text-sm">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-foreground">
                    <span className="size-1.5 rounded-full bg-brand-blue mt-2" /> {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-40" aria-hidden />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-[-0.03em] mb-4 leading-[1.05]">
            Tell us where you want to <span className="italic text-brand-blue">go.</span>
          </h2>
          <p className="text-white/70 mb-8">We&apos;ll help you build the plan to get there.</p>
          <Link
            to="/contact"
            className="inline-flex bg-white text-brand-navy py-3.5 px-6 rounded-full font-mont font-semibold hover:-translate-y-0.5 transition-all"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
