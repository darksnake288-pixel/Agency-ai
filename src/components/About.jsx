import React from 'react';
import Logo from '../assets/logo.svg'; // تأكد من المسار الصحيح للوجو
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full bg-[#FAFAFC] pt-16 pb-8 border-t border-gray-100 font-['Manrope']">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-12">
          
          {/* Left Column: Logo, Description & Nav Links */}
          <div className="flex flex-col gap-6 max-w-sm">
            {/* Logo */}
            <div className="flex items-center">
              <img src={Logo} alt="agency.ai" className="h-7 w-auto" />
            </div>

            {/* Description */}
            <p className="text-[#6B7280] text-sm leading-relaxed">
              From strategy to execution, we craft digital solutions that move your business forward.
            </p>

            {/* Nav Links */}
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
              <li>
                <a href="#" className="text-[#374151] font-medium text-sm hover:text-[#5044E5] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-[#374151] font-medium text-sm hover:text-[#5044E5] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-[#374151] font-medium text-sm hover:text-[#5044E5] transition-colors">
                  Our work
                </a>
              </li>
              <li>
                <a href="#" className="text-[#374151] font-medium text-sm hover:text-[#5044E5] transition-colors">
                  Testimonial
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Newsletter Subscription */}
          <div className="flex flex-col gap-3 w-full lg:max-w-md">
            <h3 className="text-[#111827] font-semibold text-base">
              Subscribe to our newsletter
            </h3>
            <p className="text-[#6B7280] text-sm mb-2">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>

            {/* Input & Button */}
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row sm:items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#5044E5] transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-[#5044E5] hover:bg-[#3B2FC1] text-white text-sm font-medium py-2.5 px-6 rounded-lg transition-colors duration-200 shrink-0"
              >
                Susbcribe
              </button>
            </form>
          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-gray-200/80 my-8"></div>

        {/* Bottom Section: Copyright & Social Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#9CA3AF]">
          <p>
            Copyright 2025 © agency.ai - All Right Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-lg">
            <a href="#" className="hover:text-[#5044E5] transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#5044E5] transition-colors">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-[#5044E5] transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#5044E5] transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;