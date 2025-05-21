"use client";
import React from "react";
import Image from "next/image";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { LuChevronRight } from "react-icons/lu";
import AppDownload from "@/lib/app-download";
import { SparklesCore } from "./ui/sparkels";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { LuCheck } from "react-icons/lu";
const Hero = () => {
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
    <section className="min-h-[93vh] w-full min-[1024]:py-6 min-[820]:py-4 py-3 px-4 min-[1200px]:px-8">
      <div className="flex flex-col min-[1000px]:flex-row gap-4">
        {/* LEFT CONTENT */}
        <div className="min-[1000px]:w-[55%] w-full">
          {/* small ad */}
          <div className="border border-light px-5 py-2 rounded-lg w-fit mx-auto mt-3">
            <h1 className="font-inter text-[16px] font-medium tracking-tight bg-[linear-gradient(to_right,#005EFF,#202E47)] text-transparent bg-clip-text [-webkit-background-clip:text] ">
              Avail huge discounts now
            </h1>
          </div>
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-[200px] h-[40px] mx-auto -mt-5"
            particleColor="#005EFF"
          />
          {/* MAIN HEAD + slogan */}
          <div className="mt-8 min-[1024]:px-2 text-deep">
            <h1 className="font-poppins text-[42px] min-[1200px]:text-[48px] tracking-tight font-medium capitalize min-[450px]:leading-snug leading-12 max-[999px]:text-center max-[425px]:text-[40px]">
              <span className="bg-moving-gradient text-white px-3 rounded-bl-3xl rounded-tr-3xl min-[1200px]:text-[54px] text-[50px] max-[425px]:text-[46px]">
                transforms
              </span>{" "}
              the way <br />
              to connect & <br />
              book{" "}
              <span className="bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text] min-[1200px]:text-[54px] text-[50px] font-[500] font-inter tracking-tighter max-[425px]:text-[46px]">
                Professional{" "}
              </span>
              Online
            </h1>
            <h3 className="font-inter text-[24px] font-light tracking-tight mt-5 max-[999px]:text-center leading-snug text-light">
              From your AC repair , bathroom clean To Tap fix in just{" "}
              <span className="font-poppins font-bold tracking-tight text-deep">
                10 mintues.
              </span>
            </h3>
          </div>
          {/* TOOLTIP  */}
          <div className="mt-8 flex gap-6 items-center max-[999px]:justify-center">
            <div className="flex flex-row items-center justify-center">
              <AnimatedTooltip items={people} />
            </div>
            <p className="text-[16px] font-poppins font-light text-light">
              Trusted my Many People +
            </p>
          </div>
          {/* CTA BOOK NOW */}
          <div className="mt-8 flex items-center justify-center">
            <ShimmerButton
              className="shadow-2xl min-[820px]:px-4 px-2 py-1.5"
              background="#005EFF"
            >
              <span className="whitespace-pre-wrap flex items-center gap-3 font-poppins text-[16px]">
                Explore Services <LuChevronRight size={18} />
              </span>
            </ShimmerButton>
          </div>

          {/* 1000PX+ APP CTA */}
          <div className=" hidden min-[1000px]:flex  mt-4 ticker-shadow w-fit overflow-hidden rounded-xl mx-auto">
            <AppDownload />
          </div>
        </div>
        {/* RIGHT CONTENT */}
        <div className="min-[1000px]:w-[45%] w-full relative">
          <h1 className=" font-poppins bg-gray-100/30 px-4 py-1 w-fit text-[14px] font-medium mx-auto min-[1000px]:text-deep text-light mt-5 skew-x-12">
            Expereince the breakthrough
          </h1>
          <div className="relative">
            <Image
              src="/phonemockup.png"
              alt=""
              height={500}
              width={500}
              className="mt-14 ml-auto max-[999px]:mx-auto"
            />
            {/* 1st */}
            <div className="absolute max-[1200px]:hidden left-0  bottom-[126px]  bg-gray-200/60 backdrop-blur-md p-1 rounded-lg blue-shadow">
              <div className="flex gap-2 mb-2">
                <div className="w-6 h-6 rounded-md flex items-center justify-center bg-white">
                  <LuCheck className="text-primary-blue" />
                </div>
                <h1 className="text-[15px] font-poppins tracking-tighter text-center">
                  Experience unmatched <br /> transparency
                </h1>
              </div>
              <div className="relative w-[160px] h-[160px]  mx-auto ">
                <Image
                  src="/float1.png"
                  alt="pic"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* 2ND */}
            <div className="absolute max-[500px]:hidden -top-8 min-[1000px]:right-0 right-16  bg-light/30 backdrop-blur-md p-1 rounded-lg blue-shadow flex flex-col gap-2">
              <h1 className="text-[18px] font-poppins text-black font-medium capitalize">
                Urgency ? We got you.
              </h1>
              <div className=" flex items-center gap-2 max-w-[14rem] bg-white rounded-xl py-2 px-1">
                <Image
                  src="/test7.png"
                  alt=""
                  height={46}
                  width={46}
                  className="rounded-full bg-deep self-start"
                />
                <h3 className="text-deep tracking-tighter font-inter leading-snug text-[13px]">
                  Need to fix drainage before my wife reach home.
                </h3>
              </div>
              <div className=" flex items-center gap-2 max-w-[14rem] bg-white rounded-xl py-2 px-1">
                <h3 className="text-deep tracking-tighter font-inter leading-snug text-[13px]">
                  will be there in 10 minutes sir
                </h3>
                <Image
                  src="/heroimage3.jpg"
                  alt=""
                  height={46}
                  width={46}
                  className="rounded-full bg-deep self-start"
                />
              </div>
            </div>
            {/* 3RD */}
            <div className="absolute max-[500px]:hidden bottom-0 right-20 min-[1000px]:-bottom-10 min-[1000px]:right-10 bg-light/40 backdrop-blur-sm p-2 rounded-lg blue-shadow max-w-[15rem]">
              <div className=" flex items-center gap-3">
                <Image
                  src="/customer1.png"
                  alt=""
                  height={55}
                  width={55}
                  className="rounded-full bg-sky"
                />
                <div className=" flex flex-col items-center font-poppins">
                  <h1 className="text-[15px] font-medium tracking-tight text-deep">
                    Bhavesh singh
                  </h1>
                  <p className=" text-[14px] text-gray-600 tracking-tight">
                    customer, Mohalli
                  </p>
                </div>
              </div>
              <div className="bg-white p-1 rounded-lg">
                <div className="flex w-full justify-baseline">
                  <BiSolidQuoteSingleLeft
                    size={20}
                    className=" text-light/30"
                  />
                  <BiSolidQuoteSingleLeft
                    size={20}
                    className=" text-light/30"
                  />
                </div>
                <div className="mt-2 font-roboto tracking-tighter text-[14px] text-center">
                  <p className="max-w-[80%] mx-auto">
                    such a great app that help me to fixes my plumbing work in
                    no time. i feel confident using this app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
