// Central business data — single source of truth for content used across components.

export const BUSINESS = {
  name: "Vashisth Health Care & Medical Store",
  shortName: "Vashisth Health Care",
  tagline: "Complete Health Care Solutions at Your Doorstep.",
  doctorName: "DRx Dheeraj Vashisth",
  phone: "9588131892",
  phoneDisplay: "+91 95881 31892",
  address: "Faridpur Stand, Gurugram, Haryana",
  whatsapp: "919588131892",
  hours: "Open 24 Hours, 7 Days a Week",
};

export const SERVICES = [
  { id: "medicines", title: "All Medicines", desc: "Genuine medicines from trusted brands, always in stock and ready to go." },
  { id: "delivery", title: "Home Delivery", desc: "Fast, careful delivery to your doorstep — anywhere in Gurugram." },
  { id: "prescription", title: "Prescription Upload", desc: "Upload your prescription online and we'll prepare your order in minutes." },
  { id: "injection", title: "Injection (IV / IM)", desc: "Trained staff for safe, hygienic IV and IM injections at home." },
  { id: "dressing", title: "Dressing", desc: "Wound dressing and post-surgical care handled with clinical precision." },
  { id: "catheterization", title: "Catheterization", desc: "Professional catheter care performed by experienced attendants." },
  { id: "enema", title: "Enema", desc: "Discreet, comfortable enema services in the privacy of your home." },
  { id: "bp", title: "BP Check", desc: "Regular blood pressure monitoring for you and your family." },
  { id: "blood-test", title: "Blood Test", desc: "Accurate blood testing with fast, reliable reports for you and your family." },
  { id: "sugar", title: "Sugar Check", desc: "Accurate glucose testing whenever you need it, no clinic visit required." },
  { id: "homevisit", title: "Home Visit", desc: "On-call health attendants for check-ups and routine care at home." },
  { id: "general", title: "General Health Care", desc: "Everyday health support — because care shouldn't wait for an appointment." },
];

export const STATS = [
  { value: 5000, suffix: "+", label: "Happy Customers" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "x7", label: "Support" },
  { value: 100, suffix: "%", label: "Genuine Medicines" },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Health Care", href: "#healthcare" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const TESTIMONIALS = [
  { name: "Ritu Sharma", location: "Pataudi, Gurugram", rating: 5, text: "Ordered medicines at 8 pm and they were at my door within the hour. The delivery boy was polite and the billing was completely transparent." },
  { name: "Anil Kumar", location: "Faridpur, Gurugram", rating: 5, text: "My father needed daily BP and sugar checks — the home visit staff are punctual, gentle and genuinely caring. It's a relief to have them nearby." },
  { name: "Priya Verma", location: "Rampur(Pataudi), Gurugram", rating: 5, text: "Uploaded my mother's prescription online and the whole process was effortless. Genuine medicines, fair prices, no waiting in line." },
  { name: "Devendra Singh", location: "Pataudi, Gurugram", rating: 5, text: "Needed an IV at home on short notice — the helper arrived within 40 minutes, fully equipped and very professional. Highly recommend." },
];

export const FAQS = [
  { q: "Do you deliver medicines to my home?", a: "Yes — we offer free home delivery across Gurugram. Most orders reach you within 45–90 minutes, depending on your location and stock availability." },
  { q: "How do I upload a prescription?", a: "Use the Upload Prescription button in the navbar or hero section, attach a clear photo or PDF of your prescription, and our pharmacist will confirm your order over WhatsApp or phone." },
  { q: "Are your medicines genuine?", a: "Every medicine we stock is sourced directly from licensed distributors and verified manufacturers. We do not deal in unauthorised or expired stock, ever." },
  { q: "Can I book a nurse for home care like injections or dressing?", a: "Yes — call us or send a WhatsApp message with your requirement (IV/IM injection, dressing, catheterization, enema) and we'll schedule a trained attendant at your convenience." },
  { q: "What are your working hours?", a: "We're open 24 hours, all seven days of the week, including public holidays — because health emergencies don't wait for business hours." },
  { q: "Do you check BP and sugar levels at home?", a: "Yes, our attendants can visit your home for routine BP and blood sugar monitoring — ideal for elderly family members or anyone managing a chronic condition." },
];
