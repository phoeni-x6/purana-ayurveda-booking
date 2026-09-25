import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Leaf,
  Mail,
  MapPin,
  Phone,
  User,
  Users,
} from "lucide-react";

type BookingStep = 1 | 2 | 3 | 4 | 5;

function Booking() {
  const [step, setStep] = useState<BookingStep>(1);

  const [bookingData, setBookingData] = useState({
    serviceType: "treatment",
    service: "Abhyanga",
    guestType: "",
    therapist: "No preference",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredLanguage: "",
    allergies: "",
    medicalConsiderations: "",
    notes: "",
    paymentMethod: "",
    consent: false,
  });

  const updateBooking = (field: string, value: string | boolean) => {
    setBookingData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (step < 5) {
      setStep((previous) => (previous + 1) as BookingStep);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep((previous) => (previous - 1) as BookingStep);
    }
  };

  const steps = [
    {
      number: 1,
      title: "Service",
    },
    {
      number: 2,
      title: "Date & Time",
    },
    {
      number: 3,
      title: "Your Details",
    },
    {
      number: 4,
      title: "Payment",
    },
    {
      number: 5,
      title: "Confirmation",
    },
  ];

  return (
    <div className="min-h-screen bg-[#EFE9C5]">
      {/* Header */}
      <header className="border-b border-[#533E23]/10 bg-white/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link to="/" className="block">
            <div className="font-serif text-2xl font-semibold text-[#2F5D39]">
              Purana Ayurveda
            </div>

            <div className="mt-0.5 text-[10px] uppercase tracking-[0.3em] text-[#533E23]/55">
              Wellness & Ayurveda
            </div>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#533E23]/65 transition hover:text-[#2F5D39]"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Page */}
      <main className="mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-14">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
            Your Wellness Journey
          </p>

          <h1 className="font-serif text-4xl font-semibold text-[#533E23] md:text-5xl">
            Book your experience
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[#533E23]/65">
            Choose your treatment, select a convenient time and complete your
            booking with Purana Ayurveda.
          </p>
        </div>

        {/* Progress */}
        {step !== 5 && (
          <div className="mb-10">
            <div className="mx-auto flex max-w-3xl items-center justify-between">
              {steps.slice(0, 4).map((item, index) => {
                const active = step >= item.number;

                return (
                  <div
                    key={item.number}
                    className="flex flex-1 items-center last:flex-none"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition ${
                          active
                            ? "bg-[#2F5D39] text-white"
                            : "bg-white text-[#533E23]/45"
                        }`}
                      >
                        {step > item.number ? (
                          <Check size={18} />
                        ) : (
                          item.number
                        )}
                      </div>

                      <span
                        className={`mt-2 hidden text-xs font-medium sm:block ${
                          active
                            ? "text-[#2F5D39]"
                            : "text-[#533E23]/40"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    {index < 3 && (
                      <div
                        className={`mx-3 h-px flex-1 ${
                          step > item.number
                            ? "bg-[#2F5D39]"
                            : "bg-[#533E23]/15"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Main Card */}
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl shadow-[#533E23]/5 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Sidebar */}
          <aside className="bg-[#2F5D39] p-8 text-white lg:p-10">
            <div className="mb-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#DFC24D] text-[#533E23]">
                <Leaf size={22} />
              </div>

              <h2 className="font-serif text-3xl">
                Your booking
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/65">
                Take your time and choose the experience that feels right for
                your wellness journey.
              </p>
            </div>

            {/* Selected Service */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                Selected service
              </p>

              <h3 className="mt-2 font-serif text-2xl">
                {bookingData.service}
              </h3>

              <div className="mt-4 space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-3">
                  <Clock3 size={16} />
                  75 minutes
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-base">€</span>
                  From €65
                </div>
              </div>
            </div>

            {/* Guest Type */}
            {bookingData.guestType && (
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Guest type
                </p>

                <p className="mt-2 text-sm text-white">
                  {bookingData.guestType}
                </p>
              </div>
            )}
          </aside>

          {/* Content */}
          <section className="p-6 sm:p-8 lg:p-10">
            {/* STEP 1 */}
            {step === 1 && (
              <div>
                <div className="mb-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                    Step 01
                  </p>

                  <h2 className="mt-2 font-serif text-3xl font-semibold text-[#533E23]">
                    Choose your experience
                  </h2>

                  <p className="mt-2 text-sm text-[#533E23]/60">
                    Select what you would like to book.
                  </p>
                </div>

                {/* Service Type */}
                <div className="mb-8">
                  <label className="mb-3 block text-sm font-semibold text-[#533E23]">
                    Service type
                  </label>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      {
                        value: "treatment",
                        title: "Treatment",
                        description: "Individual Ayurvedic treatments",
                        icon: <Leaf size={20} />,
                      },
                      {
                        value: "package",
                        title: "Long-Stay",
                        description: "Ayurveda wellness packages",
                        icon: <CalendarDays size={20} />,
                      },
                      {
                        value: "consultation",
                        title: "Consultation",
                        description: "Personal Ayurvedic consultation",
                        icon: <User size={20} />,
                      },
                    ].map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() =>
                          updateBooking("serviceType", item.value)
                        }
                        className={`rounded-2xl border p-5 text-left transition ${
                          bookingData.serviceType === item.value
                            ? "border-[#2F5D39] bg-[#2F5D39]/5 ring-2 ring-[#2F5D39]/10"
                            : "border-[#533E23]/10 hover:border-[#2F5D39]/40"
                        }`}
                      >
                        <div className="mb-4 text-[#2F5D39]">
                          {item.icon}
                        </div>

                        <h3 className="font-semibold text-[#533E23]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-[#533E23]/55">
                          {item.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Treatment */}
                <div className="mb-8">
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold text-[#533E23]"
                  >
                    Select treatment
                  </label>

                  <div className="relative">
                    <select
                      id="service"
                      value={bookingData.service}
                      onChange={(e) =>
                        updateBooking("service", e.target.value)
                      }
                      className="w-full appearance-none rounded-xl border border-[#533E23]/15 bg-[#EFE9C5]/30 px-4 py-3.5 text-sm text-[#533E23] outline-none focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10"
                    >
                      <option>Abhyanga</option>
                      <option>Ayurvedic Massage</option>
                      <option>Shirodhara</option>
                      <option>Ayurvedic Consultation</option>
                      <option>Head Massage</option>
                      <option>Foot Massage</option>
                    </select>

                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#533E23]/45"
                    />
                  </div>
                </div>

                {/* Guest Type */}
                <div>
                  <label className="mb-3 block text-sm font-semibold text-[#533E23]">
                    I am booking as
                  </label>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() =>
                        updateBooking("guestType", "Chalet Guest")
                      }
                      className={`rounded-2xl border p-5 text-left transition ${
                        bookingData.guestType === "Chalet Guest"
                          ? "border-[#2F5D39] bg-[#2F5D39]/5 ring-2 ring-[#2F5D39]/10"
                          : "border-[#533E23]/10 hover:border-[#2F5D39]/40"
                      }`}
                    >
                      <div className="mb-3 text-[#2F5D39]">
                        <MapPin size={21} />
                      </div>

                      <h3 className="font-semibold text-[#533E23]">
                        Chalet Guest
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-[#533E23]/55">
                        I am staying at a Purana Ayurveda chalet.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        updateBooking("guestType", "External Guest")
                      }
                      className={`rounded-2xl border p-5 text-left transition ${
                        bookingData.guestType === "External Guest"
                          ? "border-[#2F5D39] bg-[#2F5D39]/5 ring-2 ring-[#2F5D39]/10"
                          : "border-[#533E23]/10 hover:border-[#2F5D39]/40"
                      }`}
                    >
                      <div className="mb-3 text-[#2F5D39]">
                        <Users size={21} />
                      </div>

                      <h3 className="font-semibold text-[#533E23]">
                        External Guest
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-[#533E23]/55">
                        I am visiting Purana Ayurveda from outside.
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div>
                <div className="mb-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                    Step 02
                  </p>

                  <h2 className="mt-2 font-serif text-3xl font-semibold text-[#533E23]">
                    Choose date & time
                  </h2>

                  <p className="mt-2 text-sm text-[#533E23]/60">
                    Select your preferred therapist, date and available time.
                  </p>
                </div>

                {/* Therapist */}
                <div className="mb-6">
                  <label
                    htmlFor="therapist"
                    className="mb-2 block text-sm font-semibold text-[#533E23]"
                  >
                    Therapist
                  </label>

                  <div className="relative">
                    <select
                      id="therapist"
                      value={bookingData.therapist}
                      onChange={(e) =>
                        updateBooking("therapist", e.target.value)
                      }
                      className="w-full appearance-none rounded-xl border border-[#533E23]/15 bg-white px-4 py-3.5 text-sm text-[#533E23] outline-none focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10"
                    >
                      <option>No preference</option>
                      <option>Therapist 1</option>
                      <option>Therapist 2</option>
                      <option>Therapist 3</option>
                    </select>

                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#533E23]/45"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="mb-6">
                  <label
                    htmlFor="date"
                    className="mb-2 block text-sm font-semibold text-[#533E23]"
                  >
                    Preferred date
                  </label>

                  <div className="relative">
                    <CalendarDays
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#533E23]/45"
                    />

                    <input
                      id="date"
                      type="date"
                      value={bookingData.date}
                      onChange={(e) =>
                        updateBooking("date", e.target.value)
                      }
                      required
                      className="w-full rounded-xl border border-[#533E23]/15 bg-white px-4 py-3.5 pl-11 text-sm text-[#533E23] outline-none focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10"
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="mb-3 block text-sm font-semibold text-[#533E23]">
                    Available times
                  </label>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      "09:00",
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:00",
                    ].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => updateBooking("time", time)}
                        className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                          bookingData.time === time
                            ? "border-[#2F5D39] bg-[#2F5D39] text-white"
                            : "border-[#533E23]/15 text-[#533E23] hover:border-[#2F5D39]"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  <p className="mt-4 text-xs text-[#533E23]/50">
                    Availability will be calculated based on opening hours,
                    therapist availability, treatment duration and required
                    buffer time.
                  </p>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div>
                <div className="mb-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                    Step 03
                  </p>

                  <h2 className="mt-2 font-serif text-3xl font-semibold text-[#533E23]">
                    Your information
                  </h2>

                  <p className="mt-2 text-sm text-[#533E23]/60">
                    Tell us a little about yourself so we can prepare for your
                    visit.
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Names */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-2 block text-sm font-medium text-[#533E23]"
                      >
                        First Name
                      </label>

                      <input
                        id="firstName"
                        type="text"
                        placeholder="First name"
                        value={bookingData.firstName}
                        onChange={(e) =>
                          updateBooking("firstName", e.target.value)
                        }
                        required
                        className="w-full rounded-xl border border-[#533E23]/15 bg-white px-4 py-3.5 text-sm outline-none placeholder:text-[#533E23]/35 focus:border-[#2F5D39]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-2 block text-sm font-medium text-[#533E23]"
                      >
                        Last Name
                      </label>

                      <input
                        id="lastName"
                        type="text"
                        placeholder="Last name"
                        value={bookingData.lastName}
                        onChange={(e) =>
                          updateBooking("lastName", e.target.value)
                        }
                        required
                        className="w-full rounded-xl border border-[#533E23]/15 bg-white px-4 py-3.5 text-sm outline-none placeholder:text-[#533E23]/35 focus:border-[#2F5D39]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[#533E23]"
                    >
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#533E23]/40"
                      />

                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={bookingData.email}
                        onChange={(e) =>
                          updateBooking("email", e.target.value)
                        }
                        required
                        className="w-full rounded-xl border border-[#533E23]/15 bg-white px-4 py-3.5 pl-11 text-sm outline-none placeholder:text-[#533E23]/35 focus:border-[#2F5D39]"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-[#533E23]"
                    >
                      Mobile Number
                    </label>

                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#533E23]/40"
                      />

                      <input
                        id="phone"
                        type="tel"
                        placeholder="+49 000 000 000"
                        value={bookingData.phone}
                        onChange={(e) =>
                          updateBooking("phone", e.target.value)
                        }
                        required
                        className="w-full rounded-xl border border-[#533E23]/15 bg-white px-4 py-3.5 pl-11 text-sm outline-none placeholder:text-[#533E23]/35 focus:border-[#2F5D39]"
                      />
                    </div>
                  </div>

                  {/* Language */}
                  <div>
                    <label
                      htmlFor="language"
                      className="mb-2 block text-sm font-medium text-[#533E23]"
                    >
                      Preferred Language
                    </label>

                    <div className="relative">
                      <select
                        id="language"
                        value={bookingData.preferredLanguage}
                        onChange={(e) =>
                          updateBooking(
                            "preferredLanguage",
                            e.target.value
                          )
                        }
                        className="w-full appearance-none rounded-xl border border-[#533E23]/15 bg-white px-4 py-3.5 text-sm outline-none focus:border-[#2F5D39]"
                      >
                        <option value="">Select language</option>
                        <option>English</option>
                        <option>German</option>
                        <option>French</option>
                        <option>Other</option>
                      </select>

                      <ChevronDown
                        size={18}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#533E23]/40"
                      />
                    </div>
                  </div>

                  {/* Allergies */}
                  <div>
                    <label
                      htmlFor="allergies"
                      className="mb-2 block text-sm font-medium text-[#533E23]"
                    >
                      Allergies
                    </label>

                    <textarea
                      id="allergies"
                      rows={3}
                      placeholder="Please tell us about any known allergies..."
                      value={bookingData.allergies}
                      onChange={(e) =>
                        updateBooking("allergies", e.target.value)
                      }
                      className="w-full resize-none rounded-xl border border-[#533E23]/15 bg-white px-4 py-3.5 text-sm outline-none placeholder:text-[#533E23]/35 focus:border-[#2F5D39]"
                    />
                  </div>

                  {/* Medical */}
                  <div>
                    <label
                      htmlFor="medical"
                      className="mb-2 block text-sm font-medium text-[#533E23]"
                    >
                      Medical Considerations
                    </label>

                    <textarea
                      id="medical"
                      rows={3}
                      placeholder="Please provide any relevant information..."
                      value={bookingData.medicalConsiderations}
                      onChange={(e) =>
                        updateBooking(
                          "medicalConsiderations",
                          e.target.value
                        )
                      }
                      className="w-full resize-none rounded-xl border border-[#533E23]/15 bg-white px-4 py-3.5 text-sm outline-none placeholder:text-[#533E23]/35 focus:border-[#2F5D39]"
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label
                      htmlFor="notes"
                      className="mb-2 block text-sm font-medium text-[#533E23]"
                    >
                      Additional Notes
                    </label>

                    <textarea
                      id="notes"
                      rows={3}
                      placeholder="Anything else you would like us to know?"
                      value={bookingData.notes}
                      onChange={(e) =>
                        updateBooking("notes", e.target.value)
                      }
                      className="w-full resize-none rounded-xl border border-[#533E23]/15 bg-white px-4 py-3.5 text-sm outline-none placeholder:text-[#533E23]/35 focus:border-[#2F5D39]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div>
                <div className="mb-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                    Step 04
                  </p>

                  <h2 className="mt-2 font-serif text-3xl font-semibold text-[#533E23]">
                    Payment
                  </h2>

                  <p className="mt-2 text-sm text-[#533E23]/60">
                    Choose how you would like to pay for your booking.
                  </p>
                </div>

                {/* Booking Summary */}
                <div className="mb-8 rounded-2xl bg-[#EFE9C5]/40 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-[#533E23]/45">
                        Booking
                      </p>

                      <h3 className="mt-1 font-serif text-xl text-[#533E23]">
                        {bookingData.service}
                      </h3>
                    </div>

                    <p className="font-serif text-2xl font-semibold text-[#2F5D39]">
                      €65
                    </p>
                  </div>

                  <div className="mt-5 grid gap-3 border-t border-[#533E23]/10 pt-5 text-sm text-[#533E23]/65 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {bookingData.date || "Selected date"}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 size={16} />
                      {bookingData.time || "Selected time"}
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <label className="mb-3 block text-sm font-semibold text-[#533E23]">
                    Payment method
                  </label>

                  <div className="space-y-3">
                    {[
                      {
                        value: "stripe",
                        title: "Card Payment",
                        description: "Pay securely by card",
                      },
                      {
                        value: "paypal",
                        title: "PayPal",
                        description: "Pay using your PayPal account",
                      },
                      {
                        value: "cash",
                        title: "Pay at Location",
                        description: "Pay at Purana Ayurveda",
                      },
                    ].map((method) => (
                      <button
                        key={method.value}
                        type="button"
                        onClick={() =>
                          updateBooking("paymentMethod", method.value)
                        }
                        className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition ${
                          bookingData.paymentMethod === method.value
                            ? "border-[#2F5D39] bg-[#2F5D39]/5"
                            : "border-[#533E23]/15 hover:border-[#2F5D39]/40"
                        }`}
                      >
                        <div>
                          <p className="text-sm font-semibold text-[#533E23]">
                            {method.title}
                          </p>

                          <p className="mt-1 text-xs text-[#533E23]/50">
                            {method.description}
                          </p>
                        </div>

                        <div
                          className={`h-5 w-5 rounded-full border ${
                            bookingData.paymentMethod === method.value
                              ? "border-[#2F5D39] bg-[#2F5D39]"
                              : "border-[#533E23]/25"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Consent */}
                <label className="mt-8 flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={bookingData.consent}
                    onChange={(e) =>
                      updateBooking("consent", e.target.checked)
                    }
                    required
                    className="mt-1 h-4 w-4 accent-[#2F5D39]"
                  />

                  <span className="text-sm leading-6 text-[#533E23]/65">
                    I confirm that the information provided is accurate and I
                    agree to the booking and treatment terms.
                  </span>
                </label>
              </div>
            )}

            {/* STEP 5 */}
            {step === 5 && (
              <div className="py-10 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#2F5D39]/10">
                  <Check size={36} className="text-[#2F5D39]" />
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                  Booking received
                </p>

                <h2 className="mt-3 font-serif text-4xl font-semibold text-[#533E23]">
                  Your wellness journey begins here.
                </h2>

                <p className="mx-auto mt-4 max-w-lg leading-7 text-[#533E23]/65">
                  Thank you for choosing Purana Ayurveda. Your booking request
                  has been received. A confirmation will be sent to your email
                  address.
                </p>

                <div className="mx-auto mt-8 max-w-md rounded-2xl bg-[#EFE9C5]/50 p-6 text-left">
                  <div className="flex justify-between border-b border-[#533E23]/10 pb-4">
                    <span className="text-sm text-[#533E23]/55">
                      Treatment
                    </span>

                    <span className="text-sm font-semibold text-[#533E23]">
                      {bookingData.service}
                    </span>
                  </div>

                  <div className="flex justify-between py-4">
                    <span className="text-sm text-[#533E23]/55">
                      Date & Time
                    </span>

                    <span className="text-sm font-semibold text-[#533E23]">
                      {bookingData.date || "—"}{" "}
                      {bookingData.time || ""}
                    </span>
                  </div>

                  <div className="flex justify-between border-t border-[#533E23]/10 pt-4">
                    <span className="text-sm text-[#533E23]/55">
                      Payment
                    </span>

                    <span className="text-sm font-semibold capitalize text-[#2F5D39]">
                      {bookingData.paymentMethod || "Pending"}
                    </span>
                  </div>
                </div>

                <Link
                  to="/"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#2F5D39] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#244A2D]"
                >
                  Return to Home
                </Link>
              </div>
            )}

            {/* Navigation */}
            {step !== 5 && (
              <div className="mt-10 flex items-center justify-between border-t border-[#533E23]/10 pt-6">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={previousStep}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#533E23]/15 px-5 py-3 text-sm font-medium text-[#533E23] transition hover:border-[#2F5D39]"
                  >
                    <ArrowLeft size={17} />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#C14C38] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#A83F30]"
                  >
                    Continue
                    <ArrowRight size={17} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();

                      if (!bookingData.paymentMethod) {
                        alert("Please select a payment method.");
                        return;
                      }

                      if (!bookingData.consent) {
                        alert("Please accept the booking terms.");
                        return;
                      }

                      setStep(5);
                    }}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#C14C38] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#A83F30]"
                  >
                    Confirm Booking
                    <Check size={17} />
                  </button>
                )}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Booking;