"use client";
import React, { useEffect } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <section className="bg-gray-100 text-black mt-6 pb-16">
      <div className="text-center mb-16">
        <h2
          data-aos="fade-right"
          className="text-customPink bg-gray-100 text-sm uppercase tracking-widest mb-4 pt-16 px-6 lg:px-24 text-left"
        >
          06 | Contact Us
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold leading-snug ">
          Get in touch<span className="text-customPink"> with Us</span>
        </h1>
        {/* <p className="mt-4 text-gray-400 max-w-3xl mx-auto  px-6 lg:px-24">
          Have questions or need assistance? We're here to help! Reach out to us
          through the form below or use our contact details.
        </p> */}
      </div>

      {/* Contact Section Content */}
      {/* <div className="max-w-7xl mx-auto"> */}
      <div className="flex flex-wrap lg:flex-nowrap gap-12 items-center px-6 lg:px-24 ">
        <div className="w-full lg:w-3/5 bg-transparent p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-400 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full  text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-customPink"
                style={{ backgroundColor: "black" }}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-400 mb-2"
              >
                Your Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="youremail@example.com"
                className="w-full text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-customPink"
                style={{ backgroundColor: "black" }}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-400 mb-2"
              >
                Your Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                className="w-full  text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-customPink"
                style={{ backgroundColor: "black" }}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-brandBlue text-white font-bold rounded-lg py-3 hover:bg-blue-700 focus:ring-2 focus:ring-customPink focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details (40% width on large screens) */}
        <div className="w-full lg:w-2/5 space-y-8">
          <div className="flex items-start space-x-4">
            <FaPhoneAlt className="text-brandBlue text-2xl" />

            <div>
              <h3 className="text-lg font-semibold mb-2">+1 (483) 299 1400</h3>
              <p className="text-gray-400">
                Call us directly if you need any urgent help. Our agents will
                help you.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaEnvelope className="text-brandBlue text-2xl" />

            <div>
              <h3 className="text-lg font-semibold mb-2">
                support@company.com
              </h3>
              <p className="text-gray-400">
                Email us directly if you need any help. Our agents will assist
                you.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default ContactUsSection;
