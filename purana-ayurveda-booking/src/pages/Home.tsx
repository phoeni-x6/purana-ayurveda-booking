import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Leaf,
  MapPin,
  Search,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

import AppPromotion from "../components/AppPromotion";
import PodcastPromotion from "../components/PodcastPromotion";
import TherapistsSection from "../components/TherapistsSection";
import LocationsSection from "../components/LocationsSection";

const treatments = [
  {
    title: "Ayurvedic Massage",
    description:
      "A deeply relaxing traditional treatment designed to calm the body and restore balance.",
    duration: "60 min",
    price: "From €45",
    icon: "🌿",
  },
  {
    title: "Abhyanga",
    description:
      "A warm herbal oil massage that supports relaxation, circulation and overall wellbeing.",
    duration: "75 min",
    price: "From €65",
    icon: "🪷",
  },
  {
    title: "Shirodhara",
    description:
      "A soothing Ayurvedic therapy using a continuous stream of warm oil to encourage deep relaxation.",
    duration: "60 min",
    price: "From €70",
    icon: "✨",
  },
];

const packages = [
  {
    title: "Ayurveda Wellness Retreat",
    description:
      "A complete wellness experience combining treatments, consultation and personalised care.",
    duration: "7 Days",
    price: "From €890",
  },
  {
    title: "Ayurveda Long Stay",
    description:
      "A longer journey focused on relaxation, balance and traditional Ayurvedic treatments.",
    duration: "14 Days",
    price: "From €1,650",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-[#EFE9C5] text-[#533E23]">
      {/* Hero */}
      <section className="relative min-h-[720px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2200&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-[#2F5D39]/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#2F5D39]/90 via-[#2F5D39]/60 to-transparent" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 pb-20 pt-36 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-[#DFC24D]">
              <span className="h-px w-10 bg-[#DFC24D]" />
              Authentic Ayurveda
            </div>

            <h1 className="font-serif text-5xl leading-[1.08] text-white sm:text-6xl lg:text-7xl">
              Restore your
              <span className="block text-[#DFC24D]">
                natural balance.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              Discover traditional Ayurvedic treatments and personalised
              wellness experiences designed to bring balance to body, mind and
              spirit.
            </p>

           <div className="mt-9 flex flex-col gap-4 sm:flex-row">
  <Link
    to="/booking"
    className="flex items-center justify-center gap-2 rounded-full bg-[#C14C38] px-7 py-4 font-medium text-white transition hover:bg-[#A83F30]"
  >
    Book a Treatment
    <ArrowRight size={18} />
  </Link>

  <Link
    to="/packages"
    className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
  >
    Explore Packages
  </Link>
</div>
          </div>
        </div>
      </section>


      {/* Quick Booking */}
      <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-6">
        <div className="rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(83,62,35,0.15)] lg:p-8">
          <div className="mb-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C14C38]">
              Find your treatment
            </p>

            <h2 className="mt-2 font-serif text-2xl text-[#533E23]">
              Begin your wellness journey
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_auto]">
            <div className="rounded-xl border border-[#EFE9C5] p-4">
              <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-[#533E23]/60">
                <Leaf size={15} />
                Treatment
              </div>

              <p className="text-sm font-medium text-[#533E23]">
                Choose a treatment
              </p>
            </div>

            <div className="rounded-xl border border-[#EFE9C5] p-4">
              <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-[#533E23]/60">
                <UserRound size={15} />
                Guest type
              </div>

              <p className="text-sm font-medium text-[#533E23]">
                Chalet or external guest
              </p>
            </div>

            <div className="rounded-xl border border-[#EFE9C5] p-4">
              <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-[#533E23]/60">
                <CalendarDays size={15} />
                Date
              </div>

              <p className="text-sm font-medium text-[#533E23]">
                Select preferred date
              </p>
            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-[#2F5D39] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#24492D]">
              <Search size={18} />
              Find
            </button>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section
        id="treatments"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C14C38]">
              Our treatments
            </p>

            <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-[#533E23] md:text-5xl">
              Traditional care, thoughtfully delivered.
            </h2>
          </div>

          <button className="flex items-center gap-2 text-sm font-medium text-[#2F5D39]">
            View all treatments
            <ArrowRight size={17} />
          </button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {treatments.map((treatment) => (
            <article
              key={treatment.title}
              className="group overflow-hidden rounded-2xl border border-[#DFC24D]/30 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-52 items-center justify-center bg-gradient-to-br from-[#EFE9C5] to-[#D9E5D7]">
                <span className="text-7xl transition duration-300 group-hover:scale-110">
                  {treatment.icon}
                </span>
              </div>

              <div className="p-7">
                <div className="mb-4 flex items-center justify-between text-xs text-[#533E23]/60">
                  <span className="flex items-center gap-1.5">
                    <Clock3 size={14} />
                    {treatment.duration}
                  </span>

                  <span className="font-medium text-[#C14C38]">
                    {treatment.price}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#533E23]">
                  {treatment.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#533E23]/65">
                  {treatment.description}
                </p>

                <button className="mt-6 flex items-center gap-2 text-sm font-medium text-[#2F5D39]">
                  View treatment

                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section
        id="packages"
        className="bg-[#2F5D39] px-6 py-28 text-white lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#DFC24D]">
              Long-stay Ayurveda
            </p>

            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              Give yourself time to truly restore.
            </h2>

            <p className="mt-5 leading-7 text-white/65">
              Explore our longer wellness experiences, combining consultations,
              treatments and personalised Ayurvedic care.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {packages.map((pkg) => (
              <article
                key={pkg.title}
                className="rounded-2xl border border-[#DFC24D]/20 bg-white/[0.06] p-8 backdrop-blur-sm transition hover:bg-white/[0.09]"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <span className="text-sm text-[#DFC24D]">
                      {pkg.duration}
                    </span>

                    <h3 className="mt-2 font-serif text-3xl">
                      {pkg.title}
                    </h3>
                  </div>

                  <Sparkles
                    className="shrink-0 text-[#DFC24D]"
                    size={24}
                  />
                </div>

                <p className="mt-5 max-w-xl leading-7 text-white/60">
                  {pkg.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-sm text-white/50">
                    {pkg.price}
                  </span>

                  <button className="flex items-center gap-2 text-sm font-medium text-[#DFC24D]">
                    Explore package
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-8"
      >
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C14C38]">
              Why Purana Ayurveda
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#533E23] md:text-5xl">
              A more personal approach to wellness.
            </h2>

            <p className="mt-6 leading-8 text-[#533E23]/70">
              Every guest begins with their own needs, preferences and goals.
              Our treatments and wellness experiences are designed around the
              individual rather than a one-size-fits-all approach.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Traditional Ayurvedic treatments",
                "Personalised wellness experiences",
                "Qualified and dedicated therapists",
                "Comfortable private treatment environment",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={19}
                    className="text-[#C14C38]"
                  />

                  <span className="text-sm text-[#533E23]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="h-[500px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=85')",
              }}
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[#EFE9C5]/95 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-[#C14C38]" />

                <div>
                  <p className="text-sm font-medium text-[#533E23]">
                    Purana Ayurveda
                  </p>

                  <p className="text-xs text-[#533E23]/60">
                    A place for balance and wellbeing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <AppPromotion />
      <PodcastPromotion />
      <TherapistsSection />
      <LocationsSection />

      {/* Consultation CTA */}
      <section
        id="consultation"
        className="px-6 pb-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#533E23] px-8 py-16 text-white md:px-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#DFC24D]">
              Ayurveda consultation
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Start with understanding what your body needs.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-white/65">
              Book a consultation and share your health concerns, lifestyle
              information and wellness goals before your visit.
            </p>

            <button className="mt-8 flex items-center gap-2 rounded-full bg-[#C14C38] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#A83F30]">
              Book a consultation
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;