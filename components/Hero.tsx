import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative flex h-[100svh] min-h-[560px] w-full items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-new.jpg"
        alt="Driftwood Beach Resort's brick villa lit up at twilight"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night-deep/75 via-night-deep/40 to-night-deep/85" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <span className="eyebrow eyebrow-light animate-fade-up [animation-delay:0.1s] opacity-0">
          Welcome to Driftwood Beach Resort
        </span>

        <h1 className="mt-6 animate-fade-up font-display text-5xl italic leading-[1.05] text-cream opacity-0 [animation-delay:0.3s] sm:text-6xl md:text-7xl">
          Your Private
          <br />
          <span className="not-italic">Villa Getaway</span>
        </h1>

        <p className="mt-7 max-w-xl animate-fade-up text-base leading-relaxed text-cream/85 opacity-0 [animation-delay:0.5s] sm:text-lg">
          Set amid brick courtyards and quiet gardens off the ECR, Driftwood
          Beach Resort is a five-bedroom villa in Paramankeni, Cheyyur &mdash;
          built for family gatherings, celebrations, and slow weekends
          together.
        </p>

        <div className="mt-10 flex animate-fade-up flex-col gap-4 opacity-0 [animation-delay:0.7s] sm:flex-row">
          <a
            href="#rooms"
            className="rounded-full bg-amber px-9 py-3.5 text-sm font-semibold tracking-wide text-night-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-light hover:shadow-lg"
          >
            View Room Details
          </a>
          <a
            href="#about"
            className="rounded-full border border-cream/50 px-9 py-3.5 text-sm font-semibold tracking-wide text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-cream hover:bg-cream/10"
          >
            Discover the Resort
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to learn more"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 animate-drift flex-col items-center gap-2 text-cream/80"
      >
        <span className="text-[11px] uppercase tracking-widest2">Scroll</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
