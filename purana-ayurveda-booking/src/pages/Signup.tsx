import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
  User,
} from "lucide-react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    if (!formData.terms) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    console.log("Signup data:", formData);

    // Backend/authentication will be connected later.
  };

  return (
    <div className="min-h-screen bg-[#EFE9C5]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Side */}
        <div className="relative hidden overflow-hidden bg-[#2F5D39] lg:flex">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85"
              alt="Ayurvedic wellness"
              className="h-full w-full object-cover opacity-30"
            />
          </div>

          <div className="absolute inset-0 bg-[#2F5D39]/75" />

          <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16">
            {/* Logo */}
            <Link to="/" className="text-white">
              <div className="font-serif text-3xl font-semibold">
                Purana Ayurveda
              </div>

              <div className="mt-1 text-xs uppercase tracking-[0.3em] text-white/70">
                Wellness & Ayurveda
              </div>
            </Link>

            {/* Main Message */}
            <div className="max-w-lg">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#DFC24D] text-[#533E23]">
                <span className="text-2xl">✦</span>
              </div>

              <h1 className="font-serif text-5xl leading-tight text-white xl:text-6xl">
                Begin your journey toward balance.
              </h1>

              <p className="mt-6 max-w-md text-lg leading-8 text-white/75">
                Create your Purana Ayurveda account and discover personalised
                treatments, wellness experiences and Ayurvedic care.
              </p>
            </div>

            {/* Bottom Text */}
            <p className="text-sm text-white/50">
              Traditional wisdom · Natural healing · Modern care
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16">
          <div className="w-full max-w-xl">
            {/* Back to Home */}
            <div className="mb-10">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#533E23]/65 transition hover:text-[#2F5D39]"
              >
                <ArrowLeft size={17} />
                Back to Home
              </Link>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                Welcome
              </p>

              <h2 className="font-serif text-4xl font-semibold text-[#533E23]">
                Create your account
              </h2>

              <p className="mt-3 text-[#533E23]/65">
                Join Purana Ayurveda and start your wellness journey.
              </p>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First Name & Last Name */}
              <div className="grid gap-5 sm:grid-cols-2">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium text-[#533E23]"
                  >
                    First Name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#533E23]/45"
                    />

                    <input
                      id="firstName"
                      type="text"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          firstName: e.target.value,
                        })
                      }
                      required
                      className="w-full rounded-xl border border-[#533E23]/15 bg-white px-4 py-3.5 pl-11 text-sm text-[#533E23] outline-none transition placeholder:text-[#533E23]/35 focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10"
                    />
                  </div>
                </div>

                {/* Last Name */}
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
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        lastName: e.target.value,
                      })
                    }
                    required
                    className="w-full rounded-xl border border-[#533E23]/15 bg-white px-4 py-3.5 text-sm text-[#533E23] outline-none transition placeholder:text-[#533E23]/35 focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10"
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
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#533E23]/45"
                  />

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    required
                    className="w-full rounded-xl border border-[#533E23]/15 bg-white px-4 py-3.5 pl-11 text-sm text-[#533E23] outline-none transition placeholder:text-[#533E23]/35 focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-[#533E23]"
                >
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#533E23]/45"
                  />

                  <input
                    id="phone"
                    type="tel"
                    placeholder="+49 000 000 000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    required
                    className="w-full rounded-xl border border-[#533E23]/15 bg-white px-4 py-3.5 pl-11 text-sm text-[#533E23] outline-none transition placeholder:text-[#533E23]/35 focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-[#533E23]"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#533E23]/45"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Minimum 8 characters"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      })
                    }
                    required
                    minLength={8}
                    className="w-full rounded-xl border border-[#533E23]/15 bg-white px-4 py-3.5 pl-11 pr-12 text-sm text-[#533E23] outline-none transition placeholder:text-[#533E23]/35 focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#533E23]/45 transition hover:text-[#2F5D39]"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-[#533E23]"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#533E23]/45"
                  />

                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Repeat your password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                    className="w-full rounded-xl border border-[#533E23]/15 bg-white px-4 py-3.5 pl-11 pr-12 text-sm text-[#533E23] outline-none transition placeholder:text-[#533E23]/35 focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#533E23]/45 transition hover:text-[#2F5D39]"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={formData.terms}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      terms: e.target.checked,
                    })
                  }
                  className="mt-1 h-4 w-4 accent-[#2F5D39]"
                />

                <span className="text-sm leading-6 text-[#533E23]/65">
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="font-medium text-[#2F5D39] hover:underline"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="font-medium text-[#2F5D39] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {/* Create Account Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C14C38] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#C14C38]/15 transition hover:bg-[#A83F30] hover:shadow-xl"
              >
                <Check size={18} />
                Create Account
              </button>
            </form>

            {/* Login Link */}
            <p className="mt-8 text-center text-sm text-[#533E23]/65">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#2F5D39] hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;