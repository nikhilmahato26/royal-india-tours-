# Royal India Tours — Luxury Travel Website

> Travel Royal. Create Memories.

A premium, luxury travel brand website for **Royal India Tours**, built to feel like a
high-end travel house (Abercrombie & Kent / Luxury Escapes calibre) rather than a local
agency. Elegant typography, glassmorphism, parallax, and rich Framer Motion animations
throughout.

## Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (design tokens for the royal palette)
- **Framer Motion** — fade-up, stagger, hover lift, scale, scroll reveal, parallax, page transitions
- **Swiper JS** — international packages + testimonials carousels
- **React Hook Form** — validated luxury booking form
- **Lucide React** — icons
- **React Router** — multi-page routing with animated transitions

## Getting Started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project Structure

```
src/
├── assets/            # images, videos, icons
├── components/
│   ├── layout/        # Navbar, MobileMenu, Footer
│   ├── home/          # Hero, Services, FeaturedDestinations, WhyChooseUs,
│   │                  #   DomesticPackages, InternationalPackages, Testimonials,
│   │                  #   InstagramGallery, FAQ, ContactForm
│   └── ui/            # Logo, SectionHeading, PageHero, PageTransition, WhatsAppFloat
├── pages/             # Home, Packages, About, Contact
├── hooks/             # useScrollTop, useScrolled
├── data/              # site, services, destinations, packages, testimonials, faq, gallery
├── utils/             # animations (shared Framer Motion variants)
├── App.jsx
└── main.jsx
```

## Brand

| Token        | Value     |
| ------------ | --------- |
| Royal Navy   | `#0B1F3A` |
| Midnight     | `#071426` |
| Champagne Gold | `#D4AF37` |
| Luxury Ivory | `#F8F6F0` |
| Warm Beige   | `#EFE7DA` |

- **Phone:** 9643618385
- **Email:** upasnasingh20@outlook.com

## Notes

- Imagery is loaded from the Unsplash CDN; swap the IDs in `src/data/*.js` and
  `src/components/home/Hero.jsx` for owned/licensed photography before launch.
- The booking form currently composes a WhatsApp message on submit
  (`src/components/home/ContactForm.jsx`). Wire it to your email/CRM endpoint for production.
- SEO meta tags, Open Graph, and `TravelAgency` structured data live in `index.html`.
