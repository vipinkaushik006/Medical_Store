import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import UploadPrescription from "./components/UploadPrescription";
import HomeDelivery from "./components/HomeDelivery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  return (
    <div className="min-h-screen bg-surface-50 text-ink-950">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <WhyChooseUs />
        <UploadPrescription />
        <HomeDelivery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
