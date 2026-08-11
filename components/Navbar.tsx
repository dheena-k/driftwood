
"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Rooms & Villa", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Experiences", href: "#experiences" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      {/* Header */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 h-16 sm:h-[68px] lg:h-20 transition-all duration-300 ${
          solid
            ? "bg-cream/95 shadow-[0_1px_0_0_rgba(43,36,32,0.08)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-full w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
          aria-label="Primary"
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex shrink-0 items-center"
            aria-label="Driftwood Beach Resort home"
          >
            <Logo
              variant={solid ? "dark" : "light"}
              className="w-[120px] sm:w-[120px] md:w-[135px] lg:w-[145px]"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-5 lg:flex xl:gap-7 2xl:gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`whitespace-nowrap text-xs font-medium tracking-wide transition-colors duration-300 xl:text-sm ${
                    solid
                      ? "text-charcoal hover:text-brick"
                      : "text-cream/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Book Button */}
          <a
            href="#book"
            className={`hidden items-center justify-center rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 lg:inline-flex xl:px-5 xl:py-2.5 xl:text-sm ${
              solid
                ? "bg-brick text-cream hover:bg-brick-light"
                : "bg-amber text-night-deep hover:bg-amber-light"
            }`}
          >
            Book Your Stay
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
              solid
                ? "text-brick hover:bg-brick/10"
                : "text-cream hover:bg-white/10"
            }`}
          >
            {open ? <X size={24} strokeWidth={1.8} /> : <Menu size={24} strokeWidth={1.8} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-night-deep transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        {/* Mobile menu content */}
        <div className="flex min-h-screen flex-col justify-start px-6 pt-16 sm:px-10 sm:pt-20">
          <ul className="flex flex-col gap-4 sm:gap-5">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                style={{
                  transitionDelay: open ? `${i * 50}ms` : "0ms",
                }}
                className={`transition-all duration-500 ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl leading-tight text-cream transition-colors hover:text-amber-light sm:text-3xl"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Book Button */}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-7 inline-flex w-full max-w-[200px] items-center justify-center rounded-full bg-amber px-6 py-3 text-sm font-semibold tracking-wide text-night-deep transition-colors hover:bg-amber-light sm:mt-8"
          >
            Book Now
          </a>
        </div>
      </div>
    </>
  );
}

