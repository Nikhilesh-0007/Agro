import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, FlaskConical, Wheat, Egg, Globe } from "lucide-react";

const segments = [
  {
    id: "ethanol",
    icon: <Flame size={22} className="text-amber-deep" />,
    name: "Ethanol Plants",
    accent: "amber",
    desc: "We are a trusted grain supplier to leading ethanol producers across Andhra Pradesh and Odisha, delivering broken rice and maize at scale with consistent quality and timely logistics.",
  },
  {
    id: "ddgs",
    icon: <FlaskConical size={22} className="text-green-primary" />,
    name: "DDGS",
    accent: "green",
    desc: "Distillers Dried Grains with Solubles — a high-protein co-product of ethanol production that we channel into the feed industry as a cost-effective nutritional ingredient.",
  },
  {
    id: "feed",
    icon: <Wheat size={22} className="text-amber-deep" />,
    name: "Feed Plants",
    accent: "amber",
    desc: "Long-standing partnerships with India's top feed manufacturers — supplying maize and brokens that fuel cattle, aqua and poultry nutrition programmes nationwide.",
  },
  {
    id: "poultry",
    icon: <Egg size={22} className="text-green-primary" />,
    name: "Poultry",
    accent: "green",
    desc: "Direct supply to integrated poultry players, ensuring steady availability of grade-A maize and brokens for hatcheries, breeders and commercial layer farms.",
  },
  {
    id: "exports",
    icon: <Globe size={22} className="text-amber-deep" />,
    name: "Exports",
    accent: "amber",
    desc: "We export Parboiled IR64, White Rice, Brokens, and Maize to countries across Africa, the Middle East, Vietnam, and the UK. Our logistics-ready operations ensure timely delivery to major ports including Cotonou, Lome, Abidjan, and others.",
  },
];

export default function SegmentsSection() {
  const [active, setActive] = useState(segments[0].id);
  const current = segments.find((s) => s.id === active)!;

  return (
    <section id="segments" className="bg-green-tint py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-widest text-amber-deep uppercase">
            What We Serve
          </p>
          <h2 className="font-heading text-4xl font-bold text-green-primary md:text-5xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-stone md:text-lg">
            From distilleries to dinner tables — our grains power five key segments.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="flex flex-col gap-3 lg:col-span-2">
            {segments.map((s) => {
              const isActive = s.id === active;
              return (
                <motion.button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition-colors ${
                    isActive
                      ? "border-amber-primary bg-white shadow-md"
                      : "border-transparent bg-white/60 hover:bg-white"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${
                      s.accent === "amber" ? "bg-amber-tint" : "bg-green-tint"
                    }`}
                  >
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-heading text-lg font-semibold text-neutral-charcoal">
                      {s.name}
                    </p>
                  </div>
                  {isActive && (
                    <motion.span
                      layoutId="activeDot"
                      className="h-2 w-2 rounded-full bg-amber-primary"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          <div className="rounded-3xl bg-white border border-green-primary/10 p-8 text-neutral-charcoal shadow-md md:p-12 lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-tint text-amber-deep">
                  {current.icon}
                </div>
                <h3 className="font-heading text-3xl font-bold text-green-primary md:text-4xl">{current.name}</h3>
                <p className="mt-5 text-sm leading-relaxed text-neutral-stone md:text-base">
                  {current.desc}
                </p>
                <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-primary text-green-primary px-4 py-2 text-xs font-bold tracking-widest uppercase shadow-xs">
                  Active Vertical
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
