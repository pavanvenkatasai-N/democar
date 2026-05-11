import { Star } from "lucide-react";

const reviews = [
    {
        id: "t1",
        quote:
            "The audio install on my Range Rover is genuinely concert-grade. They tuned every frequency to the cabin. Worth every rupee.",
        name: "Rohan Shenoy",
        title: "Owner, Range Rover Velar",
        location: "Bengaluru",
    },
    {
        id: "t2",
        quote:
            "Honour Sports rebuilt my BMW's interior in tan leather and burl wood. Showroom couldn't believe it was an aftermarket job.",
        name: "Aishwarya Hegde",
        title: "Architect",
        location: "Mangaluru",
    },
    {
        id: "t3",
        quote:
            "I drove down from Mysuru for the ceramic coating. Two years on, the finish still beads water like day one. Master craftsmen.",
        name: "Vikram Iyer",
        title: "Collector, Vintage Classics",
        location: "Mysuru",
    },
];

export const Testimonials = () => {
    return (
        <section
            id="testimonials"
            data-testid="testimonials-section"
            className="py-20 sm:py-32 bg-white"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 reveal">
                    <div className="lg:col-span-7">
                        <span className="font-body text-xs font-semibold uppercase tracking-[0.28em] text-[#0047FF]">
                            ✦ Said Aloud
                        </span>
                        <h2
                            data-testid="testimonials-heading"
                            className="mt-5 font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-[#0A0A0A] leading-[1.05]"
                        >
                            Trusted by owners
                            <br />
                            <span className="font-quote italic text-[#0047FF]">who notice</span> the details.
                        </h2>
                    </div>
                    <div className="lg:col-span-5 lg:pt-8 flex flex-col gap-4">
                        <div className="flex items-center gap-3" data-testid="testimonials-rating">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        fill="#0047FF"
                                        stroke="#0047FF"
                                    />
                                ))}
                            </div>
                            <span className="font-body text-sm text-[#0A0A0A] font-medium">
                                4.9 / 5
                            </span>
                            <span className="font-body text-xs text-[#4B5563]">
                                from 320+ reviews
                            </span>
                        </div>
                        <p className="font-body text-sm text-[#4B5563] leading-relaxed max-w-sm">
                            Discerning owners across Karnataka return to us for one reason —
                            we treat their car like it's our own.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
                    {reviews.map((r, i) => (
                        <div
                            key={r.id}
                            data-testid={`testimonial-${r.id}`}
                            className="reveal bg-white p-8 sm:p-10 flex flex-col gap-6 group hover:bg-[#0A0A0A] transition-colors duration-500"
                            style={{ transitionDelay: `${i * 80}ms` }}
                        >
                            <div className="font-quote italic text-5xl text-[#0047FF] leading-none">
                                "
                            </div>
                            <p className="font-quote italic text-xl sm:text-2xl text-[#0A0A0A] group-hover:text-white leading-snug flex-1 transition-colors duration-500">
                                {r.quote}
                            </p>
                            <div className="pt-6 border-t border-gray-200 group-hover:border-white/15 transition-colors duration-500">
                                <div className="font-heading text-base font-medium text-[#0A0A0A] group-hover:text-white transition-colors duration-500">
                                    {r.name}
                                </div>
                                <div className="font-body text-xs text-[#4B5563] group-hover:text-white/60 mt-1 transition-colors duration-500">
                                    {r.title} · {r.location}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
