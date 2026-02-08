import React from "react";
import { HiOutlineChatAlt2 } from "react-icons/hi";

const TestimonialCard = ({ quote, name, title, avatar }) => {
  return (
    <div className="relative bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
      {/* Quote Icon */}
      <HiOutlineChatAlt2 className="w-6 h-6 text-blue-600 mb-4" />

      <p className="text-gray-700 mb-6 italic">"{quote}"</p>

      <div className="flex items-center justify-center md:justify-start space-x-4">
        {/* Avatar */}
        {avatar && (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}

        <div className="text-center md:text-left">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <span className="text-gray-500 text-sm">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
