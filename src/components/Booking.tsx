"use client";
import Image from "next/image";
import React from "react";
import { FaTools, FaUserCheck, FaCalendarCheck } from "react-icons/fa";
const BookingSteps = () => {
  const steps = [
    {
      step: 1,
      text: "Choose the service you need, e.g., plumber",
      icon: <FaTools className="text-primary-blue text-xl" />,
    },
    {
      step: 2,
      text: "Select your worker based on their profile, pricing, and reviews.",
      icon: <FaUserCheck className="text-primary-blue text-xl" />,
    },
    {
      step: 3,
      text: "Confirm your booking by selecting a convenient time and date.",
      icon: <FaCalendarCheck className="text-primary-blue text-xl" />,
    },
  ];
  return (
    <section className="my-14 w-full container px-8">
      <div className="bg-gradient-to-br from-primary-blue to-indigo-500 via-primary-blue/80 w-full rounded-tl-[40px] rounded-br-[40px] flex flex-col min-[768px]:flex-row justify-between ">
        {/* LEFT - IMAGE */}
        <div className="self-end max-[768px]:mx-auto max-[768px]:w-fit w-full">
          <Image
            src="/wavyimg.png"
            alt="img"
            width={500}
            height={500}
            className=""
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div className="w-full flex flex-col justify-center px-3  min-[1000px]:px-8 min-[1000px]:py-12">
          <div className="bg-white rounded-xl py-3 px-4 -mt-3 mb-3">
            <h1 className="font-poppins text-[26px] min-[1000px]:text-[36px] bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text] font-semibold leading-tight text-center capitalize tracking-tight">
              3 simple steps to book
            </h1>
          </div>

          <div className="flex flex-col gap-4 w-full py-4">
            {steps.map((step) => (
              <div
                key={step.step}
                className="flex items-start gap-4 bg-white/30 backdrop-blur-sm rounded-xl px-4 py-2 min-[1000px]:py-4 hover:bg-white/50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 bg-white rounded-lg p-2 min-[1000px]:p-3">
                  {step.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-blue-800 font-inter text-lg min-[1000px]:text-[22px] font-semibold">
                    {step.step}.
                  </span>
                  <p className="text-white font-inter tracking-tight font-medium text-[16px] min-[1000px]:text-[20px] min-[1000px]:leading-tight leading-snug text-balance">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
