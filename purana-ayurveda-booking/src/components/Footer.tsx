import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Camera,
  Mail,
  MapPin,
  Phone,
  Share2,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#533E23] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <h2 className="font-serif text-3xl">
                Purana Ayurveda
              </h2>

              <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[#DFC24D]">
                Wellness & Ayurveda
              </p>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
              Wellness rooted in tradition. Discover authentic Ayurvedic
              treatments and personalised experiences designed to restore
              balance to body and mind.
            </p>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#DFC24D] hover:text-[#DFC24D]"
              >
                <Camera size={17} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#DFC24D] hover:text-[#DFC24D]"
              >
                <Share2 size={17} />
              </a>

              <a
                href="#"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#DFC24D] hover:text-[#DFC24D]"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#DFC24D]">
              Explore
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-sm text-white/60">
              <Link
                to="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/treatments"
                className="transition hover:text-white"
              >
                Treatments
              </Link>

              <Link
                to="/packages"
                className="transition hover:text-white"
              >
                Packages
              </Link>

              <Link
                to="/about"
                className="transition hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/consultation"
                className="transition hover:text-white"
              >
                Consultation
              </Link>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#DFC24D]">
              Treatments
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-sm text-white/60">
              <Link
                to="/treatments"
                className="transition hover:text-white"
              >
                Ayurvedic Massage
              </Link>

              <Link
                to="/treatments"
                className="transition hover:text-white"
              >
                Abhyanga
              </Link>

              <Link
                to="/treatments"
                className="transition hover:text-white"
              >
                Shirodhara
              </Link>

              <Link
                to="/treatments"
                className="transition hover:text-white"
              >
                Wellness Treatments
              </Link>

              <Link
                to="/packages"
                className="transition hover:text-white"
              >
                Long-Stay Ayurveda
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#DFC24D]">
              Contact
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#C14C38]"
                />

                <p className="text-sm leading-6 text-white/60">
                  Purana Ayurveda
                  <br />
                  Steinberg am See
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={17}
                  className="shrink-0 text-[#C14C38]"
                />

                <a
                  href="tel:+490000000000"
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  +49 000 000 000
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={17}
                  className="shrink-0 text-[#C14C38]"
                />

                <a
                  href="mailto:info@purana-ayurveda.com"
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  info@purana-ayurveda.com
                </a>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/consultation"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#DFC24D] transition hover:text-white"
            >
              Book a consultation
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Purana Ayurveda. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;