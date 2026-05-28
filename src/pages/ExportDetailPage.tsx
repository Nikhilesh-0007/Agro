import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Ship, Calendar, ShieldCheck, MapPin, Anchor, ChevronRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { motion } from "framer-motion";

const destinationData: Record<string, {
  name: string;
  flag: string;
  image: string;
  desc: string;
  port: string;
  transit: string;
  freightType: string;
  commodities: string[];
  customs: string[];
  certifications: string[];
  routes: { from: string; to: string; stopovers: string }[];
}> = {
  uae: {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    desc: "The UAE stands as one of our most vital trading hubs in the Middle East. Through the Jebel Ali port in Dubai, we supply premium IR64 parboiled rice, and graded broken rice for food production to top distributors and packaging companies.",
    port: "Jebel Ali Port (Dubai)",
    transit: "7 - 10 Days",
    freightType: "Containerized Cargo (20ft FCL)",
    commodities: ["Parboiled IR64 Rice", "White Rice (Non-Basmati)", "Broken Rice"],
    customs: [
      "Customs Declaration (Bayyan)",
      "Phytosanitary Certificate from Govt of India",
      "Certificate of Origin (APEDA certified)",
      "Strict labeling detailing net weight, origin, and pack date in Arabic/English"
    ],
    certifications: ["ISO 9001:2015", "APEDA Registration", "HACCP Food Safety Certificate"],
    routes: [
      { from: "Visakhapatnam Port (VZG)", to: "Jebel Ali Port (DXB)", stopovers: "Direct Line" },
      { from: "Kakinada Deep Water Port (COPT)", to: "Jebel Ali Port (DXB)", stopovers: "Colombo port transshipment" }
    ]
  },
  vietnam: {
    name: "Vietnam",
    flag: "🇻🇳",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    desc: "Vietnam is a highly dynamic market utilizing Indian broken rice and yellow maize as essential feed and industrial materials. Sourcing from Kakinada deep-water berths, our shipments directly feed distilleries and animal feed manufacturing complexes.",
    port: "Ho Chi Minh Port / Haiphong Port",
    transit: "12 - 15 Days",
    freightType: "Bulk Vessel & Containerized Cargo",
    commodities: ["Broken Rice", "Yellow Maize (Animal Feed Grade)", "Ethanol Raw Grains"],
    customs: [
      "Vietnam Customs Import Declaration Form",
      "Fumigation Certification from accredited Indian agencies",
      "Phytosanitary inspection clearance certificate",
      "Commercial invoice, packing list, and bill of lading"
    ],
    certifications: ["APEDA Export Clearance", "Fumigation Endorsement", "SGS Quantity & Quality Certificate"],
    routes: [
      { from: "Kakinada Port (COPT)", to: "Ho Chi Minh Port (SGN)", stopovers: "Direct Bulk Line" },
      { from: "Visakhapatnam Port (VZG)", to: "Haiphong Port (HPH)", stopovers: "Singapore Port Transshipment" }
    ]
  },
  africa: {
    name: "African Continent",
    flag: "🌍",
    image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1200&q=80",
    desc: "Africa is the main global destination for our parboiled IR64 rice. Operating on a large bulk-handling capacity, we dispatch dedicated container vessels to premier west African hubs, establishing solid security for local food grains supply lines.",
    port: "Cotonou (Benin), Lome (Togo), Abidjan (Ivory Coast), Conakry (Guinea)",
    transit: "25 - 32 Days",
    freightType: "Break-bulk charter vessels & 20ft FCL Containers",
    commodities: ["Parboiled IR64 Rice (5% & 25% broken)", "White Rice (Non-Basmati)", "Yellow Maize"],
    customs: [
      "ECTN / BESC cargo tracking declaration forms",
      "Pre-shipment inspection certificates (SGS / Bureau Veritas)",
      "Strict phytosanitary and micro-biological clearance certificates",
      "Govt of India authorized APEDA trade certificates"
    ],
    certifications: ["APEDA Registered Export", "SGS Grade-A Seal", "Phytosanitary Clearance Certificate"],
    routes: [
      { from: "Kakinada Anchorage Port (COPT)", to: "Port of Cotonou (Benin)", stopovers: "Direct Break-bulk Route" },
      { from: "Visakhapatnam Port (VZG)", to: "Port of Lome (Togo)", stopovers: "Direct Container Line" },
      { from: "Kakinada Deep Water Port (COPT)", to: "Port of Abidjan (Ivory Coast)", stopovers: "Direct Container Line" }
    ]
  }
};

export default function ExportDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dest = id ? destinationData[id] : null;

  if (!dest) {
    return (
      <div className="bg-neutral-offwhite min-h-screen py-32 text-center">
        <div className="mx-auto max-w-md px-6">
          <h2 className="font-heading text-3xl font-bold text-green-primary">Destination Not Found</h2>
          <p className="mt-4 text-neutral-stone">The logistics profile you are looking for does not exist.</p>
          <Link to="/export-countries" className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-primary px-6 py-3 font-semibold text-green-primary hover:bg-amber-deep transition-colors">
            <ArrowLeft size={16} /> Back to Network
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageBanner title={`${dest.flag} ${dest.name}`} breadcrumb={`Exports / ${dest.name}`} />

      <section className="bg-neutral-offwhite py-16 px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <button
            onClick={() => navigate("/export-countries")}
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-green-primary hover:text-amber-primary transition-colors"
          >
            <ArrowLeft size={16} /> Back to Global Network Map
          </button>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: General Overview & Route Map details */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="overflow-hidden rounded-3xl shadow-md border border-green-tint"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="aspect-[16/10] w-full object-cover"
                />
              </motion.div>

              <div className="rounded-3xl border border-green-tint bg-white p-6 md:p-8">
                <h3 className="font-heading text-2xl font-bold text-green-primary mb-4">Export Overview</h3>
                <p className="text-base leading-relaxed text-neutral-stone">{dest.desc}</p>
                
                <div className="mt-8">
                  <h4 className="font-heading text-lg font-bold text-green-primary mb-4">Primary Export Commodities</h4>
                  <div className="flex flex-wrap gap-2">
                    {dest.commodities.map((c, i) => (
                      <span key={i} className="rounded-full bg-green-primary/5 border border-green-tint/50 px-4 py-2 text-sm font-semibold text-green-primary">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Shipping Routes & Customs specifications */}
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border border-green-tint bg-white p-6 md:p-8 shadow-sm">
                <h3 className="font-heading text-2xl font-bold text-green-primary mb-6">Logistics & Transit Profile</h3>
                
                <div className="grid gap-4 sm:grid-cols-2 mb-6">
                  <div className="rounded-2xl bg-neutral-offwhite p-4 border border-green-tint/30">
                    <p className="text-xs font-bold text-neutral-stone uppercase tracking-wide">Destination Ports</p>
                    <p className="mt-1 text-sm font-bold text-green-primary flex items-center gap-1.5">
                      <Anchor size={16} className="text-amber-primary" />
                      {dest.port}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-neutral-offwhite p-4 border border-green-tint/30">
                    <p className="text-xs font-bold text-neutral-stone uppercase tracking-wide">Avg Transit Duration</p>
                    <p className="mt-1 text-sm font-bold text-green-primary flex items-center gap-1.5">
                      <Calendar size={16} className="text-amber-primary" />
                      {dest.transit}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-neutral-offwhite p-4 border border-green-tint/30 sm:col-span-2">
                    <p className="text-xs font-bold text-neutral-stone uppercase tracking-wide">Freight Standard Mode</p>
                    <p className="mt-1 text-sm font-bold text-green-primary flex items-center gap-1.5">
                      <Ship size={16} className="text-amber-primary" />
                      {dest.freightType}
                    </p>
                  </div>
                </div>

                <h4 className="font-heading text-lg font-bold text-green-primary mb-3">Freight & Sailing Timetable</h4>
                <div className="flex flex-col gap-3">
                  {dest.routes.map((r, i) => (
                    <div key={i} className="rounded-2xl border border-green-tint/40 p-4 hover:border-amber-primary/40 transition-colors">
                      <div className="flex items-center justify-between text-sm font-bold text-green-primary">
                        <span className="flex items-center gap-1.5"><MapPin size={14} className="text-amber-primary" /> {r.from}</span>
                        <ChevronRight size={14} className="text-neutral-stone" />
                        <span className="flex items-center gap-1.5"><Anchor size={14} className="text-amber-primary" /> {r.to}</span>
                      </div>
                      <p className="mt-2 text-xs font-semibold text-neutral-stone">Sailing Service: <span className="text-amber-deep">{r.stopovers}</span></p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customs & Clearances */}
              <div className="rounded-3xl border border-green-tint bg-white p-6 md:p-8 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-green-primary mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-amber-primary" />
                  Customs Requirements & Trade Compliance
                </h3>
                <ul className="flex flex-col gap-3 text-sm text-neutral-stone">
                  {dest.customs.map((c, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-primary mt-2 flex-shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="mt-12 rounded-3xl bg-green-tint border border-green-primary/10 p-8 md:p-12 text-neutral-charcoal shadow-md text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-10" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="font-heading text-3xl font-bold text-green-primary">Secure Global Cargo Space</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-stone">
                Ready to export cargo? Reach out directly to our shipping division to coordinate vessel schedules, request freight rates, or review trading lines.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-primary px-8 py-3.5 font-semibold text-white shadow-md hover:bg-amber-primary hover:text-green-primary transition-colors"
              >
                Connect with Export Desk
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
