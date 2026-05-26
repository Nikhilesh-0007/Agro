import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronRight, ArrowLeft, CheckCircle, Ship, Award, Package, MessageSquare } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { motion } from "framer-motion";
import { useState } from "react";

// Import authentic local assets
import irImg from "@/assets/ir.png";
import maizeImg from "@/assets/maize.jpg";
import brRiceImg from "@/assets/br_rice.png";
import ddgsImg from "@/assets/DDGS.png";
import brandPrettyMamaImg from "@/assets/brand_pretty_mama.jpg";
import brandSafraImg from "@/assets/brand_safra.jpg";

const commodityData: Record<string, {
  name: string;
  titleName: string;
  image: string;
  desc: string;
  specs: { parameter: string; value: string }[];
  packaging: string[];
  destinations: string[];
  related: { name: string; id: string; image: string }[];
}> = {
  rice: {
    name: "Parboiled IR64 Rice",
    titleName: "IR64 Parboiled Rice (Premium Export Grade)",
    image: irImg,
    desc: "Our Parboiled IR64 Rice is highly demanded globally for its long grain, clean milling, and high nutritional value. Sourced directly from trusted farms in Andhra Pradesh, it undergoes rigorous parboiling processes to retain natural nutrients.",
    specs: [
      { parameter: "Average Length", value: "6.00 mm - 6.40 mm" },
      { parameter: "Broken", value: "5% Max" },
      { parameter: "Moisture", value: "14% Max" },
      { parameter: "Admixture", value: "1% Max" },
      { parameter: "Damage / Discolored", value: "1% Max" },
    ],
    packaging: ["25 kg / 50 kg PP Bags", "Non-woven bags", "Jute bags", "Bulk containers (20ft FCL)"],
    destinations: ["Benin (Cotonou)", "Togo (Lome)", "Ivory Coast (Abidjan)", "Guinea (Conakry)", "UAE", "United Kingdom"],
    related: [
      { name: "Yellow Maize", id: "maize", image: maizeImg },
      { name: "Broken Rice", id: "broken-rice", image: brRiceImg }
    ]
  },
  maize: {
    name: "Yellow Maize",
    titleName: "Yellow Maize / Corn (Animal Feed & Ethanol Grade)",
    image: maizeImg,
    desc: "Premium grade yellow maize harvested from prime agricultural regions. Sourced primarily for major poultry feed manufacturers and high-efficiency ethanol distillation plants, our maize offers excellent moisture control and starch content.",
    specs: [
      { parameter: "Starch Content", value: "70% Min" },
      { parameter: "Moisture", value: "13% - 14% Max" },
      { parameter: "Broken Grains", value: "2.5% Max" },
      { parameter: "Foreign Matter", value: "1.5% Max" },
      { parameter: "Aflatoxin", value: "20 ppb Max" },
    ],
    packaging: ["50 kg Jute Bags", "Bulk cargo vessel bulk loading", "Custom PP bags"],
    destinations: ["Ethanol Plants (A.P., Odisha)", "Poultry Feed Mills (Domestic)", "Vietnam", "Malaysia"],
    related: [
      { name: "Feed Products", id: "feed-products", image: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&w=600&q=80" },
      { name: "Ethanol Raw Grains", id: "ethanol-materials", image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  "broken-rice": {
    name: "Broken Rice (Grade A)",
    titleName: "Graded Broken Rice (High-Starch Industrial)",
    image: brRiceImg,
    desc: "Grade-A broken rice filtered during the milling process of premium non-basmati varieties. Highly rich in starch, it serves as the ultimate raw material for alcohol distilleries, ethanol fermentation, and animal feed preparation.",
    specs: [
      { parameter: "Broken Ratio", value: "100% Broken" },
      { parameter: "Moisture", value: "14% Max" },
      { parameter: "Starch Content", value: "75% Min" },
      { parameter: "Admixture", value: "1.5% Max" },
      { parameter: "Foreign Matter", value: "0.5% Max" },
    ],
    packaging: ["50 kg PP bags", "Loose bulk truck loaders"],
    destinations: ["A.P. Ethanol Distilleries", "Odisha Fermentation Plants", "Vietnam", "West Africa"],
    related: [
      { name: "Parboiled IR64", id: "rice", image: irImg },
      { name: "Ethanol Raw Grains", id: "ethanol-materials", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  "feed-products": {
    name: "Poultry & Cattle Feed Grains",
    titleName: "Premium Feed Grains & Ingredients",
    image: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&w=1200&q=80",
    desc: "Sourced and optimized specifically for industrial feed manufacturing plants. Our feed products feature clean grains, rich proteins, and low toxin levels, supporting cattle, aqua, and poultry farming verticals with standard nutritional profiles.",
    specs: [
      { parameter: "Protein Content", value: "9% - 12% Min" },
      { parameter: "Moisture", value: "13% Max" },
      { parameter: "Fibre", value: "4% Max" },
      { parameter: "Sand/Silica", value: "2% Max" },
    ],
    packaging: ["50 kg laminated PP bags", "Loose bulk dumpers"],
    destinations: ["South India Feed Plants", "East India Cattle Cooperatives", "Vietnam Feed Manufacturers"],
    related: [
      { name: "Yellow Maize", id: "maize", image: maizeImg },
      { name: "DDGS Feed", id: "ddgs", image: ddgsImg }
    ]
  },
  "ethanol-materials": {
    name: "Ethanol Raw Grains",
    titleName: "Ethanol Raw Grains (Distillery Fermentation Grade)",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=80",
    desc: "Specialized high-starch grains calibrated for bio-ethanol distillation. Undergoes strict testing to maximize fermentable sugar output, providing bio-fuel and ethanol refineries with standard grain volumes at highly competitive operational rates.",
    specs: [
      { parameter: "Starch Content", value: "72% Min" },
      { parameter: "Moisture", value: "14% Max" },
      { parameter: "Damaged Grains", value: "5% Max" },
      { parameter: "Foreign Matter", value: "2% Max" },
    ],
    packaging: ["Bulk dumpers", "50 kg unbranded PP sacks"],
    destinations: ["Andhra Pradesh Distilleries", "Odisha Bio-fuel Plants", "Regional Refineries"],
  },
  ddgs: {
    name: "DDGS (Distillers Grains)",
    titleName: "DDGS - Distillers Dried Grains with Solubles (Premium Feed Grade)",
    image: ddgsImg,
    desc: "A nutrient-rich, high-protein co-product of ethanol distillation, widely used as a cost-effective feed supplement for poultry, livestock, and aquaculture.",
    specs: [
      { parameter: "Crude Protein", value: "26% - 28% Min" },
      { parameter: "Moisture", value: "10% Max" },
      { parameter: "Crude Fat", value: "7% - 8% Min" },
      { parameter: "Crude Fibre", value: "9% Max" },
      { parameter: "Aflatoxin", value: "20 ppb Max" },
    ],
    packaging: ["50 kg PP bags", "Loose bulk truck loaders"],
    destinations: ["Domestic Feed Mills (AP, Karnataka, Tamil Nadu)", "Vietnam", "Bangladesh", "Sri Lanka"],
    related: [
      { name: "Yellow Maize", id: "maize", image: maizeImg },
      { name: "Broken Rice", id: "broken-rice", image: brRiceImg }
    ]
  }
};

export default function CommodityDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", qty: "", desc: "" });

  const commodity = id ? commodityData[id] : null;

  if (!commodity) {
    return (
      <div className="bg-neutral-offwhite min-h-screen py-32 text-center">
        <div className="mx-auto max-w-md px-6">
          <h2 className="font-heading text-3xl font-bold text-green-primary">Product Not Found</h2>
          <p className="mt-4 text-neutral-stone">The product you are looking for does not exist or has been moved.</p>
          <Link to="/commodities" className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-primary px-6 py-3 font-semibold text-green-primary hover:bg-amber-deep transition-colors">
            <ArrowLeft size={16} /> Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setFormData({ name: "", email: "", phone: "", qty: "", desc: "" });
    }, 4000);
  };

  return (
    <>
      <PageBanner title={commodity.name} breadcrumb={`Commodities / ${commodity.name}`} />
      
      <section className="bg-neutral-offwhite py-16 px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <button
            onClick={() => navigate("/commodities")}
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-green-primary hover:text-amber-primary transition-colors"
          >
            <ArrowLeft size={16} /> Back to Commodities Catalog
          </button>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: Product Images and Description */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-3xl shadow-md border border-green-tint"
              >
                <img
                  src={commodity.image}
                  alt={commodity.name}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-103"
                />
              </motion.div>

              <div className="rounded-3xl border border-green-tint bg-white p-6 md:p-8">
                <h3 className="font-heading text-2xl font-bold text-green-primary mb-4">Product Overview</h3>
                <p className="text-base leading-relaxed text-neutral-stone">{commodity.desc}</p>
                
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-tint text-amber-deep">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-stone uppercase">Quality</p>
                      <p className="text-sm font-bold text-green-primary">Certified</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-tint text-green-primary">
                      <Package size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-stone uppercase">Packaging</p>
                      <p className="text-sm font-bold text-green-primary">Bulk & PP</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-tint text-amber-deep">
                      <Ship size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-stone uppercase">Origin</p>
                      <p className="text-sm font-bold text-green-primary">India (AP)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Technical Specifications */}
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border border-green-tint bg-white p-6 md:p-8 shadow-sm">
                <h3 className="font-heading text-2xl font-bold text-green-primary mb-6">Technical Specifications</h3>
                <div className="overflow-hidden rounded-2xl border border-green-tint">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-green-primary/5 border-b border-green-tint">
                        <th className="py-4 px-6 text-sm font-bold text-green-primary">Parameter</th>
                        <th className="py-4 px-6 text-sm font-bold text-green-primary">Certified Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {commodity.specs.map((s, idx) => (
                        <tr key={idx} className="border-b border-green-tint/50 last:border-0 hover:bg-neutral-offwhite/50 transition-colors">
                          <td className="py-3.5 px-6 text-sm font-medium text-neutral-charcoal">{s.parameter}</td>
                          <td className="py-3.5 px-6 text-sm font-semibold text-amber-deep">{s.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Packaging and Freight Info */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-green-tint bg-white p-6">
                  <h4 className="font-heading text-lg font-bold text-green-primary mb-3">Packaging Standards</h4>
                  <ul className="flex flex-col gap-2 text-sm text-neutral-stone">
                    {commodity.packaging.map((p, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-green-tint bg-white p-6">
                  <h4 className="font-heading text-lg font-bold text-green-primary mb-3">Export Destinations</h4>
                  <ul className="flex flex-col gap-2 text-sm text-neutral-stone">
                    {commodity.destinations.map((d, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-primary" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Bags Showcase for Rice */}
          {id === "rice" && (
            <div className="mt-12 rounded-3xl border border-green-tint bg-white p-8 md:p-12 shadow-sm">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div>
                  <span className="mb-3 inline-block rounded-full bg-amber-tint border border-amber-primary/20 px-3 py-1 text-xs font-semibold tracking-wider text-amber-deep uppercase">
                    Export Branding & Packaging
                  </span>
                  <h3 className="font-heading text-3xl font-bold text-green-primary md:text-4xl">
                    Our House Brands & Custom Labeling
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-neutral-stone">
                    We supply our premium rice in recognized house brands — <strong>Pretty Mama</strong> and <strong>Safra</strong> — which have established strong market trust across key West African and Middle Eastern destination markets.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-stone">
                    Apart from our proprietary bag designs, <strong>we also export rice under Buyer's customized bag marks</strong>. We provide end-to-end support for custom printing, bag material selection (such as high-durability laminated PP, non-woven fabrics, or Jute), weight configurations (typically 50kg, 25kg, or custom configurations), and localized English/French translations.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-6 text-sm text-green-primary font-bold">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-primary" />
                      Pretty Mama Series
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-green-primary" />
                      Safra Premium Bags
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-primary" />
                      Buyer's Custom Marks (OEM)
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl border border-green-tint shadow-sm group">
                    <img
                      src={brandPrettyMamaImg}
                      alt="Pretty Mama Brand Bags"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="p-4 bg-green-tint/10">
                      <h4 className="font-heading text-base font-bold text-green-primary">Pretty Mama</h4>
                      <p className="text-[11px] text-neutral-stone mt-1">Available in White Rice, 5% and 25% Broken, and Parboiled variants.</p>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-green-tint shadow-sm group">
                    <img
                      src={brandSafraImg}
                      alt="Safra Brand Bag"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="p-4 bg-green-tint/10">
                      <h4 className="font-heading text-base font-bold text-green-primary">Safra</h4>
                      <p className="text-[11px] text-neutral-stone mt-1">5% Broken Indian Long Grain Parboiled Rice flagship packaging.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Row: RFQ Inquiry Form */}
          <div className="mt-12 rounded-3xl bg-green-tint border border-green-primary/10 p-8 md:p-12 text-neutral-charcoal shadow-md relative overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-10" />
            <div className="relative z-10 grid gap-10 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <span className="inline-block rounded-full bg-amber-tint border border-amber-primary/20 px-3 py-1 text-xs font-semibold tracking-wider text-amber-deep uppercase mb-4">
                  Request For Quote
                </span>
                <h3 className="font-heading text-3xl font-bold text-green-primary md:text-4xl">Get Corporate Pricing</h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-stone">
                  Submit your bulk procurement requirements and our export team will contact you with exact CIF/FOB pricing, shipping timelines, and payment options within 24 hours.
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm text-green-primary font-bold">
                  <MessageSquare size={16} />
                  Direct WhatsApp Response Enabled
                </div>
              </div>

              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    placeholder="Contact Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl border border-green-primary/15 bg-white px-4 py-3 text-sm text-neutral-charcoal placeholder:text-neutral-stone/60 focus:border-green-primary focus:ring-1 focus:ring-green-primary focus:outline-none transition-all"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Corporate Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl border border-green-primary/15 bg-white px-4 py-3 text-sm text-neutral-charcoal placeholder:text-neutral-stone/60 focus:border-green-primary focus:ring-1 focus:ring-green-primary focus:outline-none transition-all"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Phone (WhatsApp Number)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="rounded-xl border border-green-primary/15 bg-white px-4 py-3 text-sm text-neutral-charcoal placeholder:text-neutral-stone/60 focus:border-green-primary focus:ring-1 focus:ring-green-primary focus:outline-none transition-all"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Estimated Quantity (Tons)"
                    value={formData.qty}
                    onChange={(e) => setFormData({ ...formData, qty: e.target.value })}
                    className="rounded-xl border border-green-primary/15 bg-white px-4 py-3 text-sm text-neutral-charcoal placeholder:text-neutral-stone/60 focus:border-green-primary focus:ring-1 focus:ring-green-primary focus:outline-none transition-all"
                  />
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe Packaging & Destination Requirements..."
                    value={formData.desc}
                    onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                    className="rounded-xl border border-green-primary/15 bg-white px-4 py-3 text-sm text-neutral-charcoal placeholder:text-neutral-stone/60 focus:border-green-primary focus:ring-1 focus:ring-green-primary focus:outline-none transition-all sm:col-span-2"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-green-primary py-3.5 text-sm font-semibold text-white shadow-md hover:bg-amber-primary hover:text-green-primary transition-all transform active:scale-98 sm:col-span-2"
                  >
                    Submit Quotation Request
                  </button>
                </form>
                
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 flex items-center gap-2 rounded-xl bg-green-primary/10 border border-green-primary/20 p-3 text-sm text-green-primary"
                  >
                    <CheckCircle size={16} />
                    Thank you! Your quotation request has been submitted successfully. Our desk will contact you shortly.
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Related Products Carousel */}
          <div className="mt-16">
            <h3 className="font-heading text-2xl font-bold text-green-primary mb-6">Related Commodities</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {commodity.related.map((r) => (
                <Link
                  key={r.id}
                  to={`/commodities/${r.id}`}
                  className="group relative h-48 overflow-hidden rounded-3xl shadow-sm border border-green-tint"
                >
                  <img
                    src={r.image}
                    alt={r.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-primary/90 via-green-primary/40 to-transparent" />
                  <div className="absolute bottom-5 left-6 text-white">
                    <p className="text-xs font-semibold tracking-wider text-amber-primary uppercase">Explore Grade</p>
                    <h4 className="font-heading text-xl font-bold mt-1 flex items-center gap-1 group-hover:text-amber-primary transition-colors">
                      {r.name} <ChevronRight size={16} />
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
