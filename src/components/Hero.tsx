"use client";
import React from "react";
import Image from "next/image";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
// import AppDownload from "@/lib/app-download";
// import { SparklesCore } from "./ui/sparkels";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
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
  // min-h-[93vh]
  return (
    <section className="min-h-[93vh] w-full min-[1024]:py-6 min-[820]:py-4 py-3 px-4 min-[1200px]:px-8 container">
      <div className="flex flex-col min-[1000px]:flex-row gap-4">
        {/* LEFT CONTENT */}
        <div className="min-[1000px]:w-[55%] w-full">
          {/* MAIN HEAD + slogan */}
          <div className="mt-12 min-[1024]:px-2 text-deep">
            <h1 className="font-poppins text-[40px] min-[1200px]:text-[46px] tracking-tight font-medium capitalize min-[450px]:leading-snug leading-12 max-[999px]:text-center max-[425px]:text-[40px]">
              <span className="bg-moving-gradient text-white px-3 rounded-bl-3xl rounded-tr-3xl min-[1200px]:text-[50px] text-[48px] max-[425px]:text-[42px]">
                transforms
              </span>{" "}
              the way <br />
              to connect & <br />
              book{" "}
              <span className="bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text] min-[1200px]:text-[50px] text-[48px] font-[500] font-inter tracking-tighter max-[425px]:text-[46px]">
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
          <div className="mt-12 flex gap-6 items-center max-[999px]:justify-center">
            <div className="flex flex-row items-center justify-center">
              <AnimatedTooltip items={people} />
            </div>
            <p className="text-[16px] font-poppins font-light text-light">
              Trusted by Many People.
            </p>
          </div>
          {/* SMALL TEXT FOR COMMING SOON */}
          <h2 className="flex items-center min-[1000px]:justify-start justify-center mt-10 font-inter text-[16px] tracking-tight font-bold text-deep">
            Coming soon on{" "}
          </h2>

          {/* MAX 1000PX TABLET CTA */}
          <div className="flex items-center min-[1000px]:justify-start justify-center w-full mt-3 gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="50"
              viewBox="0 0 160 50"
              className="cursor-pointer"
            >
              <rect width="150" height="50" rx="12" fill="black" />
              <g transform="translate(10, 10)">
                <path
                  fill="white"
                  d="M24.7 10.4c-.6.8-1.5 1.4-2.4 1.4-.1-1 .2-2.1.7-2.9.6-.8 1.5-1.4 2.4-1.4.1 1-.2 2 .7 2.9zm-3.2 2.2c-1.3 0-2.6.9-3.4.9-.9 0-2.2-.8-3.6-.8-1.8 0-3.6 1-4.5 2.6-1.9 3.3-.5 8.2 1.4 10.9.9 1.3 2 2.7 3.4 2.6 1.3 0 1.8-.9 3.4-.9s2 .9 3.5.9c1.5 0 2.4-1.3 3.3-2.6.9-1.4 1.3-2.7 1.3-2.8 0-.1-2.5-1-2.6-4.1-.1-2.6 2.1-3.9 2.2-4-.1-.1-2.3-1.5-4.4-1.5z"
                />
                <text
                  x="32"
                  y="10"
                  fill="white"
                  fontSize="10"
                  fontFamily="sans-serif"
                >
                  Download on the
                </text>
                <text
                  x="32"
                  y="25"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  App Store
                </text>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="50"
              viewBox="0 0 180 50"
              className="cursor-pointer"
            >
              <rect width="150" height="50" rx="12" fill="black" />
              <g transform="translate(10, 10)">
                <polygon
                  fill="#A6A6A6"
                  points="3.6,0 0,3.3 8.4,11.8 0,20.3 3.6,23.6 19.2,11.8"
                />
                <polygon fill="#00ADEF" points="0,3.3 0,20.3 8.4,11.8" />
                <polygon fill="#FBBB00" points="3.6,0 19.2,11.8 8.4,11.8" />
                <polygon fill="#518EF8" points="3.6,23.6 19.2,11.8 8.4,11.8" />
                <text
                  x="32"
                  y="10"
                  fill="white"
                  fontSize="10"
                  fontFamily="sans-serif"
                >
                  Get it on
                </text>
                <text
                  x="32"
                  y="25"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  Google Play
                </text>
              </g>
            </svg>
          </div>
        </div>
        {/* RIGHT CONTENT */}
        <div className="min-[1000px]:w-[45%] w-full relative">
          <h1 className="max-[999px]:hidden flex font-poppins bg-gray-100/30 px-4 py-1 w-fit text-[14px] font-medium mx-auto min-[1000px]:text-deep text-light mt-5 skew-x-12">
            Expereince the breakthrough
          </h1>
          {/* MAX-999 H1  */}
          <div className="max-[999px]:flex hidden items-center justify-center gap-5 max-[430px]:gap-1 mt-4">
            <hr className="border-b-[.5px] border-light/30 w-[10%]" />
            <h1 className="bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text] font-inter text-[16px] font-medium max-[430px]:text-[14px]">
              EXPEREINCE THE BREAKTHROUGH
            </h1>
            <hr className="border-b-[.5px] border-light/30 w-[10%] " />
          </div>
          <div className="relative">
            <Image
              src="/heroimg4.png"
              alt=""
              height={550}
              width={550}
              priority
              className="mt-14 ml-auto max-[999px]:mx-auto"
            />
            {/* 1st */}
            {/* <div className="absolute max-[1200px]:hidden left-0  bottom-[126px]  bg-gray-200/60 backdrop-blur-md p-1 rounded-lg blue-shadow">
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
            </div> */}

            {/* 2ND */}
            <div className="absolute max-[500px]:hidden -top-8 min-[1000px]:right-0 right-16  bg-light/30 backdrop-blur-md p-2 rounded-lg blue-shadow flex flex-col gap-2">
              <h1 className="text-[16px] font-poppins text-black font-medium capitalize tracking-tighter">
                Urgency ? We got you.
              </h1>
              <div className=" flex items-center gap-2 max-w-[14rem] bg-white rounded-xl py-2 px-1">
                <Image
                  src="/test7.png"
                  alt=""
                  height={40}
                  width={40}
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
                  height={40}
                  width={40}
                  className="rounded-full bg-deep self-start"
                />
              </div>
            </div>
            {/* 3RD */}
            <div className="absolute max-[500px]:hidden bottom-5 left-0 bg-light/40 backdrop-blur-sm p-2 rounded-lg blue-shadow max-w-[15rem]">
              <div className=" flex items-center gap-3">
                <Image
                  src="/customer1.png"
                  alt=""
                  height={40}
                  width={40}
                  className="rounded-full bg-sky"
                />
                <div className=" flex flex-col items-center font-poppins">
                  <h1 className="text-[14px] font-medium tracking-tight text-deep">
                    Bhavesh singh
                  </h1>
                  <p className=" text-[12px] text-gray-600 tracking-tight">
                    customer, Mohalli
                  </p>
                </div>
              </div>
              <div className="bg-white p-1 rounded-lg">
                <div className="flex w-full justify-baseline">
                  <BiSolidQuoteSingleLeft
                    size={16}
                    className=" text-light/30"
                  />
                  <BiSolidQuoteSingleLeft
                    size={16}
                    className=" text-light/30"
                  />
                </div>
                <div className=" font-roboto tracking-tighter text-[13px] text-center text-balance py-2">
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

//  <SparklesCore
//             background="transparent"
//             minSize={0.4}
//             maxSize={1}
//             particleDensity={1200}
//             className="w-[200px] h-[40px] mx-auto -mt-5"
//             particleColor="#005EFF"
//           /> *
