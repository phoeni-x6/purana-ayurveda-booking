import { ArrowRight, BriefcaseBusiness, Languages } from "lucide-react";
import type { Therapist } from "../data/therapists";

type TherapistCardProps = {
  therapist: Therapist;
};

function TherapistCard({ therapist }: TherapistCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={therapist.image}
          alt={therapist.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#533E23]/80 via-transparent to-transparent" />

        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#DFC24D]">
            {therapist.role}
          </p>

          <h3 className="mt-1 font-serif text-2xl font-semibold text-white">
            {therapist.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#EFE9C5]/50 p-4">
            <BriefcaseBusiness
              size={17}
              className="text-[#2F5D39]"
            />

            <p className="mt-2 text-xs uppercase tracking-wide text-[#533E23]/40">
              Experience
            </p>

            <p className="mt-1 text-sm font-semibold text-[#533E23]">
              {therapist.experience}
            </p>
          </div>

          <div className="rounded-2xl bg-[#EFE9C5]/50 p-4">
            <Languages
              size={17}
              className="text-[#2F5D39]"
            />

            <p className="mt-2 text-xs uppercase tracking-wide text-[#533E23]/40">
              Languages
            </p>

            <p className="mt-1 text-sm font-semibold text-[#533E23]">
              {therapist.languages.join(", ")}
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-6 text-[#533E23]/60">
          {therapist.bio}
        </p>

        {/* Specializations */}
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#533E23]/40">
            Specializations
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {therapist.specialization.map((item) => (
              <span
                key={item}
                className="rounded-full bg-[#F7F3E2] px-3 py-1.5 text-xs font-medium text-[#533E23]/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Action */}
        <button
          type="button"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C14C38] transition hover:text-[#A83F30]"
        >
          View therapist
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </article>
  );
}

export default TherapistCard;