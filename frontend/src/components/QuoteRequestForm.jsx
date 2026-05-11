import { useState } from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export const QuoteRequestForm = ({ serviceTitle = "" }) => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        carModel: "",
        notes: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const lines = [
            `Hello Honour Sports,`,
            ``,
            `I'd like a quote for: ${serviceTitle || "your services"}.`,
            ``,
            `Name: ${form.name || "—"}`,
            `Phone: ${form.phone || "—"}`,
            `Car: ${form.carModel || "—"}`,
            `Notes: ${form.notes || "—"}`,
        ].join("\n");
        const url = `https://wa.me/919741908073?text=${encodeURIComponent(lines)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <form
            onSubmit={handleSubmit}
            data-testid="quote-request-form"
            className="bg-[#F8F9FA] border border-gray-200 p-8 sm:p-10 flex flex-col gap-6"
        >
            <div>
                <span className="font-body text-xs font-semibold uppercase tracking-[0.28em] text-[#0047FF]">
                    ✦ Request a Quote
                </span>
                <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-light tracking-tight text-[#0A0A0A]">
                    Tell us about your build.
                </h3>
                <p className="mt-2 font-body text-sm text-[#4B5563]">
                    Your request opens a pre-filled WhatsApp chat — we usually reply within an hour.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    required
                    testid="quote-name"
                />
                <Field
                    label="Phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 ..."
                    type="tel"
                    required
                    testid="quote-phone"
                />
            </div>
            <Field
                label="Car Make & Model"
                name="carModel"
                value={form.carModel}
                onChange={handleChange}
                placeholder="e.g. BMW 530d, Toyota Fortuner 4x4"
                required
                testid="quote-car"
            />
            <div>
                <label className="block font-body text-[11px] uppercase tracking-[0.22em] text-[#4B5563] mb-2">
                    Brief
                </label>
                <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us what you'd like — budget, references, timelines."
                    data-testid="quote-notes"
                    className="w-full bg-white border border-gray-300 px-4 py-3 font-body text-sm text-[#0A0A0A] focus:outline-none focus:border-[#0047FF] transition-colors resize-none"
                />
            </div>

            <button
                type="submit"
                data-testid="quote-submit-button"
                className="group inline-flex items-center justify-center gap-2 bg-[#0047FF] hover:bg-[#0038CC] text-white px-7 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5"
            >
                <MessageCircle size={16} strokeWidth={2} />
                Send via WhatsApp
                <ArrowUpRight
                    size={16}
                    className="group-hover:rotate-45 transition-transform duration-300"
                />
            </button>
            <p className="font-body text-[11px] text-[#9CA3AF]">
                We never share your details. Replies typically within one hour during studio hours.
            </p>
        </form>
    );
};

const Field = ({ label, name, value, onChange, type = "text", placeholder, required, testid }) => (
    <div>
        <label className="block font-body text-[11px] uppercase tracking-[0.22em] text-[#4B5563] mb-2">
            {label}
        </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            data-testid={testid}
            className="w-full bg-white border border-gray-300 px-4 py-3 font-body text-sm text-[#0A0A0A] focus:outline-none focus:border-[#0047FF] transition-colors"
        />
    </div>
);
