import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const YEAR = new Date().getFullYear();

interface FooterProps {
  onNavigate?: (view: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const nav = (view: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate?.(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-teal-dark text-white" data-ocid="footer.section">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">MA</span>
              </div>
              <div>
                <span className="font-bold text-xl block leading-none">
                  MauritiusAttractions
                </span>
                <span className="text-white/60 text-xs">
                  Discover The Island
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Mauritius Attractions curates the island&apos;s finest tours and
              activities so you can focus on creating memories.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Corporate Road, Makarba Ahmedabad, Gujarat
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 9227990612
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@bluestonetravels.com
              </p>
            </div>
          </div>

          {/* Activities */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">
              Activities
            </h4>
            <ul className="space-y-2">
              {[
                { label: "All Activities", view: "activities" },
                { label: "Special Offers", view: "special-offers" },
                { label: "Best Sellers", view: "best-sellers" },
                { label: "Tours", view: "tours" },
              ].map((item) => (
                <li key={item.view}>
                  <a
                    href="/"
                    onClick={nav(item.view)}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                    data-ocid="footer.link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Services</h4>
            <ul className="space-y-2">
              {[
                { label: "Accommodation", view: "accommodation" },
                { label: "Car Rental", view: "car-rental" },
                { label: "Travel Guide", view: "guide" },
              ].map((item) => (
                <li key={item.view}>
                  <a
                    href="/"
                    onClick={nav(item.view)}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                    data-ocid="footer.link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", view: "about" },
                { label: "Contact Us", view: "contact" },
              ].map((item) => (
                <li key={item.view}>
                  <a
                    href="/"
                    onClick={nav(item.view)}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                    data-ocid="footer.link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="font-semibold text-white mb-2">
              Get Travel Inspiration
            </h4>
            <p className="text-white/60 text-sm mb-4">
              Weekly picks, deals, and tips from our island experts.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/40"
                data-ocid="footer.newsletter.input"
              />
              <button
                type="button"
                className="bg-white text-teal-dark font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-white/90 transition-colors"
                data-ocid="footer.newsletter.submit_button"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; {YEAR} MauritiusAttractions. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white underline"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
              { icon: Youtube, label: "YouTube" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="/"
                aria-label={label}
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                data-ocid="footer.social.link"
              >
                <Icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
