import { WhatsappLogo } from "@phosphor-icons/react";

export function FloatingWhatsApp() {
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
        href="https://wa.me/2348123456789?text=Hi%20LuminaEdu%2C%20I%27d%20like%20a%20free%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with an advisor on WhatsApp"
        className="relative flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-transform"
      >
        {/* Pulse ring */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
        />
        <WhatsappLogo className="size-7 relative" weight="fill" />
      </a>
    </div>
  );
}
