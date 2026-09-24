import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Lock, LogIn, Mail } from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Login data:", formData);

    // Backend/authentication will be connected later.
  };

  return (
    <div className="min-h-screen bg-[#EFE9C5]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Side */}
        <div className="relative hidden overflow-hidden bg-[#2F5D39] lg:flex">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
              alt="Ayurvedic wellness"
              className="h-full w-full object-cover opacity-30"
            />
          </div>

          <div className="absolute inset-0 bg-[#2F5D39]/75" />

          <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16">
            <Link to="/" className="text-white">
              <div className="font-serif text-3xl font-semibold">
                Purana Ayurveda
              </div>

              <div className="mt-1 text-xs uppercase tracking-[0.3em] text-white/70">
                Wellness & Ayurveda
              </div>
            </Link>

            <div className="max-w-lg">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#DFC24D] text-[#533E23]">
                <span className="text-2xl">✦</span>
              </div>

              <h1 className="font-serif text-5xl leading-tight text-white xl:text-6xl">
                Return to your natural balance.
              </h1>

              <p className="mt-6 max-w-md text-lg leading-8 text-white/75">
                Access your Purana Ayurveda account to manage your wellness
                journey and discover personalised Ayurvedic experiences.
              </p>
            </div>

            <p className="text-sm text-white/50">
              Traditional wisdom · Natural healing · Modern care
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <Link to="/" className="mb-10 block lg:hidden">
              <div className="font-serif text-3xl font-semibold text-[#2F5D39]">
                Purana Ayurveda
              </div>

              <div className="mt-1 text-xs uppercase tracking-[0.3em] text-[#533E23]/60">
                Wellness & Ayurveda
              </div>
            </Link>

            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                Welcome Back
              </p>

              <h2 className="font-serif text-4xl font-semibold text-[#533E23]">
                Sign in to your account
              </h2>

              <p className="mt-3 text-[#533E23]/65">
                Continue your wellness journey with Purana Ayurveda.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
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

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-[#533E23]"
                  >
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-xs font-medium text-[#2F5D39] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#533E23]/45"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      })
                    }
                    required
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

              {/* Remember */}
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.remember}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      remember: e.target.checked,
                    })
                  }
                  className="h-4 w-4 accent-[#2F5D39]"
                />

                <span className="text-sm text-[#533E23]/65">
                  Remember me
                </span>
              </label>

              {/* Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C14C38] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#C14C38]/15 transition hover:bg-[#A83F30] hover:shadow-xl"
              >
                <LogIn size={18} />
                Login
              </button>
            </form>

            {/* Signup */}
            <p className="mt-8 text-center text-sm text-[#533E23]/65">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-[#2F5D39] hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;