import React from "react";
import ContactImg from "../assets/Picture/24buy7.webp";

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row mt-10 justify-center items-center lg:space-x-12 space-y-6 lg:space-y-0">
      {/* Image Section */}
      <div className="w-[600px] ">
        <img src={ContactImg} alt="Contact Us" className="w-full rounded-lg shadow-lg" />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Contact Us</h1>
        
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-32 resize-none"
              placeholder="Write your message here"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
