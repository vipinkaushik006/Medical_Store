import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import Disclaimer from "./pages/Disclaimer";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsConditions />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
    </Routes>
  );
}