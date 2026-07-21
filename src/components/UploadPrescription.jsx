import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud, FileCheck2, X, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./Services";
import { BUSINESS } from "../assets/data";

// Cloudinary-ready: swap handleFiles' local preview logic for an upload
// call to your Cloudinary unsigned preset when wiring up the backend.
// Submit Order currently opens WhatsApp with a pre-filled message so the
// person can attach the file there and send it directly to the store —
// no backend needed. Once you have a server/Cloudinary endpoint, replace
// handleSubmit with an actual upload call.

export default function UploadPrescription() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [sent, setSent] = useState(false);
  const inputRef = useRef(null);

  const handleFiles = useCallback((files) => {
    const f = files?.[0];
    if (!f) return;
    setFile(f);
    setSent(false);
    if (f.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(f));
    } else {
      setPreview(null);
    }
  }, []);

  const reset = () => {
    setFile(null);
    setPreview(null);
    setSent(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleSubmit = () => {
  console.log("Button clicked");
  console.log(BUSINESS);
  console.log(BUSINESS.whatsapp);

  if (!file) return;

  const message = encodeURIComponent(
    `Hi, I'd like to order medicines against my prescription "${file.name}". I'll attach the photo/PDF here.`
  );

  window.open(
    `https://wa.me/${BUSINESS.whatsapp}?text=${message}`,
    "_blank"
  );

  setSent(true);
};

  return (
    <section id="upload" className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skip the Queue"
          title="Upload Your Prescription"
          subtitle="Attach a clear photo or PDF and we'll confirm your order over WhatsApp — usually within minutes."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 glass rounded-3xl shadow-glass p-6 sm:p-10"
        >
          {!file ? (
            <label
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
              className={`flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed px-6 py-16 text-center cursor-pointer transition-colors ${
                dragOver ? "border-brand-500 bg-brand-50/60" : "border-slate-300 bg-slate-50/60 hover:bg-slate-50"
              }`}
            >
              <span className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-600 to-accent-600 text-white flex items-center justify-center shadow-soft">
                <UploadCloud size={28} />
              </span>
              <div>
                <p className="font-semibold text-ink-950">Drag & drop your prescription here</p>
                <p className="text-sm text-slate-500 mt-1">or click to browse — JPG, PNG or PDF, up to 10MB</p>
              </div>
              <input
                ref={inputRef}
                type="file"
                accept="image/*,application/pdf"
                className="hidden"
                onChange={(e) => handleFiles(e.target.files)}
              />
            </label>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-6 rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
              {preview ? (
                <img src={preview} alt="Prescription preview" className="w-32 h-32 object-cover rounded-xl shadow-soft" />
              ) : (
                <div className="w-32 h-32 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-600">
                  <FileCheck2 size={36} />
                </div>
              )}
              <div className="flex-1 text-center sm:text-left">
                <p className="font-semibold text-ink-950 truncate max-w-xs">{file.name}</p>
                <p className="text-sm text-slate-500">{(file.size / 1024).toFixed(0)} KB — ready to send</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={reset}
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-red-500 transition-colors"
                  aria-label="Remove file"
                >
                  <X size={16} />
                </button>
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-600 text-white text-sm font-medium px-5 py-3 hover:bg-brand-700 transition-colors shadow-soft"
                >
                  <Send size={15} />
                  Submit Order
                </button>
              </div>
            </div>
          )}

          {sent && (
            <p className="mt-5 flex items-center justify-center gap-2 text-sm text-brand-700 bg-brand-50 rounded-lg px-4 py-2.5">
              <CheckCircle2 size={16} />
              WhatsApp opened — attach the file there and hit send to complete your order.
            </p>
          )}

          <p className="mt-5 text-xs text-center text-slate-400">
            Your prescription is used only to prepare your order and is handled confidentially.
          </p>
        </motion.div>
      </div>
    </section>
  );
}