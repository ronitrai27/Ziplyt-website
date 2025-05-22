import React from "react";
import Image from "next/image";
import { ShieldCheck, AlarmClock, Banknote } from "lucide-react";
import { WobbleCard } from "@/components/ui/wobble-card";
const Feature = () => {
  return (
    <section className="container py-4 px-4 min-[1000px]:mt-10">
      <main>
        <h4 className="text-center font-inter tracking-tighter font-light text-light">
          WHY CHOOSE US ?
        </h4>
        <h1 className="bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text] font-poppins text-[42px] font-medium text-center tracking-tighter text-balance leading-snug mb-8">
          Service You Deserve, Speed You Love
        </h1>
        {/* 3 BOXES */}
        <div className="flex justify-center py-6 pl-4 mb-8">
          <div className="grid grid-cols-1 min-[799px]:grid-cols-3 gap-8 items-stretch justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-full max-w-[22rem] h-full flex flex-col"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-200 mb-2">
                  {i === 0 && (
                    <ShieldCheck size={18} className="text-primary-blue" />
                  )}
                  {i === 1 && (
                    <Banknote size={18} className="text-primary-blue" />
                  )}
                  {i === 2 && (
                    <AlarmClock size={18} className="text-primary-blue" />
                  )}
                </div>
                <h3 className="text-deep font-inter text-[18px] tracking-tighter font-light mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                  {i === 0 && "UNMATCHED TRANSPARENCY"}
                  {i === 1 && "VERIFIED WORKERS"}
                  {i === 2 && "SAVE WITH ZIPCOINS"}
                </h3>
                <p className="text-[16px] text-light tracking-tight text-balance font-inter flex-grow">
                  {i === 0 &&
                    "Choose workers confidently. See their experience, pricing, and reviews. Know exactly who you’re hiring."}
                  {i === 1 &&
                    "Every service provider is background-checked and verified to ensure top-quality service delivery."}
                  {i === 2 &&
                    "Book services in just a few taps — no hassle, no delays. Get help when you need it."}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/*  WOMAN */}
        <div className="flex min-[820px]:flex-row flex-col items-center gap-5 px-8">
          {/* image */}
          <div className="relative">
            <div className="bg-primary-blue w-[20rem] h-[20rem] rounded-3xl feature-shadow"></div>
            <Image
              src="/woman.jpg"
              alt="woman"
              width={300}
              height={300}
              className="absolute top-10 right-10 object-cover rounded-lg "
            />
          </div>
          {/* text */}
          <div></div>
        </div>

        {/* WORKER */}
        <div className="flex min-[820px]:flex-row flex-col items-center gap-5 px-8">
          {/* TEXT */}
          <div className="w-full"></div>
          {/* Image */}
          <div className="relative">
            <div className="bg-primary-blue w-[20rem] h-[20rem] rounded-3xl feature-shadow"></div>
            <Image
              src="/painter.jpg"
              alt="woman"
              width={300}
              height={300}
              className="absolute top-10 left-10 object-cover rounded-lg "
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Feature;
