import { WhatsappLogo } from "@phosphor-icons/react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2348123456789?text=Hi%20LuminaEdu%2C%20I%27d%20like%20a%20free%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with an advisor on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white pl-3 pr-5 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-transform"
    >
      <span className="grid place-items-center size-9 rounded-full bg-white/15">
        <WhatsappLogo className="size-5" weight="fill" />
      </span>
      <span className="hidden sm:inline font-mont text-sm font-semibold">Chat with an Advisor</span>
    </a>
  );
}
