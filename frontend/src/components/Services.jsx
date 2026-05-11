import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SERVICE_LIST } from "../data/services";

export const Services = () => {
    return (
        <section
            id="services"
            data-testid="services-section"
            className="py-20 sm:py-32 bg-white"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 sm:mb-20 reveal">
                    <div className="lg:col-span-5">
                        <span className="font-body text-xs font-semibold uppercase tracking-[0.28em] text-[#0047FF]">
                            ✦ What We Craft
                        </span>
                    </div>
                    <div className="lg:col-span-7">
                        <h2
                            data-testid="services-heading"
                            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-[#0A0A0A] leading-[1.05]"
                        >
                            Four disciplines.
                            <br />
                            One obsession with <span className="font-quote italic text-[#0047FF]">detail</span>.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {SERVICE_LIST.map((s, i) => (
                        <ServiceCard key={s.id} service={s} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ service, index }) => {
    const Icon = service.icon;
    return (
        <Link
            to={`/services/${service.id}`}
            data-testid={`service-card-${service.id}`}
            className={`reveal group relative ${service.span} ${service.height} overflow-hidden bg-[#F8F9FA] border border-gray-200 hover:border-[#0047FF]/40 transition-all duration-500 block`}
            style={{ transitionDelay: `${index * 60}ms` }}
        >
            <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[1200ms] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/85 via-[#0A0A0A]/30 to-transparent" />

            <div className="relative h-full flex flex-col justify-between p-8 sm:p-10 text-white">
                <div className="flex items-start justify-between">
                    <span className="font-body text-xs font-semibold tracking-[0.2em]">{service.no}</span>
                    <div className="w-11 h-11 bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-[#0047FF] group-hover:border-[#0047FF] transition-all duration-500">
                        <Icon size={18} strokeWidth={1.5} />
                    </div>
                </div>

                <div className="max-w-md">
                    <h3
                        data-testid={`service-title-${service.id}`}
                        className="font-heading text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight mb-3"
                    >
                        {service.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-white/75 leading-relaxed mb-6">
                        {service.desc}
                    </p>
                    <span
                        data-testid={`service-cta-${service.id}`}
                        className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.22em] text-white group-hover:text-[#0047FF] transition-colors duration-300"
                    >
                        View Details
                        <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
                    </span>
                </div>
            </div>
        </Link>
    );
};
