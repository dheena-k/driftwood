import Image from "next/image";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";

export default function LocationSection() {
  return (
    <section id="location" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-12">
        <Reveal>
          <span className="eyebrow">Find Us</span>
          <h2 className="mt-5 font-display text-4xl italic text-brick sm:text-5xl">
            Visit Driftwood Beach Resort
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal-soft sm:text-base">
            Located in Paramankeni village, off the East Coast Road (ECR)
            near Cheyyur, Chengalpattu district, Tamil Nadu &mdash; roughly
            an hour and a half south of Chennai.
          </p>

          <ul className="mt-9 space-y-6">
            <li className="flex items-start gap-4">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brick/5 text-brick">
                <MapPin size={18} />
              </span>
              <div>
                <div className="text-sm font-semibold text-brick">Address</div>
                <div className="text-sm text-charcoal-soft">
                  Paramankeni Village, ECR, Cheyyur Taluk,
                  <br />
                  Chengalpattu District, Tamil Nadu
                </div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brick/5 text-brick">
                <Phone size={18} />
              </span>
              <div>
                <div className="text-sm font-semibold text-brick">Phone</div>
                <div className="text-sm text-charcoal-soft">Add your contact number here</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brick/5 text-brick">
                <Mail size={18} />
              </span>
              <div>
                <div className="text-sm font-semibold text-brick">Email</div>
                <div className="text-sm text-charcoal-soft">Add your contact email here</div>
              </div>
            </li>
          </ul>

          <a
            href="#book"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-brick px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-brick-light"
          >
            Check Availability
            <ExternalLink size={16} />
          </a>
        </Reveal>

        <Reveal delay={1} className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-soft">
          <Image
            src="/images/exterior-twilight.jpg"
            alt="Driftwood Beach Resort villa exterior"
            fill
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="object-cover"
          />
          <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-cream/95 px-5 py-2.5 text-xs font-semibold tracking-wide text-brick shadow-card">
            <MapPin size={14} className="text-amber-deep" />
            Paramankeni, Cheyyur
          </div>
        </Reveal>
      </div>
    </section>
  );
}
