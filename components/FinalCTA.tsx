import Image from "next/image";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="relative flex h-[70vh] min-h-[440px] items-center justify-center overflow-hidden">
      <Image
        src="/images/garden-pool-night.jpg"
        alt="Driftwood Beach Resort's pool and garden lit up at night"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-night-deep/60" />

      <Reveal className="relative px-6 text-center">
        <h2 className="font-display text-4xl italic text-cream sm:text-5xl md:text-6xl">
          Your Getaway Awaits
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream/85">
          Gather your people and take over the villa for the weekend.
        </p>
        <a
          href="#book"
          className="mt-9 inline-flex rounded-full bg-amber px-10 py-4 text-sm font-semibold tracking-wide text-night-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-light hover:shadow-lg"
        >
          Check Availability
        </a>
      </Reveal>
    </section>
  );
}
