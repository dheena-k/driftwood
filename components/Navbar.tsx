
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
      setScrolled(window.scrollY > 50);
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
        className={`fixed left-0 right-0 top-0 z-50
          h-[80px]
          sm:h-[90px]
          md:h-[100px]
          lg:h-[110px]
          xl:h-[115px]
          transition-all duration-300 ${
            solid
              ? "bg-cream/95 shadow-[0_1px_0_0_rgba(43,36,32,0.08)] backdrop-blur-md"
              : "bg-transparent"
          }`}
      >
        <nav
          className="mx-auto flex h-full w-full max-w-[1600px] items-center justify-between
            px-4
            sm:px-6
            md:px-8
            lg:px-10
            xl:px-12
            2xl:px-16"
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
              className="
                w-[125px]
                sm:w-[145px]
                md:w-[165px]
                lg:w-[185px]
                xl:w-[205px]
              "
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-5 lg:flex xl:gap-7 2xl:gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`whitespace-nowrap text-sm font-medium tracking-wide transition-colors duration-300 ${
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
            className={`hidden items-center justify-center rounded-full
              px-5 py-2.5
              xl:px-6 xl:py-3
              text-sm font-semibold tracking-wide
              transition-all duration-300
              lg:inline-flex ${
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
            className={`flex
              h-11 w-11
              sm:h-12 sm:w-12
              items-center justify-center
              rounded-full
              transition-colors
              lg:hidden ${
                solid
                  ? "text-brick hover:bg-brick/10"
                  : "text-cream hover:bg-white/10"
              }`}
          >
            {open ? (
              <X size={27} strokeWidth={1.8} />
            ) : (
              <Menu size={27} strokeWidth={1.8} />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[rgb(111_85_66_/_90%)] transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div
          className="
            flex min-h-[60vh] flex-col justify-[space-evenly] px-6 sm:px-10 md:px-14 pt-20 
            
          "
        >
          <ul className="mt-8 flex flex-col gap-5 sm:gap-6 md:gap-7">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                style={{
                  transitionDelay: open ? `${i * 60}ms` : "0ms",
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
                  className="
                    font-display
                    text-2xl
                    leading-tight
                    text-cream
                    transition-colors
                    hover:text-amber-light
                    sm:text-3xl
                    md:text-4xl
                  "
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
            className="
              mt-9
              inline-flex
              w-full
              max-w-[220px]
              items-center
              justify-center
              rounded-full
              bg-amber
              px-7
              py-3.5
              text-sm
              font-semibold
              tracking-wide
              text-night-deep
              transition-colors
              hover:bg-amber-light
              sm:mt-10
            "
          >
            Book Now
          </a>
        </div>
      </div>
    </>
  );
}

