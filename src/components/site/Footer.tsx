import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="size-7 rounded-md bg-brand-navy grid place-items-center">
              <span className="size-2.5 rounded-full bg-brand-blue" />
            </span>
            <span className="font-display text-base font-medium tracking-tight text-brand-navy">
              lumina<span className="italic text-brand-blue">edu</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            A founder-led consultancy guiding African students through study in
            Canada and the UK.
          </p>
        </div>
        <div>
          <h5 className="font-mont text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Explore</h5>
          <ul className="space-y-3 font-mont text-sm">
            <li><Link to="/destinations" className="hover:text-brand-blue">Destinations</Link></li>
            <li><Link to="/services" className="hover:text-brand-blue">Services</Link></li>
            <li><Link to="/about" className="hover:text-brand-blue">About</Link></li>
            <li><Link to="/contact" className="hover:text-brand-blue">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-mont text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Lagos Office</h5>
          <p className="text-sm text-muted-foreground leading-relaxed">
            12 Admiralty Way, Lekki Phase 1<br />Lagos, Nigeria<br />+234 812 345 6789
          </p>
        </div>
        <div>
          <h5 className="font-mont text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Abuja Office</h5>
          <p className="text-sm text-muted-foreground leading-relaxed">
            5 Aminu Kano Crescent, Wuse II<br />Abuja, FCT<br />+234 803 765 4321
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-4 font-mont text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} LuminaEdu. All rights reserved.</span>
          <span>Education consultancy · Canada & the United Kingdom</span>
        </div>
      </div>
    </footer>
  );
}
