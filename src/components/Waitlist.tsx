"use client";

import { useEffect, useRef, useState } from "react";

export default function WaitlistBar() {
  const [hideBar, setHideBar] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Get the footer element from the DOM
    footerRef.current = document.querySelector("footer");

    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideBar(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-8 left-0 right-0 px-4 z-50 flex justify-center transition-opacity duration-300 ${
        hideBar ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-md bg-white border border-gray-300 rounded-full flex items-center px-4 py-3 shadow-lg">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow outline-none bg-transparent text-sm font-inter placeholder:text-gray-400"
        />
        <button className="text-white text-sm font-medium bg-primary-blue px-4 py-2 rounded-full hover:bg-blue-600 transition whitespace-nowrap">
          Join Waitlist
        </button>
      </div>
    </div>
  );
}
