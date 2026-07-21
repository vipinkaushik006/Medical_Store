import { motion } from "framer-motion";
import { BadgeCheck, Clock3, Truck, HeartHandshake } from "lucide-react";
import { SectionHeading } from "./Services";

const REASONS = [
  { icon: BadgeCheck, title: "Verified & Genuine", desc: "Every medicine is sourced from licensed distributors — no exceptions, no shortcuts." },
  { icon: Clock3, title: "Always Available", desc: "Open 24x7, because health needs don't follow a schedule." },
  { icon: Truck, title: "Fast, Reliable Delivery", desc: "Free doorstep delivery across Gurugram, tracked from order to arrival." },
  { icon: HeartHandshake, title: "Care That Feels Personal", desc: "Trained, compassionate staff for home nursing, injections and check-ups." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Health Care You Can Rely On"
          subtitle="Four reasons Gurugram families have trusted us for over a decade."
        />

        <div className="mt-20 relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="grid lg:grid-cols-4 gap-10 lg:gap-6">
            {REASONS.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center lg:text-left"
              >
                <span className="relative z-10 inline-flex w-12 h-12 rounded-full bg-white border-2 border-brand-500 text-brand-600 items-center justify-center shadow-soft">
                  <reason.icon size={20} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink-950">{reason.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
