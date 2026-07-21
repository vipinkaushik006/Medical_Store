import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send, Clock3 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { BUSINESS } from "../assets/data";
import { SectionHeading } from "./Services";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = encodeURIComponent(
`Hello Vashisth Health Care,

👤 Name: ${form.name}
📞 Phone: ${form.phone}

💬 Message:
${form.message}`
    );

    window.open(
      `https://wa.me/${BUSINESS.whatsapp}?text=${text}`,
      "_blank"
    );

    setSent(true);

    setForm({
      name: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="We're Here Whenever You Need Us"
          subtitle="Call, message, or visit — we're open around the clock for your health needs."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-8">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <InfoCard
              icon={Phone}
              label="Call Us"
              value={BUSINESS.phoneDisplay}
              href={`tel:+91${BUSINESS.phone}`}
            />

            <InfoCard
              icon={FaWhatsapp}
              label="WhatsApp"
              value="Chat with us instantly"
              href={`https://wa.me/${BUSINESS.whatsapp}`}
            />

            <InfoCard
              icon={MapPin}
              label="Visit Us"
              value={BUSINESS.address}
            />

            <InfoCard
              icon={Clock3}
              label="Working Hours"
              value={BUSINESS.hours}
            />

            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-soft h-56 mt-1">
              <iframe
                title="Vashisth Health Care & Medical Store"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3510.1001616130866!2d76.7326959754919!3d28.386042575800186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDIzJzA5LjgiTiA3NsKwNDQnMDcuMCJF!5e0!3m2!1sen!2sin!4v1784615440734!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass rounded-3xl shadow-glass p-6 sm:p-10"
          >

            <div className="grid sm:grid-cols-2 gap-5">

              <Field
                label="Full Name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />

              <Field
                label="Phone Number"
                type="tel"
                placeholder="Your Phone Number"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                required
              />

            </div>

            <div className="mt-5">
              <Field
                label="Message"
                as="textarea"
                placeholder="How can we help you today?"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                required
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-600 text-white font-medium px-6 py-3.5 hover:bg-green-700 transition-colors shadow-soft"
            >
              <FaWhatsapp size={18} />
              Send via WhatsApp
            </button>

            {sent && (
              <p className="mt-4 text-sm text-green-700 bg-green-50 rounded-lg px-4 py-3 inline-block">
                ✅ WhatsApp opened successfully. Please tap <strong>Send</strong> to deliver your message.
              </p>
            )}

          </motion.form>

        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl bg-white border border-slate-100 shadow-soft px-5 py-4 hover:shadow-glass transition-shadow">
      <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
        <Icon size={18} />
      </span>

      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="text-sm font-semibold text-ink-950">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
    >
      {content}
    </a>
  ) : (
    content
  );
}

function Field({ label, as = "input", ...props }) {
  const Tag = as;

  return (
    <label className="block">
      <span className="text-xs font-medium text-slate-500">{label}</span>

      <Tag
        {...props}
        rows={as === "textarea" ? 4 : undefined}
        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-ink-950 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all resize-none"
      />
    </label>
  );
}