import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Encomendar pelo WhatsApp"
      title="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-elegant transition-transform hover:scale-105 animate-pulse-soft sm:px-5"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
      <span className="hidden text-sm font-semibold sm:inline">Pedir agora</span>
    </a>
  );
}
