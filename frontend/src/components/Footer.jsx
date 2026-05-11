import { Logo } from "./Logo";
export const Footer = () => {
    return (
        <footer
            data-testid="site-footer"
            className="bg-[#0A0A0A] text-white py-12 sm:py-16"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                    <div className="md:col-span-5">
                        <Logo variant="light" size="md" />
                        <p className="mt-6 font-body text-sm text-white/60 max-w-sm leading-relaxed">
                            Premium audio, custom interiors, ceramic detailing and ambient
                            lighting — engineered in Hassan, Karnataka.
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <div className="font-body text-[11px] uppercase tracking-[0.28em] text-white/40 mb-4">
                            Explore
                        </div>
                        <ul className="space-y-3 font-body text-sm">
                            <li><a href="#services" className="hover:text-[#0047FF] transition-colors">Services</a></li>
                            <li><a href="#portfolio" className="hover:text-[#0047FF] transition-colors">Portfolio</a></li>
                            <li><a href="#about" className="hover:text-[#0047FF] transition-colors">About</a></li>
                            <li><a href="#contact" className="hover:text-[#0047FF] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <div className="font-body text-[11px] uppercase tracking-[0.28em] text-white/40 mb-4">
                            Studio
                        </div>
                        <div className="font-body text-sm text-white/70 leading-relaxed">
                            Thanniruhalla, Hassan<br />
                            Karnataka — 573201
                        </div>
                        <a
                            href="tel:+919741908073"
                            data-testid="footer-call-link"
                            className="mt-4 inline-block font-heading text-2xl font-light tracking-tight text-white hover:text-[#0047FF] transition-colors"
                        >
                            +91 97419 08073
                        </a>
                    </div>
                </div>

                <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="font-body text-xs text-white/45 tracking-wide">
                        © {new Date().getFullYear()} Honour Sports Car Decor. All rights reserved.
                    </span>
                    <span className="font-body text-xs text-white/45 tracking-wide">
                        Crafted with obsession in Hassan, Karnataka.
                    </span>
                </div>
            </div>
        </footer>
    );
};
