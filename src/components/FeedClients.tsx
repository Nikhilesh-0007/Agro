import { motion } from "framer-motion";

const clients = [
  "Suguna Foods Private Limited",
  "SNEHA FARMS PVT. LTD",
  "Venkateshwara Hatcheries Pvt. Ltd.",
  "CARGILL India Pvt Ltd",
  "IFB Agro Industries Limited",
];

function initials(name: string) {
  const cleaned = name.replace(/[^A-Za-z ]/g, "").trim();
  const parts = cleaned.split(/\s+/);
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

export default function FeedClients() {
  return (
    <section className="bg-neutral-offwhite py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-widest text-amber-deep uppercase">
            Industry Leaders
          </p>
          <h2 className="font-heading text-4xl font-bold text-green-primary md:text-5xl">
            Feed Plant Partners
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-stone md:text-lg">
            Trusted by industry leaders in animal nutrition and agribusiness.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {clients.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-green-tint bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-tint font-heading text-xl font-bold text-green-primary">
                {initials(name).toUpperCase()}
              </div>
              <p className="font-heading text-sm font-semibold leading-tight text-neutral-charcoal">
                {name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
