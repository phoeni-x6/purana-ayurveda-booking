import {
  Check,
  MapPin,
  Navigation,
  Sparkles,
} from "lucide-react";
import { locations } from "../data/locations";

function LocationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F3E2] px-6 py-24 lg:px-8">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#DFC24D]/10 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#2F5D39]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#C14C38]/8 px-4 py-2">
            <MapPin size={15} className="text-[#C14C38]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C14C38]">
              Our Locations
            </span>
          </div>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#533E23] md:text-5xl">
            Wellness spaces designed
            <span className="text-[#2F5D39]"> around you.</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-[#533E23]/60 md:text-lg">
            Discover the spaces where our Ayurvedic treatments and wellness
            experiences take place.
          </p>
        </div>

        {/* Location cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {locations.map((location) => (
            <article
              key={location.id}
              className="group overflow-hidden rounded-[2rem] border border-[#533E23]/10 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#533E23]/70 via-transparent to-transparent" />

                {/* Location type */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#533E23] shadow-sm backdrop-blur-md">
                  <MapPin size={14} className="text-[#C14C38]" />
                  {location.type}
                </div>

                {/* Location name */}
                <div className="absolute bottom-5 left-6 right-6">
                  <h3 className="font-serif text-2xl font-semibold text-white">
                    {location.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2F5D39]/10 text-[#2F5D39]">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#533E23]/40">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#533E23]">
                      {location.address}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-6 text-sm leading-7 text-[#533E23]/60">
                  {location.description}
                </p>

                {/* Services */}
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#533E23]/50">
                    Available Services
                  </p>

                  <div className="mt-3 space-y-2">
                    {location.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-2 text-sm text-[#533E23]/70"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2F5D39]/10">
                          <Check
                            size={12}
                            className="text-[#2F5D39]"
                          />
                        </span>

                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location indicator */}
                <div className="mt-7 flex items-center gap-2 border-t border-[#533E23]/10 pt-5 text-xs font-medium text-[#2F5D39]">
                  <Navigation size={14} />

                  Purana Ayurveda Wellness
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom information */}
        <div className="mt-14 overflow-hidden rounded-[2rem] bg-[#2F5D39]">
          <div className="grid items-center gap-8 px-8 py-10 md:grid-cols-[1fr_auto] md:px-12">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles size={17} className="text-[#DFC24D]" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DFC24D]">
                  A peaceful setting
                </span>
              </div>

              <h3 className="mt-3 max-w-2xl font-serif text-2xl font-semibold text-white md:text-3xl">
                Every treatment begins with the right environment.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
                From our dedicated treatment spaces to private chalet
                experiences, we aim to create a calm environment where you
                can slow down, reconnect and focus on your wellbeing.
              </p>
            </div>

            <div className="hidden h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/5 md:flex">
              <MapPin size={30} className="text-[#DFC24D]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationsSection;