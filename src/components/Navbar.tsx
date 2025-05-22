"use client";
import React, { useEffect, useState } from "react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <header
      className={` z-50 top-0 left-1/2 -translate-x-1/2 transition-all duration-300 ${
        isSticky
          ? "fixed bg-white/30 backdrop-blur-md my-6 shadow-md py-3 px-4 w-[80%] rounded-xl"
          : "relative bg-transparent py-3 px-5 w-full"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <h1
          className={`font-main font-bold tracking-tight transition-all duration-300 ${
            isSticky ? "text-[22px]" : "text-[28px]"
          }`}
        >
          Ziplyt
        </h1>

        {/* NAV LINKS (Desktop) */}
        <nav className="hidden min-[820px]:inline-flex gap-6 items-center font-inter text-[17px] font-light tracking-tight text-light">
          <Link href="/reachus" className="hover:text-deep">
            reach us
          </Link>
          <span className="w-2 h-2 bg-deep rounded-full"></span>
          <Link href="/workwithus" className="hover:text-deep">
            careers
          </Link>
          <span className="w-2 h-2 bg-deep rounded-full"></span>
          <Link href="/about" className="hover:text-deep">
            about company
          </Link>
        </nav>

        {/* CTA + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <ShimmerButton
            className={`shadow-2xl min-[820px]:px-4 px-2 py-1.5 transition-all duration-300 ${
              isSticky ? "scale-90" : "scale-100"
            }`}
            background="#005EFF"
          >
            <span className="whitespace-pre-wrap text-center font-poppins text-[16px]">
              Explore
            </span>
          </ShimmerButton>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="min-[820px]:hidden text-deep"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-white shadow-xl p-6 flex flex-col gap-6 text-deep  min-[820px]:hidden h-[60vh] rounded-b-lg"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="self-end mb-4 text-primary-blue"
              aria-label="close menu"
            >
              <X size={28} />
            </button>
            <h1 className="text-[28px] font-main font-bold tracking-tight">
              Ziplyt
            </h1>
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-[16px] tracking-tight font-poppins font-medium uppercase text-deep hover:text-primary-blue"
            >
              reach us
            </a>
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-[16px] tracking-tight font-poppins font-medium uppercase text-deep hover:text-primary-blue"
            >
              careers
            </a>
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-[16px] tracking-tight font-poppins font-medium uppercase text-deep hover:text-primary-blue"
            >
              about company
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
