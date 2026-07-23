import PolicyLayout from "./PolicyLayout";
import { BUSINESS } from "../assets/data";

export default function Disclaimer() {
  return (
    <PolicyLayout title="Medical Disclaimer" updated="22 July 2026">
      <Section title="1. Not a Substitute for Professional Medical Advice">
        The information and services provided by {BUSINESS.name} — including this
        website, WhatsApp support, and home-care services — are intended to support your
        everyday health needs. They are not a substitute for professional medical
        diagnosis, advice, or treatment from a qualified doctor.
      </Section>

      <Section title="2. Home-Care Services">
        Services such as IV/IM injections, dressing, catheterization, enema, and BP/sugar
        monitoring are carried out by trained attendants strictly as per the prescription
        or instructions provided by your treating doctor. We do not diagnose conditions
        or prescribe treatment.
      </Section>

      <Section title="3. Always Consult a Doctor">
        Please consult your doctor before starting, stopping, or changing any medication
        or treatment. In case of a medical emergency, contact your nearest hospital or
        emergency service immediately — do not rely solely on home-delivered medicines or
        home-care services.
      </Section>

      <Section title="4. Accuracy of Information">
        While we make every effort to ensure the information on this website is accurate
        and up to date, we make no warranties about the completeness or reliability of
        this information for any specific medical purpose.
      </Section>

      <Section title="5. Contact">
        If you have concerns about a medicine, treatment, or service, please speak with
        our pharmacist directly at {BUSINESS.phoneDisplay}.
      </Section>
    </PolicyLayout>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-ink-950 mb-2">{title}</h2>
      <p>{children}</p>
    </div>
  );
}