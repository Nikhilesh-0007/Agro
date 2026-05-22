import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, User, ArrowUp } from "lucide-react";
import logoImg from "@/assets/logo.jpeg";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Commodities", href: "#commodities" },
    { label: "Segments", href: "#segments" },
    { label: "Clients", href: "#clients" },
    { label: "Export Countries", href: "#countries" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#111612] text-white/95 pt-20 pb-8 overflow-hidden border-t border-green-primary/20">
      {/* Decorative light green/yellow gradient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[150px] bg-gradient-to-b from-green-primary/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[150px] bg-gradient-to-b from-amber-primary/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 pb-16 border-b border-white/10">
          
          {/* Logo & About Column */}
          <div className="lg:col-span-1.5 flex flex-col gap-5">
            <a href="#home" className="flex items-center">
              <img
                src={logoImg}
                alt="AS Agro Exports"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </a>
            <p className="text-sm leading-relaxed text-white/70 mt-2">
              A premier trading and export company bridging India's rich agricultural heartland in Andhra Pradesh to global markets across Africa, UAE, Vietnam, and the UK. Committed to uncompromising quality in Rice, Maize, and allied agro commodities.
            </p>
            <div className="flex items-center gap-2 text-amber-primary text-xs font-semibold tracking-wider uppercase mt-1">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-primary animate-pulse" />
              Established & Logistics-Ready
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-lg font-bold text-amber-primary tracking-wide relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-amber-primary">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 mt-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-amber-primary transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/20 group-hover:bg-amber-primary transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Registered Office Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-lg font-bold text-amber-primary tracking-wide relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-amber-primary">
              Registered Office
            </h4>
            <div className="flex flex-col gap-3.5 mt-2 text-sm text-white/70">
              <div className="flex gap-3">
                <MapPin size={18} className="text-amber-primary shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <span className="font-semibold text-white block text-xs uppercase tracking-wider mb-1">Registered Address:</span>
                  D.No: 3-105 Indira Nagar,
                  <br />
                  Opp: GBR College, Anaparthi,
                  <br />
                  East Godavari District, A.P - 533342
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                <Clock size={16} className="text-amber-primary shrink-0" />
                <span>Hours: 9 AM - 6 PM (All 7 Days)</span>
              </div>
            </div>
          </div>

          {/* Corporate Office & Contact Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-lg font-bold text-amber-primary tracking-wide relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-amber-primary">
              Corporate Office
            </h4>
            <div className="flex flex-col gap-3.5 mt-2 text-sm text-white/70">
              <div className="flex gap-3">
                <MapPin size={18} className="text-amber-primary shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <span className="font-semibold text-white block text-xs uppercase tracking-wider mb-1">Office Address:</span>
                  #16-23-36/2, 3rd Floor,
                  <br />
                  KVS Towers, Rajeevi Street,
                  <br />
                  Near Dairy Farm Centre,
                  <br />
                  Kakinada, A.P - 533003
                </p>
              </div>
              
              <div className="flex flex-col gap-2.5 border-t border-white/5 pt-3">
                <div className="flex items-center gap-3">
                  <User size={16} className="text-amber-primary shrink-0" />
                  <span>Mr. Seshu Pampana (Contact Person)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-amber-primary shrink-0" />
                  <a href="tel:+919666777667" className="hover:text-amber-primary transition-colors">
                    +91 966 677 7667
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-amber-primary shrink-0" />
                  <a href="mailto:asagroexportsltd@gmail.com" className="hover:text-amber-primary transition-colors break-all">
                    asagroexportsltd@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} AS Agro Exports. All Rights Reserved. Built for global agricultural trade excellence.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-white transition-colors">Terms of Service</a>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#F5A800", color: "#1A6B2F" }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white shadow-md transition-colors"
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
