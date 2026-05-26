import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, User } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, x: -25 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="bg-neutral-offwhite py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl shadow-xl lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden bg-green-tint border-r border-green-primary/5 p-10 text-neutral-charcoal md:p-14"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #1B4928 1.5px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative">
            <p className="mb-3 text-xs font-semibold tracking-widest text-amber-deep uppercase">
              Let's Talk
            </p>
            <h2 className="font-heading text-4xl font-bold text-green-primary md:text-5xl">Get In Touch</h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-stone">
              Ready to partner with us? Our team is available all 7 days to discuss volumes,
              specifications and shipments.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-10 flex flex-col gap-5"
            >
              <motion.div variants={staggerItem}>
                <ContactRow icon={<MapPin size={18} />} label="Address">
                  <a
                    href="https://maps.app.goo.gl/1o8cH3wMgmybgzxi8?g_st=ac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-deep transition-colors"
                  >
                    #16-23-36/2, 3rd Floor, KVS Towers,
                    <br />
                    Kakinada, AP - 533003
                  </a>
                </ContactRow>
              </motion.div>
              <motion.div variants={staggerItem}>
                <ContactRow icon={<Phone size={18} />} label="Phone">
                  <a href="tel:+919666777667" className="hover:text-amber-deep">
                    +91 9 666 777 667
                  </a>
                </ContactRow>
              </motion.div>
              <motion.div variants={staggerItem}>
                <ContactRow icon={<Mail size={18} />} label="Email">
                  <a
                    href="mailto:asagroexportsltd@gmail.com"
                    className="hover:text-amber-deep"
                  >
                    asagroexportsltd@gmail.com
                  </a>
                </ContactRow>
              </motion.div>
              <motion.div variants={staggerItem}>
                <ContactRow icon={<Clock size={18} />} label="Hours">
                  9 AM – 6 PM · All 7 Days
                </ContactRow>
              </motion.div>
              <motion.div variants={staggerItem}>
                <ContactRow icon={<User size={18} />} label="Contact Person">
                  Mr. Seshu Pampana
                </ContactRow>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const name = formData.get("name") as string;
            const email = formData.get("email") as string;
            const phone = formData.get("phone") as string;
            const message = formData.get("message") as string;

            const whatsappText = `Hi AS Agro Exports,

I have submitted an enquiry on your website. Here are my details:

- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Message: ${message || "N/A"}

Looking forward to connecting!`;

            const encodedText = encodeURIComponent(whatsappText);
            window.location.href = `https://wa.me/919014868451?text=${encodedText}`;
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
              <Field label="Name" type="text" name="name" placeholder="Your full name" required />
              <Field label="Email" type="email" name="email" placeholder="you@company.com" required />
              <Field
                label="Phone"
                type="tel"
                name="phone"
                placeholder="e.g. 9666777667 or +919666777667"
                required
                pattern="(?:\+91|91|0)?[0-9]{10}"
                title="Please enter a valid 10-digit phone number (optionally starting with +91, 91, or 0)"
              />
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
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-primary/10 text-green-primary">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold tracking-widest text-green-primary uppercase">
          {label}
        </p>
        <div className="mt-0.5 text-sm leading-relaxed text-neutral-stone">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  type,
  name,
  placeholder,
  required = true,
  pattern,
  title,
}: {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
  pattern?: string;
  title?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold tracking-wider text-neutral-stone uppercase">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        pattern={pattern}
        title={title}
        placeholder={placeholder}
        className="w-full rounded-xl border border-green-tint px-4 py-3 text-sm text-neutral-charcoal placeholder:text-neutral-stone/60 focus:border-green-mid focus:ring-2 focus:ring-green-mid focus:outline-none"
      />
    </div>
  );
}
