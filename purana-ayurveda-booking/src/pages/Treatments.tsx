import { useMemo, useState } from "react";
import { Leaf, Search, Sparkles } from "lucide-react";
import TreatmentCard from "../components/TreatmentCard";
import { treatments } from "../data/treatments";

function Treatments() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Massage",
    "Specialised",
    "Wellness",
    "Beauty & Wellness",
    "Consultation",
  ];

  const filteredTreatments = useMemo(() => {
    return treatments.filter((treatment) => {
      const matchesCategory =
        category === "All" || treatment.category === category;

      const searchTerm = search.toLowerCase();

      const matchesSearch =
        treatment.name.toLowerCase().includes(searchTerm) ||
        treatment.shortDescription.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const featuredTreatments = treatments.filter(
    (treatment) => treatment.featured
  );

  return (
    <div className="bg-[#EFE9C5]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#2F5D39] px-6 pb-20 pt-36 text-white lg:px-8">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#DFC24D]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#C14C38]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#DFC24D]">
              <Leaf size={17} />
              Ayurvedic Wellness
            </div>

            <h1 className="font-serif text-5xl font-semibold leading-tight md:text-6xl">
              Treatments designed
              <br />
              for your wellbeing.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Discover traditional Ayurvedic treatments created to help you
              slow down, reconnect with yourself and restore balance.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                Recommended experiences
              </p>

              <h2 className="mt-2 font-serif text-4xl font-semibold text-[#533E23]">
                Featured treatments
              </h2>
            </div>

            <Sparkles
              size={30}
              className="hidden text-[#DFC24D] sm:block"
            />
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {featuredTreatments.map((treatment) => (
              <TreatmentCard
                key={treatment.id}
                treatment={treatment}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Treatments */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
              Explore our menu
            </p>

            <h2 className="mt-2 font-serif text-4xl font-semibold text-[#533E23]">
              All treatments
            </h2>

            <p className="mt-3 max-w-2xl text-[#533E23]/60">
              Choose from traditional massages, specialised Ayurvedic
              therapies, wellness experiences and consultations.
            </p>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#533E23]/40"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search treatments..."
                className="w-full rounded-full border border-[#533E23]/15 bg-[#EFE9C5]/20 px-5 py-3.5 pl-11 text-sm text-[#533E23] outline-none placeholder:text-[#533E23]/35 focus:border-[#2F5D39]"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  category === item
                    ? "bg-[#2F5D39] text-white"
                    : "bg-[#EFE9C5]/50 text-[#533E23]/65 hover:bg-[#EFE9C5]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Cards */}
          {filteredTreatments.length > 0 ? (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {filteredTreatments.map((treatment) => (
                <TreatmentCard
                  key={treatment.id}
                  treatment={treatment}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-[#533E23]/10 bg-[#EFE9C5]/30 px-6 py-16 text-center">
              <p className="font-serif text-2xl text-[#533E23]">
                No treatments found
              </p>

              <p className="mt-2 text-sm text-[#533E23]/55">
                Try another search or category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#533E23] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DFC24D]">
            Not sure what to choose?
          </p>

          <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
            Start with a consultation.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/65">
            Speak with our Ayurvedic team about your wellness goals and find
            an experience suited to your individual needs.
          </p>

          <a
            href="/consultation"
            className="mt-8 inline-flex rounded-full bg-[#C14C38] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#A83F30]"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}

export default Treatments;