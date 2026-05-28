import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, User, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import logoBgImg from "@/assets/logo_background.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Industries", to: "/segments" },
    { label: "Our Clients", to: "/clients" },
    { label: "Global Network", to: "/export-countries" },
    { label: "Contact Us", to: "/contact" },
  ];

  const commodities = [
    { label: "Parboiled Rice", to: "/commodities/rice" },
    { label: "Yellow Maize", to: "/commodities/maize" },
    { label: "Broken Rice", to: "/commodities/broken-rice" },
    { label: "Feed Grains", to: "/commodities/feed-products" },
    { label: "Ethanol Raw Grains", to: "/commodities/ethanol-materials" },
    { label: "DDGS (Distillers Grains)", to: "/commodities/ddgs" },
  ];

  const network = [
    { label: "United Arab Emirates", to: "/export-countries/uae" },
    { label: "Vietnam Network", to: "/export-countries/vietnam" },
    { label: "African Continent", to: "/export-countries/africa" },
    { label: "Full Shipping Ports", to: "/export-countries" },
  ];

  return (
    <footer className="relative bg-amber-tint text-neutral-charcoal pt-20 pb-8 overflow-hidden border-t border-amber-primary/10">
      {/* Decorative light green/yellow gradient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[150px] bg-gradient-to-b from-green-primary/5 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[150px] bg-gradient-to-b from-amber-primary/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-16 border-b border-green-primary/10">

          {/* Col 1: Logo & About Bio */}
          <div className="lg:col-span-1.5 flex flex-col gap-5">
            <Link to="/" className="flex items-center">
              <img
                src={logoBgImg}
                alt="AS Agro Exports"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-neutral-stone mt-2">
              A premier trading and export company bridging India's rich agricultural heartland in Andhra Pradesh to global markets. Committed to uncompromising quality in Rice, Maize, and allied agro commodities.
            </p>
            <div className="flex items-center gap-2 text-green-primary text-xs font-semibold tracking-wider uppercase mt-1">
              <span className="h-1.5 w-1.5 rounded-full bg-green-primary animate-pulse" />
              Established & Logistics-Ready
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-lg font-bold text-green-primary tracking-wide relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-amber-primary">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 mt-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-neutral-stone hover:text-amber-deep transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-neutral-stone/20 group-hover:bg-amber-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Commodities Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-lg font-bold text-green-primary tracking-wide relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-amber-primary">
              Commodities
            </h4>
            <ul className="flex flex-col gap-2.5 mt-2">
              {commodities.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-neutral-stone hover:text-amber-deep transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-neutral-stone/20 group-hover:bg-amber-primary transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Network Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-lg font-bold text-green-primary tracking-wide relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-amber-primary">
              Global Ports
            </h4>
            <ul className="flex flex-col gap-2.5 mt-2">
              {network.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-neutral-stone hover:text-amber-deep transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-neutral-stone/20 group-hover:bg-amber-primary transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Branch Office Details & Contact Person */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <h4 className="font-heading text-lg font-bold text-green-primary tracking-wide relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-amber-primary">
              Contact Desk
            </h4>
            <div className="flex flex-col gap-3.5 mt-2 text-sm text-neutral-stone">
              <a
                href="https://maps.app.goo.gl/1o8cH3wMgmybgzxi8?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-2"
              >
                <MapPin size={16} className="text-amber-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <p className="text-xs leading-relaxed text-neutral-stone group-hover:text-green-primary transition-colors">
                  <span className="font-semibold text-neutral-charcoal block">Corporate Office:</span>
                  KVS Towers, Rajeevi Street, Dairy Farm Centre, Kakinada, AP - 533003
                </p>
              </a>
              <div className="flex flex-col gap-2 border-t border-green-primary/10 pt-3">
                <div className="flex items-center gap-2">
                  <User size={14} className="text-amber-primary shrink-0" />
                  <span className="text-xs font-semibold text-neutral-charcoal">Mr. Seshu Pampana (Mr. Ashwin)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone size={14} className="text-amber-primary shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919666777667" className="text-xs hover:text-green-primary transition-colors">
                      +91 9 666 777 667
                    </a>
                    <a href="tel:+919866687667" className="text-xs hover:text-green-primary transition-colors">
                      +91 98666 87667
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-amber-primary shrink-0" />
                  <a href="mailto:asagroexportsltd@gmail.com" className="text-xs hover:text-green-primary transition-colors break-all">
                    asagroexportsltd@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-amber-primary shrink-0" />
                  <span className="text-xs">9 AM - 6 PM (7 Days)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-stone">
          <p>© {new Date().getFullYear()} AS Agro Exports. All Rights Reserved. Built for global agricultural trade excellence.</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-neutral-charcoal transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-neutral-charcoal transition-colors">Terms of Service</Link>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#1B4928", color: "#FFFFFF" }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-green-primary/10 text-green-primary shadow-sm transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
}
