export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "max-w-2xl mx-auto text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className="font-mont text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-light tracking-[-0.03em] text-balance text-brand-navy mb-5 leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-pretty leading-relaxed">{description}</p>
      )}
    </div>
  );
}
