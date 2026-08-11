import Reveal from "./Reveal";
import RoomCard, { Room } from "./RoomCard";

const ROOMS: Room[] = [
  {
    name: "Entire 5-Bedroom Villa",
    image: "/images/dining-long-table.jpg",
    description:
      "The whole brick villa, or a single room within it — every stay shares access to the pool, rooftop terrace, courtyard, and long communal dining table.",
    guests: "Sleeps 3 per room",
    bed: "1 King Bed + 1 Sofa Cum Bed",
    note: "Shown: 1-bedroom booking. Ask us about reserving multiple rooms or the full 5-bedroom villa for larger groups.",
  },
];

export default function RoomsSection() {
  return (
    <section id="rooms" className="bg-cream-soft py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Rooms &amp; Villa</span>
          <h2 className="mt-5 font-display text-4xl italic text-brick sm:text-5xl">
            Stay in Comfort &amp; Space
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-charcoal-soft sm:text-base">
            One villa, five bedrooms, and every shared space built for a
            group that wants to stay together.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 max-w-4xl">
          {ROOMS.map((room) => (
            <Reveal key={room.name}>
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
