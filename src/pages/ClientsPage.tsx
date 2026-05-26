import PageBanner from "../components/PageBanner";
import EthanolClients from "../components/EthanolClients";
import FeedClients from "../components/FeedClients";
import { motion } from "framer-motion";
import { Quote, CheckCircle, ShieldAlert, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function ClientsPage() {
  const stats = [
    { value: "150K+ Tons", label: "Grains Supplied" },
    { value: "30+ Plants", label: "Refineries Served" },
    { value: "100% On-Time", label: "Vessel Sailings" },
    { value: "24/7 Desk", label: "Logistics Support" }
  ];

  const testimonials = [
    {
      quote: "AS Agro Exports has been our primary broken rice supplier for two years. Their consistency in moisture calibration and scheduled bulk truck dispatches has minimized our distillery downtime significantly.",
      author: "Director of Operations",
      company: "Leading Ethanol Distillery (Andhra Pradesh)"
    },
    {
      quote: "Procuring yellow maize for poultry feeds requires strict aflatoxin controls. Mr. Seshu Pampana's desk consistently delivers clean corn that matches our exact microbiological specifications.",
      author: "Chief Sourcing Manager",
      company: "East Coast Livestock Nutrition Co."
    }
  ];

  const mockLogos = [
    "Andhra Biofuels Ltd",
    "Godavari Grains & Feed",
    "AP Poultry Integrations",
    "Jebel Ali Food Distributors",
    "Haiphong Fermentations",
    "West Africa Grains Supply"
  ];

  return (
    <>
      <PageBanner title="Our Enterprise Partners" breadcrumb="Clients" />

      {/* 1. Success Metrics Counters Strip */}
      <section className="bg-green-tint py-12 px-6 md:px-12 lg:px-24 text-neutral-charcoal relative overflow-hidden border-b border-green-primary/10">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="mx-auto max-w-7xl relative z-10 grid gap-6 grid-cols-2 md:grid-cols-4 text-center">
          {stats.map((s, idx) => (
            <div key={idx} className="p-4 border-r border-green-primary/10 last:border-0">
              <p className="font-heading text-3xl font-extrabold text-amber-deep md:text-4xl">{s.value}</p>
              <p className="text-xs text-green-primary/85 font-semibold uppercase tracking-wider mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Ethanol Plant Clients */}
      <EthanolClients />

      {/* 3. Feed Plant Partners */}
      <FeedClients />

      {/* 4. Verified Client Testimonials */}
      <section className="bg-amber-tint py-20 px-6 md:px-12 lg:px-24 border-y border-amber-primary/10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="mb-3 inline-block rounded-full bg-amber-primary/20 px-3 py-1 text-xs font-semibold tracking-wider text-amber-deep uppercase">
              Client Feedback
            </span>
            <h2 className="font-heading text-3xl font-bold text-green-primary md:text-4xl">Trusted by Industry Leaders</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-green-tint bg-white p-8 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <Quote size={32} className="text-amber-primary/40 mb-4" />
                  <p className="text-sm italic leading-relaxed text-neutral-stone">"{t.quote}"</p>
                </div>
                <div className="mt-6 border-t border-green-tint/50 pt-4">
                  <p className="font-heading text-base font-bold text-neutral-charcoal">{t.author}</p>
                  <p className="text-xs font-semibold text-amber-deep mt-0.5">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Mock Brand Logos Grid */}
      <section className="bg-neutral-offwhite py-20 px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="mb-3 inline-block rounded-full bg-green-primary/5 border border-green-tint px-3 py-1 text-xs font-semibold tracking-wider text-green-primary uppercase">
              Trading Network
            </span>
            <h2 className="font-heading text-2xl font-bold text-green-primary md:text-3xl">Corporate Grains Network</h2>
          </div>

          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {mockLogos.map((logo, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-green-tint/60 bg-white p-5 flex items-center justify-center text-center shadow-xs hover:border-amber-primary transition-all duration-300 transform hover:scale-102"
              >
                <p className="font-heading text-xs font-bold text-green-primary/70 tracking-wide">{logo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RFQ Call to Action */}
      <section className="bg-amber-tint py-16 px-6 md:px-12 lg:px-24 border-t border-amber-primary/10 text-center">
        <div className="mx-auto max-w-3xl">
          <h3 className="font-heading text-3xl font-bold text-green-primary">Partner with a Reliable Supplier</h3>
          <p className="mt-4 text-sm leading-relaxed text-neutral-stone max-w-xl mx-auto">
            Become a part of our supply cooperative. Connect with our corporate billing desk to establish contract dispatches or request bulk samples.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-green-primary px-8 py-4 text-sm font-semibold text-white shadow-md hover:bg-amber-primary hover:text-green-primary transition-colors"
            >
              Request Corporate Account
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
