import { Phone, MapPin, Clock, Mail, Instagram, Facebook, ArrowUpRight } from "lucide-react";

const hours = [
    { day: "Mon — Sat", time: "9:30 AM — 8:30 PM" },
    { day: "Sunday", time: "10:00 AM — 5:00 PM" },
];

const socials = [
    { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/hasanamba_car_decor_/", handle: "@hasanamba_car_decor_" },
    { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/@hasanambacardecor.basavaraju/", handle: "/hasanambacardecor.basavaraju" },
];

export const Contact = () => {
    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="py-20 sm:py-32 bg-white"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                <div className="reveal">
                    <span className="font-body text-xs font-semibold uppercase tracking-[0.28em] text-[#0047FF]">
                        ✦ Visit the Studio
                    </span>
                    <h2
                        data-testid="contact-heading"
                        className="mt-5 font-heading text-5xl sm:text-7xl lg:text-[112px] font-light tracking-tighter text-[#0A0A0A] leading-[0.95]"
                    >
                        Let's build
                        <br />
                        something <span className="font-quote italic text-[#0047FF]">remarkable</span>.
                    </h2>
                </div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Phone large */}
                    <a
                        href="tel:+919741908073"
                        data-testid="contact-phone-block"
                        className="reveal lg:col-span-7 group block bg-[#0A0A0A] hover:bg-[#0047FF] text-white p-8 sm:p-12 transition-colors duration-500"
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-body text-xs uppercase tracking-[0.28em] text-white/50 group-hover:text-white/80">
                                Direct Line
                            </span>
                            <Phone size={20} strokeWidth={1.5} className="text-white/60 group-hover:text-white" />
                        </div>
                        <div
                            data-testid="contact-phone-number"
                            className="mt-8 font-heading text-4xl sm:text-6xl lg:text-7xl font-light tracking-tighter"
                        >
                            +91 97419 08073
                        </div>
                        <div className="mt-6 inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.22em] border-b border-white/40 pb-1 group-hover:border-white">
                            Tap to call
                            <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
                        </div>
                    </a>

                    {/* Location */}
                    <div
                        data-testid="contact-location-block"
                        className="reveal lg:col-span-5 bg-[#F8F9FA] border border-gray-200 p-8 sm:p-10 flex flex-col gap-6"
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-body text-xs uppercase tracking-[0.28em] text-[#0047FF]">
                                Studio Address
                            </span>
                            <MapPin size={20} strokeWidth={1.5} className="text-[#0047FF]" />
                        </div>
                        <div>
                            <div className="font-heading text-2xl sm:text-3xl font-light tracking-tight text-[#0A0A0A]">
                                Honour Sports Car Decor
                            </div>
                            <div
                                data-testid="contact-address"
                                className="mt-3 font-body text-base text-[#4B5563] leading-relaxed"
                            >
                                Thanniruhalla,
                                <br />
                                Hassan — 573201,
                                <br />
                                Karnataka, India.
                            </div>
                        </div>
                        <a
                            href="https://maps.google.com/?q=Thanniruhalla+Hassan+Karnataka"
                            target="_blank"
                            rel="noreferrer"
                            data-testid="contact-directions-link"
                            className="mt-auto inline-flex items-center gap-2 text-[#0A0A0A] hover:text-[#0047FF] font-body text-sm font-medium border-b border-[#0A0A0A] hover:border-[#0047FF] pb-1 w-fit transition-colors duration-300"
                        >
                            Get Directions →
                        </a>
                    </div>

                    {/* Hours */}
                    <div
                        data-testid="contact-hours-block"
                        className="reveal lg:col-span-4 bg-[#F8F9FA] border border-gray-200 p-8 flex flex-col gap-5"
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-body text-xs uppercase tracking-[0.28em] text-[#0047FF]">
                                Studio Hours
                            </span>
                            <Clock size={18} strokeWidth={1.5} className="text-[#0047FF]" />
                        </div>
                        <div className="flex flex-col gap-3">
                            {hours.map((h) => (
                                <div
                                    key={h.day}
                                    data-testid={`hours-${h.day.replace(/\s+/g, "-").toLowerCase()}`}
                                    className="flex items-center justify-between border-b border-gray-200 pb-3 last:border-0"
                                >
                                    <span className="font-body text-sm text-[#0A0A0A] font-medium">
                                        {h.day}
                                    </span>
                                    <span className="font-body text-sm text-[#4B5563]">
                                        {h.time}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Email */}
                    <a
                        href="mailto:mivimala@gmail.com"
                        data-testid="contact-email-block"
                        className="reveal lg:col-span-4 group bg-[#F8F9FA] border border-gray-200 hover:border-[#0047FF]/40 p-8 flex flex-col gap-5 transition-colors duration-500"
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-body text-xs uppercase tracking-[0.28em] text-[#0047FF]">
                                Send a Mail
                            </span>
                            <Mail size={18} strokeWidth={1.5} className="text-[#0047FF]" />
                        </div>
                        <div
                            data-testid="contact-email"
                            className="font-heading text-xl sm:text-2xl font-light tracking-tight text-[#0A0A0A] group-hover:text-[#0047FF] transition-colors duration-300 break-all"
                        >
                            mivimala@gmail.com
                        </div>
                        <span className="font-body text-xs text-[#4B5563]">
                            Replies within one business day.
                        </span>
                    </a>

                    {/* Social */}
                    <div
                        data-testid="contact-social-block"
                        className="reveal lg:col-span-4 bg-[#F8F9FA] border border-gray-200 p-8 flex flex-col gap-5"
                    >
                        <span className="font-body text-xs uppercase tracking-[0.28em] text-[#0047FF]">
                            Follow the Work
                        </span>
                        <div className="flex flex-col gap-4 mt-1">
                            {socials.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        data-testid={`social-${s.label.toLowerCase()}`}
                                        className="group flex items-center justify-between border-b border-gray-200 pb-3 last:border-0 hover:border-[#0047FF] transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon size={16} className="text-[#0A0A0A] group-hover:text-[#0047FF]" />
                                            <span className="font-body text-sm text-[#0A0A0A] font-medium">
                                                {s.label}
                                            </span>
                                        </div>
                                        <span className="font-body text-xs text-[#4B5563] group-hover:text-[#0047FF]">
                                            {s.handle} ↗
                                        </span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div
                    data-testid="contact-map-block"
                    className="reveal mt-12 relative bg-[#F8F9FA] border border-gray-200 overflow-hidden"
                >
                    <div className="absolute top-0 left-0 right-0 z-10 px-6 sm:px-8 py-5 bg-gradient-to-b from-white/95 to-white/0 pointer-events-none">
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="font-body text-[10px] uppercase tracking-[0.28em] text-[#0047FF]">
                                    ✦ Find Us
                                </span>
                                <div className="font-heading text-lg sm:text-xl font-medium tracking-tight text-[#0A0A0A] mt-1">
                                    Thanniruhalla, Hassan
                                </div>
                            </div>
                            <a
                                href="https://maps.google.com/?q=Thanniruhalla+Hassan+Karnataka"
                                target="_blank"
                                rel="noreferrer"
                                data-testid="contact-map-open-link"
                                className="pointer-events-auto hidden sm:inline-flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#0047FF] text-white px-5 py-2.5 text-xs font-medium tracking-wide transition-colors duration-300"
                            >
                                Open in Maps ↗
                            </a>
                        </div>
                    </div>
                    <iframe
                        title="Honour Sports Car Decor — Hassan, Karnataka"
                        data-testid="contact-map-iframe"
                        src="https://www.google.com/maps?q=Thanniruhalla,Hassan,Karnataka&output=embed"
                        className="w-full h-[380px] sm:h-[480px] grayscale-[35%] hover:grayscale-0 transition-all duration-700"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    );
};
