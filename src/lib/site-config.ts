// Single source of truth for contact details, social links, and the calendar
// booking URL. Anything that varies between environments or that a non-developer
// might want to change should live here, behind a VITE_-prefixed env var.
//
// All values are typed and have safe defaults so the site never breaks in dev.
// Override in Cloudflare via `wrangler.jsonc` `vars` or `wrangler secret put`,
// or in `.env.local` for local development.

const env = (import.meta as unknown as { env: Record<string, string | undefined> }).env;

function get(key: string, fallback: string): string {
  return env?.[key]?.trim() || fallback;
}

function getOptional(key: string): string | null {
  const value = env?.[key]?.trim();
  return value && value.length > 0 ? value : null;
}

const whatsappNumber = get("VITE_WHATSAPP_NUMBER", "+2348123456789");
const phone = get("VITE_CONTACT_PHONE", "+2348123456789");
const email = get("VITE_CONTACT_EMAIL", "hello@fejaglobal.com");
const bookingUrl = getOptional("VITE_CAL_BOOKING_URL");
const siteUrl = get("VITE_SITE_URL", "https://fejaglobal.com");

// Strip everything that isn't a digit for use in wa.me links and tel: hrefs.
const digitsOnly = (s: string) => s.replace(/[^0-9]/g, "");

export const siteConfig = {
  name: "Feja Global",
  siteUrl,
  bookingUrl,
  contact: {
    email,
    phone,
    phoneHref: `tel:${digitsOnly(phone)}`,
    whatsappNumber,
    whatsappHref: `https://wa.me/${digitsOnly(whatsappNumber)}?text=${encodeURIComponent(
      "Hi Feja Global, I'd like a free consultation.",
    )}`,
  },
  offices: {
    lagos: {
      addressLines: ["12 Admiralty Way, Lekki Phase 1", "Lagos, Nigeria"],
      phone: get("VITE_LAGOS_PHONE", "+234 812 345 6789"),
    },
    abuja: {
      addressLines: ["5 Aminu Kano Crescent, Wuse II", "Abuja, FCT"],
      phone: get("VITE_ABUJA_PHONE", "+234 803 765 4321"),
    },
  },
} as const;

/**
 * Resolve the best target for a "Book a call" CTA.
 * Returns a Cal.com URL if configured, otherwise the in-site /contact page.
 */
export function bookingTarget(): { href: string; external: boolean } {
  if (siteConfig.bookingUrl) {
    return { href: siteConfig.bookingUrl, external: true };
  }
  return { href: "/contact", external: false };
}
