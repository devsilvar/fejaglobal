import { useState } from "react";

export function LeadForm({
  compact = false,
  variant = "default",
}: {
  compact?: boolean;
  variant?: "default" | "underline";
}) {
  const [submitted, setSubmitted] = useState(false);
  const isUnderline = variant === "underline";
  const inputClass = isUnderline ? underlineInputCls : inputCls;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className={`grid grid-cols-1 md:grid-cols-2 ${isUnderline ? "gap-x-6 gap-y-7" : "gap-5"}`}
    >
      <Field label="Full Name" variant={variant}>
        <input required type="text" placeholder="Adaeze Okeke" className={inputClass} />
      </Field>
      <Field label="Email Address" variant={variant}>
        <input required type="email" placeholder="you@email.com" className={inputClass} />
      </Field>
      <Field label="Phone (WhatsApp)" variant={variant}>
        <input required type="tel" placeholder="+234 ..." className={inputClass} />
      </Field>
      <Field label="Destination" variant={variant}>
        <select className={inputClass} defaultValue="Canada">
          <option>Canada</option>
          <option>United Kingdom</option>
          <option>Both</option>
        </select>
      </Field>
      {!compact && (
        <Field label="Study Level" className="md:col-span-2" variant={variant}>
          <select className={inputClass} defaultValue="Postgraduate">
            <option>Undergraduate</option>
            <option>Postgraduate</option>
            <option>PhD</option>
            <option>Foundation / Diploma</option>
          </select>
        </Field>
      )}
      <button
        type="submit"
        className="md:col-span-2 mt-2 bg-brand-blue text-primary-foreground font-mont font-bold uppercase tracking-widest text-xs shadow-lg shadow-brand-blue/20 hover:bg-brand-navy transition-colors disabled:opacity-60 py-4 rounded-lg"
        disabled={submitted}
      >
        {submitted ? "We'll be in touch within 24 hours ✓" : "Book My Free Discovery Call"}
      </button>
      <p className={`md:col-span-2 font-mont text-muted-foreground text-center ${isUnderline ? "text-[10px]" : "text-xs"}`}>
        By submitting, you agree to be contacted by our advisors. No spam, ever.
      </p>
    </form>
  );
}

const inputCls =
  "bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/40 transition";

const underlineInputCls =
  "bg-transparent border-0 border-b border-brand-navy/20 rounded-none px-0 py-2.5 text-sm text-brand-navy focus:outline-none focus:border-brand-blue transition-colors placeholder:text-muted-foreground/50";

function Field({
  label,
  children,
  className = "",
  variant = "default",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "underline";
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label
        className={`font-mont font-bold uppercase tracking-wider ${
          variant === "underline"
            ? "text-[10px] text-brand-navy/60 px-0"
            : "text-xs text-muted-foreground px-1"
        }`}
      >
        {label}
      </label>
      {children}
    </div>
  );
}