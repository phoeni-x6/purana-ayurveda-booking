import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="block">
          <div className="font-serif text-2xl font-semibold tracking-wide text-white">
            Purana Ayurveda
          </div>

          <div className="mt-0.5 text-[10px] uppercase tracking-[0.3em] text-white/70">
            Wellness & Ayurveda
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm text-white/90 md:flex">
          <Link
            to="/"
            className="transition hover:text-[#DFC24D]"
          >
            Home
          </Link>

          <Link
            to="/treatments"
            className="transition hover:text-[#DFC24D]"
          >
            Locations
          </Link>

          <Link
            to="/events"
            className="transition hover:text-[#DFC24D]"
          >
           Events
          </Link>

          <Link
            to="/consultation"
            className="transition hover:text-[#DFC24D]"
          >
           Online Consultation
          </Link>

          <Link
            to="/about-ayu"
            className="transition hover:text-[#DFC24D]"
          >
            About Ayurveda
          </Link>

          <Link
            to="/about"
            className="transition hover:text-[#DFC24D]"
          >
            About Us
          </Link>
        </nav>

        {/* Authentication */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-full px-5 py-2.5 text-sm font-medium text-white transition hover:text-[#DFC24D]"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-full bg-[#C14C38] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#A83F30]"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;