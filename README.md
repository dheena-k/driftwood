# Driftwood Beach Resort

A responsive villa/resort landing page built with Next.js (App Router), TypeScript, and Tailwind CSS, using the property's own photography.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To build for production:

```bash
npm run build
npm run start
```

## Design System

- **Palette** — pulled from the property's own photos: brick terracotta (`#9C4A2E`), warm amber for evening lighting (`#E1A23D`), a deep charcoal "night" tone for dark sections (`#181310`), and cream (`#F6F0E4`). Defined as Tailwind tokens in `tailwind.config.ts`.
- **Type** — [Fraunces](https://fonts.google.com/specimen/Fraunces) (display serif, italic for headings) paired with [Manrope](https://fonts.google.com/specimen/Manrope) (body sans), loaded via `next/font/google` in `app/layout.tsx`.
- **Logo** (`components/Logo.tsx`) — a gateway-arch emblem flanked by two guardian elephant silhouettes, after the villa's own brick entrance and stone elephant statues, paired with the "Driftwood Beach / Resort" wordmark.
- **Motion** — scroll-triggered fade-ups via `components/Reveal.tsx` (IntersectionObserver-based), image zoom on hover for cards, and a navbar that transitions from transparent-on-hero to solid-on-scroll. All motion respects `prefers-reduced-motion`.

## Structure

```
app/
  layout.tsx      Root layout, fonts, metadata
  page.tsx         Assembles all sections
  globals.css       Base styles, eyebrow/reveal/tide-line utilities
components/
  Navbar, Hero, AboutSection, RoomsSection, RoomCard,
  AmenitiesSection, ExperiencesSection, OfferSection (booking links),
  LocationSection, FinalCTA, Footer, Logo, Reveal, TideLine
public/images/    Actual property photos supplied by the owner
```

## Content notes — please review before publishing

- **Contact details are placeholders.** `components/LocationSection.tsx` has "Add your contact number/email here" where the real phone and email should go — I didn't have verified figures to put there.
- **No guest testimonials.** The previous template's testimonials section used invented quotes; I removed it rather than publish fake reviews. Send me real guest quotes (with permission to use them) and I'll add the section back.
- **No specific pricing shown.** Rates aren't listed on the page — the "Check Availability" buttons send guests to your three live listings (MakeMyTrip, Booking.com, Goibibo) in `components/OfferSection.tsx`, so displayed rates always stay current.
- **Only one room type is listed** — "Entire 5-Bedroom Villa" — since that's the only configuration I was given. `components/RoomsSection.tsx` and `RoomCard.tsx` are written to make adding more room types straightforward.
- **Spa and beach-view amenities were removed** per your note that the property doesn't have them, even though the name suggests otherwise.
- Swap or add photos by dropping files into `public/images/` and updating the `src` paths in each component.
