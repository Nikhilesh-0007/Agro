import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import riceImg from "@/assets/rice.png";
import maize from "@/assets/maize.jpg";
import hand from "@/assets/hand-paddy.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="bg-neutral-offwhite py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-xs font-semibold tracking-widest text-amber-deep uppercase">
            Who We Are
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-green-primary md:text-5xl">
            A Trusted Name in Agro Trade & Exports
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-stone md:text-lg">
            AS Agro Exports is a Kakinada-based agro trading and export company, specializing in
            rice, maize, and allied commodities. We supply to ethanol plants, feed plants, and
            poultry industries across Andhra Pradesh, Odisha, and beyond — while also handling
            international exports to Africa, UAE, Vietnam, and the UK.
          </p>
          <p className="mt-4 text-base leading-relaxed text-neutral-stone">
            Backed by years of field-level expertise, we are a bridge between India's agricultural
            heartland and global markets.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: <MapPin size={14} />, text: "Kakinada, A.P." },
              { icon: <Phone size={14} />, text: "+91 9 666 777 667" },
              { icon: <Clock size={14} />, text: "Open All 7 Days" },
            ].map((p) => (
              <span
                key={p.text}
                className="inline-flex items-center gap-2 rounded-full border border-green-tint bg-white px-4 py-2 text-sm font-medium text-green-primary shadow-sm"
              >
                {p.icon}
                {p.text}
              </span>
            ))}
          </div>

          <div className="mt-8 border-l-2 border-amber-primary pl-4">
            <p className="text-sm text-neutral-stone">Contact Person</p>
            <p className="font-heading text-lg font-semibold text-neutral-charcoal">
              Mr. Seshu Pampana (Mr. Ashwin)
            </p>
            <a
              href="mailto:asagroexportsltd@gmail.com"
              className="text-sm text-green-mid hover:text-green-primary"
            >
              asagroexportsltd@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <img
              src={hand}
              alt="Farmer holding paddy stalks"
              loading="lazy"
              width={800}
              height={800}
              className="aspect-[4/5] h-full w-full rounded-3xl object-cover shadow-md"
            />
            <div className="flex flex-col gap-4">
              <img
                src={riceImg}
                alt="Premium graded rice"
                loading="lazy"
                width={800}
                height={800}
                className="aspect-square w-full rounded-3xl object-cover shadow-md"
              />
              <img
                src={maize}
                alt="Maize cobs in basket"
                loading="lazy"
                width={800}
                height={800}
                className="aspect-square w-full rounded-3xl object-cover shadow-md"
              />
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-amber-primary px-5 py-3 shadow-xl">
            <p className="text-[10px] font-semibold tracking-widest text-green-primary uppercase">
              Established
            </p>
            <p className="font-heading text-lg font-bold text-green-primary">Kakinada · A.P.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
