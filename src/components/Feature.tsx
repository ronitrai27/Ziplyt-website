import React from "react";
import Image from "next/image";
import { ShieldCheck, AlarmClock, Banknote } from "lucide-react";
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
                    "Choose workers confidently. See their experience, pricing, and reviews. Know exactly who you’re hiring."}
                  {i === 1 &&
                    "Every service provider is background-checked and verified to ensure top-quality service delivery."}
                  {i === 2 &&
                    "Turn your bookings into rewards that make every experience worth it. Zipcoins help you save more every time you book."}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/*  WOMAN */}
        <div className="flex min-[820px]:flex-row flex-col items-center gap-10 px-8 mb-5">
          {/* image */}
          <div className="relative">
            <div className="bg-primary-blue w-[20rem] h-[20rem] rounded-3xl feature-shadow"></div>
            <Image
              src="/woman.jpg"
              alt="woman"
              width={300}
              height={300}
              className="absolute top-10 right-10 object-cover rounded-lg"
            />
          </div>
          {/* text */}
          <div className="w-full text-center  space-y-2">
            <h2 className="text-[24px] min-[800px]:text-[28px] font-medium font-poppins text-deep leading-snug tracking-tighter">
              When Service Feels Like a Smile
            </h2>
            <p className="text-[18px] min-[800px]:text-[20px] text-light text-balance font-inter tracking-tight leading-snug">
              At Ziplyt, we go beyond just getting the job done — we bring joy,
              ease, and peace of mind to your doorstep. Trusted pros,
              hassle-free bookings, and smiles all around.
            </p>
          </div>
        </div>

        {/* WORKER */}
        <div className="flex max-[820px]:hidden flex-row items-center gap-10 px-8">
          {/* text */}
          <div className="w-full text-center  space-y-2">
            <h2 className="text-[24px] min-[800px]:text-[28px] font-medium font-poppins text-deep leading-snug tracking-tighter">
              Speed That Surprises You
            </h2>
            <p className="text-[18px] min-[800px]:text-[20px] text-light text-balance font-inter tracking-tight leading-snug">
              From booking to done — experience hassle-free service that’s fast,
              efficient, and right at your doorstep in minutes.
            </p>
          </div>
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

        {/* WORKER MOBILE  */}
        <div className="min-[820px]:hidden flex flex-col items-center gap-10 px-8">
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
          {/* text */}
          <div className="w-full text-center  space-y-2">
            <h2 className="text-[24px] min-[500px]:text-[28px] font-medium font-poppins text-deep leading-snug tracking-tighter">
              Speed That Surprises You
            </h2>
            <p className="text-[18px] min-[800px]:text-[20px] text-light text-balance font-inter tracking-tight leading-snug">
              From booking to done — experience hassle-free service that’s fast,
              efficient, and right at your doorstep in minutes.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Feature;
