"use client";

import React from "react";
import { ShieldCheck, AlarmClock, Banknote } from "lucide-react";
import ServicesCarousel from "./Carousel";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const Feature = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.1, 0.25], [30, 0]);
  
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const subtitleInView = useInView(subtitleRef, { once: true, amount: 0.5 });
  const containerInView = useInView(containerRef, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.1 + (i * 0.1),
      }
    }),
    hover: {
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 94, 255, 0.1), 0 10px 10px -5px rgba(0, 94, 255, 0.1)",
      borderColor: "rgba(0, 94, 255, 0.8)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: (delay: number) => ({
      opacity: 1,
      transition: { duration: 0.5, delay }
    })
  };

  return (
    <section ref={sectionRef} className="container py-4 px-4 min-[1000px]:mt-10" id="features">
      <main>
        <motion.h4 
          ref={subtitleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={subtitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-inter text-[20px] tracking-tighter font-semibold text-light/50"
        >
          FEATURES
        </motion.h4>
        
        <motion.h1 
          ref={titleRef}
          style={{ opacity: titleOpacity, y: titleY }}
          className="bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text] font-poppins text-[42px] font-medium text-center tracking-tighter text-balance leading-snug mb-8"
        >
          Speed You Crave. Trust You Deserve.
        </motion.h1>
        
        {/* 3 BOXES */}
        <div className="flex justify-center py-6 pl-4 mb-10">
          <motion.div 
            ref={containerRef}
            className="grid grid-cols-1 min-[799px]:grid-cols-3 gap-8 items-stretch justify-center"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={containerInView ? "visible" : "hidden"}
                whileHover="hover"
                className={`
                  w-full max-w-[22rem] h-full flex flex-col
                  border border-gray-200 rounded-xl p-4
                  shadow-sm min-[799px]:shadow-md min-[799px]:border min-[799px]:border-primary-blue/20 min-[799px]:hover:border-primary-blue min-[799px]:p-6 min-[799px]:rounded-2xl min-[799px]:transition-colors min-[799px]:duration-300
                  pulse-glow min-[799px]:!animate-none
                  relative overflow-hidden
                `}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-blue-50/0 via-blue-100/10 to-blue-50/0 opacity-0 min-[799px]:hover:opacity-100 transition-opacity duration-700"
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <motion.div 
                  variants={contentVariants}
                  custom={0.2 + (i * 0.1)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-200 mb-2 min-[799px]:w-10 min-[799px]:h-10 min-[799px]:bg-blue-50 relative z-10"
                >
                  {i === 0 && (
                    <ShieldCheck size={18} className="text-primary-blue min-[799px]:size-5" />
                  )}
                  {i === 1 && (
                    <AlarmClock size={18} className="text-primary-blue min-[799px]:size-5" />
                  )}
                  {i === 2 && (
                    <Banknote size={18} className="text-primary-blue min-[799px]:size-5" />
                  )}
                </motion.div>
                
                <motion.h3 
                  variants={contentVariants}
                  custom={0.3 + (i * 0.1)}
                  className="text-deep font-inter text-[18px] tracking-tighter font-light mb-1 whitespace-nowrap overflow-hidden text-ellipsis min-[799px]:text-[20px] min-[799px]:font-semibold relative z-10"
                >
                  {i === 0 && "UNMATCHED TRANSPARENCY"}
                  {i === 1 && "VERIFIED WORKERS"}
                  {i === 2 && "SAVE WITH ZIPCOINS"}
                </motion.h3>
                
                <motion.p 
                  variants={contentVariants}
                  custom={0.4 + (i * 0.1)}
                  className="text-[16px] text-light tracking-tight text-balance font-inter flex-grow min-[799px]:text-[17px] min-[799px]:mt-2 relative z-10"
                >
                  {i === 0 &&
                    "Know your pro before they knock. Upfront pricing, real reviews, and verified experience — no hidden fees, no last-minute shocks."}
                  {i === 1 &&
                    "Every service provider is background-checked and verified to ensure top-quality service delivery."}
                  {i === 2 &&
                    "Turn your bookings into rewards that make every experience worth it. Zipcoins help you save more every time you book."}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CAROUSEL */}
        <ServicesCarousel />
      </main>
    </section>
  );
};

export default Feature;
