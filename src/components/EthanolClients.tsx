import { motion } from "framer-motion";

const andhra = [
  "ASSAGO INDUSTRIES PVT LTD",
  "Dalvkot Bio Fuels Private Limited",
  "Sentini Bioproducts Private Limited",
];
const odisha = [
  "Coastal Biotech Private Limited",
  "Cuttack Agrivet Pvt Ltd",
  "Boudh Distillery Private Limited",
  "Mass Biofuel Pvt Ltd",
];

function ClientCard({ name, state, i }: { name: string; state: string; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: i * 0.07 }}
      className="flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm"
    >
      <span className="text-sm font-medium text-white md:text-base">{name}</span>
      <span className="rounded-full bg-amber-primary/20 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-amber-primary uppercase">
        {state}
      </span>
    </motion.div>
  );
}

export default function EthanolClients() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-green-primary py-24 px-6 text-white md:px-12 lg:px-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #FFF5DD 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-widest text-amber-primary uppercase">
            Trusted Partners
          </p>
          <h2 className="font-heading text-4xl font-bold md:text-5xl">Ethanol Plant Clients</h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
            Supplying grains to leading ethanol producers across Andhra Pradesh and Odisha.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-[11px] font-bold tracking-[0.3em] text-amber-primary uppercase">
              Andhra Pradesh
            </p>
            <div className="flex flex-col gap-3">
              {andhra.map((n, i) => (
                <ClientCard key={n} name={n} state="A.P." i={i} />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-5 text-[11px] font-bold tracking-[0.3em] text-amber-primary uppercase">
              Odisha
            </p>
            <div className="flex flex-col gap-3">
              {odisha.map((n, i) => (
                <ClientCard key={n} name={n} state="Odisha" i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
