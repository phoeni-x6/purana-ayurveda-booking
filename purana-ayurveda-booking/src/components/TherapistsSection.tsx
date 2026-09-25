import {
  Check,
  Clock3,
  Languages,
  Sparkles,
} from "lucide-react";
import { therapists } from "../data/therapists";

function TherapistsSection() {
  return (
    <section className="relative overflow-hidden bg-[#EFE9C5] px-6 py-24 lg:px-8">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#2F5D39]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#DFC24D]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#2F5D39]/8 px-4 py-2">
            <Sparkles size={15} className="text-[#2F5D39]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2F5D39]">
              Our Therapists
            </span>
          </div>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#533E23] md:text-5xl">
            Meet the people behind
            <span className="text-[#2F5D39]"> your wellness journey.</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-[#533E23]/60 md:text-lg">
            Our experienced therapists combine traditional Ayurvedic
            knowledge with a caring and personalised approach to every
            treatment.
          </p>
        </div>

        {/* Therapist cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {therapists.map((therapist) => (
            <article
              key={therapist.id}
              className="group overflow-hidden rounded-[2rem] border border-[#533E23]/8 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-[380px] overflow-hidden">
                <img
                  src={therapist.image}
                  alt={therapist.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#533E23]/75 via-transparent to-transparent" />

                {/* Experience */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#533E23] shadow-sm backdrop-blur-md">
                  <Clock3 size={14} className="text-[#C14C38]" />
                  {therapist.experience}
                </div>

                {/* Name */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#DFC24D]">
                    {therapist.role}
                  </p>

                  <h3 className="mt-2 font-serif text-3xl font-semibold">
                    {therapist.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="text-sm leading-7 text-[#533E23]/60">
                  {therapist.bio}
                </p>

                {/* Languages */}
                <div className="mt-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#533E23]/50">
                    <Languages size={15} className="text-[#2F5D39]" />
                    Languages
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {therapist.languages.map((language) => (
                      <span
                        key={language}
                        className="rounded-full bg-[#EFE9C5] px-3 py-1.5 text-xs font-medium text-[#533E23]"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Treatments */}
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#533E23]/50">
                    Specialised Treatments
                  </p>

                  <div className="mt-3 space-y-2">
                    {therapist.specialization.map((treatment) => (
                      <div
                        key={treatment}
                        className="flex items-center gap-2 text-sm text-[#533E23]/70"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2F5D39]/10">
                          <Check size={12} className="text-[#2F5D39]" />
                        </span>

                        {treatment}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-[#533E23]/10 bg-white/60 p-7 text-center backdrop-blur-sm">
          <p className="font-serif text-xl text-[#533E23] md:text-2xl">
            Not sure which therapist is right for you?
          </p>

          <p className="mt-2 text-sm leading-6 text-[#533E23]/55">
            Our team can help you choose a therapist based on your treatment,
            preferences and availability.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TherapistsSection;