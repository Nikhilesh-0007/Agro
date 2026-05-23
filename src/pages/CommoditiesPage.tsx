import { useState } from "react";
import PageBanner from "../components/PageBanner";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Table, ShieldAlert } from "lucide-react";

// Import authentic local assets
import handPaddy from "@/assets/hand-paddy.jpg";
import maizeImg from "@/assets/maize.jpg";
import grainClose from "@/assets/grain-close.jpg";

interface CommodityItem {
  id: string;
  name: string;
  category: "export" | "industrial" | "feed";
  tag: string;
  icon: string;
  image: string;
  desc: string;
  moisture: string;
  starchOrBroken: string;
}

const commoditiesList: CommodityItem[] = [
  {
    id: "rice",
    name: "Parboiled IR64 Rice",
    category: "export",
    tag: "Export Grade",
    icon: "🌾",
    image: handPaddy,
    desc: "Premium long grain parboiled IR64 rice. Sourced directly from Andhra Pradesh fields with high yield, highly popular across west African port markets.",
    moisture: "14% Max",
    starchOrBroken: "5% Max Brokens"
  },
  {
    id: "maize",
    name: "Yellow Maize / Corn",
    category: "feed",
    tag: "Animal Feed & Ethanol",
    icon: "🌽",
    image: maizeImg,
    desc: "Energy-rich yellow maize sourced for poultry feed mills, layer hatcheries, and distilleries. Features excellent moisture controls.",
    moisture: "13.5% Max",
    starchOrBroken: "70% Min Starch"
  },
  {
    id: "broken-rice",
    name: "Broken Rice (Grade A)",
    category: "industrial",
    tag: "Industrial Raw",
    icon: "🍚",
    image: grainClose,
    desc: "Grade-A broken rice sifted during non-basmati rice milling. Delivers high sugar yields and starch percentages for ethanol plants.",
    moisture: "14% Max",
    starchOrBroken: "75% Min Starch"
  },
  {
    id: "millet",
    name: "Millets (Pearl & Finger)",
    category: "export",
    tag: "Export Grade",
    icon: "🌾",
    image: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?auto=format&fit=crop&w=600&q=80",
    desc: "Highly nutritious Bajra and Ragi sourced from agricultural co-ops, processed for international food grids and birdfeed supplies.",
    moisture: "12% Max",
    starchOrBroken: "99% Purity Min"
  },
  {
    id: "feed-products",
    name: "Feed Grains & Products",
    category: "feed",
    tag: "Animal Feed",
    icon: "🐾",
    image: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&w=600&q=80",
    desc: "Clean maize and graded brokens calibrated for feed preparation, providing cattle and aqua cooperatives with excellent nutrients.",
    moisture: "13% Max",
    starchOrBroken: "9.5% Min Protein"
  },
  {
    id: "ethanol-materials",
    name: "Ethanol Raw Grains",
    category: "industrial",
    tag: "Distillery Raw",
    icon: "⚗️",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
    desc: "Bulk broken grain and starch materials optimized for fermentation pipelines in commercial bio-ethanol fuel distilleries.",
    moisture: "14% Max",
    starchOrBroken: "72% Min Starch"
  }
];

export default function CommoditiesPage() {
  const [filter, setFilter] = useState<"all" | "export" | "industrial" | "feed">("all");

  const filtered = filter === "all" ? commoditiesList : commoditiesList.filter((item) => item.category === filter);

  return (
    <>
      <PageBanner title="Our Commodities Catalog" breadcrumb="Commodities" />

      <section className="bg-neutral-offwhite py-16 px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          
          {/* Header Description */}
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="mb-3 inline-block rounded-full bg-amber-primary/20 px-3 py-1 text-xs font-semibold tracking-wider text-amber-deep uppercase">
              Global Grains Desk
            </span>
            <h2 className="font-heading text-3xl font-bold text-green-primary md:text-4xl">Bulk Grain & Commodity Catalog</h2>
            <p className="mt-3 text-sm text-neutral-stone leading-relaxed">
              We source directly from local farms in Andhra Pradesh, storing commodities under moisture-monitored conditions. Click on any category to view full specification logs, packing metrics, and port transit timelines.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {[
              { id: "all", label: "Show All Products" },
              { id: "export", label: "Premium Export Grade" },
              { id: "industrial", label: "Industrial Raw (Ethanol)" },
              { id: "feed", label: "Feed Grains & Products" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
                  filter === tab.id
                    ? "bg-green-primary text-white shadow-md"
                    : "bg-white text-green-primary border border-green-tint hover:bg-green-primary/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <motion.div
            layout
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((c) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={c.id}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl border border-green-tint bg-white p-5 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Panel */}
                    <div className="overflow-hidden rounded-2xl border border-green-tint/40 mb-5 relative group">
                      <img
                        src={c.image}
                        alt={c.name}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                      <span className="absolute top-3 right-3 rounded-full bg-[#111612]/80 backdrop-blur-sm px-3 py-1 text-[10px] font-bold text-amber-primary uppercase border border-amber-primary/20">
                        {c.tag}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{c.icon}</span>
                      <h3 className="font-heading text-lg font-bold text-neutral-charcoal">{c.name}</h3>
                    </div>

                    <p className="text-xs leading-relaxed text-neutral-stone mb-5">{c.desc}</p>
                    
                    {/* High level specification log */}
                    <div className="rounded-xl bg-neutral-offwhite p-3 border border-green-tint/30 flex justify-between text-[11px] font-semibold text-neutral-charcoal mb-5">
                      <div>
                        <span className="text-neutral-stone uppercase block text-[9px]">Moisture</span>
                        <span className="font-bold text-green-primary">{c.moisture}</span>
                      </div>
                      <div className="border-l border-green-tint/50 px-3 flex flex-col items-end text-right">
                        <span className="text-neutral-stone uppercase block text-[9px]">Main Metric</span>
                        <span className="font-bold text-amber-deep">{c.starchOrBroken}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={`/commodities/${c.id}`}
                    className="rounded-xl bg-green-primary/5 py-3 text-center text-xs font-bold text-green-primary border border-green-primary/10 hover:bg-amber-primary hover:text-green-primary transition-all flex items-center justify-center gap-1.5 group"
                  >
                    <Table size={14} /> Product Specification Sheet <ArrowRight size={12} className="transform transition-transform group-hover:translate-x-1" />
                  </Link>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Sourcing Guarantee Banner */}
          <div className="mt-16 rounded-3xl bg-green-primary p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-10" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-4 items-center">
              <div className="lg:col-span-3">
                <span className="inline-block rounded-full bg-amber-primary/20 px-3 py-1 text-xs font-semibold tracking-wider text-amber-primary uppercase mb-3">
                  Sourcing Security
                </span>
                <h3 className="font-heading text-2xl font-bold">Uncompromising Quality Controls & Guarantee</h3>
                <p className="mt-3 text-xs leading-relaxed text-white/80">
                  Every grain parcel loaded from our warehouse undergoes double moisture calibration and automated sifting. Buyers can request full SGS or Bureau Veritas quantity and micro-biological inspections at Kakinada Port before sailings are approved.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Link
                  to="/contact"
                  className="rounded-full bg-amber-primary px-6 py-3.5 text-xs font-bold text-green-primary shadow-lg hover:bg-white hover:text-green-primary transition-colors"
                >
                  Contact Quality Desk
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
