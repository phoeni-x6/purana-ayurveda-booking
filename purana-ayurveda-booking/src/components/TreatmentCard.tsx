import { ArrowRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import type { Treatment } from "../data/treatments";

type TreatmentCardProps = {
  treatment: Treatment;
};

function TreatmentCard({ treatment }: TreatmentCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={treatment.image}
          alt={treatment.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#533E23] backdrop-blur-sm">
          {treatment.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl font-semibold text-[#533E23]">
            {treatment.name}
          </h3>

          <span className="whitespace-nowrap text-sm font-semibold text-[#2F5D39]">
            {treatment.priceLabel}
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-[#533E23]/60">
          {treatment.shortDescription}
        </p>

        <div className="mt-5 flex items-center gap-2 text-sm text-[#533E23]/55">
          <Clock3 size={16} />
          {treatment.duration} minutes
        </div>

        <Link
          to={`/booking?service=${treatment.id}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C14C38] transition hover:text-[#A83F30]"
        >
          Book this treatment
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}

export default TreatmentCard;