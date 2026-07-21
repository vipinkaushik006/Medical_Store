import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../assets/data";
import { SectionHeading } from "./Services";

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Families Say"
          subtitle="Real experiences from the people we've had the privilege to care for."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl shadow-soft hover:shadow-glass transition-shadow p-6 flex flex-col"
            >
              <Quote size={22} className="text-brand-500/40" />
              <div className="flex gap-0.5 mt-3">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">"{t.text}"</p>
              <div className="mt-5 pt-4 border-t border-slate-200/70">
                <p className="text-sm font-semibold text-ink-950">{t.name}</p>
                <p className="text-xs text-slate-500">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
