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
      className={`z-50 top-0 left-1/2 -translate-x-1/2 transition-[padding,margin,width,background,box-shadow,transform] duration-500 ease-in-out ${
        isSticky
          ? "fixed bg-gray-200/30 backdrop-blur-md my-6 shadow-md py-3 px-4 w-[80%] rounded-full"
          : "relative bg-transparent py-3 px-5 min-[800px]:px-12 w-full"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <Link href="/">
          <h1
            className={`font-main font-bold tracking-tight transition-all duration-300 ${
              isSticky ? "text-[22px]" : "text-[28px]"
            }`}
          >
            Ziplyt
          </h1>
        </Link>

        {/* NAV LINKS (Desktop) */}
        <nav className="hidden min-[820px]:inline-flex gap-6 items-center font-inter text-[17px] font-light tracking-tight text-gray-600">
          <Link href="/reachus" className="hover:text-deep">
            Reach us
          </Link>
          {/* <span className="w-2 h-2 bg-deep rounded-full"></span>
          <Link href="/careers" className="hover:text-deep">
            Careers
          </Link> */}
          <span className="w-2 h-2 bg-deep rounded-full"></span>
          <Link href="/about" className="hover:text-deep">
            About company
          </Link>
          <span className="w-2 h-2 bg-deep rounded-full"></span>
          <Link href="#features" className="hover:text-deep">
            Features
          </Link>
          <span className="w-2 h-2 bg-deep rounded-full"></span>
          <Link href="#testimonials" className="hover:text-deep">
            Testimonials
          </Link>
        </nav>

        {/* CTA + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <a href="#features">
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
          </a>

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
            <Link href="/">
              <h1 className="text-[28px] font-main font-bold tracking-tight">
                Ziplyt
              </h1>
            </Link>
            <Link
              href="/reachus"
              onClick={() => setIsMenuOpen(false)}
              className="text-[16px] tracking-tight font-poppins font-medium uppercase text-deep hover:text-primary-blue"
            >
              Reach Us
            </Link>

            {/* <Link
              href="/careers"
              onClick={() => setIsMenuOpen(false)}
              className="text-[16px] tracking-tight font-poppins font-medium uppercase text-deep hover:text-primary-blue"
            >
              Careers
            </Link> */}

            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-[16px] tracking-tight font-poppins font-medium uppercase text-deep hover:text-primary-blue"
            >
              About Company
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
