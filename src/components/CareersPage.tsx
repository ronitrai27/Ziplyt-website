"use client";
import Image from "next/image";
import React from "react";
import { Globe, Eye } from "lucide-react";
import { ApplicationForm } from "./ApplicationForm";
const CareersPage = () => {
  return (
    <div className="bg-white">
      <div className="relative h-64 md:h-80 w-full overflow-hidden mb-10">
        <Image
          src="/careers.jpg"
          alt="Professional workers"
          width={1920}
          height={800}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 ziplyt-gradient opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 font-poppins">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Build the Future with Ziplyt
          </h1>
        </div>
      </div>
      <div className="flex justify-center py-6 pl-4 mb-10">
        <div className="grid grid-cols-1 min-[799px]:grid-cols-2 gap-8 items-stretch justify-center">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className={`
    w-full max-w-[22rem] h-full flex flex-col
    border border-gray-200 rounded-xl p-4
    shadow-sm min-[799px]:shadow-none min-[799px]:border-0 min-[799px]:p-0
    pulse-glow min-[799px]:!animate-none`}
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-200 mb-2">
                {i === 0 && <Globe size={18} className="text-primary-blue" />}
                {i === 1 && <Eye size={18} className="text-primary-blue" />}
              </div>
              <h3 className="text-deep font-inter text-[18px] tracking-tighter font-light mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                {i === 0 && "OUR MISSION"}
                {i === 1 && "OUR VISION"}
              </h3>
              <p className="text-[16px] text-light tracking-tight text-balance font-inter flex-grow">
                {i === 0 &&
                  "To empower every Indian household with trusted, local professionals — instantly accessible, fully transparent, and verified end-to-end."}
                {i === 1 &&
                  "To build India’s fastest and most reliable home services platform and expand globally."}
              </p>
            </div>
          ))}
        </div>
      </div>
      <h1 className="bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text] tracking-tight font-poppins text-[32px] text-center font-medium">
        Apply Now
      </h1>
      <p className="font-inter font-light text-light text-[20px] text-center text-balance capitalize  ">
        Start your journey with us today
      </p>
      <div className="min-[500px]:px-10 px-3 max-w-3xl mx-auto mt-8">
        <ApplicationForm />
      </div>
    </div>
  );
};

export default CareersPage;
