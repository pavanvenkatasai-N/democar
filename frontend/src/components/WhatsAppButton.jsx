import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 320);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const message = encodeURIComponent(
        "Hello Honour Sports, I'd like to enquire about your services."
    );

    return (
        <a
            href={`https://wa.me/919741908073?text=${message}`}
            target="_blank"
            rel="noreferrer"
            data-testid="whatsapp-float-button"
            aria-label="Chat on WhatsApp"
            className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 group flex items-center gap-3 bg-[#0A0A0A] hover:bg-[#0047FF] text-white pl-4 pr-5 py-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-500 ${
                visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
            }`}
        >
            <span className="relative flex items-center justify-center w-8 h-8 bg-[#25D366] group-hover:bg-white transition-colors duration-300">
                <MessageCircle
                    size={16}
                    strokeWidth={2.2}
                    className="text-white group-hover:text-[#25D366] transition-colors duration-300"
                />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#25D366] rounded-full animate-ping" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#25D366] rounded-full" />
            </span>
            <span className="hidden sm:flex flex-col leading-none">
                <span className="font-body text-[10px] uppercase tracking-[0.22em] text-white/60 group-hover:text-white/80 transition-colors">
                    Chat on
                </span>
                <span className="font-heading text-sm font-medium tracking-tight mt-1">
                    WhatsApp
                </span>
            </span>
        </a>
    );
};
