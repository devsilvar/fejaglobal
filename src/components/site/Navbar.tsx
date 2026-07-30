import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { List } from "@phosphor-icons/react/dist/ssr/List";
import { X } from "@phosphor-icons/react/dist/ssr/X";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { bookingTarget } from "@/lib/site-config";
import newLogo from "@/assets/newlogo.png";

const links = [
  { to: "/destinations", label: "Destinations" },
  { to: "/services", label: "Services" },
  { to: "/scholarships", label: "Scholarships" },
  // { to: "/insights", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const booking = bookingTarget();
  return (
    <div className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div className="bg-brand-peach/70 text-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-9 flex items-center justify-center gap-2 text-[12px] sm:text-[13px]">
          <span className="font-mont font-medium truncate">
            <span className="sm:hidden">Sept 2026 intake</span>
            <span className="hidden sm:inline">September 2026 intake — early planning helps.</span>
          </span>
          <Link
            to="/contact"
            className="font-mont font-semibold text-brand-blue inline-flex items-center gap-0.5 hover:underline underline-offset-4 shrink-0"
          >
            Talk to us <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>

      <nav className="border-b border-border/50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center">
              <img
                src={newLogo}
                alt="Feja Global"
                className="h-16 w-auto object-contain"
              />
            </Link> 
            <div className="hidden md:flex gap-7">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="font-mont text-sm font-medium text-foreground/70 hover:text-brand-navy transition-colors relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-blue after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-out after:origin-left hover:after:scale-x-100"
                  activeProps={{ className: "text-brand-navy after:scale-x-100" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            {booking.external ? (
              <a
                href={booking.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 font-mont text-sm font-semibold bg-brand-blue text-white py-2.5 px-5 rounded-full shadow-[0_6px_20px_-8px_oklch(0.52_0.24_264_/_0.6)] hover:shadow-[0_10px_28px_-8px_oklch(0.52_0.24_264_/_0.7)] hover:-translate-y-0.5 transition-all"
              >
                Book a Free Call
                <ArrowUpRight className="size-4" />
              </a>
            ) : (
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-1.5 font-mont text-sm font-semibold bg-brand-blue text-white py-2.5 px-5 rounded-full shadow-[0_6px_20px_-8px_oklch(0.52_0.24_264_/_0.6)] hover:shadow-[0_10px_28px_-8px_oklch(0.52_0.24_264_/_0.7)] hover:-translate-y-0.5 transition-all"
              >
                Book a Free Call
                <ArrowUpRight className="size-4" />
              </Link>
            )}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden size-10 grid place-items-center rounded-full ring-1 ring-border bg-white"
            >
              {open ? <X className="size-4" /> : <List className="size-4" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background px-6 py-5 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {l.label}
              </Link>
            ))}
            {booking.external ? (
              <a
                href={booking.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center items-center gap-1.5 font-mont text-sm font-semibold bg-brand-blue text-white py-3 px-5 rounded-full"
              >
                Book a Free Call <ArrowUpRight className="size-4" />
              </a>
            ) : (
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center items-center gap-1.5 font-mont text-sm font-semibold bg-brand-blue text-white py-3 px-5 rounded-full"
              >
                Book a Free Call <ArrowUpRight className="size-4" />
              </Link>
            )}
          </div>
        )}
      </nav>
    </div>
  );
}
