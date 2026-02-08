import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">

        {/* Logo / Branding */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-white text-xl font-bold">MyWebsite</h2>
          <p className="text-gray-400 text-sm">
            Helping startups and businesses gain a 360° view of their operations.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2 text-sm">
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          {quickLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-gray-400 hover:text-white transition-colors duration-300 font-medium group"
            >
              {link.name}
              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Social / CTA */}
        <div className="flex flex-col justify-between items-start">
          <h3 className="text-white font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <p className="text-gray-400 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
