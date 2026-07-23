import PolicyLayout from "./PolicyLayout";
import { BUSINESS } from "../assets/data";

export default function TermsConditions() {
  return (
    <PolicyLayout title="Terms & Conditions" updated="22 July 2026">
      <p>
        By using the {BUSINESS.name} website, placing an order, or requesting a home-care
        service, you agree to the following terms.
      </p>

      <Section title="1. Orders & Prescriptions">
        Prescription medicines are dispensed only against a valid prescription uploaded or
        shown to our pharmacist. We reserve the right to refuse an order if the
        prescription is unclear, expired, or does not comply with applicable regulations.
      </Section>

      <Section title="2. Pricing">
        Prices for medicines and services are subject to change without prior notice and
        may vary based on manufacturer pricing, government regulations (MRP), or stock
        availability.
      </Section>

      <Section title="3. Home Delivery">
        We aim to deliver orders within the estimated time window shared at the time of
        booking. Delivery times may vary due to traffic, weather, stock availability, or
        circumstances beyond our control.
      </Section>

      <Section title="4. Home-Care Services">
        Services such as IV/IM injections, dressing, catheterization, enema, and BP/sugar
        checks are performed by trained attendants. These services support your ongoing
        care but do not replace professional medical diagnosis or treatment — please
        consult a qualified doctor for medical advice.
      </Section>

      <Section title="5. Payment">
        We accept cash on delivery and online payment (UPI), as available. Full payment is
        due at the time of delivery unless otherwise agreed.
      </Section>

      <Section title="6. Limitation of Liability">
        While we take every care to ensure medicines are genuine and services are
        performed safely, {BUSINESS.shortName} shall not be liable for any indirect,
        incidental, or consequential loss arising from misuse of medicines or
        non-adherence to a doctor's instructions.
      </Section>

      <Section title="7. Changes to These Terms">
        We may revise these Terms & Conditions from time to time. Continued use of our
        services after changes are posted constitutes acceptance of the revised terms.
      </Section>

      <Section title="8. Contact Us">
        For any questions regarding these terms, contact us at {BUSINESS.address} or call{" "}
        {BUSINESS.phoneDisplay}.
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