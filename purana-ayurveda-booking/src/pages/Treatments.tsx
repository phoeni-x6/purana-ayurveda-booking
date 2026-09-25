import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  Leaf,
  MapPin,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

import TherapistCard from "../components/TherapistCard";
import { therapists } from "../data/therapists";

import TreatmentCard from "../components/TreatmentCard";
import { treatments } from "../data/treatments";
import { locations } from "../data/locations";

function Treatments() {
  const [selectedLocation, setSelectedLocation] = useState(
    locations[0]?.id ?? ""
  );

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

  /*
   * Get the currently selected location
   */
  const activeLocation = useMemo(() => {
    return locations.find(
      (location) => location.id === selectedLocation
    );
  }, [selectedLocation]);

  /*
   * Get treatments available at the selected location
   */
  const locationTreatments = useMemo(() => {
    if (!activeLocation) {
      return [];
    }

    return treatments.filter((treatment) =>
      activeLocation.treatmentIds.includes(treatment.id)
    );
  }, [activeLocation]);

  /*
   * Get therapists available at the selected location
   */
  const locationTherapists = useMemo(() => {
    if (!activeLocation) {
      return [];
    }

    return therapists.filter((therapist) =>
      therapist.locationIds.includes(activeLocation.id)
    );
  }, [activeLocation]);

  /*
   * Filter treatments by category and search
   */
  const filteredTreatments = useMemo(() => {
    const searchTerm = search.toLowerCase().trim();

    return locationTreatments.filter((treatment) => {
      const matchesCategory =
        category === "All" || treatment.category === category;

      const matchesSearch =
        treatment.name.toLowerCase().includes(searchTerm) ||
        treatment.shortDescription
          .toLowerCase()
          .includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [locationTreatments, category, search]);

  /*
   * Change location and reset filters
   */
  const handleLocationChange = (locationId: string) => {
    setSelectedLocation(locationId);
    setCategory("All");
    setSearch("");
  };

  return (
    <div className="bg-[#EFE9C5]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#2F5D39] px-6 pb-24 pt-36 text-white lg:px-8">

        {/* Decorative circles */}
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
              Choose your preferred location and discover the Ayurvedic
              treatments and therapists available there.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          LOCATION SELECTION
      ====================================================== */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
              Choose your location
            </p>

            <h2 className="mt-2 font-serif text-4xl font-semibold text-[#533E23] md:text-5xl">
              Where would you like to be treated?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-[#533E23]/60">
              Select a location to discover the treatments and wellness
              professionals available at that space.
            </p>
          </div>


          {/* Location Cards */}
          <div className="grid gap-7 md:grid-cols-3">
            {locations.map((location) => {
              const isSelected =
                selectedLocation === location.id;

              const availableCount = treatments.filter(
                (treatment) =>
                  location.treatmentIds.includes(treatment.id)
              ).length;

              const therapistCount = therapists.filter(
                (therapist) =>
                  therapist.locationIds.includes(location.id)
              ).length;

              return (
                <button
                  key={location.id}
                  type="button"
                  onClick={() =>
                    handleLocationChange(location.id)
                  }
                  className={`group overflow-hidden rounded-[2rem] text-left transition duration-300 ${
                    isSelected
                      ? "bg-[#2F5D39] shadow-xl ring-2 ring-[#DFC24D]"
                      : "bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg"
                  }`}
                >

                  {/* Image */}
                  <div className="relative h-60 overflow-hidden">

                    <img
                      src={location.image}
                      alt={location.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#533E23]/75 via-transparent to-transparent" />

                    {/* Selected */}
                    {isSelected && (
                      <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-[#DFC24D] px-4 py-2 text-xs font-bold text-[#533E23]">
                        <Check size={14} />
                        Selected
                      </div>
                    )}

                    {/* Location name */}
                    <div className="absolute bottom-5 left-5 right-5">

                      <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[#DFC24D]">
                        <MapPin size={14} />
                        {location.type}
                      </div>

                      <h3 className="font-serif text-2xl font-semibold text-white">
                        {location.name}
                      </h3>

                    </div>
                  </div>


                  {/* Card content */}
                  <div
                    className={`p-6 ${
                      isSelected
                        ? "text-white"
                        : "text-[#533E23]"
                    }`}
                  >

                    <div
                      className={`flex items-center gap-2 text-sm ${
                        isSelected
                          ? "text-white/70"
                          : "text-[#533E23]/50"
                      }`}
                    >
                      <MapPin size={15} />
                      {location.address}
                    </div>

                    <p
                      className={`mt-4 text-sm leading-6 ${
                        isSelected
                          ? "text-white/65"
                          : "text-[#533E23]/60"
                      }`}
                    >
                      {location.description}
                    </p>


                    {/* Counts */}
                    <div className="mt-5 flex flex-wrap gap-3">

                      <div
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                          isSelected
                            ? "bg-white/10 text-[#DFC24D]"
                            : "bg-[#EFE9C5]/60 text-[#2F5D39]"
                        }`}
                      >
                        {availableCount} treatments
                      </div>

                      <div
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                          isSelected
                            ? "bg-white/10 text-[#DFC24D]"
                            : "bg-[#EFE9C5]/60 text-[#2F5D39]"
                        }`}
                      >
                        {therapistCount} therapists
                      </div>

                    </div>

                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </section>


      {/* =====================================================
          SELECTED LOCATION
      ====================================================== */}
      {activeLocation && (
        <section className="bg-white px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">

            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

              <div>

                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#C14C38]">
                  <MapPin size={16} />
                  Selected Location
                </div>

                <h2 className="mt-3 font-serif text-4xl font-semibold text-[#533E23]">
                  {activeLocation.name}
                </h2>

                <div className="mt-3 flex items-center gap-2 text-sm text-[#533E23]/50">
                  <MapPin size={15} />
                  {activeLocation.address}
                </div>

              </div>


              {/* Statistics */}
              <div className="flex gap-3">

                <div className="rounded-2xl bg-[#EFE9C5]/50 px-6 py-4">
                  <p className="text-xs uppercase tracking-wide text-[#533E23]/40">
                    Treatments
                  </p>

                  <p className="mt-1 font-serif text-3xl font-semibold text-[#2F5D39]">
                    {locationTreatments.length}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#EFE9C5]/50 px-6 py-4">
                  <p className="text-xs uppercase tracking-wide text-[#533E23]/40">
                    Therapists
                  </p>

                  <p className="mt-1 font-serif text-3xl font-semibold text-[#2F5D39]">
                    {locationTherapists.length}
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>
      )}


      {/* =====================================================
          TREATMENTS
      ====================================================== */}
      <section className="bg-[#F7F3E2] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-10">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
              Treatment menu
            </p>

            <h2 className="mt-2 font-serif text-4xl font-semibold text-[#533E23]">
              Available treatments
            </h2>

            <p className="mt-3 max-w-2xl text-[#533E23]/60">
              Explore the treatments available at{" "}
              <span className="font-semibold text-[#533E23]">
                {activeLocation?.name}
              </span>
              .
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
                className="w-full rounded-full border border-[#533E23]/15 bg-white px-5 py-3.5 pl-11 text-sm text-[#533E23] outline-none placeholder:text-[#533E23]/35 focus:border-[#2F5D39]"
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
                    : "bg-white text-[#533E23]/65 hover:bg-[#EFE9C5]"
                }`}
              >
                {item}
              </button>
            ))}

          </div>


          {/* Result count */}
          <div className="mb-6 flex items-center justify-between">

            <p className="text-sm text-[#533E23]/50">
              Showing{" "}
              <span className="font-semibold text-[#533E23]">
                {filteredTreatments.length}
              </span>{" "}
              treatments
            </p>

            {(search || category !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="text-sm font-semibold text-[#C14C38] transition hover:text-[#A83F30]"
              >
                Clear filters
              </button>
            )}

          </div>


          {/* Treatment cards */}
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

            <div className="rounded-3xl border border-[#533E23]/10 bg-white px-6 py-16 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EFE9C5] text-[#2F5D39]">
                <Search size={22} />
              </div>

              <p className="mt-5 font-serif text-2xl text-[#533E23]">
                No treatments found
              </p>

              <p className="mt-2 text-sm text-[#533E23]/55">
                Try another search or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-5 rounded-full bg-[#2F5D39] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#244A2D]"
              >
                Show all treatments
              </button>

            </div>

          )}

        </div>
      </section>


      {/* =====================================================
          THERAPISTS
      ====================================================== */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div>

              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                <Leaf size={17} />
                Your wellness team
              </div>

              <h2 className="mt-3 font-serif text-4xl font-semibold text-[#533E23] md:text-5xl">
                Meet your therapists.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[#533E23]/60">
                Get to know the wellness professionals available at{" "}
                <span className="font-semibold text-[#533E23]">
                  {activeLocation?.name}
                </span>
                .
              </p>

            </div>


            {/* Therapist count */}
            <div className="rounded-2xl bg-[#EFE9C5]/60 px-5 py-4">

              <p className="text-xs uppercase tracking-[0.12em] text-[#533E23]/40">
                Available at this location
              </p>

              <p className="mt-1 font-serif text-3xl font-semibold text-[#2F5D39]">
                {locationTherapists.length}
              </p>

            </div>

          </div>


          {/* Therapist Cards */}
          {locationTherapists.length > 0 ? (

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {locationTherapists.map((therapist) => (
                <TherapistCard
                  key={therapist.id}
                  therapist={therapist}
                />
              ))}

            </div>

          ) : (

            <div className="rounded-[2rem] bg-[#F7F3E2] px-6 py-16 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EFE9C5] text-[#2F5D39]">
                <Leaf size={22} />
              </div>

              <h3 className="mt-5 font-serif text-2xl text-[#533E23]">
                Therapist information coming soon
              </h3>

              <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-[#533E23]/55">
                Our therapist information for this location will be
                available soon.
              </p>

            </div>

          )}

        </div>
      </section>


      {/* =====================================================
          LOCATION INFORMATION
      ====================================================== */}
      {activeLocation && (
        <section className="bg-[#EFE9C5] px-6 py-20 lg:px-8">

          <div className="mx-auto max-w-5xl">

            <div className="rounded-[2rem] bg-[#2F5D39] p-8 text-white md:p-12">

              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                <div className="max-w-2xl">

                  <div className="flex items-center gap-2 text-[#DFC24D]">
                    <MapPin size={17} />

                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                      Treatment Location
                    </span>
                  </div>

                  <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
                    {activeLocation.name}
                  </h2>

                  <p className="mt-2 text-sm text-white/50">
                    {activeLocation.address}
                  </p>

                  <p className="mt-5 leading-7 text-white/65">
                    {activeLocation.description}
                  </p>

                </div>


                <div className="shrink-0">

                  <Link
                    to="/booking"
                    className="inline-flex items-center gap-2 rounded-full bg-[#C14C38] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#A83F30]"
                  >
                    Book a Treatment

                    <ArrowRight size={17} />
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>
      )}


      {/* =====================================================
          CONSULTATION CTA
      ====================================================== */}
      <section className="bg-[#533E23] px-6 py-20 text-white lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DFC24D]">
            Not sure what to choose?
          </p>

          <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
            Start with a consultation.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/65">
            Speak with our Ayurvedic team about your wellness goals
            and find an experience suited to your individual needs.
          </p>

          <Link
            to="/consultation"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C14C38] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#A83F30]"
          >
            Book a Consultation

            <ArrowRight size={17} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Treatments;