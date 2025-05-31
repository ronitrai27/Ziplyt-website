// "use client";
import Image from "next/image";
import React from "react";
import { FaTools, FaUserCheck, FaCalendarCheck } from "react-icons/fa";

const BookingSteps = () => {
  const steps = [
    {
      step: 1,
      text: "Choose the service you need, e.g., plumber",
      icon: <FaTools className="text-white text-xl" />,
    },
    {
      step: 2,
      text: "Select your worker based on their profile, pricing, and reviews.",
      icon: <FaUserCheck className="text-white text-xl" />,
    },
    {
      step: 3,
      text: "Confirm your booking by selecting a convenient time and date.",
      icon: <FaCalendarCheck className="text-white text-xl" />,
    },
  ];

  return (
    <section className="my-14 w-full container px-8">
      <main className="flex min-[820px]:flex-row flex-col gap-10 items-center">
        {/* IMAGE SIDE */}
        <div className="min-[820px]:w-[40%] w-full mx-auto bg-primary-blue rounded-b-lg rounded-l-lg rounded-tr-4xl">
          <Image
            src="/wavyimg.png"
            alt="worker-image"
            width={500}
            height={500}
            priority
            className="mx-auto"
          />
        </div>

        {/* TEXT + STEPS */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text] font-poppins text-[38px] font-medium tracking-tight">
            3 Simple Steps To Book
          </h1>
          <p className="text-light font-inter text-[20px] tracking-tight text-balance leading-snug max-w-xl">
            Ziply offers full transparent way to choose your desired worker
            according to your budget. Review their profile and book easily.
          </p>

          {/* MAPPED BOOKING STEPS */}
          <div className="flex flex-col items-start gap-6 mt-6 w-full max-w-xl">
            {steps.map((step) => (
              <div key={step.step} className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary-blue w-9 h-9 flex items-center justify-center rounded-full">
                  {step.icon}
                </div>
                <p className="text-left text-gray-800 font-inter text-base">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default BookingSteps;
