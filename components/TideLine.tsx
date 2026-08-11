"use client";

import { useEffect, useRef } from "react";

interface TideLineProps {
  className?: string;
  color?: string;
}

/**
 * The resort's signature mark: a single hairline wave, drawn from shore to
 * shore as it enters view. Used between sections in place of a generic
 * divider, a small nod to the resort's name rather than a literal shoreline.
 */
export default function TideLine({ className = "", color = "#E1A23D" }: TideLineProps) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={`tide-line mx-auto ${className}`}
      width="160"
      height="16"
      viewBox="0 0 160 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 8C14 -1 22 17 36 8C50 -1 58 17 72 8C86 -1 94 17 108 8C122 -1 130 17 144 8C151 4 155 4 159 8"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}
