"use client";

import React, { useRef } from "react";
import {
  Wrench,
  Hammer,
  Zap,
  Sparkles,
  Flower2,
  PaintBucket,
  Cpu,
  Cat,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import DisplayCards from "@/components/ui/display-cards";

const categories = [
  { id: "plumber", name: "Plumber", icon: Wrench },
  { id: "carpenter", name: "Carpenter", icon: Hammer },
  { id: "electrician", name: "Electrician", icon: Zap },
  { id: "cleaner", name: "Cleaner", icon: Sparkles },
  { id: "gardener", name: "Gardener", icon: Flower2 },
  { id: "painter", name: "Painter", icon: PaintBucket },
  { id: "technician", name: "Technician", icon: Cpu },
  { id: "pet-care", name: "Pet Care", icon: Cat },
];

// Custom cards for our service section
const serviceCards = [
  {
    icon: <Wrench className="size-4 text-blue-300" />,
    title: "Professional",
    description: "Verified skilled workers",
    date: "Trusted service",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Reliable",
    description: "100% service guarantee",
    date: "Peace of mind",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Zap className="size-4 text-blue-300" />,
    title: "Fast",
    description: "Quick response times",
    date: "When you need it",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  // Animation values for heading
  const h1Opacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const h1Y = useTransform(scrollYProgress, [0.1, 0.25], [30, 0]);

  // Animation values for subheading
  const h3Opacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const h3Y = useTransform(scrollYProgress, [0.15, 0.3], [20, 0]);

  // Animation values for the display cards
  const cardsOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const cardsScale = useTransform(scrollYProgress, [0.2, 0.35], [0.9, 1]);

  // Animation values for the categories
  const categoriesOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const categoriesY = useTransform(scrollYProgress, [0.25, 0.4], [20, 0]);

  return (
    <section
      ref={sectionRef}
      className="bg-white my-16 py-10 container"
      id="services"
    >
      <main className="max-w-7xl mx-auto px-4">
        <motion.h1
          style={{
            opacity: h1Opacity,
            y: h1Y,
          }}
          className="uppercase font-poppins text-center text-[42px] font-medium tracking-tight mb-2 bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text]"
        >
          Your Tasks, Our Expertise
        </motion.h1>

        <motion.h3
          style={{
            opacity: h3Opacity,
            y: h3Y,
          }}
          className="text-balance font-inter text-light tracking-tighter text-[20px] text-center mb-14"
        >
          You got problem? We got ears. Services for all your needs.
        </motion.h3>

        {/* MAIN CONTENT ROW - Cards left, Categories right */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
          {/* LEFT SIDE - Display Cards */}
          <motion.div
            className="w-full lg:w-[48%] lg:ml-6 pt-16 mt-4" /* Increased padding-top and added margin-top */
            style={{
              opacity: cardsOpacity,
              scale: cardsScale,
            }}
          >
            <div className="relative h-[350px] lg:h-[280px] w-full max-w-[500px] mx-auto">
              <DisplayCards cards={serviceCards} />
            </div>
          </motion.div>

          {/* RIGHT SIDE - Categories Grid */}
          <motion.div
            className="w-full lg:w-[45%]"
            style={{
              opacity: categoriesOpacity,
              y: categoriesY,
            }}
          >
            <h4 className="text-xl font-medium text-deep mb-6 tracking-tight font-inter text-center min-[1280px]:-ml-20">
              Browse by category
            </h4>
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <div className="flex flex-col gap-4">
                {categories.slice(0, 4).map(({ id, name, icon: Icon }) => (
                  <motion.div
                    key={id}
                    whileHover={{
                      y: -3,
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 94, 255, 0.1), 0 4px 6px -4px rgba(0, 94, 255, 0.1)",
                      borderColor: "rgba(0, 94, 255, 0.6)",
                    }}
                    className="bg-white px-4 py-3 rounded-full flex items-center gap-3 border border-gray-200 w-full sm:w-fit cursor-pointer transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded-md">
                      <Icon className="text-primary-blue w-5 h-5" />
                    </div>
                    <p className="capitalize font-inter text-[16px] font-medium tracking-tight whitespace-nowrap">
                      {name}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                {categories.slice(4, 8).map(({ id, name, icon: Icon }) => (
                  <motion.div
                    key={id}
                    whileHover={{
                      y: -3,
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 94, 255, 0.1), 0 4px 6px -4px rgba(0, 94, 255, 0.1)",
                      borderColor: "rgba(0, 94, 255, 0.6)",
                    }}
                    className="bg-white px-4 py-3 rounded-full flex items-center gap-3 border border-gray-200 w-full sm:w-fit cursor-pointer transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded-md">
                      <Icon className="text-primary-blue w-5 h-5" />
                    </div>
                    <p className="capitalize font-inter text-[16px] font-medium tracking-tight whitespace-nowrap">
                      {name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default Services;
