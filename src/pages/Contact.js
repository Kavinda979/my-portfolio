import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMailOutline,MdLocationPin } from "react-icons/md";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to an API
    console.log("Form submitted:", formData);
  };

  return (
    <div className="h-max bg-blue-900 px-40 py-24">
        <div className="text-4xl font-bold flex items-center mb-8">
          <span className="text-white">Contact</span>
          <span className="text-yellow-400 ml-2">Me</span>
        </div>
        <div className="grid grid-cols-2 max-w-full">
          <div className="pt-4">
          <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="text-yellow-400 text-xl">
                <IoMdCall />
                </div>
                <div className="text-white">
                  <p className="text-md">+1 (123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-yellow-400 text-xl">
                <MdOutlineMailOutline />
                </div>
                <div className="text-white">
                  <p className="text-md">your.email@example.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-yellow-400 text-xl">
                <MdLocationPin />
                </div>
                <div className="text-white">
                  <p className="text-md">123 Your Street, Your City, Your Country</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center"></div>
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none text-white bg-blue-950 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none text-white bg-blue-950 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="shadow appearance-none text-white bg-blue-950 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your message"
                  rows="4"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="shiny-button  py-2 px-4 rounded  bg-yellow-400 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-yellow-400 hover:shadow-yellow-400 hover:before:border-[25px] "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Contact;
