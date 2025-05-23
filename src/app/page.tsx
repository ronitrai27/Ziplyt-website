import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
// import Footer from "@/components/Footer";
import Feature from "@/components/Feature";
import Wavy from "@/components/Wavy";
import WaitlistBar from "@/components/Waitlist";
export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      {/* CTA FOR SMALL SCREEN */}
      <div className="hidden max-[999px]:flex items-center gap-5 justify-center w-full bg-gradient-to-r from-primary-blue via-sky to-deep px-6 py-2">
        <h1 className="text-white font-medium text-[14px] font-inter tracking-tighter underline underline-offset-2 ">
          App coming soon
          <span className="hidden min-[500px]:inline">
            — stay tuned for the full experience
          </span>{" "}
        </h1>
        <div className="border border-light bg-white px-3 py-[2px] rounded-full">
          <p className="text-[12px] font-poppins text-primary-blue">
            Coming Soon
          </p>
        </div>
      </div>
      <Hero />
      <div className="hidden min-[1000px]:block min-[1000px]:absolute -z-10 top-0 right-44 w-[12rem] h-[40rem] bg-primary-blue rounded-b-full"></div>
      <LogoTicker />
      <Feature />
      <Wavy />
      <Services />
      <Testimonial />
      {/* <Footer /> */}
      <WaitlistBar />
    </div>
  );
}
