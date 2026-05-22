import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Globe, Factory, Handshake, Package } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { icon: Globe, value: 10, suffix: "+", label: "Countries Exported" },
  { icon: Factory, value: 20, suffix: "+", label: "Ethanol Plant Clients" },
  { icon: Handshake, value: 5, suffix: "+", label: "Feed Plant Partners" },
  { icon: Package, value: 4, suffix: "", label: "Core Commodities" },
];

export default function StatsStrip() {
  return (
    <section className="bg-green-primary py-14 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-12">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="mb-3 flex justify-center text-amber-primary">
              <s.icon size={36} strokeWidth={1.5} />
            </div>
            <div className="font-heading text-4xl font-bold text-amber-primary md:text-5xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-1 text-xs font-medium tracking-wider text-white/75 uppercase">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
