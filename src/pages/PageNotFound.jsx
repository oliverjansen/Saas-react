import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-extrabold text-blue-600 mb-6">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-700 mb-8">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
    