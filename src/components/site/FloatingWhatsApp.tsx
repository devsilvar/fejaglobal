import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import whatsappIcon from "@/assets/whatsapp.png";

export function FloatingWhatsApp() {
  // Lazy-mount after idle so this fixed-position widget never competes with LCP.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    type IdleWindow = Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    const w = window as IdleWindow;
    const handle =
      w.requestIdleCallback?.(() => setMounted(true), { timeout: 1500 }) ??
      window.setTimeout(() => setMounted(true), 500);
    return () => {
      // requestIdleCallback returns a handle, setTimeout returns a number — both
      // are safe to pass to clearTimeout in browsers that don't have cancelIdleCallback.
      window.clearTimeout(handle as number);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip bubble */}
      <div
        className="absolute bottom-1/2 right-full translate-y-1/2 mr-3 pointer-events-none
                   opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
                   transition-all duration-200 ease-out"
      >
        <div className="relative bg-white text-brand-navy font-mont text-sm font-semibold whitespace-nowrap px-4 py-2.5 rounded-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] border border-black/5">
          Chat with an Advisor
          {/* Arrow */}
          <span
            aria-hidden
            className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rotate-45 bg-white border-r border-b border-black/5"
          />
        </div>
      </div>

      <a
        href={siteConfig.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with an advisor on WhatsApp"
        className="relative flex items-center justify-center size-14 rounded-full bg-[#25D366] shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-transform"
      >
        {/* Pulse ring */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-white/30 opacity-60 animate-ping"
        />
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="size-7 object-contain"
        />
      </a>
    </div>
  );
}
