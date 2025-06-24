"use client";

import React, { useEffect, useState } from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { LuAward, LuZap, LuSparkle } from "react-icons/lu";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Image from "next/image";
import { motion } from "framer-motion";

const TestHero = () => {
  // Add client-side only rendering for components that might be affected by browser extensions
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true once component is mounted on the client
    setIsClient(true);
  }, []);

  // ANIMATED TOOLTIP ->
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image: "/test1.png",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image: "/test2.png",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image: "/test3.png",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image: "/test4.png",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image: "/test5.png",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image: "/test6.png",
    },
  ];

  return (
    <section className="min-h-screen w-full p-6">
      <main className="flex flex-col min-[1000px]:flex-row min-[1000px]:gap-4 gap-8 py-6 px-2 max-w-[1280px] mx-auto">
        {/* LEFT CONTENT */}
        <div className="w-full min-[1000px]:w-[55%] flex flex-col gap-4 ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="tracking-tight font-sora font-semibold min-[600px]:text-[48px] text-[42px] max-[800px]:text-center leading-tight text-deep"
          >
            <motion.span
              initial={{ backgroundColor: "rgba(0, 94, 255, 0.7)" }}
              animate={{ backgroundColor: "rgb(0, 94, 255)" }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="font-inter bg-moving-gradient text-white px-3 rounded-bl-3xl rounded-tr-3xl"
            >
              Effortless
            </motion.span>{" "}
            Home Service <br /> at your fingertips
          </motion.h1>

          {/* ICONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5, staggerChildren: 0.2 }}
            className="flex flex-wrap items-center justify-center w-full gap-3 sm:gap-5 my-5 min-[1000px]:justify-start"
          >
            <motion.div
              initial={{ scale: 0.9, x: -20, opacity: 0 }}
              animate={{ scale: 1, x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3 bg-primary-blue px-3 py-[6px] rounded-full w-fit"
            >
              <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center">
                <LuZap className="text-primary-blue" size={20} />
              </div>
              <p className="italic font-quicksand text-[16px] font-medium text-white">
                Instant
              </p>
            </motion.div>

            {/* 2 */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-3 bg-primary-blue px-3 py-[6px] rounded-full w-fit"
            >
              <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center">
                <LuAward className="text-primary-blue" size={20} />
              </div>
              <p className="italic font-quicksand text-[16px] font-medium text-white tracking-tight">
                Rewardable
              </p>
            </motion.div>

            {/* 3 */}
            <motion.div
              initial={{ scale: 0.9, x: 20, opacity: 0 }}
              animate={{ scale: 1, x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex items-center gap-3 bg-light/30 backdrop-blur-lg px-3 py-[6px] rounded-full w-fit"
            >
              <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center">
                <LuSparkle className="text-deep" size={20} />
              </div>
              <p className="italic font-quicksand text-[16px] font-medium text-black tracking-tight">
                Transparent
              </p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="flex flex-col gap-1 max-[800px]:max-w-[600px] mx-auto"
          >
            <RiDoubleQuotesL size={24} className="text-gray-400 self-start" />
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="font-inter text-[20px] text-gray-600 tracking-tight leading-snug max-[1000px]:text-center"
            >
              No more waiting Days for unreliable workers. Get verified local
              professionals instantly. No drama, no worries - from emergencies
              to maintenance, booking was never this easy Skip the wait. Welcome
              instant solutions.
            </motion.h3>
            <RiDoubleQuotesR
              size={24}
              className="text-gray-400 self-end mr-10"
            />
          </motion.div>

          {/* CTA */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="text-center font-sora text-black font-medium text-[20px]"
          >
            Coming Soon ...
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.8 }}
            className="flex items-center justify-center w-full mt-1 gap-5"
          >
            {/* APPLE */}
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-deep px-4 py-3 rounded-lg flex items-center gap-2 shadow-md"
            >
              <Image src="/apple-logo.png" alt="apple" width={25} height={25} />
              <p className="font-inter text-[14px] font-medium text-white">
                App Store
              </p>
            </motion.div>

            {/* PLAYSTORE */}
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-deep px-4 py-3 rounded-lg flex items-center gap-2 shadow-md"
            >
              <Image
                src="/playstore.png"
                alt="playstore"
                width={25}
                height={25}
              />
              <p className="font-inter text-[14px] font-medium text-white">
                Play Store
              </p>
            </motion.div>
          </motion.div>

          {/* TOOLTIP  */}
          {isClient && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 2.0 }}
              className="mt-5 flex gap-6 items-center justify-center"
            >
              <div className="flex flex-row items-center justify-center">
                <AnimatedTooltip items={people} />
              </div>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2.2 }}
                className="text-[16px] font-poppins font-light text-light"
              >
                Trusted by Many People.
              </motion.p>
            </motion.div>
          )}
        </div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="min-[1000px]:w-[45%] w-full relative"
        >
          {/* MAX-999 H1  */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-[999px]:flex hidden items-center justify-center gap-5 max-[430px]:gap-1 mt-4"
          >
            <hr className="border-b-[.5px] border-light/30 w-[10%]" />
            <h3 className="bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text] font-inter text-[16px] font-medium max-[430px]:text-[14px]">
              EXPERIENCE THE BREAKTHROUGH
            </h3>
            <hr className="border-b-[.5px] border-light/30 w-[10%] " />
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Image
                src="/heroimg4.png"
                alt=""
                height={550}
                width={550}
                priority
                className="mt-14 ml-auto max-[999px]:mx-auto"
              />
            </motion.div>

            {/* 1ND */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="absolute max-[500px]:hidden -top-8 min-[1000px]:right-0 right-16 bg-primary-blue backdrop-blur-md p-2 rounded-lg blue-shadow flex flex-col gap-2"
            >
              <h1 className="text-[14px] font-inter text-white font-medium capitalize tracking-tighter">
                Urgency ? We got you.
              </h1>
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="flex items-center gap-2 max-w-[14rem] bg-white rounded-xl py-2 px-1"
              >
                <Image
                  src="/test7.png"
                  alt="hero-image"
                  height={40}
                  width={40}
                  className="rounded-full bg-deep self-start"
                />
                <h3 className="text-deep tracking-tighter font-inter leading-snug text-[13px]">
                  Need to fix drainage before my wife reach home.
                </h3>
              </motion.div>
              <motion.div
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.7 }}
                className="flex items-center gap-2 max-w-[14rem] bg-white rounded-xl py-2 px-1"
              >
                <h3 className="text-deep tracking-tighter font-inter leading-snug text-[13px]">
                  will be there in 10 minutes sir
                </h3>
                <Image
                  src="/heroimage3.jpg"
                  alt="hero-image"
                  height={40}
                  width={40}
                  className="rounded-full bg-deep self-start"
                />
              </motion.div>
            </motion.div>

            {/* 2RD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.9 }}
              className="absolute max-[500px]:hidden bottom-5 left-0 bg-light/40 backdrop-blur-sm p-2 rounded-lg blue-shadow max-w-[15rem]"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/customer1.png"
                  alt=""
                  height={40}
                  width={40}
                  className="rounded-full bg-sky"
                />
                <div className="flex flex-col items-center font-poppins">
                  <h1 className="text-[14px] font-medium tracking-tight text-deep">
                    Bhavesh singh
                  </h1>
                  <p className="text-[12px] text-gray-600 tracking-tight">
                    customer, Mohalli
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.1 }}
                className="bg-white p-1 rounded-lg"
              >
                <div className="flex w-full justify-baseline">
                  <BiSolidQuoteSingleLeft
                    size={16}
                    className="text-light/30"
                  />
                  <BiSolidQuoteSingleLeft
                    size={16}
                    className="text-light/30"
                  />
                </div>
                <div className="font-roboto tracking-tighter text-[13px] text-center text-balance py-2">
                  <p className="max-w-[80%] mx-auto">
                    such a great app that help me to fixes my plumbing work in
                    no time. i feel confident using this app.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </section>
  );
};

export default TestHero;
