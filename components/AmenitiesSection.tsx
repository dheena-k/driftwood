import {
  Waves,
  Sunset,
  Trees,
  UtensilsCrossed,
  Wifi,
  Car,
  Zap,
  ShieldCheck,
} from "lucide-react";
import Reveal from "./Reveal";
import TideLine from "./TideLine";

const AMENITIES = [
  { icon: Waves, label: "Swimming Pool", desc: "A private outdoor pool, lit for evening swims." },
  { icon: Sunset, label: "Rooftop Terrace", desc: "Open-air seating above the villa, best at sundown." },
  { icon: Trees, label: "Garden Courtyard", desc: "A landscaped courtyard set with hand-carved statuary." },
  { icon: UtensilsCrossed, label: "Group Dining", desc: "A long communal table built for shared meals." },
  { icon: Wifi, label: "Free Wi-Fi", desc: "Complimentary connectivity throughout the villa." },
  { icon: Car, label: "Ample Parking", desc: "On-site parking for multiple vehicles." },
  { icon: Zap, label: "Power Backup", desc: "Uninterrupted power for a worry-free stay." },
  { icon: ShieldCheck, label: "24-Hour Security", desc: "On-site caretaking and CCTV-monitored grounds." },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-night py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow eyebrow-light justify-center">Amenities</span>
          <h2 className="mt-5 font-display text-4xl italic text-cream sm:text-5xl">
            Everything You Need to Unwind
          </h2>
          <div className="mt-7">
            <TideLine />
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {AMENITIES.map(({ icon: Icon, label, desc }, i) => (
            <Reveal
              key={label}
              delay={((i % 4) as 0 | 1 | 2 | 3)}
              className="group text-center sm:text-left"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-amber/30 text-amber transition-colors duration-300 group-hover:border-amber group-hover:bg-amber/10 sm:mx-0">
                <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-lg text-cream">{label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/65">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
