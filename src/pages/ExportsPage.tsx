import PageBanner from "../components/PageBanner";
import ExportCountries from "../components/ExportCountries";
import { motion } from "framer-motion";
import { Ship, Anchor, ShieldCheck, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ExportsPage() {
  const regions = [
    {
      id: "uae",
      flag: "🇦🇪",
      name: "United Arab Emirates",
      port: "Jebel Ali Port (Dubai)",
      transit: "7 - 10 Days",
      desc: "Our premium parboiled IR64 rice and agricultural commodities are delivered directly to major UAE food distribution syndicates."
    },
    {
      id: "vietnam",
      flag: "🇻🇳",
      name: "Vietnam",
      port: "Ho Chi Minh / Haiphong",
      transit: "12 - 15 Days",
      desc: "High-volume broken rice and yellow maize feeds shipped directly to Vietnamese industrial refineries."
    },
    {
      id: "africa",
      flag: "🌍",
      name: "African Continent",
      port: "Cotonou, Lome, Abidjan",
      transit: "25 - 32 Days",
      desc: "Dedicated break-bulk vessel dispatches feeding major markets across West and East Africa."
    },
    {
      id: "uk",
      flag: "🇬🇧",
      name: "United Kingdom",
      port: "Felixstowe / London",
      transit: "20 - 24 Days",
      desc: "Premium grade rice shipments and food raw materials shipped directly to British wholesale distribution partners."
    }
  ];

  return (
    <>
      <PageBanner title="Global Shipping & Export Network" breadcrumb="Export Network" />

      {/* 1. Regional Shipping Hubs Cards */}
      <section className="bg-neutral-offwhite py-20 px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="mb-3 inline-block rounded-full bg-green-primary/5 border border-green-tint px-3 py-1 text-xs font-semibold tracking-wider text-green-primary uppercase">
              Shipping Channels
            </span>
            <h2 className="font-heading text-3xl font-bold text-green-primary md:text-4xl">Primary Regional Shipping Lanes</h2>
            <p className="mt-3 text-sm text-neutral-stone leading-relaxed">
              We operate consistent marine lanes out of East India, managing bulk packaging and terminal clearings smoothly. Select your region below to view custom customs codes and port sailings.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((r) => (
              <motion.div
                key={r.id}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-green-tint bg-white p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl block mb-4">{r.flag}</span>
                  <h3 className="font-heading text-lg font-bold text-green-primary mb-2">{r.name}</h3>
                  <p className="text-xs text-neutral-stone leading-relaxed mb-6">{r.desc}</p>
                  
                  <div className="rounded-2xl bg-neutral-offwhite p-4 border border-green-tint/30 flex flex-col gap-2 text-[11px] font-semibold text-neutral-charcoal mb-6">
                    <div className="flex items-center gap-1.5"><Anchor size={14} className="text-amber-primary" /> <span>Port: <span className="font-bold text-green-primary">{r.port}</span></span></div>
                    <div className="flex items-center gap-1.5"><Calendar size={14} className="text-amber-primary" /> <span>Transit: <span className="font-bold text-amber-deep">{r.transit}</span></span></div>
                  </div>
                </div>

                <Link
                  to={`/export-countries/${r.id}`}
                  className="rounded-xl bg-green-primary/5 py-3 text-center text-xs font-bold text-green-primary border border-green-primary/10 hover:bg-amber-primary hover:text-green-primary transition-all flex items-center justify-center gap-1.5 group"
                >
                  View Custom Clearance Guide <ArrowRight size={12} className="transform transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Existing Export Countries ports listing */}
      <ExportCountries />

      {/* 3. Shipping Compliance Guarantee */}
      <section className="bg-neutral-offwhite py-20 px-6 md:px-12 lg:px-24 border-t border-green-tint/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            <div className="overflow-hidden rounded-3xl shadow-lg border border-green-tint">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
                alt="Freight lines container ship"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <div>
              <span className="mb-3 inline-block rounded-full bg-amber-primary/20 px-3 py-1 text-xs font-semibold tracking-wider text-amber-deep uppercase">
                Compliance Desk
              </span>
              <h2 className="font-heading text-3xl font-bold text-green-primary md:text-4xl">Marine Logistics & Compliance</h2>
              <p className="mt-5 text-sm leading-relaxed text-neutral-stone">
                Exporting agricultural commodities requires thorough quality checking and custom clearings. We maintain established linkages with global freight agencies to ensure compliant exports.
              </p>
              
              <div className="mt-8 flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-green-primary border border-green-tint">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-green-primary">SGS Pre-Inspection Seal</h4>
                    <p className="text-xs text-neutral-stone">Every vessel batch is tested and sealed at Kakinada Deep Water berths to assure weight parameters.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-green-primary border border-green-tint">
                    <Ship size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-green-primary">LCL & FCL Multi-Modes</h4>
                    <p className="text-xs text-neutral-stone">We support both containerized 20ft shipments for specialized grains and full cargo break-bulk charter vessels.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
