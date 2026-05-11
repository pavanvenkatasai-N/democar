const LOGO_URL =
    "https://customer-assets.emergentagent.com/job_hasanamba-premium/artifacts/q27sbh4x_a7559733-ec86-40b1-89e0-f91eebb668ff.png";

const LOGO_URL_DARK =
    "https://customer-assets.emergentagent.com/job_hasanamba-premium/artifacts/ff1k47wn_c22ae48c-6ab4-4b30-b405-a2eae559c350.png";

export const Logo = ({ variant = "dark", size = "md" }) => {
    const sizes = {
        sm: "h-14 sm:h-16",
        md: "h-20 sm:h-24",
        lg: "h-28 sm:h-32",
    };
    const cls = sizes[size] || sizes.md;

    // Footer / dark surface — uses the dark-background designed logo (transparent PNG)
    if (variant === "light") {
        return (
            <img
                src={LOGO_URL_DARK}
                alt="Honour Sports Car Decor"
                data-testid="brand-logo-image-light"
                className={`${cls} w-auto object-contain block`}
            />
        );
    }

    return (
        <img
            src={LOGO_URL}
            alt="Honour Sports Car Decor"
            data-testid="brand-logo-image"
            className={`${cls} w-auto object-contain block`}
        />
    );
};
