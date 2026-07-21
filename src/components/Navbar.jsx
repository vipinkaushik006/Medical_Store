import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileUp, Cross } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { BUSINESS, NAV_LINKS } from "../assets/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-glass" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-18 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 flex items-center justify-center shadow-soft">
            <Cross size={20} className="text-white" strokeWidth={2.5} />
          </span>
          <span className="leading-tight">
            <span className="block font-semibold text-ink-950 text-[15px]">Vashisth</span>
            <span className="block text-[11px] tracking-wide text-slate-500 -mt-0.5">HEALTH CARE</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="relative group">
              <a href={link.href} className="text-sm font-medium text-ink-950/80 hover:text-ink-950 transition-colors">
                {link.label}
              </a>
              <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-gradient-to-r from-brand-600 to-accent-600 transition-all duration-300 group-hover:w-full rounded-full" />
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${BUSINESS.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp size={18} />
          </a>
          <a
            href="#upload"
            className="inline-flex items-center gap-2 rounded-full bg-ink-950 text-white text-sm font-medium px-5 py-2.5 hover:bg-brand-600 transition-colors shadow-soft"
          >
            <FileUp size={15} />
            Upload Prescription
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full glass"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-ink-950/40 z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 h-full w-[78%] max-w-xs bg-white z-50 lg:hidden shadow-2xl p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-semibold text-ink-950">Menu</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
                  <X size={18} />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      onClick={() => setOpen(false)}
                      href={link.href}
                      className="block py-3 text-base font-medium text-ink-950 border-b border-slate-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#upload"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 text-white text-sm font-medium px-5 py-3"
              >
                <FileUp size={15} />
                Upload Prescription
              </a>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-green-500 text-green-600 text-sm font-medium px-5 py-3"
              >
                <FaWhatsapp size={16} />
                WhatsApp Us
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
