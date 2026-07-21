import { motion } from "framer-motion";
import { Clock3, MapPinned, ShieldCheck, Wallet } from "lucide-react";

const FEATURES = [
  { icon: Clock3, title: "45–90 Minute Delivery", desc: "Most orders reach you within the hour, depending on stock and location." },
  { icon: MapPinned, title: "All Nearby Areas Covered", desc: "From Faridpur Stand to Sohna Road, we deliver across the city." },
  { icon: Wallet, title: "Cash or Online Payment", desc: "Pay however suits you — cash on delivery or UPI, your choice." },
  { icon: ShieldCheck, title: "Sealed & Verified Packaging", desc: "Every order leaves our store sealed, checked and ready for use." },
];

export default function HomeDelivery() {
  return (
    <section id="healthcare" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center order-2 lg:order-1"
        >
          <div className="absolute w-80 h-80 rounded-full bg-brand-100/70 blur-3xl -z-10" />
          <DeliveryIllustration className="w-full max-w-md animate-float-slow" />
        </motion.div>

        <div className="order-1 lg:order-2">
          <span className="inline-block text-xs font-semibold tracking-widest text-brand-600 uppercase">
            Home Delivery
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink-950 tracking-tight">
            Your Medicines, Delivered With Care
          </h2>
          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            No queues, no travel — just order, and we'll bring your medicines and health
            essentials straight to your door.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-3.5"
              >
                <span className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <f.icon size={18} />
                </span>
                <div>
                  <p className="font-semibold text-ink-950 text-sm">{f.title}</p>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DeliveryIllustration({ className }) {
  return (
    <svg viewBox="0 0 420 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="210" cy="290" rx="150" ry="14" fill="#0F172A" opacity="0.06" />
      <rect x="40" y="150" width="180" height="100" rx="14" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
      <rect x="200" y="180" width="90" height="70" rx="10" fill="#16A34A" />
      <circle cx="100" cy="255" r="20" fill="#0F172A" />
      <circle cx="100" cy="255" r="8" fill="#F8FAFC" />
      <circle cx="255" cy="255" r="20" fill="#0F172A" />
      <circle cx="255" cy="255" r="8" fill="#F8FAFC" />
      <rect x="60" y="110" width="80" height="50" rx="8" fill="#2563EB" />
      <path d="M60 130h80" stroke="white" strokeOpacity="0.4" strokeWidth="2" />
      <rect x="215" y="195" width="60" height="40" rx="6" fill="#F0FDF4" />
      <path d="M245 205v20M235 215h20" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" />
      <path d="M300 200l30-10 10 20-30 15z" fill="#FBCFA0" />
      <circle cx="335" cy="150" r="18" fill="#FBCFA0" />
      <path d="M320 145c0-12 7-22 17-22s17 10 17 22" fill="#0F172A" />
      <rect x="317" y="175" width="36" height="50" rx="10" fill="#2563EB" />
    </svg>
  );
}
