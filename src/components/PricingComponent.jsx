import React from "react";
import PricingCard from "../components/Cards/PricingCard";

const plans = [
  { name: "Basic", price: "$29/mo", description: "Perfect for small businesses starting out." },
  { name: "Pro", price: "$79/mo", description: "For growing businesses that need advanced tools.", featured: true },
  { name: "Enterprise", price: "$199/mo", description: "For large organizations that need full customization." },
];

const Pricing = () => {
  return (
    <div id="pricing" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
