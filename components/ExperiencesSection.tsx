import Image from "next/image";
import Reveal from "./Reveal";

const EXPERIENCES = [
  {
    title: "Poolside Evenings",
    desc: "The pool is lit through the evening, making it the natural gathering point once the day cools down.",
    image: "/images/pool-night-wide.jpg",
  },
  {
    title: "Rooftop Terrace",
    desc: "Climb up for open-air seating above the villa rooftops, best enjoyed after sundown.",
    image: "/images/rooftop-terrace.jpg",
  },
  {
    title: "Heritage Courtyard",
    desc: "Hand-carved stone and wood sculpture set throughout the garden, drawn from South Indian temple craft.",
    image: "/images/garden-statues-night.jpg",
  },
  {
    title: "Group Dining",
    desc: "A long open-air table seats the whole group for shared meals and celebrations.",
    image: "/images/dining-alfresco.jpg",
  },
];

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Resort Experiences</span>
          <h2 className="mt-5 font-display text-4xl italic text-brick sm:text-5xl">
            Days Shaped Around You
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {EXPERIENCES.map((exp, i) => (
            <Reveal key={exp.title} delay={(i % 4 as 0 | 1 | 2 | 3)}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-sm sm:aspect-[16/11]">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-deep/85 via-night-deep/10 to-transparent transition-opacity duration-500 group-hover:from-night-deep/95" />

                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                  <h3 className="font-display text-2xl text-cream sm:text-3xl">
                    {exp.title}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-cream/80 opacity-0 transition-all duration-500 ease-out group-hover:mt-3 group-hover:max-h-20 group-hover:opacity-100">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
