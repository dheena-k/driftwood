import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Reveal from "./Reveal";

const BOOKING_PARTNERS = [
  {
    name: "MakeMyTrip",
    href: "https://www.makemytrip.com/hotels/driftwood_beach_resort-details-cheyyur.html",
  },
  {
    name: "Booking.com",
    href: "https://www.booking.com/hotel/in/driftwood-beach-resort-paramankeni.html",
  },
  {
    name: "Goibibo",
    href: "https://www.goibibo.com/hotels/rooms-of-driftwood-beach-resort-hotel-in-cheyyur-202607221038141921/",
  },
];

export default function OfferSection() {
  return (
    <section id="book" className="relative overflow-hidden py-28 sm:py-36">
      <Image
        src="/images/pool-night-close.jpg"
        alt="Driftwood Beach Resort's lit pool in the evening"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-night-deep/72" />

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
        <Reveal>
          <span className="eyebrow eyebrow-light justify-center">Reserve Your Stay</span>
          <h2 className="mt-5 font-display text-4xl italic text-cream sm:text-5xl">
            Check Availability &amp; Book
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-cream/85">
            Driftwood Beach Resort is listed with the following travel
            partners &mdash; book directly through whichever you trust for
            live rates and availability.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {BOOKING_PARTNERS.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-8 py-3.5 text-sm font-semibold tracking-wide text-night-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-light hover:shadow-lg sm:w-auto"
              >
                {partner.name}
                <ExternalLink size={15} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
