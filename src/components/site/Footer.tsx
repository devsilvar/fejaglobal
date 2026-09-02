import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/lib/site-config";
import newLogo from "@/assets/newlogo.png";

export function Footer() {
  const { lagos, abuja } = siteConfig.offices;
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src={newLogo} alt="Feja Global" className="size-7 object-contain" />
            <span className="font-display text-base font-medium tracking-tight text-brand-navy">
              feja
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            A founder-led consultancy guiding African students through study in Canada and the UK.
          </p>
        </div>
        <div>
          <h5 className="font-mont text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Explore
          </h5>
          <ul className="space-y-3 font-mont text-sm">
            <li>
              <Link to="/destinations" className="hover:text-brand-blue">
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-brand-blue">
                Services
              </Link>
            </li>
            <li>
              <Link to="/scholarships" className="hover:text-brand-blue">
                Scholarships
              </Link>
            </li>
            {/* <li><Link to="/insights" className="hover:text-brand-blue">Blog</Link></li> */}
            <li>
              <Link to="/about" className="hover:text-brand-blue">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-brand-blue">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-mont text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Lagos Office
          </h5>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {/* {lagos.addressLines.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))} */}
            {lagos.phone}
          </p>
        </div>
        <div>
          <h5 className="font-mont text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Abuja Office
          </h5>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {/* {abuja.addressLines.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))} */}
            {abuja.phone}
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-4 font-mont text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Feja Global. All rights reserved.</span>
          <span>Education consultancy · Canada & the United Kingdom</span>
        </div>
      </div>
    </footer>
  );
}
