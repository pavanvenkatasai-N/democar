import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const isHome = pathname === "/";

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const buildHref = (anchor) => (isHome ? anchor : `/${anchor}`);

    return (
        <header
            data-testid="site-header"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled || !isHome
                    ? "bg-white/85 backdrop-blur-xl border-b border-gray-200/60"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto pl-2 pr-4 sm:px-8 lg:px-12 flex items-center justify-between h-28 sm:h-32">
                <Link to="/" data-testid="logo-link" className="block -ml-2 sm:-ml-3">
                    <Logo variant="dark" size="lg" />
                </Link>

                <nav className="hidden lg:flex items-center gap-7">
                    {navLinks.map((l) => (
                        <a
                            key={l.href}
                            href={buildHref(l.href)}
                            data-testid={`nav-link-${l.label.toLowerCase()}`}
                            className="font-body text-xs uppercase tracking-[0.18em] text-[#0A0A0A] hover:text-[#0047FF] transition-colors duration-300 relative group"
                        >
                            {l.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#0047FF] group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </nav>

                <a
                    href="tel:+919741908073"
                    data-testid="header-call-button"
                    className="hidden lg:inline-flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#0047FF] text-white px-5 py-2.5 text-xs font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5"
                >
                    <Phone size={13} strokeWidth={2} />
                    +91 97419 08073
                </a>

                <button
                    onClick={() => setOpen(!open)}
                    data-testid="mobile-menu-toggle"
                    className="lg:hidden p-2 text-[#0A0A0A]"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {open && (
                <div
                    data-testid="mobile-menu"
                    className="lg:hidden bg-white border-t border-gray-200/60"
                >
                    <div className="px-5 py-6 flex flex-col gap-5">
                        {navLinks.map((l) => (
                            <a
                                key={l.href}
                                href={buildHref(l.href)}
                                onClick={() => setOpen(false)}
                                data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                                className="font-body text-base text-[#0A0A0A] hover:text-[#0047FF]"
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                            href="tel:+919741908073"
                            data-testid="mobile-call-button"
                            className="inline-flex items-center justify-center gap-2 bg-[#0047FF] text-white px-6 py-4 text-sm font-medium tracking-wide"
                        >
                            <Phone size={14} /> +91 97419 08073
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};
