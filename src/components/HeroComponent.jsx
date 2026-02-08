import React from "react";
import Button from "../components/Buttons/BlueButtonComponent";
import sampleImage from '../assets/images/sample_mage.jpg';
const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-white py-24 md:py-32 text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Take Your Business to the Next Level
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          We provide a <span className="font-semibold">360° overview</span> of your business,
          helping you streamline processes, boost revenue, and make smarter decisions.
        </p>
        <Button
          href="#pricing"
          className="px-8 py-4 text-lg md:text-xl"
        >
          See Pricing
        </Button>
      </div>
    </div>
  );
};

export default Hero;
