import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Feature from "@/components/Feature";
import BookingSteps from "@/components/Booking";
import WaitlistBar from "@/components/Waitlist";
import { FAQSection } from "@/components/Faq-section";
import TestHero from "@/components/TestHero";
// import ServicesCarousel from "@/components/Carousel";create az website on home service , where user books worker. clean , modern minimal
export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <TestHero />
      {/* <Hero /> */}

      <LogoTicker />
      <Feature />
      <BookingSteps />
      <Services />
      <Testimonial />
      <FAQSection />
      <WaitlistBar />
    </div>
  );
}
