import { motion } from "framer-motion";
import {
  Pill, Truck, FileUp, Syringe, Bandage, Droplets,
  Waves, Heart, Activity, Home, TestTube, Stethoscope,
} from "lucide-react";
import { SERVICES } from "../assets/data";

const ICONS = {
  medicines: Pill, delivery: Truck, prescription: FileUp, injection: Syringe,
  dressing: Bandage, catheterization: Droplets, enema: Waves, bp: Heart,
  sugar: Activity, homevisit: Home, general: Stethoscope, "blood-test": TestTube,
};

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Health Care Services Built Around You"
          subtitle="From everyday medicines to at-home nursing care, everything you need is one call away."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.id];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-2xl p-7 border border-slate-100 shadow-soft hover:shadow-glass transition-shadow"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-50/0 to-accent-50/0 group-hover:from-brand-50/60 group-hover:to-accent-50/40 transition-all duration-300 -z-10" />
                <span className="inline-flex w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 text-white items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink-950">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={center ? "max-w-2xl mx-auto text-center" : "max-w-2xl"}>
      <span className="inline-block text-xs font-semibold tracking-widest text-brand-600 uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink-950 tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-slate-600 text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}
