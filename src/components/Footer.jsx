import { Cross, Phone, MapPin, Mail } from "lucide-react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { BUSINESS, NAV_LINKS, SERVICES } from "../assets/data";

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 text-slate-300 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/3 w-96 h-96 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-accent-600/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 flex items-center justify-center">
                <Cross size={20} className="text-white" strokeWidth={2.5} />
              </span>
              <span className="leading-tight">
                <span className="block font-semibold text-white text-[15px]">
                  Vashisth Medical Store
                </span>
                <span className="block text-[11px] tracking-wide text-slate-400 -mt-0.5">
                  & HEALTH CARE
                </span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-xs">
              {BUSINESS.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                {
                  icon: FaWhatsapp,
                  href: `https://wa.me/${BUSINESS.whatsapp}`,
                  label: "Chat with us on WhatsApp",
                },
                {
                  icon: FaFacebookF,
                  href: "#",
                  label: "Visit our Facebook page",
                },
                {
                  icon: FaInstagram,
                  href: "#",
                  label: "Visit our Instagram page",
                },
                {
                  icon: FaTwitter,
                  href: "#",
                  label: "Visit our Twitter page",
                },
              ].map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn
            title="Quick Links"
            items={NAV_LINKS.map((l) => ({ label: l.label, href: l.href }))}
          />
          <FooterColumn
            title="Services"
            items={SERVICES.slice(0, 6).map((s) => ({
              label: s.title,
              href: "#services",
            }))}
          />

          <div>
            <h4 className="text-white font-semibold text-sm">Contact</h4>
            <ul className="mt-5 flex flex-col gap-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-500 mt-0.5 shrink-0" />
                {BUSINESS.address}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-brand-500 shrink-0" />
                <a
                  href={`tel:+91${BUSINESS.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-brand-500 shrink-0" />
                <a
                  href="mailto:dheerajvashisth1999@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  dheerajvashisth1999@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Vashisth Medical Store & Health Care. All rights
            reserved.
          </p>
          <p>Faridpur Stand, Gurugram, Haryana</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="text-white font-semibold text-sm">{title}</h4>
      <ul className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-sm hover:text-white transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
