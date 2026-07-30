import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { leadSchema, type LeadFormValues } from "@/lib/lead-schema";

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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      destination: "Canada",
      study_level: "Postgraduate",
      company: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    // Honeypot: silently succeed without sending.
    if (values.company && values.company.length > 0) {
      setSubmitted(true);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        toast.error("Couldn't send that — try again, or WhatsApp us.");
        console.error("[LeadForm] /api/contact responded", res.status);
        return;
      }
    } catch (err) {
      toast.error("Couldn't send that — try again, or WhatsApp us.");
      console.error("[LeadForm] /api/contact request failed", err);
      return;
    }

    toast.success("Got it. A senior consultant will be in touch within 24 hours.");
    setSubmitted(true);
  });

  return (
    <form
      onSubmit={onSubmit}
      className={`grid grid-cols-1 md:grid-cols-2 ${
        isUnderline ? "gap-x-6 gap-y-7" : "gap-5"
      }`}
      noValidate
    >
      {/* Honeypot — visually hidden, off-screen, but technically present so bots fill it. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label>
          Company (leave blank)
          <input type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
        </label>
      </div>

      <Field label="Full Name" variant={variant} error={errors.name?.message}>
        <input type="text" placeholder="Adaeze Okeke" className={inputClass} {...register("name")} />
      </Field>
      <Field label="Email Address" variant={variant} error={errors.email?.message}>
        <input type="email" placeholder="you@email.com" className={inputClass} {...register("email")} />
      </Field>
      <Field label="Phone (WhatsApp)" variant={variant} error={errors.phone?.message}>
        <input type="tel" placeholder="+234 ..." className={inputClass} {...register("phone")} />
      </Field>
      <Field label="Destination" variant={variant} error={errors.destination?.message}>
        <select className={inputClass} {...register("destination")}>
          <option>Canada</option>
          <option>United Kingdom</option>
          <option>Both</option>
        </select>
      </Field>
      {!compact && (
        <Field
          label="Study Level"
          className="md:col-span-2"
          variant={variant}
          error={errors.study_level?.message}
        >
          <select className={inputClass} {...register("study_level")}>
            <option>Undergraduate</option>
            <option>Postgraduate</option>
            <option>PhD</option>
            <option>Foundation / Diploma</option>
          </select>
        </Field>
      )}
      <button
        type="submit"
        className={`md:col-span-2 mt-2 bg-brand-blue text-primary-foreground font-mont font-bold uppercase tracking-widest text-xs shadow-lg shadow-brand-blue/20 hover:bg-brand-navy transition-colors disabled:opacity-60 py-4 ${
          isUnderline ? "rounded-none" : "rounded-full"
        }`}
        disabled={isSubmitting || submitted}
      >
        {submitted
          ? "We'll be in touch within 24 hours ✓"
          : isSubmitting
            ? "Sending…"
            : "Book My Free Discovery Call"}
      </button>
      <p
        className={`md:col-span-2 font-mont text-muted-foreground text-center ${
          isUnderline ? "text-[10px]" : "text-xs"
        }`}
      >
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
  error,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "underline";
  error?: string;
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
      {error && (
        <span className="font-mont text-[11px] text-destructive mt-0.5">{error}</span>
      )}
    </div>
  );
}
