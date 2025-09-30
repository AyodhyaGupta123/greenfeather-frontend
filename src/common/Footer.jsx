import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal, SiAmericanexpress, SiGooglepay, SiApplepay } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-200 via-green-100 to-green-200 text-gray-700 border-t border-green-200/60">

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 pb-8 mt-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h4 className="text-green-800 font-semibold mb-4 text-md">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-700 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-green-700 transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-green-700 transition-colors">Eco Essentials</a></li>
              <li><a href="#" className="hover:text-green-700 transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-green-800 font-semibold mb-4 text-md">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-700 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-green-700 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-green-700 transition-colors">Order Tracking</a></li>
              <li><a href="#" className="hover:text-green-700 transition-colors">Size Guide</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-green-800 font-semibold mb-4  text-md">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-700 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-700 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-green-700 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-green-700 transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-green-800 font-semibold mb-4 text-xl">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-600">support@greenfeather.shop</span></li>
              <li><span className="text-gray-600">+91 9898989898</span></li>
              <li><span className="text-gray-600">Mon–Fri, 9am–6pm (GMT)</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-300">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-green-700 font-semibold"><span className="text-green-900 font-semibold">&copy; </span>2025 GreenFeather. All rights reserved.</p>

          {/* Payment Methods */}
          <div className="flex items-center gap-3 text-gray-700">
            <SiVisa className="h-7 w-10 text-[#1A1F71] hover:opacity-90 transition" title="Visa" />
            <SiMastercard className="h-7 w-10 text-[#EB001B] hover:opacity-90 transition" title="Mastercard" />
            <SiAmericanexpress className="h-7 w-10 text-[#2E77BC] hover:opacity-90 transition" title="American Express" />
            <SiPaypal className="h-7 w-10 text-[#003087] hover:opacity-90 transition" title="PayPal" />
            <SiApplepay className="h-7 w-10 text-black hover:opacity-90 transition" title="Apple Pay" />
            <SiGooglepay className="h-7 w-10 text-[#4285F4] hover:opacity-90 transition" title="Google Pay" />
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5">
            <a href="#" aria-label="Facebook" className="text-2xl text-[#1877F2] hover:opacity-90 transition transform hover:scale-105"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="text-2xl text-[#1DA1F2] hover:opacity-90 transition transform hover:scale-105"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="text-2xl text-[#E4405F] hover:opacity-90 transition transform hover:scale-105"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="text-2xl text-[#0A66C2] hover:opacity-90 transition transform hover:scale-105"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
