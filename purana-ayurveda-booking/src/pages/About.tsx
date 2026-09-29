import {
  ArrowRight,
  Heart,
  Leaf,
  Music,
  Sparkles,
  Utensils,
  Wind,
} from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-[#EFE9C5] text-[#533E23]">
      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden bg-[#2F5D39] text-white">
        <img
          src="https://purana-ayurveda.de/_next/image?url=%2Fimages%2Fhomepage%2Ffounder.jpg&w=1200&q=75"
          alt="Lakshani Perera - Founder of Purana Ayurveda"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#2F5D39]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2F5D39] via-[#2F5D39]/75 to-transparent" />

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#DFC24D]/20" />
        <div className="absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-[#DFC24D]/10" />

        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-32 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#DFC24D]">
              <Leaf size={18} />
              About Purana Ayurveda
            </div>

            <h1 className="font-serif text-5xl font-semibold leading-[1.08] md:text-7xl">
              Timeless wisdom,
              <br />
              <span className="text-[#DFC24D]">
                thoughtfully renewed.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              Authentic Ayurvedic traditions rooted in Sri Lanka,
              reimagined for a conscious and modern way of living.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/treatments"
                className="inline-flex items-center gap-2 rounded-full bg-[#C14C38] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#A83F30]"
              >
                Explore Treatments
                <ArrowRight size={17} />
              </Link>

              <a
                href="#our-story"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <div className="mx-auto h-10 w-px bg-white/30" />
          <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/50">
            Discover
          </p>
        </div>
      </section>

      {/* BRAND STORY */}
      <section
        id="our-story"
        className="scroll-mt-20 px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                <Leaf size={17} />
                Our Story
              </div>

              <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight md:text-6xl">
                Ayurveda,
                <br />
                <span className="text-[#2F5D39]">
                  brought back to life.
                </span>
              </h2>

              <div className="mt-8 h-px w-24 bg-[#DFC24D]" />
            </div>

            <div className="space-y-6 text-base leading-8 text-[#533E23]/70">
              <p>
                Founded in{" "}
                <strong className="text-[#533E23]">2024</strong>,{" "}
                <strong className="text-[#533E23]">
                  Purana Ayurveda
                </strong>{" "}
                connects authentic Ayurvedic traditions with a modern
                and conscious lifestyle. Our purpose is to make the
                essence of holistic health tangible, meaningful and
                accessible in everyday life.
              </p>

              <p>
                As the sister company of{" "}
                <strong className="text-[#533E23]">
                  Nivartana
                </strong>
                , a brand known for high-quality spices and
                handcrafted products from Sri Lanka, we bring the
                deep cultural wisdom of Ayurveda directly into
                contemporary life.
              </p>

              <p>
                Rooted in the centuries-old healing traditions of
                Sri Lanka, we see Ayurveda not simply as a system of
                knowledge, but as a living practice. Natural
                ingredients, mindful routines and a sustainable
                balance between body, mind and spirit are at the
                heart of everything we do.
              </p>

              <p className="font-serif text-xl leading-8 text-[#2F5D39]">
                Our goal is to accompany people on their personal
                journey towards greater clarity, vitality and inner
                harmony — gently, naturally and consciously.
              </p>
            </div>
          </div>

          <div className="mt-20 rounded-[2rem] bg-[#2F5D39] px-8 py-12 text-center text-white md:px-16 md:py-16">
            <Leaf size={28} className="mx-auto text-[#DFC24D]" />

            <p className="mx-auto mt-6 max-w-4xl font-serif text-3xl leading-tight md:text-5xl">
              “Purana Ayurveda — timeless wisdom,
              thoughtfully reimagined for modern life.”
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
              The person behind Purana
            </p>

            <h2 className="mt-3 font-serif text-4xl font-semibold md:text-6xl">
              Meet the founder
            </h2>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 h-full w-full rounded-[2rem] border border-[#DFC24D]/50" />

              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src="https://purana-ayurveda.de/_next/image?url=%2Fimages%2Fhomepage%2Ffounder.jpg&w=1200&q=75"
                  alt="Lakshani Perera"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C14C38]">
                Founder of Nivartana & Purana Ayurveda
              </p>

              <h2 className="mt-4 font-serif text-4xl font-semibold text-[#533E23] md:text-5xl">
                Lakshani Perera
              </h2>

              <p className="mt-4 text-sm font-medium text-[#2F5D39]">
                Certified Ayurvedic Nutrition Consultant & Advisor
              </p>

              <div className="mt-8 space-y-5 text-base leading-8 text-[#533E23]/65">
                <p>
                  Growing up in Sri Lanka, I was introduced early to
                  the traditional healing practices of our culture.
                  My great-grandfather was an indigenous healer who
                  not only passed his knowledge down to the next
                  generation, but also preserved it in handwritten
                  records.
                </p>

                <p>
                  This heritage and the stories of my family have
                  remained with me throughout my life.
                </p>

                <p>
                  My path towards Ayurveda, however, did not begin
                  immediately. Through my own experiences — healing
                  severe allergies and digestive problems and
                  witnessing how natural remedies helped people
                  regain their health — I developed a deep interest
                  in Ayurveda.
                </p>

                <p>
                  These experiences affected me so deeply that in
                  2021 I consciously decided to leave my previous
                  educational path and study Ayurveda.
                </p>

                <p>
                  Today, I am grateful to be able to share this
                  knowledge and accompany people on their own journey
                  towards greater health and wellbeing.
                </p>
              </div>

              <div className="mt-8 border-l-2 border-[#DFC24D] pl-6">
                <p className="font-serif text-xl leading-8 text-[#2F5D39]">
                  “True balance arises when body, mind and spirit
                  exist in harmony with nature.”
                </p>
              </div>

              <p className="mt-7 text-sm font-medium text-[#533E23]/60">
                Consultations available in German and English.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAMILY HERITAGE */}
      <section className="bg-[#F7F3E2] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2F5D39] text-[#DFC24D]">
            <Heart size={25} />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
            A family heritage
          </p>

          <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
            Knowledge passed through generations.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#533E23]/65">
            From handwritten records preserved by Lakshani&apos;s
            great-grandfather to the practices shared today,
            Purana Ayurveda carries a living connection to the
            healing traditions of Sri Lanka.
          </p>
        </div>
      </section>

      {/* TEAM INTRO */}
      <section className="bg-[#EFE9C5] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
              Our People
            </p>

            <h2 className="mt-3 font-serif text-4xl font-semibold md:text-6xl">
              The people who bring
              <br />
              <span className="text-[#2F5D39]">
                the experience to life.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#533E23]/65">
              Ayurveda is not only about treatments. It is also
              about food, sound, movement, meditation and the people
              who create a space where meaningful experiences can
              take place.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href="#kitchen"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[#533E23] transition hover:bg-[#2F5D39] hover:text-white"
            >
              Ayurveda Kitchen
            </a>

            <a
              href="#music"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[#533E23] transition hover:bg-[#2F5D39] hover:text-white"
            >
              Music & Meditation
            </a>

            <a
              href="#yoga"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[#533E23] transition hover:bg-[#2F5D39] hover:text-white"
            >
              Yoga
            </a>
          </div>
        </div>
      </section>

      {/* AYURVEDA KITCHEN */}
      <section
        id="kitchen"
        className="scroll-mt-20 bg-white px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="https://purana-ayurveda.de/_next/image?url=%2Fimages%2Fteam%2Fsarojani.jpg&w=1080&q=75"
                alt="Sarojani Perera - Ayurveda Kitchen"
                className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#533E23] backdrop-blur-sm">
                <Utensils size={14} className="text-[#C14C38]" />
                Ayurveda Kitchen
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                Ayurveda Kitchen
              </p>

              <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
                Sarojani Perera
              </h2>

              <p className="mt-2 text-sm font-medium text-[#2F5D39]">
                “Amma” — The soul of our Ayurveda kitchen
              </p>

              <div className="mt-7 space-y-5 text-base leading-8 text-[#533E23]/65">
                <p>
                  The soul of our Ayurveda kitchen is Sarojani
                  Perera — lovingly called “Amma”.
                </p>

                <p>
                  Since childhood, she has placed great importance
                  on nourishing her family with fresh, balanced and
                  wholesome meals.
                </p>

                <p>
                  In Sri Lanka, knowledge about food is traditionally
                  passed down through generations. Understanding the
                  qualities of warming and cooling foods and their
                  effects on digestion and balance is an important
                  part of this tradition.
                </p>

                <p>
                  With years of experience, dedication and love,
                  she prepares Ayurvedic meals every day that
                  nourish body and mind and support the wellbeing
                  of our guests.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#2F5D39]">
                <Leaf size={17} />
                Fresh · Balanced · Nourishing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MUSIC & MEDITATION */}
      <section
        id="music"
        className="scroll-mt-20 bg-[#2F5D39] px-6 py-24 text-white lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#DFC24D]">
                <Music size={18} />
                Music, Meditation & Sound
              </div>

              <h2 className="mt-4 font-serif text-4xl font-semibold md:text-6xl">
                Liyaniya Kumarage
                <br />
                <span className="text-[#DFC24D]">
                  Pearl Perera
                </span>
              </h2>

              <p className="mt-3 text-sm font-medium text-white/60">
                Music, Meditation & Sound
              </p>

              <div className="mt-8 space-y-5 text-base leading-8 text-white/65">
                <p>
                  A special part of our retreats is the power of
                  music, meditation and sound healing. This tradition
                  has been passed down through our family for
                  generations.
                </p>

                <p>
                  With the Indian harmonium, Liyaniya accompanies
                  meditations, mantra circles and sound healing
                  sessions, creating a space for stillness,
                  awareness and inner balance.
                </p>

                <p>
                  His music supports our guests in calming the mind
                  and connecting more deeply with themselves — an
                  important part of the Purana retreat experience.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
                  Meditation
                </span>

                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
                  Mantra Circles
                </span>

                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
                  Sound Healing
                </span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src="https://purana-ayurveda.de/_next/image?url=%2Fimages%2Fteam%2Fliyaniya.png&w=3840&q=75"
                  alt="Liyaniya Kumarage Pearl Perera"
                  className="aspect-[4/5] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2F5D39]/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DFC24D] text-[#533E23]">
                    <Music size={21} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YOGA */}
      <section
        id="yoga"
        className="scroll-mt-20 bg-[#F7F3E2] px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="https://purana-ayurveda.de/_next/image?url=%2Fimages%2Fhomepage%2Fyoga1.jpeg&w=1080&q=75"
                alt="Chaminda Perera - Yoga Teacher"
                className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#533E23] backdrop-blur-sm">
                <Wind size={14} className="text-[#C14C38]" />
                Yoga Teacher
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                Yoga Teacher
              </p>

              <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
                Chaminda Perera
              </h2>

              <p className="mt-3 text-sm font-medium text-[#2F5D39]">
                Certified Isha Hatha Yoga Teacher
              </p>

              <div className="mt-7 space-y-5 text-base leading-8 text-[#533E23]/65">
                <p>
                  Born in Sri Lanka, Chaminda was introduced to
                  meditation and martial arts at an early age. A
                  health crisis in 2012 led him to explore yoga
                  more deeply.
                </p>

                <p>
                  In 2021, he completed a{" "}
                  <strong className="text-[#533E23]">
                    1,750-hour training
                  </strong>{" "}
                  at the Isha Yoga Center in India and became a
                  certified Isha Hatha Yoga teacher.
                </p>

                <p>
                  At Purana Ayurveda, he teaches traditional Hatha
                  Yoga with clarity, awareness and dedication —
                  presenting it as a holistic path towards health,
                  balance and inner growth.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F5D39] text-[#DFC24D]">
                  <Sparkles size={17} />
                </div>

                <p className="text-sm font-medium text-[#533E23]/65">
                  Traditional Hatha Yoga · Meditation · Awareness
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-[#533E23] px-6 py-24 text-white lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DFC24D] text-[#533E23]">
            <Sparkles size={25} />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-[#DFC24D]">
            Our Vision
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold md:text-6xl">
            Reconnecting people
            <br />
            with the wisdom of nature.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/65">
            We envision a world in which ancient wisdom and modern
            life come together to restore balance and vitality.
            Through reconnecting with the timeless healing power of
            nature, we want to create a future where holistic
            wellbeing is accessible and harmony between people and
            nature can flourish again.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-[#EFE9C5] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                Our Mission
              </p>

              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-6xl">
                Preserving wisdom.
                <br />
                <span className="text-[#2F5D39]">
                  Creating wellbeing.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-[#533E23]/70">
                Our mission is to promote holistic wellbeing by
                preserving and sharing the timeless wisdom of
                Ayurveda. Rooted in the ancient traditions of Sri
                Lanka, we support people in creating harmony between
                mind, body and spirit through natural and sustainable
                practices.
              </p>

              <p className="mt-7 text-lg leading-9 text-[#533E23]/70">
                Through authentic products, knowledge and mindful
                experiences, we create a deeper connection with
                nature and accompany people on their journey towards
                long-term health and vitality.
              </p>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white p-6">
                  <Leaf size={22} className="text-[#2F5D39]" />

                  <h3 className="mt-5 font-serif text-xl font-semibold">
                    Authenticity
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#533E23]/55">
                    Honouring the traditions and knowledge from
                    which Ayurveda originates.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6">
                  <Heart size={22} className="text-[#C14C38]" />

                  <h3 className="mt-5 font-serif text-xl font-semibold">
                    Mindfulness
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#533E23]/55">
                    Creating conscious experiences that encourage
                    balance and awareness.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6">
                  <Wind size={22} className="text-[#DFC24D]" />

                  <h3 className="mt-5 font-serif text-xl font-semibold">
                    Sustainability
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#533E23]/55">
                    Building a healthier relationship between
                    people and the natural world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#2F5D39] px-6 py-24 text-white lg:px-8 lg:py-32">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#DFC24D]/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#C14C38]/15 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <Leaf size={28} className="mx-auto text-[#DFC24D]" />

          <h2 className="mt-6 font-serif text-4xl font-semibold md:text-6xl">
            Begin your journey
            <br />
            towards balance.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65">
            Discover authentic Ayurvedic treatments, mindful
            experiences and a deeper connection with yourself and
            nature.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 rounded-full bg-[#C14C38] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#A83F30]"
            >
              Explore Treatments
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;