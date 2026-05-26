import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImg from "@/assets/landingpage.jpeg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative mt-0 w-full min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Zooming background image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.12, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="h-full w-full bg-cover bg-[center_top] bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
      </div>

      {/* Soft gradient overlay blending the text directly into the background image */}
      <div className="absolute inset-0 bg-white/60 md:bg-transparent md:bg-gradient-to-r md:from-white/85 md:via-white/60 md:to-transparent flex items-center justify-start p-6 py-12 md:p-12 lg:p-24 z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto md:mx-0 max-w-2xl text-center md:text-left"
        >
          <motion.span
            variants={item}
            className="inline-block rounded-full bg-green-primary/10 text-green-primary border border-green-primary/20 px-5 py-2 text-xs font-bold tracking-widest uppercase shadow-sm"
          >
            From the Fields of Andhra Pradesh
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-heading text-4xl font-semibold leading-[1.2] text-green-primary sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
          >
            Rooted in the Fields.
            <br />
            <span className="text-[#D48A1D] italic">Trusted</span> by the World.
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto md:mx-0 mt-6 max-w-xl text-base leading-relaxed text-neutral-stone/90 sm:text-lg"
          >
            Premium Rice, Maize, DDGS & Agro Commodities — traded and exported from the heart of Andhra
            Pradesh to 10+ countries across Africa, UAE, Vietnam & the UK.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/commodities")}
              className="rounded-full bg-green-primary px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-amber-primary hover:text-green-primary transition-colors"
            >
              Explore Commodities
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/contact")}
              className="rounded-full border border-green-primary text-green-primary px-8 py-3 text-sm font-semibold hover:bg-green-primary hover:text-white transition-colors"
            >
              Partner With Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-green-primary/70"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
