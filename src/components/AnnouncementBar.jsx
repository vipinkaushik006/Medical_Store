import { Phone, Truck, Clock } from "lucide-react";
import { BUSINESS } from "../assets/data";

export default function AnnouncementBar() {
  return (
    <div className="hidden sm:block bg-ink-950 text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-9 flex items-center justify-between">
        <div className="flex items-center gap-2 text-brand-500">
          <Truck size={14} />
          <span className="font-medium">Free Home Delivery in NearBy Areas</span>
        </div>
        <div className="flex items-center gap-6 text-slate-300">
          <a href={`tel:+91${BUSINESS.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={13} />
            {BUSINESS.phoneDisplay}
          </a>
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            {BUSINESS.hours}
          </span>
        </div>
      </div>
    </div>
  );
}
