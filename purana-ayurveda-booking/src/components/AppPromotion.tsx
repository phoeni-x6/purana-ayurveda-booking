import {
  Bell,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock3,
  Heart,
  Leaf,
  MessageCircle,
  Smartphone,
  Sparkles,
} from "lucide-react";

function AppPromotion() {
  return (
    <section className="relative overflow-hidden bg-[#EFE9C5] px-6 py-24 lg:px-8">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full border border-[#2F5D39]/10" />
      <div className="pointer-events-none absolute -left-28 top-32 h-72 w-72 rounded-full border border-[#2F5D39]/10" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#DFC24D]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.5rem] bg-[#2F5D39] shadow-2xl shadow-[#533E23]/10">
          <div className="grid min-h-[650px] items-center lg:grid-cols-[1fr_0.95fr]">
            {/* LEFT CONTENT */}
            <div className="relative z-10 px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
              {/* Small label */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DFC24D]/30 bg-[#DFC24D]/10 px-4 py-2">
                <Smartphone size={15} className="text-[#DFC24D]" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DFC24D]">
                  Purana Ayurveda App
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-xl font-serif text-5xl font-semibold leading-[1.05] text-white sm:text-6xl">
                Wellness,
                <br />
                <span className="text-[#DFC24D]">in your hands.</span>
              </h2>

              <p className="mt-7 max-w-lg text-base leading-8 text-white/65 md:text-lg">
                Your Purana Ayurveda experience doesn't stop when you leave
                the centre. Manage your treatments, appointments, wellness
                journey and connection with our team — all from one simple
                app.
              </p>

              {/* Feature pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/80">
                  <CalendarCheck size={16} className="text-[#DFC24D]" />
                  Easy booking
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/80">
                  <Bell size={16} className="text-[#DFC24D]" />
                  Smart reminders
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/80">
                  <MessageCircle size={16} className="text-[#DFC24D]" />
                  Stay connected
                </div>
              </div>

              {/* Download buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#"
                  className="group inline-flex items-center justify-between gap-6 rounded-2xl bg-white px-5 py-3.5 transition hover:bg-[#EFE9C5]"
                >
                  <div className="text-left">
                    <p className="text-[9px] uppercase tracking-wide text-[#533E23]/45">
                      Download on the
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#533E23]">
                      App Store
                    </p>
                  </div>

                  <ChevronRight
                    size={17}
                    className="text-[#533E23] transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#"
                  className="group inline-flex items-center justify-between gap-6 rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 backdrop-blur-sm transition hover:bg-white/10"
                >
                  <div className="text-left">
                    <p className="text-[9px] uppercase tracking-wide text-white/40">
                      Get it on
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Google Play
                    </p>
                  </div>

                  <ChevronRight
                    size={17}
                    className="text-white transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* RIGHT APP SHOWCASE */}
            <div className="relative flex min-h-[620px] items-center justify-center overflow-hidden lg:min-h-[650px]">
              {/* Large decorative circle */}
              <div className="absolute h-[470px] w-[470px] rounded-full border border-white/10" />

              <div className="absolute h-[360px] w-[360px] rounded-full border border-[#DFC24D]/15" />

              <div className="absolute h-[260px] w-[260px] rounded-full bg-[#DFC24D]/10 blur-3xl" />

              {/* Decorative leaves */}
              <Leaf
                size={100}
                strokeWidth={0.7}
                className="absolute left-8 top-24 rotate-[-25deg] text-white/5"
              />

              <Sparkles
                size={50}
                strokeWidth={1}
                className="absolute right-10 top-28 text-[#DFC24D]/30"
              />

              {/* BACK PHONE */}
              <div className="absolute left-[8%] top-28 hidden w-[210px] rotate-[-12deg] rounded-[2.3rem] border-[6px] border-[#211C16] bg-[#EFE9C5] p-2 shadow-2xl md:block">
                <div className="overflow-hidden rounded-[1.8rem] bg-white">
                  <div className="bg-[#533E23] px-4 pb-5 pt-8 text-white">
                    <p className="text-[8px] uppercase tracking-widest text-white/50">
                      My wellness
                    </p>

                    <p className="mt-1 font-serif text-base">
                      Treatment history
                    </p>
                  </div>

                  <div className="space-y-3 p-3">
                    <div className="rounded-xl bg-[#EFE9C5]/60 p-3">
                      <p className="text-[9px] text-[#533E23]/50">
                        Completed
                      </p>
                      <p className="mt-1 text-xs font-semibold text-[#533E23]">
                        Abhyanga
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#EFE9C5]/60 p-3">
                      <p className="text-[9px] text-[#533E23]/50">
                        Completed
                      </p>
                      <p className="mt-1 text-xs font-semibold text-[#533E23]">
                        Shirodhara
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#EFE9C5]/60 p-3">
                      <p className="text-[9px] text-[#533E23]/50">
                        Completed
                      </p>
                      <p className="mt-1 text-xs font-semibold text-[#533E23]">
                        Head Massage
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* MAIN PHONE */}
              <div className="relative z-20 w-[245px] rounded-[2.7rem] border-[7px] border-[#211C16] bg-[#EFE9C5] p-2 shadow-2xl sm:w-[275px]">
                {/* Dynamic island */}
                <div className="absolute left-1/2 top-2 z-30 h-6 w-24 -translate-x-1/2 rounded-full bg-[#211C16]" />

                <div className="overflow-hidden rounded-[2.2rem] bg-[#EFE9C5]">
                  {/* App header */}
                  <div className="bg-[#2F5D39] px-5 pb-7 pt-12 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[8px] uppercase tracking-[0.18em] text-white/45">
                          Good morning
                        </p>

                        <p className="mt-1 font-serif text-xl">
                          Your wellness
                        </p>
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DFC24D] text-[#533E23]">
                        <Bell size={15} />
                      </div>
                    </div>

                    {/* Wellness card */}
                    <div className="mt-5 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[8px] uppercase tracking-wide text-white/45">
                            Wellness journey
                          </p>

                          <p className="mt-1 text-sm font-semibold">
                            Feeling balanced
                          </p>
                        </div>

                        <Heart
                          size={18}
                          className="fill-[#DFC24D] text-[#DFC24D]"
                        />
                      </div>

                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[78%] rounded-full bg-[#DFC24D]" />
                      </div>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="p-4">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#C14C38]">
                      Upcoming
                    </p>

                    {/* Booking card */}
                    <div className="mt-2 rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-serif text-base font-semibold text-[#533E23]">
                            Abhyanga
                          </p>

                          <div className="mt-2 flex items-center gap-2 text-[9px] text-[#533E23]/50">
                            <Clock3 size={11} />
                            Monday · 10:30
                          </div>
                        </div>

                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2F5D39]/10 text-[#2F5D39]">
                          <Check size={13} />
                        </div>
                      </div>

                      <div className="mt-3 rounded-xl bg-[#2F5D39] py-2 text-center text-[9px] font-semibold text-white">
                        View appointment
                      </div>
                    </div>

                    {/* Quick actions */}
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="rounded-xl bg-[#2F5D39] p-3 text-white">
                        <CalendarCheck size={14} />
                        <p className="mt-2 text-[8px] font-semibold">
                          Book
                        </p>
                      </div>

                      <div className="rounded-xl bg-white p-3 text-[#533E23] shadow-sm">
                        <MessageCircle size={14} />
                        <p className="mt-2 text-[8px] font-semibold">
                          Chat
                        </p>
                      </div>

                      <div className="rounded-xl bg-white p-3 text-[#533E23] shadow-sm">
                        <Heart size={14} />
                        <p className="mt-2 text-[8px] font-semibold">
                          Wellness
                        </p>
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="mt-5 flex items-center justify-around border-t border-[#533E23]/10 pt-4 text-[#533E23]/30">
                      <CalendarCheck size={14} />
                      <MessageCircle size={14} />
                      <Heart size={14} />
                      <Smartphone size={14} />
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOATING REMINDER */}
              <div className="absolute right-[3%] top-[18%] z-30 rounded-2xl bg-white p-3 shadow-xl sm:right-[7%]">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DFC24D]/20 text-[#533E23]">
                    <Bell size={16} />
                  </div>

                  <div>
                    <p className="text-[9px] text-[#533E23]/45">
                      Reminder
                    </p>

                    <p className="text-xs font-semibold text-[#533E23]">
                      Treatment tomorrow
                    </p>
                  </div>
                </div>
              </div>

              {/* FLOATING CHAT */}
              <div className="absolute bottom-[18%] right-[4%] z-30 rounded-2xl bg-[#C14C38] px-4 py-3 text-white shadow-xl sm:right-[8%]">
                <div className="flex items-center gap-2">
                  <MessageCircle size={15} />

                  <span className="text-xs font-semibold">
                    Chat with Purana
                  </span>
                </div>
              </div>

              {/* FLOATING LABEL */}
              <div className="absolute bottom-[12%] left-[4%] z-30 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md sm:block">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-[#DFC24D]" />

                  <span className="text-xs font-medium text-white/80">
                    Your wellness companion
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom feature strip */}
          <div className="grid border-t border-white/10 sm:grid-cols-3">
            <div className="border-b border-white/10 px-8 py-6 text-center sm:border-b-0 sm:border-r">
              <p className="font-serif text-xl text-white">
                Book anytime
              </p>

              <p className="mt-1 text-xs text-white/40">
                Manage appointments from anywhere
              </p>
            </div>

            <div className="border-b border-white/10 px-8 py-6 text-center sm:border-b-0 sm:border-r">
              <p className="font-serif text-xl text-white">
                Stay informed
              </p>

              <p className="mt-1 text-xs text-white/40">
                Receive important treatment reminders
              </p>
            </div>

            <div className="px-8 py-6 text-center">
              <p className="font-serif text-xl text-white">
                Stay connected
              </p>

              <p className="mt-1 text-xs text-white/40">
                Connect with the Purana Ayurveda team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppPromotion;