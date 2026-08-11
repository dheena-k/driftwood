import Image from "next/image";
import Reveal from "./Reveal";

const STATS = [
  { value: "5", label: "Bedrooms in the Villa" },
  { value: "3", label: "Guests per Room" },
  { value: "24/7", label: "On-Site Caretaking" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-12">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-soft">
            <Image
              src="/images/entrance-elephants.jpg"
              alt="Brick entrance of Driftwood Beach Resort flanked by carved stone elephant statues"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-6 hidden aspect-[4/3] w-56 overflow-hidden rounded-sm border-8 border-cream shadow-soft sm:block lg:-right-10">
            <Image
              src="/images/courtyard-hallway.jpg"
              alt="Skylit brick courtyard inside Driftwood Beach Resort"
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={1} className="lg:pl-8">
          <span className="eyebrow">About Our Resort</span>
          <h2 className="mt-5 font-display text-4xl italic leading-tight text-brick sm:text-5xl">
            Where Heritage Meets Comfort
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-charcoal-soft sm:text-base">
            <p>
              Driftwood Beach Resort is a hand-built brick villa in
              Paramankeni, just off the ECR near Cheyyur &mdash; raised
              stairway, carved elephant guardians, and a sky-lit courtyard
              greet you before you&apos;ve even set your bags down.
            </p>
            <p>
              Inside, the villa opens onto a private pool, a rooftop terrace,
              and a garden dotted with hand-carved stone and wood sculpture
              &mdash; details drawn from South Indian temple architecture and
              reworked for a relaxed, modern stay.
            </p>
            <p>
              With five bedrooms and a long communal dining table, it&apos;s
              built for groups &mdash; a family reunion, a milestone
              birthday, or a weekend with old friends.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-brick/10 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl text-brick sm:text-4xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs leading-snug text-charcoal-soft sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="#experiences"
            className="mt-10 inline-flex items-center gap-3 border-b border-brick pb-1 text-sm font-semibold tracking-wide text-brick transition-colors hover:border-amber hover:text-amber-deep"
          >
            Discover More
          </a>
        </Reveal>
      </div>
    </section>
  );
}
