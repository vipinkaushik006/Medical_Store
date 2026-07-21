import { motion } from "framer-motion";
import { STATS } from "../assets/data";
import AnimatedCounter from "./AnimatedCounter";

export default function Stats() {
  return (
    <section className="relative -mt-10 z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl shadow-glass px-6 py-8 sm:px-10 sm:py-10 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-gradient">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
