import React from "react";

const Button = ({ children, href }) => {
  return (
    <a
      href={href}
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
    >
      {children}
    </a>
  );
};

export default Button;
