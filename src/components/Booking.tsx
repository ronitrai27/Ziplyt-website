"use client";
// import Image from "next/image";
import React, { useRef } from "react";
import { FaTools, FaUserCheck, FaCalendarCheck } from "react-icons/fa";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const BookingSteps = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const stepsRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.1, 0.25], [30, 0]);

  const subtitleOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const subtitleY = useTransform(scrollYProgress, [0.15, 0.3], [20, 0]);

  const descOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const descY = useTransform(scrollYProgress, [0.2, 0.35], [15, 0]);

  const stepsInView = useInView(stepsRef, { once: true, amount: 0.2 });

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
    <section ref={sectionRef} className="my-14 w-full container px-8">
      <main className="flex min-[820px]:flex-row flex-col gap-10 items-center">
        {/* IMAGE SIDE */}
        {/* <div className="min-[820px]:w-[40%] w-full mx-auto bg-primary-blue rounded-b-lg rounded-l-lg rounded-tr-4xl">
            <Image
              src="/wavyimg.png"
              alt="worker-image"
              width={500}
              height={500}
              priority
              className="mx-auto"
            />
          </div> */}

        {/* TEXT + STEPS */}
        <div className="flex flex-col items-center justify-center w-full text-center mx-auto max-w-4xl">
          <motion.h4
            style={{ opacity: subtitleOpacity, y: subtitleY }}
            className="text-center font-inter text-[20px] tracking-tighter font-semibold text-light/50"
          >
            HOW TO BOOK
          </motion.h4>

          <motion.h1
            ref={titleRef}
            style={{ opacity: titleOpacity, y: titleY }}
            className="bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text] font-poppins text-[38px] font-medium tracking-tight mb-2"
          >
            3 Simple Steps To Book
          </motion.h1>

          <motion.p
            style={{ opacity: descOpacity, y: descY }}
            className="text-light font-inter text-[20px] tracking-tight text-balance leading-snug max-w-xl mb-3"
          >
            Ziply offers full transparent way to choose your desired worker
            according to your budget. Review their profile and book easily.
          </motion.p>

          {/* MAPPED BOOKING STEPS */}
          <motion.div
            ref={stepsRef}
            className="flex flex-row flex-wrap justify-center items-start gap-10 mt-16 w-full max-w-4xl mx-auto"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2 + index * 0.15,
                }}
                className="flex flex-col items-center gap-5 w-full md:w-[30%] px-3"
              >
                {/* Hexagon-like icon container with light blue background - SMALLER SIZE */}
                <motion.div
                  className="relative mb-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={
                    stepsInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.8, opacity: 0 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.3 + index * 0.15,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-blue-100 rounded-[30%] rotate-45 w-20 h-20"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                  <div className="relative z-10 flex items-center justify-center w-20 h-20">
                    <motion.div
                      className="bg-primary-blue w-14 h-14 rounded-full flex items-center justify-center shadow-sm"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Step title - UNCHANGED SIZE */}
                <motion.h3
                  className="font-semibold text-xl mb-2 text-deep font-sora"
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    stepsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.15,
                  }}
                >
                  {step.step}.{" "}
                  {step.step === 1
                    ? "Choose"
                    : step.step === 2
                    ? "Select"
                    : "Confirm"}
                  {step.step === 1
                    ? " Service"
                    : step.step === 2
                    ? " Worker"
                    : " Booking"}
                </motion.h3>

                {/* Step text - UNCHANGED SIZE */}
                <motion.p
                  className="text-center text-gray-800 font-inter text-xl"
                  initial={{ opacity: 0 }}
                  animate={stepsInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.15,
                  }}
                >
                  {step.text}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default BookingSteps;
