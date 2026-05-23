import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logoBgImg from "@/assets/logo_background.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { 
    label: "Commodities", 
    to: "/commodities", 
    dropdown: [
      { label: "Parboiled IR64 Rice", to: "/commodities/rice" },
      { label: "Yellow Maize", to: "/commodities/maize" },
      { label: "Broken Rice", to: "/commodities/broken-rice" },
      { label: "Pearl & Finger Millets", to: "/commodities/millet" },
      { label: "Feed Grains & Products", to: "/commodities/feed-products" },
      { label: "Ethanol Raw Grains", to: "/commodities/ethanol-materials" }
    ]
  },
  { label: "Industries", to: "/segments" },
  { label: "Clients", to: "/clients" },
  { 
    label: "Global Footprint", 
    to: "/export-countries",
    dropdown: [
      { label: "United Arab Emirates", to: "/export-countries/uae" },
      { label: "Vietnam", to: "/export-countries/vietnam" },
      { label: "African Continent", to: "/export-countries/africa" }
    ]
  },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  
  // Hover states for desktop dropdowns
  const [commoditiesHovered, setCommoditiesHovered] = useState(false);
  const [exportsHovered, setExportsHovered] = useState(false);

  // Toggle states for mobile dropdowns
  const [mobileCommoditiesOpen, setMobileCommoditiesOpen] = useState(false);
  const [mobileExportsOpen, setMobileExportsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";
  const isSolid = !isHome || scrolled;

  return (
    <motion.nav
      animate={{
        backgroundColor: isSolid ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0)",
        boxShadow: isSolid ? "0 8px 30px rgba(0,0,0,0.06)" : "0 0 0 rgba(0,0,0,0)",
        borderColor: isSolid ? "rgba(245, 168, 0, 0.1)" : "rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.3 }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 md:px-12">
        <Link to="/" className="flex items-center">
          <img
            src={logoBgImg}
            alt="AS Agro Exports"
            className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-102"
          />
        </Link>

        {/* Desktop Links with Hover Dropdowns */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => {
            if (l.dropdown) {
              const isCommodities = l.label === "Commodities";
              const isHovered = isCommodities ? commoditiesHovered : exportsHovered;
              const setHovered = isCommodities ? setCommoditiesHovered : setExportsHovered;

              return (
                <div
                  key={l.to}
                  className="relative py-4"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 text-sm font-semibold transition-colors duration-200 ${
                        isSolid
                          ? isActive ? "text-amber-primary" : "text-green-primary hover:text-amber-primary"
                          : isActive ? "text-amber-primary" : "text-white hover:text-amber-primary"
                      }`
                    }
                  >
                    {l.label}
                    <motion.span
                      animate={{ rotate: isHovered ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block"
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                  </NavLink>

                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-64 rounded-2xl border border-amber-primary/10 bg-white p-4 shadow-xl backdrop-blur-md z-50 flex flex-col gap-1.5"
                      >
                        {l.dropdown.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            onClick={() => setHovered(false)}
                            className="rounded-xl px-3 py-2 text-xs font-semibold text-green-primary hover:bg-amber-primary/10 hover:text-amber-deep transition-all"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors duration-200 ${
                    isSolid
                      ? isActive ? "text-amber-primary" : "text-green-primary hover:text-amber-primary"
                      : isActive ? "text-amber-primary" : "text-white hover:text-amber-primary"
                  }`
                }
              >
                {l.label}
              </NavLink>
            );
          })}
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`rounded-full p-2 lg:hidden transition-colors ${
            isSolid ? "text-green-primary" : "text-white"
          }`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer with Accordion Dropdowns */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="border-t border-amber-primary/10 bg-white/98 backdrop-blur-md lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col px-6 py-4">
              {links.map((l) => {
                if (l.dropdown) {
                  const isCommodities = l.label === "Commodities";
                  const isOpen = isCommodities ? mobileCommoditiesOpen : mobileExportsOpen;
                  const setIsOpen = isCommodities ? setMobileCommoditiesOpen : setMobileExportsOpen;

                  return (
                    <div key={l.to} className="border-b border-green-primary/5 py-3 flex flex-col">
                      <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center justify-between text-sm font-semibold text-green-primary hover:text-amber-primary cursor-pointer"
                      >
                        <span>{l.label}</span>
                        <ChevronDown size={14} className={`transform transition-transform duration-200 ${isOpen ? "rotate-180 text-amber-primary" : ""}`} />
                      </div>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 flex flex-col gap-2.5 mt-2.5"
                          >
                            <Link
                              to={l.to}
                              onClick={() => { setOpen(false); setIsOpen(false); }}
                              className="text-xs font-bold text-amber-deep hover:text-amber-primary"
                            >
                              View All {l.label}
                            </Link>
                            {l.dropdown.map((sub) => (
                              <Link
                                key={sub.to}
                                to={sub.to}
                                onClick={() => { setOpen(false); setIsOpen(false); }}
                                className="text-xs font-semibold text-green-primary/80 hover:text-amber-primary"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `border-b border-green-primary/5 py-3 text-sm font-semibold transition-colors duration-200 ${
                        isActive ? "text-amber-primary" : "text-green-primary hover:text-amber-primary"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
