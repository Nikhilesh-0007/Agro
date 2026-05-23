import { Link } from "react-router-dom";
import { ChevronRight, ShieldCheck, Ship, Target, Landmark, Award } from "lucide-react";
import Hero from "../components/Hero";
import StatsStrip from "../components/StatsStrip";
import { motion } from "framer-motion";
import portImg from "@/assets/port.jpg";
import grainImg from "@/assets/grain-close.jpg";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />

      {/* 1. Curated Corporate Overview Preview */}
      <section className="bg-neutral-offwhite py-20 px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-3 inline-block rounded-full bg-amber-primary/20 px-3 py-1 text-xs font-semibold tracking-wider text-amber-deep uppercase">
              Corporate Heritage
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-green-primary md:text-4xl">
              India's Agricultural Heartland, Exported Globally
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-stone">
              AS Agro Exports is a premier agro trading and export company based in Kakinada, Andhra Pradesh. Specializing in high-starch feed grains, Parboiled IR64 Rice, and bio-ethanol raw materials, we act as a trusted supply-chain partner for leading distilleries, poultry integrations, and global distribution ports.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-stone">
              Backed by robust logistics clearances and proximity to Visakhapatnam and Kakinada ports, we ensure steady, risk-mitigated supply lines 365 days a year.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-green-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-amber-primary hover:text-green-primary transition-colors"
              >
                Read Our Story <ChevronRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-green-primary/30 bg-white px-6 py-3 text-sm font-semibold text-green-primary hover:bg-green-primary/5 transition-colors"
              >
                Connect with Trade Desk
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-lg border border-green-tint">
              <img
                src={grainImg}
                alt="Golden grains close-up"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-103"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-amber-primary px-5 py-3 shadow-xl border border-amber-deep/10">
              <p className="text-[10px] font-bold tracking-widest text-green-primary uppercase">Direct Sourcing</p>
              <p className="font-heading text-base font-bold text-green-primary">Andhra Pradesh · India</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Curated Commodities Preview */}
      <section className="bg-amber-tint py-20 px-6 md:px-12 lg:px-24 border-y border-amber-primary/10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full bg-amber-primary/20 px-3 py-1 text-xs font-semibold tracking-wider text-amber-deep uppercase">
              Core Catalog
            </span>
            <h2 className="font-heading text-3xl font-bold text-green-primary md:text-4xl">Featured Export Commodities</h2>
            <p className="mt-3 text-sm text-neutral-stone">
              Carefully graded agricultural products sourced from prime growing belts with complete phytosanitary clearances.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: "rice",
                icon: "🌾",
                name: "Parboiled IR64 Rice",
                desc: "High-quality long-grain parboiled rice. The primary choice for global markets, especially west African ports.",
                tag: "Export Grade"
              },
              {
                id: "maize",
                icon: "🌽",
                name: "Yellow Maize",
                desc: "Standard yellow corn with low moisture, harvested specifically for feed mills and ethanol fermentation.",
                tag: "Industrial & Feed"
              },
              {
                id: "broken-rice",
                icon: "🍚",
                name: "Broken Rice (Grade A)",
                desc: "Graded broken rice rich in starch, delivering high fermentation efficiency for alcohol distilleries.",
                tag: "Distillery Raw"
              }
            ].map((c) => (
              <motion.div
                key={c.id}
                whileHover={{ y: -8 }}
                className="flex flex-col rounded-3xl border border-green-tint bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-tint text-2xl">
                  {c.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-neutral-charcoal">{c.name}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-neutral-stone">{c.desc}</p>
                
                <div className="mt-5 flex items-center justify-between">
                  <span className="rounded-full bg-amber-tint px-3 py-1 text-[10px] font-bold text-amber-deep uppercase">
                    {c.tag}
                  </span>
                  <Link
                    to={`/commodities/${c.id}`}
                    className="text-xs font-semibold text-green-primary hover:text-amber-primary transition-colors flex items-center gap-0.5"
                  >
                    View Specs <ChevronRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/commodities"
              className="inline-flex items-center gap-2 rounded-full bg-green-primary px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-amber-primary hover:text-green-primary transition-colors"
            >
              View Full Commodities Catalog <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Served Industries Preview */}
      <section className="bg-neutral-offwhite py-20 px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl grid items-center gap-12 lg:grid-cols-5">
          
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="inline-block self-start rounded-full bg-green-primary/5 border border-green-tint px-3 py-1 text-[10px] font-bold text-green-primary uppercase tracking-wide">
              Market Verticals
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-green-primary md:text-4xl">
              Powering Key Sectors
            </h2>
            <p className="text-sm leading-relaxed text-neutral-stone">
              From fueling massive ethanol fermentation refineries to providing premium energy-rich proteins for cattle, layer hatcheries, and global break-bulk freight vessels—our agricultural supply channels feed crucial domestic and international business sectors.
            </p>
            <div className="mt-4">
              <Link
                to="/segments"
                className="inline-flex items-center gap-2 rounded-full bg-green-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-amber-primary hover:text-green-primary transition-colors"
              >
                Explore Industry Verticals <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3 grid gap-4 sm:grid-cols-2">
            {[
              { icon: <Landmark size={20} />, title: "Ethanol Plants", text: "Providing high-volume yellow corn and broken grains directly to distillers." },
              { icon: <Target size={20} />, title: "Feed Mills", text: "Fueling livestock, cattle, and aquaculture feeds with protein-rich corn." },
              { icon: <ShieldCheck size={20} />, title: "Poultry Integrations", text: "Direct contracts to layer and commercial hatcheries for clean feed grains." },
              { icon: <Ship size={20} />, title: "Global Grains Trade", text: "Handling bulk charter shipments to major ports across three continents." }
            ].map((box, i) => (
              <div key={i} className="rounded-2xl border border-green-tint bg-white p-5 hover:border-amber-primary transition-colors">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-tint text-amber-deep">
                  {box.icon}
                </div>
                <h4 className="font-heading text-base font-bold text-neutral-charcoal">{box.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-neutral-stone">{box.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Global Footprint Preview */}
      <section className="bg-green-primary py-20 px-6 md:px-12 lg:px-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="mx-auto max-w-7xl relative z-10 grid items-center gap-12 lg:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-3 inline-block rounded-full bg-amber-primary/20 px-3 py-1 text-xs font-semibold tracking-wider text-amber-primary uppercase">
              Global Grains Desk
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl">
              Rapid Transit To 15+ International Ports
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/80">
              Our export freight division handles direct charters and 20ft containerized logistics. Routing from Kakinada and Visakhapatnam deep berths, we deliver regular grain shipments directly to main global ports like Cotonou, Lome, Abidjan, Haiphong, and Jebel Ali.
            </p>
            
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-primary/20 text-amber-primary">
                  <Award size={16} />
                </div>
                <p className="text-xs font-semibold">100% Pre-Shipment Inspection Certification (SGS / BV)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-primary/20 text-amber-primary">
                  <Ship size={16} />
                </div>
                <p className="text-xs font-semibold">Proximity to deep water berths ensures minimal handling delays</p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/export-countries"
                className="inline-flex items-center gap-2 rounded-full bg-amber-primary px-6 py-3 text-sm font-semibold text-green-primary shadow-md hover:bg-white hover:text-green-primary transition-colors"
              >
                View Shipping Routes & Ports <ChevronRight size={14} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-2xl border border-white/10"
          >
            <img
              src={portImg}
              alt="Cargo container loading port"
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* 5. Clean Final Call-to-Action */}
      <section className="bg-amber-tint py-16 px-6 md:px-12 lg:px-24 border-t border-amber-primary/10">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="font-heading text-3xl font-bold text-green-primary md:text-4xl">Establish a Secure Supply Line</h3>
          <p className="mt-4 text-sm leading-relaxed text-neutral-stone max-w-xl mx-auto">
            Contact Mr. Seshu Pampana at our trade desk to coordinate bulk grain procurement, discuss credit lines, or check loading port schedules.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-green-primary px-8 py-4 text-sm font-semibold text-white shadow-md hover:bg-amber-primary hover:text-green-primary transition-colors"
            >
              Contact Our Grains Desk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
