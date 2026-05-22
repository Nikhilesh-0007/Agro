import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, User } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-neutral-offwhite py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl shadow-xl lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden bg-green-primary p-10 text-white md:p-14"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #FFF5DD 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative">
            <p className="mb-3 text-xs font-semibold tracking-widest text-amber-primary uppercase">
              Let's Talk
            </p>
            <h2 className="font-heading text-4xl font-bold md:text-5xl">Get In Touch</h2>
            <p className="mt-4 text-base leading-relaxed text-white/85">
              Ready to partner with us? Our team is available all 7 days to discuss volumes,
              specifications and shipments.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              <ContactRow icon={<MapPin size={18} />} label="Address">
                #16-23-36/2, 3rd Floor, KVS Towers,
                <br />
                Kakinada, AP - 533003
              </ContactRow>
              <ContactRow icon={<Phone size={18} />} label="Phone">
                <a href="tel:+919666777667" className="hover:text-amber-primary">
                  +91 966 677 7667
                </a>
              </ContactRow>
              <ContactRow icon={<Mail size={18} />} label="Email">
                <a
                  href="mailto:asagroexportsltd@gmail.com"
                  className="hover:text-amber-primary"
                >
                  asagroexportsltd@gmail.com
                </a>
              </ContactRow>
              <ContactRow icon={<Clock size={18} />} label="Hours">
                9 AM – 6 PM · All 7 Days
              </ContactRow>
              <ContactRow icon={<User size={18} />} label="Contact Person">
                Mr. Seshu Pampana
              </ContactRow>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="bg-white p-10 md:p-14"
        >
          <h3 className="font-heading text-2xl font-bold text-green-primary md:text-3xl">
            Send us a message
          </h3>
          <p className="mt-2 text-sm text-neutral-stone">
            We typically respond within one business day.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-2xl border border-green-tint bg-green-tint/50 p-8 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-primary text-2xl text-white">
                ✓
              </div>
              <p className="font-heading text-lg font-semibold text-green-primary">
                Thank you!
              </p>
              <p className="mt-1 text-sm text-neutral-stone">
                Your enquiry has been received. We'll be in touch shortly.
              </p>
            </div>
          ) : (
            <div className="mt-8 flex flex-col gap-4">
              <Field label="Name" type="text" name="name" placeholder="Your full name" />
              <Field label="Email" type="email" name="email" placeholder="you@company.com" />
              <Field label="Phone" type="tel" name="phone" placeholder="+91 ..." />
              <div>
                <label className="mb-1.5 block text-xs font-semibold tracking-wider text-neutral-stone uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about the commodity, quantity and destination..."
                  className="w-full rounded-xl border border-green-tint px-4 py-3 text-sm text-neutral-charcoal placeholder:text-neutral-stone/60 focus:border-green-mid focus:ring-2 focus:ring-green-mid focus:outline-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-2 w-full rounded-xl bg-amber-primary py-3 font-semibold text-green-primary shadow-md hover:bg-amber-deep hover:text-white transition-colors"
              >
                Send Enquiry
              </motion.button>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-primary/20 text-amber-primary">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold tracking-widest text-amber-primary uppercase">
          {label}
        </p>
        <div className="mt-0.5 text-sm leading-relaxed text-white/90">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  type,
  name,
  placeholder,
}: {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold tracking-wider text-neutral-stone uppercase">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-xl border border-green-tint px-4 py-3 text-sm text-neutral-charcoal placeholder:text-neutral-stone/60 focus:border-green-mid focus:ring-2 focus:ring-green-mid focus:outline-none"
      />
    </div>
  );
}
