import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-deep py-8 px-2 mt-14">
      <div className="w-full grid grid-cols-1 min-[600px]:grid-cols-3 items-start justify-items-center sm:justify-items-start gap-8 px-8 text-center min-[600px]:text-left">
        {/* Logo + Tagline + Socials */}
        <div>
          <h1 className="text-3xl font-bold font-main mb-2 text-white tracking-tighter">
            Ziplyt
          </h1>
          <p className="text-[16px] font-poppins font-semibold text-gray-400 mb-6">
            Zip it, Fix it, Love it.
          </p>
          <div className="flex gap-4 w-full justify-center sm:justify-start ">
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3 font-inter text-white">
            Company
          </h2>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link href="/#">
                <span className="hover:text-white transition cursor-pointer">
                  About Us
                </span>
              </Link>
            </li>
            {/* <li>
              <Link href="/careers">
                <span className="hover:text-white transition cursor-pointer">
                  Careers
                </span>
              </Link>
            </li> */}
            <li>
              <Link href="/reachus">
                <span className="hover:text-white transition cursor-pointer">
                  Reach Us
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold mb-3 font-inter text-white">
            Support
          </h2>
          <ul className="text-sm text-gray-300 flex flex-col gap-3">
            <li className="flex flex-col sm:flex-row gap-1">
              <span className="block text-gray-400">Email:</span>
              <a href="mailto:ziplyt.ind@gmail.com" className="text-white">
                ziplyt.ind@gmail.com
              </a>
            </li>
            <li className="flex flex-col sm:flex-row gap-1">
              <span className="block text-gray-400">Phone:</span>
              <span className="text-white">+91 62806 20947</span>
            </li>
            <li className="flex flex-col sm:flex-row gap-1">
              <span className="block text-gray-400">Location:</span>
              <span>Ludhiana, India</span>
            </li>
          </ul>
        </div>

        {/* Optional: Quick Links / App Coming Soon */}
        {/* <div>
          <h2 className="text-lg font-semibold mb-4">Coming Soon</h2>
          <p className="text-sm text-gray-400 mb-2">
            Ziplyt Mobile App is on the way! Stay tuned for a seamless
            experience on the go. 📱
          </p>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="mt-5 border-t border-gray-700 pt-6 text-center text-[16px] text-gray-200">
        © {new Date().getFullYear()} Ziplyt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
