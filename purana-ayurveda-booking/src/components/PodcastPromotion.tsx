import {
  ArrowRight,
  Camera,
  Headphones,
  Mic2,
  Play,
  Sparkles,
} from "lucide-react";

function PodcastPromotion() {
  return (
    <section className="relative overflow-hidden bg-[#F7F3E2] px-6 py-24 lg:px-8">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#DFC24D]/10 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#C14C38]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT — Podcast artwork */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Decorative circle */}
            <div className="absolute h-[370px] w-[370px] rounded-full border border-[#2F5D39]/10" />

            <div className="absolute h-[300px] w-[300px] rounded-full bg-[#2F5D39]/5" />

            {/* Main artwork */}
            <div className="relative z-10 h-[390px] w-[320px] overflow-hidden rounded-[2rem] bg-[#2F5D39] shadow-2xl shadow-[#533E23]/15">
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=900&q=80"
                alt="Talk with Lakshani podcast"
                className="absolute inset-0 h-full w-full object-cover opacity-45"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2F5D39] via-[#2F5D39]/65 to-transparent" />

              {/* Top label */}
              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/15 px-4 py-2 backdrop-blur-md">
                <Mic2 size={14} className="text-[#DFC24D]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                  Podcast
                </span>
              </div>

              {/* Play button */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <button
                  type="button"
                  className="group flex h-20 w-20 items-center justify-center rounded-full bg-[#DFC24D] text-[#533E23] shadow-xl transition hover:scale-105 hover:bg-[#E7CF62]"
                  aria-label="Play latest episode"
                >
                  <Play
                    size={27}
                    fill="currentColor"
                    className="ml-1 transition-transform group-hover:scale-110"
                  />
                </button>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-[#DFC24D]">
                  Talk with Lakshani
                </p>

                <h3 className="mt-2 font-serif text-3xl font-semibold leading-tight">
                  Conversations for a more balanced life.
                </h3>

                <div className="mt-5 flex items-center gap-4 text-xs text-white/60">
                  <span>Latest episode</span>
                  <span className="h-1 w-1 rounded-full bg-white/40" />
                  <span>42 min</span>
                </div>
              </div>
            </div>

            {/* Floating episode card */}
            <div className="absolute -bottom-5 right-2 z-20 rounded-2xl bg-white p-4 shadow-xl sm:right-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C14C38]/10 text-[#C14C38]">
                  <Headphones size={19} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wide text-[#533E23]/40">
                    Listen now
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#533E23]">
                    Your wellness story
                  </p>
                </div>
              </div>
            </div>

            {/* Floating decorative sparkle */}
            <div className="absolute -left-2 top-14 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#DFC24D] text-[#533E23] shadow-lg">
              <Sparkles size={19} />
            </div>
          </div>

          {/* RIGHT — Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#2F5D39]/8 px-4 py-2">
              <Mic2 size={15} className="text-[#2F5D39]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2F5D39]">
                Talk with Lakshani
              </span>
            </div>

            <h2 className="max-w-xl font-serif text-5xl font-semibold leading-[1.08] text-[#533E23] md:text-6xl">
              Conversations that
              <span className="text-[#2F5D39]"> nourish.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#533E23]/65 md:text-lg">
              Join Lakshani for thoughtful conversations about Ayurveda,
              wellbeing, mindful living and the simple practices that can help
              us reconnect with ourselves.
            </p>

            {/* Latest episode */}
            <div className="mt-9 rounded-3xl border border-[#533E23]/10 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2F5D39] text-white">
                  <Mic2 size={20} />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C14C38]">
                    Latest conversation
                  </p>

                  <h3 className="mt-2 font-serif text-xl font-semibold text-[#533E23]">
                    Finding balance in everyday life
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#533E23]/55">
                    Lakshani explores how small changes in daily routines can
                    support a calmer and more mindful lifestyle.
                  </p>

                  <div className="mt-4 flex items-center gap-4 text-xs text-[#533E23]/45">
                    <span>42 min</span>

                    <span className="h-1 w-1 rounded-full bg-[#533E23]/25" />

                    <span>Wellness & Ayurveda</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C14C38] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#A83F30]"
              >
                Listen to the Podcast
                <ArrowRight size={17} />
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#533E23]/15 bg-white px-7 py-4 text-sm font-semibold text-[#533E23] transition hover:border-[#2F5D39] hover:text-[#2F5D39]"
              >
                <Camera size={17} />
                Follow the Conversations
              </a>
            </div>

            {/* Platforms */}
            <div className="mt-7 flex items-center gap-5 text-xs text-[#533E23]/40">
              <span>Available on</span>

              <span className="font-semibold text-[#533E23]/60">
                Spotify
              </span>

              <span className="h-1 w-1 rounded-full bg-[#533E23]/20" />

              <span className="font-semibold text-[#533E23]/60">
                YouTube
              </span>

              <span className="h-1 w-1 rounded-full bg-[#533E23]/20" />

              <span className="font-semibold text-[#533E23]/60">
                Apple Podcasts
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PodcastPromotion;