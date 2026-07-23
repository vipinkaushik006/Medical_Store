import PolicyLayout from "./PolicyLayout";
import { BUSINESS } from "../assets/data";

export default function RefundPolicy() {
  return (
    <PolicyLayout title="Refund & Return Policy" updated="22 July 2026">
      <p>
        Due to the nature of pharmaceutical products, our return and refund policy is
        designed to comply with safety and regulatory guidelines while remaining fair to
        our customers.
      </p>

      <Section title="1. Medicines — No Return Once Delivered">
        For health and safety reasons, medicines cannot be returned or exchanged once they
        have left our store and been delivered, except in the case of a genuine error on
        our part (see below).
      </Section>

      <Section title="2. Wrong or Damaged Item Delivered">
        If you receive the wrong medicine, a damaged package, or an item different from
        what you ordered, please contact us within 24 hours of delivery at{" "}
        <a href={`tel:+91${BUSINESS.phone}`} className="text-brand-600 font-medium">
          {BUSINESS.phoneDisplay}
        </a>{" "}
        or on WhatsApp with a photo of the item. We will arrange a replacement or refund
        after verification.
      </Section>

      <Section title="3. Expired Medicines">
        If a medicine delivered to you is found to be expired or nearing expiry against
        our assurance, please inform us immediately for a replacement at no extra cost.
      </Section>

      <Section title="4. Refund Method">
        Approved refunds will be processed to the original payment method (UPI/online) or
        adjusted against your next order, as convenient to you.
      </Section>

      <Section title="5. Home-Care Service Cancellations">
        If you need to cancel or reschedule a booked home-care visit (injection, dressing,
        BP/sugar check, etc.), please inform us at least 2 hours in advance where possible
        so we can accommodate other appointments.
      </Section>

      <Section title="6. Contact for Refunds">
        For any refund or return query, reach out to us at {BUSINESS.address} or call{" "}
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