import { Award, Compass, Eye, ShieldAlert, Award as CertIcon, Warehouse, Tractor, Ship } from "lucide-react";
import PageBanner from "../components/PageBanner";
import AboutSection from "../components/AboutSection";
import { motion } from "framer-motion";
import handImg from "@/assets/hand-paddy.jpg";
import maizeImg from "@/assets/maize.jpg";

export default function AboutPage() {
  const certs = [
    { title: "APEDA Registration", agency: "Ministry of Commerce, India", code: "Agricultural Products Export Authority" },
    { title: "ISO 9001:2015", agency: "Accredited Quality Standard", code: "Quality Management Certified" },
    { title: "Phytosanitary Clearance", agency: "Ministry of Agriculture", code: "Accredited Pest & Bio Clearance" },
    { title: "Fumigation Endorsement", agency: "Govt Authorized Agencies", code: "Customs Clearance Approved" }
  ];

  return (
    <>
      <PageBanner title="Corporate Profile" breadcrumb="About" />

      {/* 1. Standard About Heritage Details */}
      <AboutSection />

      {/* 2. Vision, Mission & Core Values */}
      <section className="bg-amber-tint py-20 px-6 md:px-12 lg:px-24 border-y border-amber-primary/10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="mb-3 inline-block rounded-full bg-amber-primary/20 px-3 py-1 text-xs font-semibold tracking-wider text-amber-deep uppercase">
              Corporate Direction
            </span>
            <h2 className="font-heading text-3xl font-bold text-green-primary md:text-4xl">Our Purpose & Values</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-green-tint bg-white p-8 shadow-sm flex gap-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-tint text-amber-deep">
                <Compass size={24} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-green-primary mb-2">Our Mission</h3>
                <p className="text-sm leading-relaxed text-neutral-stone">
                  To serve as a reliable, logistics-perfect gateway between Indian farmers and industrial refiners, guaranteeing standard moisture grains, competitive trading rates, and robust contract safety across global borders.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-green-tint bg-white p-8 shadow-sm flex gap-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-tint text-green-primary">
                <Eye size={24} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-green-primary mb-2">Our Vision</h3>
                <p className="text-sm leading-relaxed text-neutral-stone">
                  To establish AS Agro Exports as the premier multi-commodity supply chain network from East Godavari, recognized for setting high compliance standards in bulk grain handling and clean marine exports.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Warehouse & Port Infrastructure */}
      <section className="bg-amber-tint py-20 px-6 md:px-12 lg:px-24 border-y border-amber-primary/10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">

            <div>
              <span className="mb-3 inline-block rounded-full bg-amber-primary/20 px-3 py-1 text-xs font-semibold tracking-wider text-amber-deep uppercase">
                Infrastructure Desk
              </span>
              <h2 className="font-heading text-3xl font-bold text-green-primary md:text-4xl">Equipped for Scale</h2>
              <p className="mt-5 text-sm leading-relaxed text-neutral-stone">
                Our logistics network relies on state-of-the-art warehouses and packaging facilities situated close to key farming fields and primary sea terminals.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-green-primary border border-green-tint">
                    <Warehouse size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-green-primary">30,000+ Sq Ft Storage</h4>
                    <p className="text-xs text-neutral-stone">Secured, moisture-monitored dry-storage warehouses holding reserve grain capacities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-green-primary border border-green-tint">
                    <Tractor size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-green-primary">Grading & Automated Sorting</h4>
                    <p className="text-xs text-neutral-stone">Pre-milling sorters filtering foreign admixtures to guarantee standard export grain specifications.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-green-primary border border-green-tint">
                    <Ship size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-green-primary">Terminal Proximity</h4>
                    <p className="text-xs text-neutral-stone">Direct customs clearing desk located near Kakinada and Visakhapatnam cargo shipping berths.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-md border border-green-tint">
              <img
                src={maizeImg}
                alt="Maize processing"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 5. Food Safety & Regulatory Clearance Certifications */}
      <section className="bg-neutral-offwhite py-20 px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="mb-3 inline-block rounded-full bg-green-primary/5 border border-green-tint px-3 py-1 text-xs font-semibold tracking-wider text-green-primary uppercase">
              Regulatory Compliance
            </span>
            <h2 className="font-heading text-3xl font-bold text-green-primary md:text-4xl">Verified Trade Certifications</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certs.map((c, idx) => (
              <div key={idx} className="rounded-2xl border border-green-tint bg-white p-6 shadow-sm flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-tint text-green-primary">
                  <CertIcon size={24} />
                </div>
                <h4 className="font-heading text-base font-bold text-neutral-charcoal">{c.title}</h4>
                <p className="text-xs text-amber-deep font-semibold mt-1">{c.agency}</p>
                <p className="mt-3 text-[10px] leading-relaxed text-neutral-stone uppercase tracking-wide border-t border-green-tint/50 pt-3 w-full">
                  {c.code}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Leadership Segment */}
      <section className="bg-amber-tint py-20 px-6 md:px-12 lg:px-24 border-t border-amber-primary/10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-amber-primary/20 px-3 py-1 text-xs font-semibold tracking-wider text-amber-deep uppercase">
            Corporate Leadership
          </span>
          <h2 className="font-heading text-3xl font-bold text-green-primary md:text-4xl">Managing Director's Desk</h2>

          <div className="mt-8 rounded-3xl border border-green-tint bg-white p-8 md:p-12 shadow-md relative">
            <div className="absolute -top-4 left-12 rounded-lg bg-amber-primary px-3 py-1 text-xs font-bold text-green-primary uppercase">
              Managing Director
            </div>
            <p className="text-base italic leading-relaxed text-neutral-stone">
              "At AS Agro Exports, our trading model is built on transparency, strict physical quality controls, and scheduling absolute on-time logistics sailings. We don't just act as brokers—we maintain skin in the game by managing local sourcing, storage facilities, and dock handling, building credibility with every metric ton shipped."
            </p>
            <div className="mt-6 border-t border-green-tint/50 pt-4 flex flex-col items-center">
              <p className="font-heading text-lg font-bold text-neutral-charcoal">Mr. Seshu Pampana</p>
              <p className="text-xs font-semibold text-amber-deep mt-0.5">Founder & Managing Director</p>
              <a href="mailto:asagroexportsltd@gmail.com" className="text-xs text-green-mid hover:text-green-primary mt-1">asagroexportsltd@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
