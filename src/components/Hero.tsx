// "use client";
import React from "react";
import Image from "next/image";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { LuAward, LuZap, LuSparkle } from "react-icons/lu";
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

  return (
    <section className="min-h-[93vh] w-full min-[1024]:py-6 min-[820]:py-4 py-3 px-4 min-[1200px]:px-8 container">
      <div className="flex flex-col min-[1000px]:flex-row gap-4">
        {/* LEFT CONTENT */}

        <main className="min-[1000px]:w-[55%] w-full">
          {/* MAIN HEAD + slogan */}
          <div className="mt-12 min-[1024]:px-2 text-deep">
            <h1 className="font-poppins text-[40px] min-[1200px]:text-[50px] tracking-tight font-medium capitalize leading-snug  max-[999px]:text-center  text-balance">
              <span className="bg-moving-gradient text-white px-3 rounded-bl-3xl rounded-tr-3xl min-[1200px]:text-[56px] text-[48px] max-[425px]:text-[42px]">
                Revolutionize
              </span>{" "}
              Home Services <br className="br-800-999" /> with Ziplyt
              <br />
            </h1>
            {/* ICONS */}
            <div className="flex flex-wrap items-center justify-center w-full gap-3 sm:gap-5 my-5 min-[1000px]:justify-start">
              <div className="flex items-center gap-3 bg-primary-blue px-3 py-[6px] rounded-full w-fit">
                <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center">
                  <LuZap className="text-primary-blue" size={20} />
                </div>
                <p className="italic font-quicksand text-[16px] font-medium text-white">
                  Instant
                </p>
              </div>
              {/* 2 */}
              <div className="flex items-center gap-3 bg-primary-blue px-3 py-[6px] rounded-full w-fit">
                <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center">
                  <LuAward className="text-primary-blue" size={20} />
                </div>
                <p className="italic font-quicksand text-[16px] font-medium text-white tracking-tight">
                  Rewardable
                </p>
              </div>
              {/* 3 */}
              <div className="flex items-center gap-3 bg-light/30 backdrop-blur-lg px-3 py-[6px] rounded-full w-fit">
                <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center">
                  <LuSparkle className="text-deep" size={20} />
                </div>
                <p className="italic font-quicksand text-[16px] font-medium text-black tracking-tight">
                  Transparent
                </p>
              </div>
            </div>

            <h3 className="font-inter text-[20px] font-light tracking-tight max-[999px]:mt-10 mt-5 max-[999px]:text-center leading-tight text-light text-balance max-[400px]px-5 px-10">
              Say goodbye to waiting, Welcome to instant Home Solutions{" "}
              <span className="font-poppins font-medium tracking-tight text-deep">
                under 10 mintues.
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
          <h2 className="flex items-center min-[1000px]:justify-start justify-center mt-10 font-poppins text-[18px] font-medium text-deep">
            Coming soon on...
          </h2>

          {/* MAX 1000PX TABLET CTA */}
          <div className="flex items-center min-[1000px]:justify-start justify-center w-full mt-3 gap-5">
            {/* APPLE */}
            <div className="bg-deep px-4 py-3 rounded-lg flex items-center gap-2 shadow-md">
              <Image src="/apple-logo.png" alt="apple" width={25} height={25} />
              <p className="font-inter text-[14px] font-medium text-white">
                App Store
              </p>
            </div>
            {/* PLAYSTORE */}
            <div className="bg-deep px-4 py-3 rounded-lg flex items-center gap-2 shadow-md">
              <Image
                src="/playstore.png"
                alt="playstore"
                width={25}
                height={25}
              />
              <p className="font-inter text-[14px] font-medium text-white">
                Play Store
              </p>
            </div>
          </div>
        </main>

        {/* ----------------------------------------------- */}
        {/* RIGHT CONTENT */}
        <div className="min-[1000px]:w-[45%] w-full relative">
          <div className=" absolute max-[1000px]:hidden top-0 right-0 w-[100%] h-full bg-gradient-to-br from-primary-blue via-blue-400 to-primary-blue rounded-tr-[50px] rounded-bl-[50px] rounded-l-md"></div>
          {/* MAX-999 H1  */}
          <div className="max-[999px]:flex hidden items-center justify-center gap-5 max-[430px]:gap-1 mt-4">
            <hr className="border-b-[.5px] border-light/30 w-[10%]" />
            <h3 className="bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text] font-inter text-[16px] font-medium max-[430px]:text-[14px]">
              EXPEREINCE THE BREAKTHROUGH
            </h3>
            <hr className="border-b-[.5px] border-light/30 w-[10%] " />
          </div>

          <div className="relative ">
            <Image
              src="/heroimg4.png"
              alt=""
              height={550}
              width={550}
              priority
              className="mt-14 ml-auto max-[999px]:mx-auto"
            />

            {/* 1ND */}
            <div className="absolute max-[500px]:hidden -top-8 min-[1000px]:right-0 right-16  bg-light/30 backdrop-blur-md p-2 rounded-lg blue-shadow flex flex-col gap-2">
              <h1 className="text-[16px] font-poppins text-black font-medium capitalize tracking-tighter">
                Urgency ? We got you.
              </h1>
              <div className=" flex items-center gap-2 max-w-[14rem] bg-white rounded-xl py-2 px-1">
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
              </div>
              <div className=" flex items-center gap-2 max-w-[14rem] bg-white rounded-xl py-2 px-1">
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
              </div>
            </div>
            {/* 2RD */}
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
