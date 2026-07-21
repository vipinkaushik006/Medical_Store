import { motion } from "framer-motion";
import { FileUp, Phone, ShieldCheck, Clock3, Truck, Pill } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { BUSINESS } from "../assets/data";
import pharmacistPhoto from "../assets/images/pharmacist.jpg";

const FEATURES = [
  { icon: ShieldCheck, text: "100% Genuine Medicines" },
  { icon: Truck, text: "Free Home Delivery" },
  { icon: Clock3, text: "Open 24 x 7" },
  { icon: Pill, text: "Nursing & Home Care" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-brand-200/50 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-24 w-[28rem] h-[28rem] rounded-full bg-accent-100/60 blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#0f172a08_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div>
          <motion.span
            variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-soft"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            Aapki sehat, hamari zimmedari!
          </motion.span>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] tracking-tight text-ink-950"
          >
            Complete Health Care,
            <br />
            <span className="text-gradient">Delivered to Your Door.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="mt-6 text-lg text-slate-600 max-w-lg leading-relaxed"
          >
            From genuine medicines to at-home nursing care — Vashisth Health Care & Medical Store keeps your family healthy, without the wait.
          </motion.p>

          <motion.ul
            variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="mt-8 grid grid-cols-2 gap-3 max-w-md"
          >
            {FEATURES.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2.5 text-sm font-medium text-ink-950/80">
                <span className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Icon size={16} />
                </span>
                {text}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#upload"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 text-white font-medium px-6 py-3.5 shadow-glow hover:bg-brand-700 hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <FileUp size={17} />
              Upload Prescription
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass text-green-700 font-medium px-6 py-3.5 shadow-soft hover:bg-green-500 hover:text-white transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <FaWhatsapp size={17} />
              WhatsApp
            </a>
            <a
              href={`tel:+91${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 rounded-full text-ink-950 font-medium px-2 py-3.5 hover:text-brand-600 transition-colors"
            >
              <Phone size={17} />
              Call Now
            </a>
          </motion.div>
        </div>

        {/* Right column — illustration with floating glass cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute w-[26rem] h-[26rem] rounded-full bg-gradient-to-br from-brand-400/30 to-accent-400/20 blur-3xl" />

          <img
            src={pharmacistPhoto}
            alt="Pharmacist at Vashisth Health Care & Medical Store preparing an order"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            className="relative w-72 sm:w-80 lg:w-[26rem] h-auto object-cover drop-shadow-2xl animate-float-slow"
            style={{
              aspectRatio: "1031 / 1114",
              maskImage:
                "radial-gradient(ellipse 78% 88% at 50% 46%, black 62%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 78% 88% at 50% 46%, black 62%, transparent 100%)",
            }}
          />
           <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass rounded-full shadow-glass px-5 py-2 text-center whitespace-nowrap"
          >
            <p className="text-sm font-semibold text-ink-950">{BUSINESS.doctorName}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute top-6 -left-2 sm:left-4 glass rounded-2xl shadow-glass px-4 py-3 flex items-center gap-3 animate-float"
          >
            <span className="w-9 h-9 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center"><ShieldCheck size={17} /></span>
            <div className="text-left">
              <p className="text-sm font-semibold text-ink-950">Genuine Medicines</p>
              <p className="text-xs text-slate-500">Verified & Trusted</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-10 -right-2 sm:right-0 glass rounded-2xl shadow-glass px-4 py-3 flex items-center gap-3 animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <span className="w-9 h-9 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center"><Truck size={17} /></span>
            <div className="text-left">
              <p className="text-sm font-semibold text-ink-950">30 Min Delivery*</p>
              <p className="text-xs text-slate-500">Across Nearby Areas</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
