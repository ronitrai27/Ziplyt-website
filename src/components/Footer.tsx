import React from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-deep text-white pt-12 pb-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* LEFT: Logo + Description + Socials */}
        <div>
          <h1 className="text-3xl font-bold font-main mb-3 text-white">
            Ziplyt
          </h1>
          <p className="text-sm text-gray-400 mb-4">
            Revolutionizing how you hire trusted local experts. Fast, easy, and
            transparent — your tasks, our priority.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-500 hover:text-white text-xl transition" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-blue-500 hover:text-white text-xl transition" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-blue-600 hover:text-white text-xl transition" />
            </a>
          </div>
        </div>

        {/* CENTER LEFT: Explore */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Explore</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* CENTER RIGHT: Company */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Company</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Reach Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Partnerships
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT: Support + Newsletter */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Support</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              Email:{" "}
              <a href="mailto:support@ziplyt.com" className="text-white">
                support@ziplyt.com
              </a>
            </li>
            <li>
              Phone: <span className="text-white">+91 98765 43210</span>
            </li>
            <li>Location: Mumbai, India</li>
          </ul>

          {/* <form className="mt-6">
            <label className="block mb-2 text-sm text-white">
              Subscribe to updates
            </label>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-l-md text-black text-sm"
              />
              <button
                type="submit"
                className="bg-primary-blue px-4 py-2 rounded-r-md text-white text-sm hover:bg-blue-600 transition"
              >
                Subscribe
              </button>
            </div>
          </form> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Ziplyt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
