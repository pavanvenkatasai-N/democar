const works = [
    {
        id: "p1",
        title: "Mercedes S-Class — Cabin Reborn",
        category: "Custom Interior",
        image:
            "https://images.pexels.com/photos/16716122/pexels-photo-16716122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        size: "lg:col-span-7 lg:row-span-2 min-h-[480px] lg:min-h-[640px]",
    },
    {
        id: "p2",
        title: "BMW 7 Series — Hi-Fi Build",
        category: "Premium Audio",
        image:
            "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80",
        size: "lg:col-span-5 min-h-[310px]",
    },
    {
        id: "p3",
        title: "Vintage Cabin Restoration",
        category: "Bespoke Craft",
        image:
            "https://images.pexels.com/photos/18262241/pexels-photo-18262241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        size: "lg:col-span-5 min-h-[310px]",
    },
    {
        id: "p4",
        title: "Lamborghini Huracán — Mirror Finish",
        category: "Detailing",
        image:
            "https://images.pexels.com/photos/14231701/pexels-photo-14231701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        size: "lg:col-span-6 min-h-[380px]",
    },
    {
        id: "p5",
        title: "Audi RS — Ambient Signature",
        category: "Advanced Lighting",
        image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
        size: "lg:col-span-6 min-h-[380px]",
    },
];

export const Portfolio = () => {
    return (
        <section
            id="portfolio"
            data-testid="portfolio-section"
            className="py-20 sm:py-32 bg-[#F8F9FA]"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 reveal">
                    <div className="lg:col-span-5">
                        <span className="font-body text-xs font-semibold uppercase tracking-[0.28em] text-[#0047FF]">
                            ✦ Selected Work
                        </span>
                        <h2
                            data-testid="portfolio-heading"
                            className="mt-5 font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-[#0A0A0A] leading-[1.05]"
                        >
                            Portfolio.
                        </h2>
                    </div>
                    <div className="lg:col-span-7 lg:pt-12">
                        <p className="font-body text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl">
                            A curated showcase from our workshop floor — from concept renders
                            to delivered builds. Every car you see was finished and signed off
                            in Hassan.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 auto-rows-min">
                    {works.map((w, i) => (
                        <article
                            key={w.id}
                            data-testid={`portfolio-item-${w.id}`}
                            className={`reveal group relative overflow-hidden bg-[#0A0A0A] ${w.size}`}
                            style={{ transitionDelay: `${i * 70}ms` }}
                        >
                            <img
                                src={w.image}
                                alt={w.title}
                                className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-[1600ms] ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                                <span className="font-body text-[10px] uppercase tracking-[0.28em] text-[#0047FF]">
                                    {w.category}
                                </span>
                                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-light tracking-tight mt-2">
                                    {w.title}
                                </h3>
                            </div>
                            <span className="absolute top-5 right-5 w-9 h-9 border border-white/30 text-white text-xs flex items-center justify-center backdrop-blur-md group-hover:bg-[#0047FF] group-hover:border-[#0047FF] transition-all duration-500">
                                ↗
                            </span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
