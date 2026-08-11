import Image from "next/image";
import { Users, BedDouble, ArrowUpRight } from "lucide-react";

export interface Room {
  name: string;
  image: string;
  description: string;
  guests: string;
  bed: string;
  note?: string;
}

export default function RoomCard({ room }: { room: Room }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm bg-white shadow-card transition-shadow duration-500 hover:shadow-soft sm:flex-row">
      <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto sm:w-2/5">
        <Image
          src={room.image}
          alt={room.name}
          fill
          sizes="(max-width: 640px) 100vw, 40vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-9">
        <h3 className="font-display text-2xl text-brick sm:text-3xl">{room.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal-soft sm:text-base">
          {room.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-brick/10 pt-6 text-xs text-charcoal-soft sm:text-sm">
          <span className="flex items-center gap-1.5">
            <Users size={16} className="text-amber-deep" aria-hidden="true" />
            {room.guests}
          </span>
          <span className="flex items-center gap-1.5">
            <BedDouble size={16} className="text-amber-deep" aria-hidden="true" />
            {room.bed}
          </span>
        </div>

        {room.note && (
          <p className="mt-4 text-xs italic text-charcoal-soft/80">{room.note}</p>
        )}

        <a
          href="#book"
          className="group/btn mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-brick px-6 py-3 text-sm font-semibold tracking-wide text-brick transition-all duration-300 hover:bg-brick hover:text-cream"
        >
          Check Availability
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}
