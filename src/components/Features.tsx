import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { ShieldCheck, AlarmClock, PiggyBank, BadgeCheck } from "lucide-react";
const Features = () => {
  return (
    <section className="bg-white relative mt-10">
      <div className="flex flex-col min-[1000px]:flex-row  px-4 max-[999px]:mx-12 max-[700px]:mx-auto relative">
        {/* LEFT SIDE */}
        <div className="min-[1000px]:w-[52%] w-full border-2 border-light min-[1000px]:rounded-l-3xl max-[999px]:rounded-t-3xl px-4">
          <h1 className="min-[500px]:text-[42px] text-[34px] font-poppins font-[500] tracking-tight text-deep bg-white w-fit mx-auto -mt-10 leading-10">
            Every booking a <br />
            <span className="bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text] font-main font-bold ml-6 max-[500px]:ml-3 min-[500px]:text-[48px] text-[38px] ">
              Better Expereince
            </span>
          </h1>
          <main className="w-full h-full flex flex-col gap-6 items-center justify-evenly mt-6 pb-16">
            {/* 1st Transparency*/}
            <div className="bg-light/15 px-3 py-2 rounded-lg shadow-md w-fit">
              <div className="flex items-center gap-3 justify-between">
                <div className="w-8 h-8 flex items-center justify-center rounded-md bg-white">
                  <BadgeCheck size={20} className="text-primary-blue" />
                </div>
                <h1 className="text-[20px] font-poppins font-medium tracking-tight text-primary-blue mx-auto">
                  Unmatched Transparency
                </h1>
              </div>
              <hr className="border-b-[.5px] border-light/30 w-[36%] mx-auto my-2" />
              <p className="text-[16px] tracking-tighter max-w-[30rem] leading-snug text-center px-5">
                Choose workers confidently. See their experience, pricing, and
                reviews. Know exactly who you’re hiring.
              </p>
            </div>
            {/* Verified Trusted */}
            <div className="min-[1024px]:hidden inline-block bg-light/15 px-3 py-2 rounded-lg shadow-md w-fit ">
              <div className="flex items-center gap-3 justify-between">
                <div className="w-8 h-8 flex items-center justify-center rounded-md bg-white">
                  <ShieldCheck size={20} className="text-primary-blue" />
                </div>
                <h1 className="text-[20px] font-poppins font-medium tracking-tight text-primary-blue mx-auto">
                  Instant Booking
                </h1>
              </div>
              <hr className="border-b-[.5px] border-light/30 w-[36%] mx-auto my-2" />
              <p className="text-[16px] tracking-tighter max-w-[30rem] leading-snug text-center px-4">
                Choose workers confidently. See their experience, pricing, and
                reviews. Know exactly who you’re hiring.
              </p>
            </div>

            {/* Instant Booking */}
            <div className="bg-light/15 px-3 py-2 rounded-lg shadow-md w-fit ">
              <div className="flex items-center gap-3 justify-between">
                <div className="w-8 h-8 flex items-center justify-center rounded-md bg-white">
                  <AlarmClock size={20} className="text-primary-blue" />
                </div>
                <h1 className="text-[20px] font-poppins font-medium tracking-tight text-primary-blue mx-auto">
                  Instant Booking
                </h1>
              </div>
              <hr className="border-b-[.5px] border-light/30 w-[36%] mx-auto my-2" />
              <p className="text-[16px] tracking-tighter max-w-[30rem] leading-snug text-center px-4">
                Choose workers confidently. See their experience, pricing, and
                reviews. Know exactly who you’re hiring.
              </p>
            </div>
            {/* Save with Coins */}
            <div className="bg-light/15 px-3 py-2 rounded-lg shadow-md w-fit">
              <div className="flex items-center gap-3 justify-between">
                <div className="w-8 h-8 flex items-center justify-center rounded-md bg-white">
                  <PiggyBank size={20} className="text-primary-blue" />
                </div>
                <h1 className="text-[24px] font-poppins font-medium tracking-tight text-primary-blue mx-auto">
                  Unmatched Transparency
                </h1>
              </div>
              <hr className="border-b-[.5px] border-light/30 w-[36%] mx-auto my-2" />
              <p className="text-[18px] tracking-tighter max-w-[30rem] leading-snug text-center">
                Choose workers confidently. See their experience, pricing, and
                reviews. Know exactly who you’re hiring.
              </p>
            </div>
          </main>
        </div>

        {/* RIGHT SIDE */}
        <div className="min-[1000px]:w-[48%] w-full border-8 border-light min-[1000px]:rounded-r-3xl max-[999px]:rounded-b-3xl overflow-hidden py-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            {/* 1ST WOBBLE */}
            <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-primary-blue min-h-[300px] max-h-[500px]">
              <h1 className="text-[24px] max-[999px]:text-[36px] max-[435px]:text-[24px] max-[999px]:font-semibold text-balance font-medium font-inter tracking-tight text-white">
                10 Minutes to Trusted Service.
              </h1>
              <div className="flex items-center h-full gap-5 py-3">
                <div className="self-start">
                  <p className="text-[18px] max-[999px]:text-[22px] max-[999px]:tracking-tighter max-[435px]:text-[18px] text-gray-300 font-inter mt-2">
                    Your fix starts now—instant booking, zero stress.
                  </p>
                </div>
                <Image
                  src="/featurephone.png"
                  alt="Ziplyt app showing worker profile"
                  width={120}
                  height={120}
                  className="object-cover self-end"
                />
              </div>
            </WobbleCard>
            {/* 2ND WOBBLE */}
            <WobbleCard containerClassName="col-span-1 min-h-[300px] max-h-[500px] bg-indigo-500">
              <div>
                <h1 className="text-[28px] max-[999px]:text-[42px] max-[435px]:text-[28px] tracking-[-0.015em] text-white font-poppins font-bold">
                  Book More, Save Big with Coins
                </h1>
                <p className="min-[1024px]:hidden inline-block text-[14px] text-white/80 font-poppins mt-2 tracking-tighter">
                  Earn coins with every booking to unlock massive discounts—the
                  more you book, the more you save!
                </p>
              </div>
            </WobbleCard>
            {/* 3RD WOBBLE */}
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <h1 className="text-[24px] max-[999px]:text-[36px] max-[435px]:text-[24px] max-[999px]:font-semibold text-balance font-medium font-inter tracking-tight text-white">
                    Every Worker, Vetted & Trusted
                  </h1>
                  <p className="text-[16px] max-[999px]:text-[22px] max-[999px]:tracking-tighter max-[435px]:text-[16px] text-light font-inter mt-2">
                    Background-checked, skilled professionals you can rely on,
                    every time.
                  </p>
                </div>
                <Image
                  src="/plumber.jpg"
                  alt="plumber"
                  width={140}
                  height={140}
                  className="object-cover self-end rounded-xl"
                />
              </div>
            </WobbleCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
