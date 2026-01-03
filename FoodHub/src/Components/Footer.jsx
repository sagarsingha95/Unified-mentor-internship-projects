import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              FoodHub
            </h2>
            <p className="text-sm leading-relaxed">
              Your one-stop destination for fresh groceries, 
              daily essentials, and delicious food delivered fast.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-medium mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-medium mb-3">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Groceries</li>
              <li className="hover:text-white cursor-pointer">Fruits & Veggies</li>
              <li className="hover:text-white cursor-pointer">Snacks</li>
              <li className="hover:text-white cursor-pointer">Beverages</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-medium mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <span className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 cursor-pointer">
                <FaFacebookF />
              </span>
              <span className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 cursor-pointer">
                <FaInstagram />
              </span>
              <span className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 cursor-pointer">
                <FaTwitter />
              </span>
              <span className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 cursor-pointer">
                <FaYoutube />
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} FoodHub. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
