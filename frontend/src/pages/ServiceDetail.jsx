import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Check, Clock, IndianRupee, ArrowUpRight } from "lucide-react";
import { SERVICES, SERVICE_LIST } from "../data/services";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { QuoteRequestForm } from "../components/QuoteRequestForm";
import { useReveal } from "../hooks/useReveal";

export const ServiceDetail = () => {
    const { id } = useParams();
    useReveal();
    const service = SERVICES[id];
    if (!service) return <Navigate to="/" replace />;

    const Icon = service.icon;
    const others = SERVICE_LIST.filter((s) => s.id !== id);

    return (
        <div data-testid={`service-detail-${id}`} className="bg-white text-[#0A0A0A] overflow-x-hidden">
            <Header />

            <main className="pt-28 sm:pt-32">
                {/* Breadcrumb + Hero */}
                <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-12 sm:pb-20">
                    <Link
                        to="/"
                        data-testid="back-to-home"
                        className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.22em] text-[#4B5563] hover:text-[#0047FF] transition-colors"
                    >
                        <ArrowLeft size={14} /> Back to all services
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10 items-end">
                        <div className="lg:col-span-7 fade-up">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="font-body text-xs font-semibold tracking-[0.3em] text-[#0047FF]">
                                    {service.no} / Service
                                </span>
                                <span className="h-px w-12 bg-[#0047FF]" />
                            </div>
                            <h1
                                data-testid="service-detail-title"
                                className="font-heading text-4xl sm:text-6xl lg:text-7xl font-light tracking-tighter leading-[1.02]"
                            >
                                {service.title}
                            </h1>
                            <p className="mt-6 font-quote italic text-2xl sm:text-3xl text-[#0047FF]">
                                {service.short}
                            </p>
                            <p className="mt-6 font-body text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl">
                                {service.long}
                            </p>
                        </div>
                        <div className="lg:col-span-5 fade-up fade-up-delay-1">
                            <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200">
                                <Meta
                                    icon={<IndianRupee size={14} strokeWidth={2} />}
                                    label="Starting From"
                                    value={service.priceFrom}
                                    testid="service-price"
                                />
                                <Meta
                                    icon={<Clock size={14} strokeWidth={2} />}
                                    label="Studio Time"
                                    value={service.duration}
                                    testid="service-duration"
                                />
                            </div>
                            <div className="mt-px bg-[#0A0A0A] text-white p-6 flex items-center gap-4">
                                <div className="w-11 h-11 bg-[#0047FF] flex items-center justify-center">
                                    <Icon size={18} strokeWidth={1.5} />
                                </div>
                                <div className="flex-1">
                                    <div className="font-body text-[10px] uppercase tracking-[0.28em] text-white/50">
                                        Concierge
                                    </div>
                                    <div className="font-heading text-base font-medium tracking-tight mt-1">
                                        Hassan Studio · By Appointment
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cover image */}
                <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-20 sm:mb-28 reveal">
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#F8F9FA]">
                        <img
                            src={service.image}
                            alt={service.title}
                            data-testid="service-cover-image"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                            <span className="font-body text-[10px] uppercase tracking-[0.28em] bg-black/40 backdrop-blur px-3 py-1.5">
                                Honour Sports · {service.title}
                            </span>
                        </div>
                    </div>
                </section>

                {/* Deliverables */}
                <section className="bg-[#F8F9FA] py-20 sm:py-28">
                    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-5 reveal">
                            <span className="font-body text-xs font-semibold uppercase tracking-[0.28em] text-[#0047FF]">
                                ✦ What's Included
                            </span>
                            <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-light tracking-tighter leading-[1.05]">
                                Every detail. <br />
                                <span className="font-quote italic text-[#0047FF]">Engineered.</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-7 reveal">
                            <ul className="grid sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
                                {service.deliverables.map((d, i) => (
                                    <li
                                        key={i}
                                        data-testid={`deliverable-${i}`}
                                        className="bg-white p-6 flex items-start gap-3"
                                    >
                                        <span className="mt-1 w-5 h-5 bg-[#0047FF] flex items-center justify-center shrink-0">
                                            <Check size={12} className="text-white" strokeWidth={3} />
                                        </span>
                                        <span className="font-body text-sm text-[#0A0A0A]">{d}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Gallery */}
                <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
                    <div className="reveal mb-12">
                        <span className="font-body text-xs font-semibold uppercase tracking-[0.28em] text-[#0047FF]">
                            ✦ From the Studio Floor
                        </span>
                        <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-light tracking-tighter">
                            Selected Builds.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
                        {service.gallery.map((img, i) => (
                            <div
                                key={i}
                                data-testid={`gallery-${i}`}
                                className="reveal aspect-[4/5] overflow-hidden bg-[#0A0A0A] group relative"
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                <img
                                    src={img}
                                    alt={`${service.title} build ${i + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1400ms] ease-out"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Quote form */}
                <section className="bg-white py-20 sm:py-28">
                    <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 reveal">
                        <QuoteRequestForm serviceTitle={service.title} />
                    </div>
                </section>

                {/* Other services */}
                <section className="bg-[#0A0A0A] text-white py-20 sm:py-28">
                    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                        <div className="flex items-end justify-between gap-6 mb-12 reveal">
                            <h2 className="font-heading text-3xl sm:text-5xl font-light tracking-tighter">
                                Explore other crafts.
                            </h2>
                            <Link
                                to="/#services"
                                className="hidden sm:inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.22em] text-white/60 hover:text-[#0047FF] transition-colors"
                            >
                                All Services →
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                            {others.map((s) => {
                                const OIcon = s.icon;
                                return (
                                    <Link
                                        key={s.id}
                                        to={`/services/${s.id}`}
                                        data-testid={`related-${s.id}`}
                                        className="group bg-[#0A0A0A] p-8 flex flex-col gap-5 hover:bg-[#0047FF] transition-colors duration-500"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-body text-[11px] tracking-[0.3em] text-white/40 group-hover:text-white/80 transition-colors">
                                                {s.no}
                                            </span>
                                            <OIcon size={16} className="text-white/70 group-hover:text-white" />
                                        </div>
                                        <h3 className="font-heading text-2xl font-light tracking-tight">{s.title}</h3>
                                        <p className="font-body text-sm text-white/60 group-hover:text-white/90 transition-colors">
                                            {s.short}
                                        </p>
                                        <span className="mt-auto inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.22em]">
                                            View Details <ArrowUpRight size={12} className="group-hover:rotate-45 transition-transform" />
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

const Meta = ({ icon, label, value, testid }) => (
    <div data-testid={testid} className="bg-white p-5 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[#0047FF]">
            {icon}
            <span className="font-body text-[10px] uppercase tracking-[0.28em]">{label}</span>
        </div>
        <div className="font-heading text-2xl font-light tracking-tight text-[#0A0A0A]">
            {value}
        </div>
    </div>
);
