import React from "react";
import { ShieldCheck, AlarmClock, Banknote } from "lucide-react";
import ServicesCarousel from "./Carousel";
const Feature = () => {
  return (
    <section className="container py-4 px-4 min-[1000px]:mt-10" id="features">
      <main>
        <h4 className="text-center font-inter text-[20px] tracking-tighter font-semibold text-light/50">
          WHY CHOOSE US ?
        </h4>
        <h1 className="bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text] font-poppins text-[42px] font-medium text-center tracking-tighter text-balance leading-snug mb-8">
          Speed You Crave. Trust You Deserve.
        </h1>
        {/* 3 BOXES */}
        <div className="flex justify-center py-6 pl-4 mb-10">
          <div className="grid grid-cols-1 min-[799px]:grid-cols-3 gap-8 items-stretch justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`
    w-full max-w-[22rem] h-full flex flex-col
    border border-gray-200 rounded-xl p-4
    shadow-sm min-[799px]:shadow-none min-[799px]:border-0 min-[799px]:p-0
    pulse-glow min-[799px]:!animate-none`}
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-200 mb-2">
                  {i === 0 && (
                    <ShieldCheck size={18} className="text-primary-blue" />
                  )}
                  {i === 1 && (
                    <AlarmClock size={18} className="text-primary-blue" />
                  )}
                  {i === 2 && (
                    <Banknote size={18} className="text-primary-blue" />
                  )}
                </div>
                <h3 className="text-deep font-inter text-[18px] tracking-tighter font-light mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                  {i === 0 && "UNMATCHED TRANSPARENCY"}
                  {i === 1 && "VERIFIED WORKERS"}
                  {i === 2 && "SAVE WITH ZIPCOINS"}
                </h3>
                <p className="text-[16px] text-light tracking-tight text-balance font-inter flex-grow">
                  {i === 0 &&
                    "Know your pro before they knock. Upfront pricing, real reviews, and verified experience — no hidden fees, no last-minute shocks."}
                  {i === 1 &&
                    "Every service provider is background-checked and verified to ensure top-quality service delivery."}
                  {i === 2 &&
                    "Turn your bookings into rewards that make every experience worth it. Zipcoins help you save more every time you book."}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CAROUSEL */}
        <ServicesCarousel />
      </main>
    </section>
  );
};

export default Feature;
