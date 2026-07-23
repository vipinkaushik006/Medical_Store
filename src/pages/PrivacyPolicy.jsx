import PolicyLayout from "./PolicyLayout";
import { BUSINESS } from "../assets/data";

export default function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy" updated="22 July 2026">
      <p>
        {BUSINESS.name} ("we", "us", "our") respects your privacy. This policy explains what
        information we collect when you use our website or services, how we use it, and how
        we keep it safe.
      </p>

      <Section title="1. Information We Collect">
        We may collect your name, phone number, delivery address, and any prescription
        images or documents you upload when placing an order or contacting us via
        WhatsApp, phone, or our contact form.
      </Section>

      <Section title="2. How We Use Your Information">
        Your information is used only to process and deliver your order, confirm
        prescriptions with our pharmacist, provide home-care services you request (such as
        injections, dressing, or BP/sugar checks), and respond to your queries. We do not
        use your health information for marketing without your consent.
      </Section>

      <Section title="3. Prescription Images">
        Prescription photos or PDFs you upload are used solely to verify and prepare your
        medicine order. They are handled confidentially and are not shared with any third
        party except as required to fulfil your order (e.g. our pharmacist or delivery
        staff).
      </Section>

      <Section title="4. Data Sharing">
        We do not sell or rent your personal information to anyone. We may share limited
        details (such as your address and phone number) with our delivery staff solely to
        complete your order.
      </Section>

      <Section title="5. Data Security">
        We take reasonable precautions to protect your information from unauthorised
        access, alteration, or disclosure. However, no method of transmission over the
        internet is 100% secure.
      </Section>

      <Section title="6. Your Choices">
        You may contact us at any time to ask what information we hold about you, or to
        request that we delete your data, by calling or messaging us at{" "}
        <a href={`tel:+91${BUSINESS.phone}`} className="text-brand-600 font-medium">
          {BUSINESS.phoneDisplay}
        </a>.
      </Section>

      <Section title="7. Changes to This Policy">
        We may update this Privacy Policy from time to time. Any changes will be posted on
        this page with a revised "last updated" date.
      </Section>

      <Section title="8. Contact Us">
        If you have any questions about this Privacy Policy, reach out to us at{" "}
        {BUSINESS.address} or call {BUSINESS.phoneDisplay}.
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