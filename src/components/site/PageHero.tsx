import type { ReactNode } from "react";
import { heroImages, type HeroImageKey } from "@/lib/page-hero-images";

/**
 * Reusable hero for secondary pages. Echoes the home hero's design language:
 *  - left column: eyebrow + display headline (with an italic blue accent) + lede,
 *  - right column: a rounded-mask photo with a backdrop circle, a decorative
 *    dashed arc and a floating "stat" card.
 *
 * The image is loaded lazily — every consumer is below the LCP page (home).
 * On mobile the imagery collapses below the copy so the headline still leads.
 *
 * Visual decisions deliberately mirror src/routes/index.tsx Hero():
 *   - bg-pinstripe behind copy (consistent with previous PageHero pattern),
 *   - rounded-[200px_32px_32px_32px] mask (same shape as home hero),
 *   - bg-brand-blue-soft offset backdrop circle (same as home hero),
 *   - dashed brand-blue arc with travel-pin terminus (visual through-line).
 */
export type PageHeroProps = {
  eyebrow: string;
  /** Plain text portion of the headline. */
  title: string;
  /** Italic, brand-blue accented portion. Rendered after `title`. */
  accent: string;
  /** Lede paragraph beneath the headline. */
  description: string;
  /** Lookup key into the curated heroImages map. */
  image: HeroImageKey;
  /** Optional CTA(s) rendered below the description. */
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  image,
  children,
}: PageHeroProps) {
  const img = heroImages[image];
  return (
    <header className="relative overflow-hidden border-b border-border">
      {/* Pinstripe wash — preserves continuity with prior page headers */}
      <div className="absolute inset-0 -z-10 bg-pinstripe opacity-[0.45]" />
      {/* Warm glow accent — same family as the home hero */}
      <div
        className="absolute -top-32 -right-20 -z-10 size-[520px] rounded-full opacity-40 blur-3xl hidden md:block"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.93 0.06 70) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* LEFT — copy */}
        <div className="lg:col-span-7 relative">
          <div className="font-mont text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
            {eyebrow}
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.035em] leading-[1] text-balance text-brand-navy">
            {title}{" "}
            <span className="relative inline-block">
              <span className="italic font-normal text-brand-blue">{accent}</span>
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
                  opacity="0.4"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
          {children && (
            <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>
          )}
        </div>

        {/* RIGHT — imagery cluster */}
        <div className="lg:col-span-5 relative">
          <div className="relative max-w-md lg:max-w-none mx-auto">
            {/* Backdrop circle */}
            <div
              className="absolute -right-8 -top-8 size-56 rounded-full bg-brand-blue-soft -z-10 hidden lg:block"
              aria-hidden
            />

            {/* Image with curved diagonal mask */}
            <div
              className="relative aspect-[4/5] w-full overflow-hidden bg-brand-navy shadow-[0_36px_70px_-28px_oklch(0.16_0.04_265_/_0.4)]"
              style={{ borderRadius: "160px 28px 28px 28px" }}
            >
              <img
                src={img.primary}
                alt={img.alt}
                width={900}
                height={1125}
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-tr from-brand-navy/40 via-transparent to-transparent"
                aria-hidden
              />
            </div>

            {/* Dashed arc */}
            <svg
              className="absolute -top-3 -left-8 w-[110%] h-24 hidden md:block pointer-events-none"
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
                opacity="0.5"
              />
              <circle cx="580" cy="30" r="4" fill="oklch(0.52 0.24 264)" />
            </svg>

            {/* Floating stat card */}
            <div className="absolute -bottom-5 -left-4 sm:-left-8 bg-white px-5 py-4 rounded-2xl shadow-[0_18px_40px_-15px_oklch(0.16_0.04_265_/_0.45)] ring-1 ring-border max-w-[180px]">
              <div className="font-mont text-[9px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-1">
                {img.badge.eyebrow}
              </div>
              <div className="font-display text-2xl font-medium text-brand-navy leading-none tracking-[-0.02em]">
                {img.badge.line1}
              </div>
              <div className="font-mont text-[11px] text-muted-foreground mt-1 leading-tight">
                {img.badge.line2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
