
import {
  ArrowDown,
  ArrowRight,
  Flame,
  Heart,
  Leaf,
  Mountain,
  Sparkles,
  Wind,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";

function AboutAyurveda() {
  return (
    <div className="overflow-hidden bg-[#EFE9C5] text-[#533E23]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[88vh] overflow-hidden bg-[#2F5D39] text-white">
        <img
          src="https://purana-ayurveda.de/_next/image?url=%2Fimages%2Fayu2.jpeg&w=3840&q=75"
          alt="Ayurveda - Die Wissenschaft des Lebens"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#2F5D39]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2F5D39] via-[#2F5D39]/65 to-transparent" />

        <div className="absolute -right-48 -top-48 h-[650px] w-[650px] rounded-full border border-[#DFC24D]/20" />
        <div className="absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full border border-[#DFC24D]/10" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-32 lg:px-8">
          <div className="max-w-4xl">

            <div className="mb-7 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#DFC24D]">
              <Leaf size={18} />
              Über Ayurveda
            </div>

            <h1 className="font-serif text-6xl font-semibold leading-[0.95] md:text-8xl">
              Die uralte
              <br />
              <span className="text-[#DFC24D]">
                Wissenschaft
              </span>
              <br />
              des Lebens
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              Ayurveda ist weit mehr als Medizin. Es ist eine
              jahrtausendealte Lebensphilosophie, die Harmonie
              zwischen Körper, Geist, Seele und Natur schafft.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#ayurveda"
                className="inline-flex items-center gap-2 rounded-full bg-[#C14C38] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#A83F30]"
              >
                Ayurveda entdecken
                <ArrowDown size={17} />
              </a>

              <Link
                to="/consultation"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Beratung entdecken
                <ArrowRight size={17} />
              </Link>
            </div>

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center text-white/50">
            <div className="h-10 w-px bg-white/30" />

            <span className="mt-3 text-[10px] uppercase tracking-[0.3em]">
              Entdecken
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section
        id="ayurveda"
        className="scroll-mt-24 px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                Ayurveda
              </p>

              <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-7xl">
                Die Wissenschaft
                <br />
                <span className="text-[#2F5D39]">
                  des Lebens.
                </span>
              </h2>

              <div className="mt-8 h-px w-24 bg-[#DFC24D]" />
            </div>

            <div className="space-y-6 text-base leading-8 text-[#533E23]/70">

              <p>
                Ayurveda, bekannt als{" "}
                <strong className="text-[#533E23]">
                  „Die Wissenschaft des Lebens“
                </strong>
                , ist eines der ältesten ganzheitlichen
                Gesundheitssysteme der Welt.
              </p>

              <p>
                Während seine Ursprünge im alten Indien liegen,
                entwickelte sich Sri Lanka über Jahrtausende hinweg
                zu einem eigenständigen Zentrum ayurvedischer
                Heilkunst. Hier entstand die Tradition des{" "}
                <strong className="text-[#533E23]">
                  Hela Wedakama
                </strong>
                .
              </p>

              <p>
                Ayurveda ist weit mehr als Medizin. Es ist eine
                Lebensphilosophie, die Harmonie zwischen Körper,
                Geist, Seele und Natur schafft.
              </p>

            </div>
          </div>

          {/* Three image cards */}
          <div className="mt-20 grid gap-5 md:grid-cols-3">

            <ImageCard
              image="https://purana-ayurveda.de/_next/image?url=%2Fimages%2Fayu2.jpeg&w=3840&q=75"
              eyebrow="Ayurveda"
              title="Die Wissenschaft des Lebens"
            />

            <ImageCard
              image="https://purana-ayurveda.de/_next/image?url=%2Fimages%2Fayupic.jpeg&w=3840&q=75"
              eyebrow="Sri Lanka"
              title="Ayurvedische Heiltradition"
              offset
            />

            <ImageCard
              image="https://purana-ayurveda.de/_next/image?url=%2Fimages%2Fayu3.jpeg&w=3840&q=75"
              eyebrow="Pancha Mahabhuta"
              title="Die fünf Elemente"
            />

          </div>
        </div>
      </section>

      {/* =========================================================
          PANCHA MAHABHUTA
      ========================================================= */}
      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
              <Sparkles size={17} />
              Pancha Mahabhuta
            </div>

            <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-7xl">
              Die Grundprinzipien
              <br />
              <span className="text-[#2F5D39]">
                des Ayurveda.
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-[#533E23]/65">
              Ayurveda lehrt, dass alles Leben aus fünf universellen
              Elementen besteht. Diese wirken in jedem Menschen auf
              einzigartige Weise zusammen und bilden die Grundlage
              der individuellen Konstitution.
            </p>

          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

            <ElementCard
              number="01"
              title="Äther"
              sanskrit="Akasha"
              description="Raum und Offenheit"
              icon={<Sparkles size={24} />}
            />

            <ElementCard
              number="02"
              title="Luft"
              sanskrit="Vayu"
              description="Bewegung und Kommunikation"
              icon={<Wind size={24} />}
            />

            <ElementCard
              number="03"
              title="Feuer"
              sanskrit="Agni"
              description="Transformation und Verdauung"
              icon={<Flame size={24} />}
            />

            <ElementCard
              number="04"
              title="Wasser"
              sanskrit="Jala"
              description="Nährung und Verbindung"
              icon={<Waves size={24} />}
            />

            <ElementCard
              number="05"
              title="Erde"
              sanskrit="Prithvi"
              description="Stabilität und Struktur"
              icon={<Mountain size={24} />}
            />

          </div>
        </div>
      </section>

      {/* =========================================================
          DOSHAS
      ========================================================= */}
      <section className="bg-[#F7F3E2] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                Tridosha
              </p>

              <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-6xl">
                Die drei
                <br />
                <span className="text-[#2F5D39]">
                  Doshas.
                </span>
              </h2>

              <p className="mt-7 text-base leading-8 text-[#533E23]/65">
                Die drei Lebensenergien Vata, Pitta und Kapha wirken
                in jedem Menschen zusammen. Gesundheit entsteht,
                wenn diese Kräfte in harmonischem Gleichgewicht
                wirken.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">

              <DoshaCard
                number="01"
                name="Vata"
                description="Bewegung, Nervensystem, Kreativität"
                className="bg-[#DCE7D8]"
              />

              <DoshaCard
                number="02"
                name="Pitta"
                description="Stoffwechsel, Verdauung, Erkenntnis"
                className="bg-[#F2D9C8]"
              />

              <DoshaCard
                number="03"
                name="Kapha"
                description="Stabilität, Immunität, Regeneration"
                className="bg-[#E2DDD0]"
              />

            </div>
          </div>

          {/* Prakriti / Vikriti */}
          <div className="mt-20 grid gap-5 md:grid-cols-2">

            <div className="rounded-[2rem] bg-[#2F5D39] p-8 text-white md:p-10">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DFC24D]">
                Prakriti
              </p>

              <h3 className="mt-4 font-serif text-4xl">
                Die natürliche Konstitution
              </h3>

              <p className="mt-5 text-base leading-8 text-white/65">
                Prakriti beschreibt die angeborene Konstitution eines
                Menschen und die individuelle Balance der drei Doshas,
                mit der ein Mensch geboren wird.
              </p>

            </div>

            <div className="rounded-[2rem] bg-white p-8 md:p-10">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                Vikriti
              </p>

              <h3 className="mt-4 font-serif text-4xl">
                Der aktuelle Zustand
              </h3>

              <p className="mt-5 text-base leading-8 text-[#533E23]/65">
                Vikriti beschreibt den aktuellen Zustand möglicher
                Disharmonie. Ziel des Ayurveda ist es, das natürliche
                Gleichgewicht wiederherzustellen und den Menschen
                in Einklang mit seiner inneren Ordnung zu bringen.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SRI LANKA MEDICAL HERITAGE
      ========================================================= */}
      <section className="bg-[#533E23] px-6 py-24 text-white lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DFC24D]">
                Sri Lanka
              </p>

              <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-6xl">
                Ein uraltes Zentrum
                <br />
                medizinischen Wissens.
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-white/65">

                <p>
                  Sri Lankas medizinisches Erbe wird durch
                  bedeutende archäologische Funde belegt, darunter
                  das älteste bekannte Krankenhaus der Welt in
                  Mihintale.
                </p>

                <p>
                  Diese Anlagen zeigen ein hochentwickeltes
                  Gesundheitssystem mit spezialisierten
                  Krankensälen, chirurgischen Instrumenten,
                  pflanzlichen Apotheken und präventiver Versorgung.
                </p>

                <p>
                  Sie spiegeln eine Zivilisation wider, in der
                  Medizin, Ethik, Spiritualität und Mitgefühl
                  untrennbar miteinander verbunden waren.
                </p>

              </div>

            </div>

            <div className="relative overflow-hidden rounded-[2rem]">

              <img
                src="https://purana-ayurveda.de/_next/image?url=%2Fimages%2Fayu2.jpeg&w=3840&q=75"
                alt="Sri Lankas medizinisches Erbe"
                className="aspect-[4/5] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#533E23]/80 to-transparent" />

              <div className="absolute bottom-7 left-7">

                <p className="text-xs uppercase tracking-[0.2em] text-[#DFC24D]">
                  Sri Lanka
                </p>

                <p className="mt-2 font-serif text-3xl">
                  Eine lebendige
                  <br />
                  medizinische Tradition
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          HELA WEDAKAMA
      ========================================================= */}
      <section className="bg-[#EFE9C5] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-4xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
              Indigenous Healing Tradition
            </p>

            <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-7xl">
              Hela Wedakama
            </h2>

            <p className="mt-4 text-xl text-[#2F5D39]">
              Die indigene Heiltradition Sri Lankas
            </p>

            <p className="mt-7 text-lg leading-9 text-[#533E23]/65">
              In der sri-lankischen Überlieferung gilt Hela Wedakama
              als älter als die schriftlich dokumentierte Geschichte,
              mit Ursprüngen, die über 10.000 Jahre zurückreichen
              sollen. Dieses Heilsystem entwickelte sich parallel
              zum Ayurveda und bewahrte dabei seine eigene Identität.
            </p>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">

            <TraditionCard
              number="01"
              title="Pflanzenheilkunde"
              text="Pflanzenheilkunde mit einheimischen Heilpflanzen."
            />

            <TraditionCard
              number="02"
              title="Chirurgie"
              text="Chirurgie und Traumatologie."
            />

            <TraditionCard
              number="03"
              title="Regeneration"
              text="Entgiftungs- und Regenerationstherapien."
            />

            <TraditionCard
              number="04"
              title="Prävention"
              text="Präventivmedizin und Lebensstilberatung."
            />

            <TraditionCard
              number="05"
              title="Energetik"
              text="Energetische und spirituelle Gesundheitslehre."
            />

          </div>

          <div className="mt-14 rounded-[2rem] border border-[#533E23]/10 bg-white/60 p-8 md:p-12">

            <p className="max-w-4xl font-serif text-2xl leading-9 text-[#2F5D39] md:text-3xl">
              Der Fokus liegt auf früher Diagnose, individueller
              Behandlung und nachhaltigem Gleichgewicht — nicht auf
              bloßer Symptombekämpfung.
            </p>

          </div>
        </div>
      </section>

      {/* =========================================================
          PULASTYA & RAVANA
      ========================================================= */}
      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="mb-16 max-w-4xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
              Die heilige Wissenslinie
            </p>

            <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-7xl">
              Von Pulastya Rishi
              <br />
              <span className="text-[#2F5D39]">
                zu König Ravana.
              </span>
            </h2>

            <p className="mt-7 text-lg leading-9 text-[#533E23]/65">
              Nach sri-lankischer Überlieferung fließt das Wissen
              des Ayurveda und der Hela Wedakama durch eine uralte
              Linie erleuchteter Lehrer.
            </p>

          </div>

          <div className="grid gap-5 lg:grid-cols-2">

            {/* Pulastya */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#533E23] text-white">

              <img
                src="https://purana-ayurveda.de/_next/image?url=%2Fimages%2Fayu4.jpeg&w=3840&q=75"
                alt="Pulastya Rishi und König Ravana"
                className="h-[500px] w-full object-cover opacity-70"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#533E23] via-[#533E23]/20 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">

                <p className="text-xs uppercase tracking-[0.2em] text-[#DFC24D]">
                  Wissenslinie
                </p>

                <h3 className="mt-2 font-serif text-4xl">
                  Pulastya Rishi
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                  In der Überlieferung gilt Pulastya Rishi als
                  Träger tiefen kosmischen, medizinischen und
                  spirituellen Wissens.
                </p>

              </div>
            </div>

            {/* Ravana */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#2F5D39] text-white">

              <img
                src="https://purana-ayurveda.de/_next/image?url=%2Fimages%2Fayupic3.jpeg&w=3840&q=75"
                alt="König Ravana und die ayurvedische Medizin"
                className="h-[500px] w-full object-cover opacity-70"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#2F5D39] via-[#2F5D39]/20 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">

                <p className="text-xs uppercase tracking-[0.2em] text-[#DFC24D]">
                  Gelehrtenkönig
                </p>

                <h3 className="mt-2 font-serif text-4xl">
                  König Ravana
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                  In der sri-lankischen Überlieferung wird Ravana
                  als Gelehrtenkönig, Arzt und Meisterheiler
                  beschrieben.
                </p>

              </div>
            </div>

          </div>

          {/* Ravana medicine */}
          <div className="mt-16 grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                König Ravana
              </p>

              <h3 className="mt-4 font-serif text-4xl font-semibold">
                König Ravana und die ayurvedische Medizin
              </h3>

            </div>

            <div>

              <p className="text-base leading-8 text-[#533E23]/65">
                In der ursprünglichen Heilkunst Sri Lankas, bekannt
                als Hela Wedakama, wird König Ravana außergewöhnliche
                medizinische Meisterschaft zugeschrieben,
                insbesondere in verschiedenen Bereichen der
                traditionellen Medizin.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {[
                  "Pflanzenheilkunde und Toxikologie",
                  "Chirurgie und Traumatologie",
                  "Kinderheilkunde und geistige Gesundheit",
                  "Regenerations- und Verjüngungstherapien",
                  "Nadi Pariksha (Pulsdiagnose)",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-[#F7F3E2] p-4"
                  >
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2F5D39] text-white">
                      <Leaf size={11} />
                    </div>

                    <span className="text-sm leading-6 text-[#533E23]/70">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              <div className="mt-8 rounded-3xl border-l-2 border-[#DFC24D] bg-[#F7F3E2] p-6">

                <p className="font-serif text-xl leading-8 text-[#2F5D39]">
                  Nadi Pariksha beschreibt die traditionelle
                  Pulsdiagnose, die in der ayurvedischen Praxis zur
                  Beurteilung des individuellen Gleichgewichts
                  eingesetzt wird.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BUDDHADASA
      ========================================================= */}
      <section className="bg-[#2F5D39] px-6 py-24 text-white lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

            <div className="relative overflow-hidden rounded-[2rem]">

              <img
                src="https://purana-ayurveda.de/_next/image?url=%2Fimages%2Fayu5.jpeg&w=3840&q=75"
                alt="König Buddhadasa"
                className="aspect-[4/5] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#2F5D39]/80 to-transparent" />

              <div className="absolute bottom-7 left-7">

                <p className="text-xs uppercase tracking-[0.2em] text-[#DFC24D]">
                  4. Jahrhundert n. Chr.
                </p>

                <h3 className="mt-2 font-serif text-4xl">
                  König Buddhadasa
                </h3>

              </div>
            </div>

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DFC24D]">
                Königliche Ärzte
              </p>

              <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-6xl">
                Bewahrtes
                <br />
                Heilwissen.
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-white/65">

                <p>
                  Eine weitere bedeutende Persönlichkeit im
                  indigenen Heilsystem Sri Lankas war König
                  Buddhadasa (4. Jahrhundert n. Chr.). Er gilt als
                  einer der großen Arzt-Könige der Insel und als
                  wichtiger Bewahrer und Förderer der einheimischen
                  Heiltradition.
                </p>

                <p>
                  König Buddhadasa verfasste zudem ein medizinisches
                  Werk, das in den Chroniken als{" "}
                  <strong className="text-white">
                    „Sarartha Sangrahaya“
                  </strong>{" "}
                  erwähnt wird.
                </p>

                <p>
                  Dieses Werk diente als Grundlage für die damalige
                  medizinische Praxis und beeinflusste die
                  Entwicklung der indigenen Heilkunst über
                  Generationen hinweg.
                </p>

                <p>
                  Teile dieses Wissens sind bis heute in der
                  traditionellen sri-lankischen Heilkunde —
                  insbesondere im Hela Wedakama — lebendig.
                </p>

              </div>

              <div className="mt-9 rounded-3xl border border-white/10 bg-white/5 p-6">

                <p className="text-sm leading-7 text-white/60">
                  Während seiner Regentschaft wird die medizinische
                  Versorgung der Bevölkerung in den historischen
                  Überlieferungen als kostenfrei beschrieben.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          LIVING TRADITION
      ========================================================= */}
      <section className="bg-[#F7F3E2] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DFC24D] text-[#533E23]">
            <Heart size={25} />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
            Eine lebendige Tradition
          </p>

          <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-7xl">
            Ayurveda lebt.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#533E23]/65">
            Ayurveda ist eine lebendige, sich entwickelnde
            Tradition. Seine Grundprinzipien begleiten Menschen
            bis heute durch das Verständnis der individuellen
            Konstitution, personalisierte Therapien, präventive
            Lebensführung und das Leben im Einklang mit natürlichen
            Rhythmen.
          </p>

          <div className="mt-12 rounded-[2rem] bg-[#2F5D39] p-8 text-left text-white md:p-12">

            <Leaf size={25} className="text-[#DFC24D]" />

            <p className="mt-6 font-serif text-2xl leading-9 md:text-3xl">
              Bei Purana Ayurveda wird diese Weisheit achtsam
              bewahrt und verantwortungsvoll in die Gegenwart
              übertragen.
            </p>

          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#533E23] px-6 py-28 text-white lg:px-8 lg:py-36">

        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#DFC24D]/10" />

        <div className="absolute -bottom-48 -right-48 h-[600px] w-[600px] rounded-full border border-[#DFC24D]/10" />

        <div className="relative mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DFC24D]">
            Purana Ayurveda
          </p>

          <h2 className="mt-5 font-serif text-5xl font-semibold leading-tight md:text-7xl">
            Eine Brücke zwischen
            <br />
            <span className="text-[#DFC24D]">
              uralter Weisheit
            </span>
            <br />
            und modernem Leben.
          </h2>

          <p className="mx-auto mt-9 max-w-3xl text-lg leading-9 text-white/65">
            Ayurveda lehrt, dass wahre Gesundheit aus Balance
            entsteht — im Körper, im Geist und in der Beziehung zur
            Natur.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-white/65">
            Durch die Bewahrung und Weitergabe der ayurvedischen
            und Hela-Wedakama-Traditionen Sri Lankas schlägt Purana
            Ayurveda eine Brücke zwischen jahrtausendealter
            Weisheit und moderner Lebensrealität.
          </p>

          <div className="mx-auto mt-12 h-px w-24 bg-[#DFC24D]" />

          <p className="mx-auto mt-10 max-w-3xl font-serif text-2xl leading-9 text-white md:text-3xl">
            Ayurveda bedeutet nicht nur Heilung von Krankheit.
            <br />
            Es bedeutet, zu lernen, im Einklang mit dem Leben selbst
            zu leben.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 rounded-full bg-[#C14C38] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#A83F30]"
            >
              Treatments entdecken
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              Beratung buchen
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}

/* =============================================================
   IMAGE CARD
============================================================= */

type ImageCardProps = {
  image: string;
  eyebrow: string;
  title: string;
  offset?: boolean;
};

function ImageCard({
  image,
  eyebrow,
  title,
  offset = false,
}: ImageCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem] ${
        offset ? "md:translate-y-8" : ""
      }`}
    >
      <img
        src={image}
        alt={title}
        className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#533E23]/80 via-transparent to-transparent" />

      <div className="absolute bottom-6 left-6 right-6">

        <p className="text-xs uppercase tracking-[0.15em] text-[#DFC24D]">
          {eyebrow}
        </p>

        <h3 className="mt-2 font-serif text-2xl text-white">
          {title}
        </h3>

      </div>
    </div>
  );
}

/* =============================================================
   ELEMENT CARD
============================================================= */

type ElementCardProps = {
  number: string;
  title: string;
  sanskrit: string;
  description: string;
  icon: React.ReactNode;
};

function ElementCard({
  number,
  title,
  sanskrit,
  description,
  icon,
}: ElementCardProps) {
  return (
    <div className="group rounded-[2rem] border border-[#533E23]/10 bg-[#F7F3E2] p-6 transition duration-300 hover:-translate-y-2 hover:bg-[#2F5D39] hover:text-white hover:shadow-xl">

      <div className="flex items-start justify-between">

        <span className="text-xs font-semibold tracking-[0.15em] text-[#C14C38] group-hover:text-[#DFC24D]">
          {number}
        </span>

        <div className="text-[#2F5D39] transition group-hover:text-[#DFC24D]">
          {icon}
        </div>

      </div>

      <h3 className="mt-12 font-serif text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#533E23]/40 group-hover:text-white/40">
        {sanskrit}
      </p>

      <p className="mt-5 text-sm leading-6 text-[#533E23]/60 group-hover:text-white/65">
        {description}
      </p>

    </div>
  );
}

/* =============================================================
   DOSHA CARD
============================================================= */

type DoshaCardProps = {
  number: string;
  name: string;
  description: string;
  className: string;
};

function DoshaCard({
  number,
  name,
  description,
  className,
}: DoshaCardProps) {
  return (
    <div
      className={`rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
    >

      <span className="text-xs font-semibold tracking-[0.15em] text-[#533E23]/40">
        {number}
      </span>

      <h3 className="mt-10 font-serif text-4xl font-semibold text-[#533E23]">
        {name}
      </h3>

      <div className="mt-5 h-px w-12 bg-[#533E23]/20" />

      <p className="mt-5 text-sm leading-6 text-[#533E23]/65">
        {description}
      </p>

    </div>
  );
}

/* =============================================================
   TRADITION CARD
============================================================= */

type TraditionCardProps = {
  number: string;
  title: string;
  text: string;
};

function TraditionCard({
  number,
  title,
  text,
}: TraditionCardProps) {
  return (
    <div className="rounded-[2rem] border border-[#533E23]/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <span className="text-xs font-semibold tracking-[0.15em] text-[#C14C38]">
        {number}
      </span>

      <h3 className="mt-7 font-serif text-xl font-semibold text-[#533E23]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#533E23]/55">
        {text}
      </p>

    </div>
  );
}

export default AboutAyurveda;

