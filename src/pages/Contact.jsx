import React, { useState } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-28 bg-gray-50 min-h-screen flex justify-center items-start sm:items-center">
      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">

        {/* Info Sidebar */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-white p-10 rounded-2xl shadow-lg flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-blue-100">
            Have questions or need assistance? Fill out the form and our team will respond as soon as possible.
          </p>

          <div className="space-y-4 mt-4">
            <div className="flex items-center space-x-3">
              <HiMail className="text-white w-6 h-6" />
              <p>contact@mywebsite.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <HiPhone className="text-white w-6 h-6" />
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="flex items-center space-x-3">
              <HiLocationMarker className="text-white w-6 h-6" />
              <p>123 Business St., Startup City, USA</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">
            Send Us a Message
          </h2>
          <p className="text-gray-600 mb-6 text-center md:text-left">
            Fill out the form below and we’ll get back to you promptly.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-3 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-blue-600 peer-focus:text-sm transition-all"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-blue-600 peer-focus:text-sm transition-all"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-3 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-blue-600 peer-focus:text-sm transition-all"
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
