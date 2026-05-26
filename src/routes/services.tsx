import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { GraduationCap } from "@phosphor-icons/react/dist/ssr/GraduationCap";
import { FileText } from "@phosphor-icons/react/dist/ssr/FileText";
import { Buildings } from "@phosphor-icons/react/dist/ssr/Buildings";
import { Sparkle } from "@phosphor-icons/react/dist/ssr/Sparkle";
import { Users } from "@phosphor-icons/react/dist/ssr/Users";
import { ChatCircle } from "@phosphor-icons/react/dist/ssr/ChatCircle";
import { Bank } from "@phosphor-icons/react/dist/ssr/Bank";
import { AirplaneTakeoff } from "@phosphor-icons/react/dist/ssr/AirplaneTakeoff";
import { House } from "@phosphor-icons/react/dist/ssr/House";
import { BookOpen } from "@phosphor-icons/react/dist/ssr/BookOpen";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Admission, Visa & SOP Support | Feja Global" },
      {
        name: "description",
        content:
          "Admission consulting, visa support, school matching, career counseling, SOP coaching and interview preparation — delivered by senior consultants.",
      },
      { property: "og:title", content: "Services | Feja Global" },
      { property: "og:description", content: "End-to-end support: admissions, visas, SOPs, interviews and pre-departure." },
      { property: "og:url", content: "https://fejaglobal.com/services" },
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
  {
    Icon: Bank,
    title: "Tuition Fee Payment",
    body: "We help you pay universities in CAD and GBP from Nigeria — securely, with the right paper trail for visas.",
    bullets: ["FX-friendly payment routing", "Receipts that satisfy CAS/LOA", "Refund & reversal support"],
  },
  {
    Icon: AirplaneTakeoff,
    title: "Flight & Pre-Departure",
    body: "Flight bookings, packing lists, airport pickup arrangements and a full pre-departure briefing.",
    bullets: ["Best-fare flight booking", "Pre-departure briefing", "Airport pickup coordination"],
  },
  {
    Icon: House,
    title: "Accommodation Assistance",
    body: "On-campus and off-campus housing — vetted listings near your university, with safe payment guidance.",
    bullets: ["University residence applications", "Verified off-campus options", "Move-in checklist"],
  },
  {
    Icon: BookOpen,
    title: "IELTS / Test Prep Guidance",
    body: "Honest advice on which English test to take, score targets, and trusted prep resources.",
    bullets: ["IELTS / PTE / Duolingo guidance", "Score-target planning", "Recommended prep partners"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Ten services. One outcome:"
        accent="you, on campus."
        description="Every service is delivered by a senior consultant — never an intern. Pick what you need or take the full end-to-end journey."
        image="services"
      />


      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, title, body, bullets }) => (
            <article
              key={title}
              className="bg-white p-7 border border-brand-navy/10 hover:border-brand-navy/40 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-25px_oklch(0.16_0.04_265_/_0.4)] transition-all"
            >
              <div className="size-11 bg-brand-blue-soft text-brand-blue grid place-items-center mb-5">
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
