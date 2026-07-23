import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import AnnouncementBar from "../components/AnnouncementBar";

export default function PolicyLayout({ title, updated, children }) {
  return (
    <div className="min-h-screen bg-surface-50 text-ink-950">
      <AnnouncementBar />
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-ink-950 tracking-tight">
          {title}
        </h1>
        {updated && (
          <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>
        )}

        <div className="mt-10 prose-policy flex flex-col gap-6 text-slate-600 leading-relaxed">
          {children}
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}