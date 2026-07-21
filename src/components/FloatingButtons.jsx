import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { BUSINESS } from "../assets/data";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <motion.a
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        href={`tel:+91${BUSINESS.phone}`}
        aria-label="Call now"
        className="w-12 h-12 rounded-full bg-ink-950 text-white shadow-glass flex items-center justify-center"
      >
        <Phone size={19} />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        href={`https://wa.me/${BUSINESS.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-green-500 text-white shadow-glow flex items-center justify-center"
      >
        <FaWhatsapp size={26} />
      </motion.a>
    </div>
  );
}
