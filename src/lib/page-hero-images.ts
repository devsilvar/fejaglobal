// Curated hero imagery for secondary pages.
//
// Each entry holds:
//   - primary: a campus / student / study scene that anchors the right column.
//   - alt:     descriptive alt text (accessibility + SEO).
//   - badge:   a 2-line floating accent shown over the image (subject : value).
//
// Images are sourced from Unsplash with sizing params, so we don't ship them in
// the bundle. They live below the LCP fold on every page that uses PageHero, so
// they're declared loading="lazy" + decoding="async" at the render site.
//
// To swap an image: paste a fresh Unsplash photo URL (without the `?...` query)
// — the URL helper below adds the right transforms.

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=72`;

export type HeroImage = {
  primary: string;
  alt: string;
  badge: { eyebrow: string; line1: string; line2: string };
};

export const heroImages = {
  destinations: {
    primary: u("photo-1543269865-cbf427effbad"), // university campus
    alt: "Students walking on university campus with modern buildings",
    badge: { eyebrow: "Focus", line1: "2", line2: "Countries" },
  },
  services: {
    primary: u("photo-1517245386807-bb43f82c33c4"), // student writing application
    alt: "Student working on a laptop with notebooks open",
    badge: { eyebrow: "Delivered by", line1: "Senior", line2: "Consultants" },
  },
  scholarships: {
    primary: u("photo-1532649538693-f3a2ec1bf8bd"), // graduation cap & trophy mood
    alt: "Graduate holding a diploma at commencement",
    badge: { eyebrow: "Awarded", line1: "Full", line2: "Funding" },
  },
  insights: {
    primary: u("photo-1456513080510-7bf3a84b82f8"), // books / writing desk
    alt: "Open notebook beside a steaming cup on a study desk",
    badge: { eyebrow: "Founder-written", line1: "No", line2: "Fluff" },
  },
  about: {
    primary: u("photo-1522202176988-66273c2fd55f"), // small team collaborating
    alt: "Small team meeting around a table with laptops",
    badge: { eyebrow: "How we work", line1: "1:1", line2: "Attention" },
  },
  contact: {
    primary: u("photo-1577563908411-5077b6dc7624"), // friendly consultant with student
    alt: "Consultant and student in conversation across a desk",
    badge: { eyebrow: "Reply within", line1: "24", line2: "Hours" },
  },
} as const satisfies Record<string, HeroImage>;

export type HeroImageKey = keyof typeof heroImages;
