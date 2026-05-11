import { ArrowUpRight, Phone, MapPin } from "lucide-react";

const HERO_IMG =
    "https://static.prod-images.emergentagent.com/jobs/41cd89c1-4b89-4d15-b46f-89ac94231f38/images/028fa94e61c75362ec8b5c3e56adaf54832aa5fec0f8162f17471593bc6f514d.png";

export const Hero = () => {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden"
        >
            <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                <div className="flex flex-col gap-12">
                    {/* Top meta row */}
                    <div className="flex flex-wrap items-center justify-between gap-4 fade-up">
                        <span
                            data-testid="hero-overline"
                            className="font-body text-xs font-semibold uppercase tracking-[0.28em] text-[#0047FF]"
                        >
                            <span className="inline-block w-8 h-px bg-[#0047FF] align-middle mr-3" />
                            Hassan • Karnataka • Est. Premium
                        </span>
                        <span className="font-body text-xs uppercase tracking-[0.22em] text-[#4B5563] hidden sm:inline">
                            Studio 001 / Car Couture
                        </span>
                    </div>

                    {/* Headline */}
                    <h1
                        data-testid="hero-headline"
                        className="font-heading text-[44px] leading-[1.02] sm:text-[72px] lg:text-[104px] font-light tracking-tighter text-[#0A0A0A] fade-up fade-up-delay-1"
                    >
                        Engineering the
                        <br />
                        <span className="italic font-quote text-[#0047FF]">art</span> of driving.
                        <br />
                        Refined for you.
                    </h1>

                    {/* Hero visual + meta */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
                        <div className="lg:col-span-7 relative fade-up fade-up-delay-2">
                            <div className="relative overflow-hidden bg-[#F8F9FA] aspect-[16/10]">
                                <img
                                    src={HERO_IMG}
                                    alt="Luxury car with electric blue accents"
                                    data-testid="hero-image"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1600ms] ease-out"
                                />
                                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                                    <span className="font-body text-[10px] uppercase tracking-[0.3em]">
                                        Bespoke / 2025
                                    </span>
                                    <span className="font-heading text-sm tracking-tight">
                                        Honour Sports ✦ HS-001
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex flex-col gap-8 fade-up fade-up-delay-3">
                            <p className="font-body text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-md">
                                A boutique atelier for premium car audio, custom interiors,
                                detailing, and lighting. Every install is engineered with
                                obsession and finished with a fingerprint that says luxury.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="#services"
                                    data-testid="hero-explore-button"
                                    className="group inline-flex items-center gap-2 bg-[#0047FF] hover:bg-[#0038CC] text-white px-7 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 blue-glow"
                                >
                                    Explore Services
                                    <ArrowUpRight
                                        size={16}
                                        className="group-hover:rotate-45 transition-transform duration-300"
                                    />
                                </a>
                                <a
                                    href="tel:+919741908073"
                                    data-testid="hero-call-button"
                                    className="inline-flex items-center gap-2 border border-[#0A0A0A] hover:bg-[#0A0A0A] text-[#0A0A0A] hover:text-white px-7 py-4 text-sm font-medium tracking-wide transition-all duration-300"
                                >
                                    <Phone size={14} /> Book a Visit
                                </a>
                            </div>

                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                                <Stat value="12+" label="Years of Craft" testid="stat-years" />
                                <Stat value="2,400" label="Cars Treated" testid="stat-cars" />
                                <Stat value="4.9" label="Owner Rating" testid="stat-rating" />
                            </div>

                            <div className="flex items-start gap-3 text-[#4B5563] font-body text-sm">
                                <MapPin size={16} className="mt-0.5 text-[#0047FF]" />
                                <span data-testid="hero-location">
                                    Thanniruhalla, Hassan — Karnataka, India
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Stat = ({ value, label, testid }) => (
    <div data-testid={testid}>
        <div className="font-heading text-3xl sm:text-4xl font-light text-[#0A0A0A] tracking-tighter">
            {value}
        </div>
        <div className="font-body text-[11px] uppercase tracking-[0.18em] text-[#4B5563] mt-1">
            {label}
        </div>
    </div>
);
