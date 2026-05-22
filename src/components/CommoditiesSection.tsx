import { motion } from "framer-motion";

const commodities = [
  {
    icon: "🌾",
    name: "Parboiled IR64 Rice",
    desc: "Andhra Pradesh's staple export variety, known for consistent quality and yield.",
    tag: "Export Grade",
  },
  {
    icon: "🍚",
    name: "White Rice (Non-Basmati)",
    desc: "High-quality non-basmati rice for domestic supply and international export markets.",
    tag: "Domestic & Export",
  },
  {
    icon: "🌾",
    name: "Brokens",
    desc: "Carefully graded broken rice, ideal for ethanol production and feed industry use.",
    tag: "Industrial",
  },
  {
    icon: "🌽",
    name: "Maize",
    desc: "Sourced directly for ethanol plants and poultry feed manufacturers across India.",
    tag: "Ethanol · Poultry",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function CommoditiesSection() {
  return (
    <section id="commodities" className="bg-amber-tint py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-widest text-amber-deep uppercase">
            What We Trade
          </p>
          <h2 className="font-heading text-4xl font-bold text-green-primary md:text-5xl">
            Our Core Commodities
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-stone md:text-lg">
            Premium quality, carefully sourced from the finest growing regions of Andhra Pradesh.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {commodities.map((c) => (
            <motion.div
              key={c.name}
              variants={item}
              whileHover={{ y: -8 }}
              className="flex flex-col rounded-3xl border border-green-tint bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-tint text-3xl">
                {c.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-neutral-charcoal">
                {c.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-stone">{c.desc}</p>
              <span className="mt-5 self-start rounded-full bg-amber-tint px-3 py-1 text-xs font-medium text-amber-deep">
                {c.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
