import React from "react";
import Hero from "../components/HeroComponent";
import Pricing from "../components/PricingComponent";
import Testimonials from "../components/TestimonialsComponent";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
      <Pricing />
      <Testimonials />
    </div>
  );
};

export default Home;
