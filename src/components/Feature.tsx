"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ShieldCheck, AlarmClock, Banknote } from "lucide-react";
import { WobbleCard } from "@/components/ui/wobble-card";
const Feature = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };
  return (
    <section className="bg-white relative mt-10 px-8">
      <main className=" flex flex-col gap-10">
        {/* 1ST FEATURE  */}
        <div
          className="flex min-[800px]:flex-row flex-col items-center gap-6"
          ref={ref}
        >
          {/* left */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full max-[799px]:hidden "
          >
            <h3 className="bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text] font-inter text-[18px] tracking-tighter font-light mb-1">
              UNMATCHED TRANSPARENCY
            </h3>
            <div className=" flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center self-start">
                <ShieldCheck size={24} className="text-primary-blue" />
              </div>
              <h1 className="text-[26px] font-poppins tracking-tight font-medium text-balance text-deep leading-snug">
                Choose workers confidently. See their experience, pricing, and
                reviews. Know exactly who you’re hiring.
              </h1>
            </div>
          </motion.div>

          {/* RIGHT  */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className=" min-[1000px]:w-1/2 flex justify-center"
          >
            <WobbleCard containerClassName=" bg-primary-blue min-h-[240px] max-h-[360px]">
              <h1 className="text-[24px]  text-balance font-medium font-inter tracking-tight text-white">
                Every Worker, Vetted & Trusted
              </h1>
              <div className="flex items-center h-full gap-5 py-3">
                <div className="self-start">
                  <p className="text-[18px] text-gray-300 font-inter mt-2">
                    Background-checked, skilled professionals you can rely on,
                    every time.
                  </p>
                </div>
                <Image
                  src="/shield.png"
                  alt="Ziplyt app showing worker profile"
                  width={90}
                  height={90}
                  className="object-cover"
                />
              </div>
            </WobbleCard>
          </motion.div>
        </div>

        {/* 2ND FEATURE */}
        <div
          className="flex min-[800px]:flex-row flex-col items-center gap-6 "
          ref={ref}
        >
          {/* RIGHT  */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full min-[1000px]:w-1/2 flex justify-center"
          >
            <WobbleCard containerClassName=" min-h-[240px] max-h-[360px] bg-indigo-500">
              <div>
                <h1 className="text-[28px] tracking-[-0.015em] text-white font-poppins font-bold">
                  Book More, Save Big with Coins
                </h1>
                <p className=" text-[14px] text-white/80 font-poppins mt-2 tracking-tighter">
                  Earn coins with every booking to unlock massive discounts—the
                  more you book, the more you save!
                </p>
              </div>
            </WobbleCard>
          </motion.div>

          {/* LEFT  */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full max-[799px]:hidden "
          >
            <h3 className="bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text] font-inter text-[18px] tracking-tighter font-light uppercase mb-1">
              Book More, Save Big with Coins
            </h3>
            <div className=" flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center self-start">
                <Banknote size={24} className="text-primary-blue" />
              </div>
              <h1 className="text-[26px] font-poppins tracking-tight font-medium text-balance text-deep leading-snug">
                Earn coins with every booking to unlock massive discounts—the
                more you book, the more you save!
              </h1>
            </div>
          </motion.div>
        </div>

        {/* 3RD FEATURE */}
        <div
          className="flex min-[800px]:flex-row flex-col items-center gap-6 "
          ref={ref}
        >
          {/* left */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full max-[799px]:hidden  "
          >
            <h3 className="bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text] font-inter text-[18px] tracking-tighter font-light mb-1">
              LIGHTNING-FAST SERVICE
            </h3>
            <div className=" flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center self-start">
                <AlarmClock size={24} className="text-primary-blue" />
              </div>
              <h1 className="text-[26px] font-poppins tracking-tight font-medium text-balance text-deep leading-snug">
                Book instantly and get assistance in under 10 minutes — no more
                endless waiting, no more uncertainty.
              </h1>
            </div>
          </motion.div>

          {/* RIGHT  */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className=" min-[1000px]:w-1/2 flex justify-center"
          >
            <WobbleCard containerClassName="bg-blue-900 min-h-[240px] max-h-[360px]">
              <h1 className="text-[24px]  text-balance font-medium font-inter tracking-tight text-white">
                INSTANT BOOKING
              </h1>
              <div className="flex items-center h-full gap-5 py-3">
                <div className="self-start">
                  <p className="text-[18px] text-gray-300 font-inter mt-2">
                    From tap leaks to AC malfunctions, help is just minutes
                    away. Our nearest expert is on the move.
                  </p>
                </div>
                <Image
                  src="/fast-forward.png"
                  alt="Ziplyt app showing worker profile"
                  width={70}
                  height={70}
                  className="object-cover self-end"
                />
              </div>
            </WobbleCard>
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default Feature;
// max-[1000px]:w-1/2 flex justify-center
