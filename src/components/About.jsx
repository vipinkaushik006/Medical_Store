import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Users } from "lucide-react";
import { BUSINESS } from "../assets/data";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-brand-600 uppercase">
            About Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink-950 tracking-tight">
            A Health Care Partner Your Neighborhood Trusts
          </h2>
          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            For over a year, Vashisth Health Care & Medical Store has served the families of
            Faridpur Stand with genuine medicines, honest advice, and
            care that goes beyond the counter. What started as a neighbourhood medical store
            has grown into a complete health care partner — offering home delivery and everyday wellness checks for over 50 families.
          </p>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            We believe good health care should be close, honest and available whenever you
            need it — not just during business hours.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-slate-600">
            <MapPin size={18} className="text-brand-600 shrink-0" />
            {BUSINESS.address}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-100 to-accent-100 -z-10 blur-xl opacity-70" />
          <div className="glass rounded-3xl shadow-glass p-10">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                  <ShieldCheck size={22} />
                </span>
                <p className="mt-4 text-2xl font-bold text-ink-950">100%</p>
                <p className="text-sm text-slate-600">Genuine & Verified Medicines</p>
              </div>
              <div>
                <span className="w-12 h-12 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center">
                  <Users size={22} />
                </span>
                <p className="mt-4 text-2xl font-bold text-ink-950">5,000+</p>
                <p className="text-sm text-slate-600">Families Served with Care</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-200/70">
              <p className="text-sm text-slate-600 italic leading-relaxed">
                "Our mission is simple — bring trustworthy, complete health care to every
                doorstep in Gurugram, one family at a time."
              </p>
              <p className="mt-3 text-sm font-semibold text-ink-950">— The Vashisth Medical Store</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
