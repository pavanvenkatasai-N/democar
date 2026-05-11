# Honour Sports — Premium Marketing Site

## Original Problem Statement
Create a premium, high-end website for 'Honour Sports' (originally Hasanamba Car Decor), a luxury car stereo and styling shop based in Hassan, Karnataka. Clean Portfolio theme: minimalist white background with sleek electric blue accents. Services: Premium Audio Systems, Custom Car Interiors, Professional Detailing, Advanced Lighting. Include hero, portfolio gallery, About, Contact (Thanniruhalla, Hassan; +91 97419 08073). Premium typography, smooth animations, justify ₹40k price point. Fully responsive.

## Current Brand
- Name: **Honour Sports** (tagline: CAR DECOR)
- Logo: SVG car silhouette outline above wordmark, dashed CAR DECOR tagline (mirrors user-supplied reference)
- Email placeholder: `hello@honoursports.in`
- Socials: `@honour.sports` (Instagram), `/HonourSports` (Facebook)

## User Choices
- Stock images (no real client photos yet)
- No contact form — display contact info only
- Include business hours, email, social media
- Include sample testimonials

## Architecture
- Frontend: React 19 + Tailwind + lucide-react. Single-page anchor-nav site.
- Fonts: Outfit (headings), Manrope (body), Cormorant Garamond italic (accents)
- Color palette: #FFFFFF / #F8F9FA backgrounds, #0A0A0A text, #0047FF electric blue accent
- Backend: untouched (template) — no DB writes required
- No 3rd-party integrations

## Implemented (Dec 2025)
- Header with sticky-on-scroll glassmorphism + mobile hamburger menu (uses new Logo)
- SVG Logo (car silhouette + HONOUR SPORTS + dashed CAR DECOR tagline)
- Hero with headline, premium car image, dual CTAs, 3 stat counters, location chip
- Animated marquee strip
- Services bento grid (4 cards now linking to /services/:id detail pages)
- 4 Service-detail pages (`/services/audio`, `/services/interior`, `/services/detailing`, `/services/lighting`) with hero, price/duration meta, concierge strip, cover image, 6 deliverables, 3-image gallery, embedded quote form, related services
- Quote-Request form opens prefilled WhatsApp chat (`wa.me/919741908073`) with service name + user details (no DB)
- Portfolio masonry-style grid (5 items, varied imagery)
- Testimonials (3 quotes, rebranded)
- About section (rebranded copy)
- Contact section (large phone CTA, address, hours, email, social links, **Google Map iframe**, **no form**)
- Floating WhatsApp button (rebranded message)
- Footer with three-column layout
- Smooth scroll + IntersectionObserver reveal animations
- ScrollToTop on route change (useLayoutEffect + rAF re-assert)
- Mobile responsive
- All elements have data-testid attributes

## Test Results
- iteration_1.json — frontend 100% (initial MVP)
- iteration_2.json — 85% (found Hasanamba leftovers + title + scroll bug)
- iteration_3.json — 100% on all targeted fixes (rebrand complete, ScrollToTop fixed, title fallback set)

## Backlog
### P1 (Replace placeholders)
- Real social media profile URLs (Instagram/Facebook) instead of `#`
- Confirm/replace email `hello@hasanambacardecor.com`
- Vary portfolio imagery (p2/p5 currently reuse service section images)

### P2 (Enhancements)
- Real photo gallery from the shop's work (replace stock images)
- Embed Google Map iframe in Contact section
- WhatsApp click-to-chat button
- Blog/news section for SEO
- Lightbox for portfolio gallery
- Service-detail pages
- Booking/quote request flow (would re-introduce form + backend persistence)

## Next Tasks
- Awaiting user feedback on visual direction & content
- Provide real images + social URLs to replace placeholders
