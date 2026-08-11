"use client";

import { Instagram, Facebook, Twitter, Send } from "lucide-react";
import Logo from "./Logo";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact", href: "#location" },
];

const ROOM_LINKS = [
  { label: "Entire 5-Bedroom Villa", href: "#rooms" },
  { label: "Check Availability", href: "#book" },
];

const EXPERIENCE_LINKS = [
  { label: "Poolside Evenings", href: "#experiences" },
  { label: "Rooftop Terrace", href: "#experiences" },
  { label: "Heritage Courtyard", href: "#experiences" },
];

export default function Footer() {
  return (
    <footer className="bg-night-deep text-cream/80">
      <div className="mx-auto max-w-8xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              A five-bedroom brick villa in Paramankeni, Cheyyur &mdash;
              pool, rooftop terrace, and courtyard, built for groups.
            </p>
            <div className="mt-6 flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Follow us on social media"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors duration-300 hover:border-amber hover:text-amber"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-base text-cream">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-cream/60 transition-colors hover:text-amber">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base text-cream">Villa</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {ROOM_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-cream/60 transition-colors hover:text-amber">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-display text-base text-cream">Experiences</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {EXPERIENCE_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-cream/60 transition-colors hover:text-amber">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base text-cream">Stay in Touch</h3>
            <p className="mt-5 text-sm leading-relaxed text-cream/60">
              Offers and updates from the villa, occasionally in your inbox.
            </p>
            <form
              className="mt-5 flex items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-full border border-cream/20 bg-transparent px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-amber focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber text-night-deep transition-colors hover:bg-amber-light"
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/45 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Driftwood Beach Resort. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-amber">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-amber">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
