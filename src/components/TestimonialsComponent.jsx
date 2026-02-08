import React from "react";
import TestimonialCard from "../components/Cards/TestimonialCard";

const testimonials = [
  {
    quote: "This service transformed our business operations. We are more productive and efficient than ever!",
    name: "Jane Doe",
    title: "CEO, Company A",
  },
  {
    quote: "The insights we gained helped us increase revenue by 40% in just a few months. Highly recommend!",
    name: "John Smith",
    title: "Founder, Startup B",
  },
  {
    quote: "Professional, reliable, and results-driven. We couldn’t ask for a better partner.",
    name: "Alice Johnson",
    title: "Manager, Enterprise C",
  },
];

const Testimonials = () => {
  return (
    <div className="py-20 bg-gray-100 px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-8  max-w-7xl mx-auto">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
