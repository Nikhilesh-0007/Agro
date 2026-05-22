import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-field.jpg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Golden paddy field at sunrise in Andhra Pradesh"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-green-primary/70 via-green-primary/55 to-green-primary/85" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-24 text-center md:px-12"
      >
        <motion.span
          variants={item}
          className="inline-block rounded-full border border-amber-primary/40 bg-amber-primary/15 px-4 py-1.5 text-xs font-medium tracking-widest text-amber-primary uppercase backdrop-blur-sm"
        >
          From the Fields of Andhra Pradesh
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 font-heading text-5xl font-bold leading-[1.05] text-white md:text-7xl"
        >
          Rooted in the Fields.
          <br />
          <span className="text-amber-primary italic">Trusted</span> by the World.
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/85 md:text-xl"
        >
          Premium rice, maize & agro commodities — traded and exported from the heart of Andhra
          Pradesh to 10+ countries across Africa, UAE, Vietnam & the UK.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#commodities"
            className="rounded-full bg-amber-primary px-8 py-3 text-sm font-semibold text-green-primary shadow-lg shadow-amber-primary/30 hover:bg-amber-deep hover:text-white transition-colors"
          >
            Explore Commodities
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/70 px-8 py-3 text-sm font-semibold text-white hover:bg-white hover:text-green-primary transition-colors"
          >
            Partner With Us
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
