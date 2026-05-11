const values = [
    {
        no: "01",
        title: "Obsession with detail",
        copy: "Every stitch, every wire, every reflection passes a 12-point QC before keys leave our hand.",
    },
    {
        no: "02",
        title: "Concours-grade materials",
        copy: "Imported Nappa leather, marine-grade vinyls, German amplifiers, Japanese coatings — sourced direct.",
    },
    {
        no: "03",
        title: "Master craftsmen",
        copy: "Our lead artisans average 12+ years in luxury automotive interiors and audio engineering.",
    },
];

export const About = () => {
    return (
        <section
            id="about"
            data-testid="about-section"
            className="py-20 sm:py-32 bg-[#0A0A0A] text-white relative overflow-hidden"
        >
            <div className="absolute inset-0 grid-bg opacity-[0.05]" />

            <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    <div className="lg:col-span-5 reveal">
                        <span className="font-body text-xs font-semibold uppercase tracking-[0.28em] text-[#0047FF]">
                            ✦ About the Studio
                        </span>
                        <h2
                            data-testid="about-heading"
                            className="mt-5 font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.05]"
                        >
                            A boutique atelier,
                            <br />
                            built in <span className="font-quote italic text-[#0047FF]">Hassan</span>.
                        </h2>
                        <p className="mt-8 font-body text-base sm:text-lg text-white/70 leading-relaxed">
                            For over a decade, Honour Sports has quietly become the
                            destination of choice for discerning car owners across Karnataka.
                            We don't accept walk-in volume work — every project is scoped,
                            designed, and finished as a one-of-one collaboration with you.
                        </p>
                        <p className="mt-5 font-body text-base text-white/70 leading-relaxed">
                            From concert-grade audio to hand-stitched cabins, our craft sits
                            at the intersection of engineering and emotion. Welcome to the
                            studio.
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 reveal">
                        {values.map((v) => (
                            <div
                                key={v.no}
                                data-testid={`about-value-${v.no}`}
                                className="bg-[#0A0A0A] p-8 sm:p-10 flex flex-col gap-5 hover:bg-[#0047FF] transition-colors duration-500 group"
                            >
                                <span className="font-body text-[11px] tracking-[0.3em] text-white/40 group-hover:text-white/80 transition-colors">
                                    {v.no} / Principle
                                </span>
                                <h3 className="font-heading text-2xl font-light tracking-tight">
                                    {v.title}
                                </h3>
                                <p className="font-body text-sm text-white/65 group-hover:text-white/90 leading-relaxed">
                                    {v.copy}
                                </p>
                            </div>
                        ))}
                        <div className="bg-white/[0.04] p-8 sm:p-10 flex flex-col justify-between sm:col-span-2 hover:bg-white/[0.08] transition-colors duration-500">
                            <span className="font-body text-[11px] tracking-[0.3em] text-white/40">
                                04 / Promise
                            </span>
                            <div className="flex flex-wrap items-end justify-between gap-6 mt-6">
                                <h3 className="font-heading text-3xl sm:text-4xl font-light tracking-tighter max-w-md">
                                    Drive away with something nobody else has.
                                </h3>
                                <a
                                    href="#contact"
                                    data-testid="about-cta-button"
                                    className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] hover:bg-[#0047FF] hover:text-white px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300"
                                >
                                    Visit the Studio →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
