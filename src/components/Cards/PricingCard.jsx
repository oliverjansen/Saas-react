import React from "react";
import Button from "../Buttons/BlueButtonComponent";

const PricingCard = ({ name, price, description, featured }) => {
  return (
    <div
      className={`relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-shadow text-center transform hover:-translate-y-1 ${
        featured ? "border-2 border-blue-600" : ""
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          Featured
        </span>
      )}

      <h3 className="text-2xl font-bold mb-4 text-gray-900">{name}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <p className="text-4xl font-extrabold mb-6 text-gray-900">
        {price}
        <span className="text-lg font-medium text-gray-500">/mo</span>
      </p>

      <Button href="/contact" className="w-full">
        Get Started
      </Button>
    </div>
  );
};

export default PricingCard;
