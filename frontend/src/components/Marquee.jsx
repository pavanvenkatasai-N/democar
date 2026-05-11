const items = [
    "Premium Audio",
    "Bespoke Interiors",
    "Ceramic Detailing",
    "Ambient Lighting",
    "Sound Engineering",
    "Leather Craft",
    "Mirror Polish",
    "Acoustic Tuning",
];

export const Marquee = () => {
    const row = [...items, ...items];
    return (
        <section
            data-testid="marquee-section"
            className="py-6 border-y border-gray-200 bg-[#0A0A0A] text-white overflow-hidden"
        >
            <div className="marquee-track flex whitespace-nowrap gap-12">
                {row.map((t, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-12 font-heading text-2xl sm:text-3xl font-light tracking-tight"
                    >
                        <span>{t}</span>
                        <span className="text-[#0047FF]">✦</span>
                    </div>
                ))}
            </div>
        </section>
    );
};
