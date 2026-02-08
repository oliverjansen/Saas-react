import React from "react";
import { HiOutlineViewGrid, HiOutlineTrendingUp, HiOutlineLightBulb } from "react-icons/hi";

const features = [
  {
    title: "Complete 360° Business View",
    description:
      "We provide a full overview of your business operations, marketing, finances, and projects—so you can make smarter decisions.",
    icon: <HiOutlineViewGrid className="w-10 h-10 text-white" />,
    color: "bg-blue-600",
  },
  {
    title: "Startup Growth Solutions",
    description:
      "From early-stage startups to established businesses, we help you identify growth opportunities and implement strategies effectively.",
    icon: <HiOutlineTrendingUp className="w-10 h-10 text-white" />,
    color: "bg-green-500",
  },
  {
    title: "Actionable Insights",
    description:
      "Our tools give you clear insights into your business, enabling you to act on data and improve performance in real-time.",
    icon: <HiOutlineLightBulb className="w-10 h-10 text-white" />,
    color: "bg-yellow-500",
  },
];

const About = () => {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">

      {/* Hero / Banner */}
      <div className="text-black py-24 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            About <span className="text-blue-600">MyWebsite</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            We provide a <span className="font-semibold">360° view</span> of establishments and startups to help business owners grow smarter and faster.
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <p className="text-gray-700 text-lg mb-6">
          Our mission is to empower business owners with actionable insights, clear strategies, and a comprehensive overview of their business operations.
        </p>
        <p className="text-gray-700 text-lg mb-12">
          Whether you are a startup or an established company, our platform ensures you have the right tools to make informed decisions and accelerate growth.
        </p>
      </div>

      {/* Features / Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 mb-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center flex flex-col items-center"
          >
            <div className={`p-4 rounded-full mb-6 ${feature.color} flex items-center justify-center`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Get started today and gain a complete understanding of your business for smarter growth.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

    </div>
  );
};

export default About;
