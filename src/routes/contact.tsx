import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/site/LeadForm";
import { MapPin, Phone, EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Free Consultation | LuminaEdu" },
      {
        name: "description",
        content: "Book a free 30-minute consultation with a senior LuminaEdu consultant. Lagos & Abuja offices.",
      },
      { property: "og:title", content: "Contact LuminaEdu" },
      { property: "og:description", content: "Book a free consultation with a senior consultant." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-pinstripe opacity-[0.45]" />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="font-mont text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
              Contact
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-light tracking-[-0.035em] leading-[1] text-balance text-brand-navy">
              Let&apos;s build your study-abroad{" "}
              <span className="italic text-brand-blue">plan.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Book a free consultation, message us on WhatsApp, or visit our
              offices in Lagos or Abuja. We respond within 24 hours.
            </p>
          </div>
        </div>
      </header>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 bg-white p-8 md:p-10 border border-brand-navy/10 shadow-[0_28px_60px_-25px_oklch(0.16_0.04_265_/_0.35)]">
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-[-0.03em] text-brand-navy mb-2 leading-tight">
              Book your free <span className="italic text-brand-blue">consultation</span>
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              Tell us about your goals — we&apos;ll match you with the right senior consultant.
            </p>
            <LeadForm />
          </div>
          <aside className="lg:col-span-2 space-y-4">
            <ContactCard
              Icon={WhatsappLogo}
              label="WhatsApp"
              value="+234 812 345 6789"
              href="https://wa.me/2348123456789"
              accent
            />
            <ContactCard Icon={Phone} label="Call us" value="+234 812 345 6789" href="tel:+2348123456789" />
            <ContactCard Icon={EnvelopeSimple} label="Email" value="hello@luminaedu.com" href="mailto:hello@luminaedu.com" />
            <div className="bg-white p-6 border border-brand-navy/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="size-9 bg-brand-blue-soft text-brand-blue grid place-items-center">
                  <MapPin className="size-4" weight="duotone" />
                </span>
                <div className="font-mont text-sm font-semibold text-brand-navy">Offices</div>
              </div>
              <div className="text-sm text-muted-foreground space-y-3">
                <div>
                  <div className="font-medium text-foreground">Lagos</div>
                  12 Admiralty Way, Lekki Phase 1
                </div>
                <div>
                  <div className="font-medium text-foreground">Abuja</div>
                  5 Aminu Kano Crescent, Wuse II
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="aspect-[16/7] w-full overflow-hidden border border-brand-navy/15 shadow-[0_28px_60px_-25px_oklch(0.16_0.04_265_/_0.35)]">
            <iframe
              title="LuminaEdu Lagos office map"
              src="https://www.google.com/maps?q=Lekki+Phase+1+Lagos&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-[-0.03em] text-brand-navy mb-8 text-center leading-tight">
            Quick <span className="italic text-brand-blue">answers</span>
          </h2>
          <dl className="space-y-5">
            {[
              { q: "How fast can you respond?", a: "Within 24 hours, often within the same business day." },
              { q: "Is the first consultation free?", a: "Yes — 30 minutes with a senior consultant, no obligation." },
              { q: "Can we meet in person?", a: "Yes, at our Lagos or Abuja offices. Virtual sessions also available." },
            ].map((f) => (
              <div key={f.q} className="bg-white p-6 border border-brand-navy/10 hover:border-brand-navy/30 transition-colors">
                <dt className="font-medium text-brand-navy mb-1">{f.q}</dt>
                <dd className="text-sm text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  Icon,
  label,
  value,
  href,
  accent = false,
}: {
  Icon: React.ComponentType<{ className?: string; weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone" }>;
  label: string;
  value: string;
  href: string;
  accent?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`flex items-center gap-4 p-5 border transition-all hover:-translate-y-0.5 ${
        accent
          ? "bg-brand-navy text-white border-brand-navy hover:shadow-[0_20px_40px_-20px_oklch(0.16_0.04_265_/_0.6)]"
          : "bg-white border-brand-navy/10 hover:border-brand-navy/30"
      }`}
    >
      <span
        className={`size-10 grid place-items-center ${
          accent ? "bg-white/10 text-white" : "bg-brand-blue-soft text-brand-blue"
        }`}
      >
        <Icon className="size-4" weight="duotone" />
      </span>
      <div>
        <div className={`font-mont text-xs uppercase tracking-widest ${accent ? "text-white/60" : "text-muted-foreground"}`}>
          {label}
        </div>
        <div className="font-medium">{value}</div>
      </div>
    </a>
  );
}
