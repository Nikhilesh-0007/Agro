import PageBanner from "../components/PageBanner";
import SegmentsSection from "../components/SegmentsSection";
import { motion } from "framer-motion";
import { Landmark, Compass, Target, ShieldCheck, Ship, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function SegmentsPage() {
  const industries = [
    {
      icon: <Landmark size={24} />,
      title: "Ethanol & Bio-Fuel Plants",
      desc: "Delivering high-starch broken grains and feedstocks to advanced distillation units. We operate custom dump loaders and bulk scheduling, maintaining consistent calorie inputs for year-round alcohol fermentation.",
      metric: "Starch Content: 72% Min"
    },
    {
      icon: <Target size={24} />,
      title: "Feed Mills & Co-operatives",
      desc: "Supporting the livestock and cattle industries with premium yellow maize and rich energy inputs. Sourced directly from farms and tested for aflatoxin levels, securing micro-biological feed standards.",
      metric: "Moisture Content: 13.5% Max"
    },
    {
      icon: <Compass size={24} />,
      title: "Poultry Integrations & Hatcheries",
      desc: "Direct bulk contracts with commercial hatcheries, commercial layer farms, and breeder cooperatives. Offering premium quality IR64 sifting brokens and high-energy maize kernels for hatcheries feed blends.",
      metric: "Aflatoxin: Under 20 ppb"
    },
    {
      icon: <Ship size={24} />,
      title: "Export Houses & Global Trade",
      desc: "We coordinate break-bulk marine cargo loaders and 20ft shipping container services. Routing directly from deep-water ports to main global trading hubs across three continents.",
      metric: "Transit Speeds: Port-to-Port"
    }
  ];

  return (
    <>
      <PageBanner title="Industries We Serve" breadcrumb="Segments" />

      {/* 1. Interactive Switcher Section */}
      <SegmentsSection />

      {/* 2. Expanded Detail Showcase Cards */}
      <section className="bg-amber-tint py-20 px-6 md:px-12 lg:px-24 border-t border-amber-primary/10">
        <div className="mx-auto max-w-7xl">
          
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="mb-3 inline-block rounded-full bg-amber-primary/20 px-3 py-1 text-xs font-semibold tracking-wider text-amber-deep uppercase">
              Corporate Scope
            </span>
            <h2 className="font-heading text-3xl font-bold text-green-primary md:text-4xl">Comprehensive Supply Capabilities</h2>
            <p className="mt-3 text-sm text-neutral-stone leading-relaxed">
              We understand that different industries require different grain calibrations. Our trading desk ensures that your specifications are matched at source.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-green-tint bg-white p-8 shadow-sm flex flex-col justify-between"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-tint text-amber-deep">
                    {ind.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-green-primary mb-3">{ind.title}</h3>
                    <p className="text-xs leading-relaxed text-neutral-stone">{ind.desc}</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-green-tint/50 pt-4 flex items-center justify-between text-[11px] font-bold">
                  <span className="text-neutral-stone uppercase">Calibration Standard:</span>
                  <span className="text-amber-deep">{ind.metric}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sourcing/Logistics Guarantee */}
          <div className="mt-16 rounded-3xl bg-green-primary p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-dot-pattern opacity-10" />
            <div className="relative z-10 grid gap-10 lg:grid-cols-5 items-center">
              <div className="lg:col-span-3">
                <span className="inline-block rounded-full bg-amber-primary/20 px-3 py-1 text-xs font-semibold tracking-wider text-amber-primary uppercase mb-4">
                  Corporate Credit
                </span>
                <h3 className="font-heading text-3xl font-bold">Established Trading Credit & Contracts</h3>
                <p className="mt-4 text-xs leading-relaxed text-white/80">
                  Are you a high-volume buyer? We offer flexible trading contracts, including custom LC (Letter of Credit) options, bank guarantees, and credit terms for verified domestic refineries and corporate livestock integrations.
                </p>
              </div>
              <div className="lg:col-span-2 flex justify-center lg:justify-end gap-3 flex-wrap">
                <Link
                  to="/contact"
                  className="rounded-full bg-amber-primary px-8 py-3.5 text-xs font-bold text-green-primary shadow-lg hover:bg-white hover:text-green-primary transition-colors"
                >
                  Request Credit Line
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
