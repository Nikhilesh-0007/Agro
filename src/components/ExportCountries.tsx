import { motion } from "framer-motion";

const africa = [
  { flag: "🇧🇯", name: "Benin", port: "Cotonou" },
  { flag: "🇹🇬", name: "Togo", port: "Lome" },
  { flag: "🇨🇮", name: "Ivory Coast", port: "Abidjan" },
  { flag: "🇬🇳", name: "Guinea", port: "Conakry" },
  { flag: "🇸🇱", name: "Sierra Leone", port: "Freetown" },
  { flag: "🇸🇳", name: "Senegal", port: "Dakar" },
  { flag: "🇬🇲", name: "Gambia", port: "Banjul" },
  { flag: "🇦🇴", name: "Angola", port: "Luanda" },
];

const other = [
  { flag: "🇻🇳", name: "Vietnam" },
  { flag: "🇦🇪", name: "United Arab Emirates" },
  { flag: "🇬🇧", name: "United Kingdom" },
];

export default function ExportCountries() {
  return (
    <section id="countries" className="bg-amber-tint py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-widest text-amber-deep uppercase">
            Global Reach
          </p>
          <h2 className="font-heading text-4xl font-bold text-green-primary md:text-5xl">
            Our Global Footprint
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-stone md:text-lg">
            From the fields of Andhra Pradesh to ports around the world.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          <div className="rounded-3xl bg-white/70 p-8 backdrop-blur-sm lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-8 rounded-full bg-amber-primary" />
              <h3 className="font-heading text-2xl font-bold text-green-primary">
                African Continent
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {africa.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#F5A800",
                    color: "#1A6B2F",
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-amber-primary/30 bg-white px-4 py-2 text-sm font-medium text-neutral-charcoal shadow-sm"
                >
                  <span className="text-base">{c.flag}</span>
                  <span>{c.name}</span>
                  <span className="text-xs text-neutral-stone">· {c.port}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-green-primary p-8 text-white shadow-xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-8 rounded-full bg-amber-primary" />
              <h3 className="font-heading text-2xl font-bold">Other Destinations</h3>
            </div>
            <div className="flex flex-col gap-3">
              {other.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm"
                >
                  <span className="text-2xl">{c.flag}</span>
                  <span className="text-sm font-medium">{c.name}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-xs leading-relaxed text-white/70">
              Logistics-ready operations ensure timely delivery to major ports across three
              continents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
