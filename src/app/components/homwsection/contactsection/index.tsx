"use client";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "aos/dist/aos.css";
import emailjs from 'emailjs-com';

const ContactUsSection = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const AOS = (await import("aos")).default;
        AOS.init({
          duration: 1200,
          easing: "ease-out-cubic",
          once: true,
        });
      }
    })();
  }, []);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        form.reset();
        setTimeout(() => setSuccess(false), 4000); // Hide after 4s
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong. Please try again.");
        console.error(err);
      });
  };

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

      </div>


      <div className="flex flex-wrap lg:flex-nowrap gap-12 items-center px-6 lg:px-24 ">
        <div className="w-full lg:w-3/5 bg-transparent p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">


            <div>
              <label
                htmlFor="name"

                className="block text-sm text-gray-400 mb-2"
              >
                Your Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="w-full bg-gray-300  text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-customPink"
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
                required

                placeholder="youremail@example.com"
                className="w-full bg-gray-300 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-customPink"
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
                required

                rows={5}
                placeholder="Write your message here..."
                className="w-full bg-gray-300 text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-customPink"
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full font-bold rounded-lg py-3 transition-all duration-300 ${loading
                ? "bg-gray-400 cursor-not-allowed"
                : success
                  ? "bg-blue-700"
                  : "bg-brandBlue hover:bg-blue-800"
                } text-white focus:outline-none focus:ring-2 focus:ring-customPink`}
              disabled={loading}
            >
              {loading
                ? "Sending..."
                : success
                  ? "Message Sent!"
                  : "Send Message"}
            </button>
            {error && (
              <p className="text-sm text-red-600 -mt-4">{error}</p>
            )}
          </form>
        </div>

        {/* Contact Details (40% width on large screens) */}
        <div className="w-full lg:w-2/5 space-y-8">
          <div className="flex items-start space-x-4">
            <FaPhoneAlt className="text-brandBlue text-2xl" />

            <div>
              <h3 className="text-lg font-semibold mb-2">+234 7014042999</h3>
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
                oddnetwork.tech@gmail.com
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
