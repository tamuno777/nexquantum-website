"use client";
import React, { useEffect } from "react";
import { FaCode, FaMobileAlt, FaNetworkWired } from "react-icons/fa";
import { MdIntegrationInstructions } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <section className="bg-white text-black mt-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2
          data-aos="fade-right"
          className=" text-sm uppercase text-left tracking-widest mb-4 text-customPink bg-white pt-16 px-6 lg:px-24"
          // style={{ color: " white" }}
        >
          02 | All Our Services
        </h2>
        <h1 className="text-2xl md:text-4xl font-bold leading-snug  px-6 md:px-12 lg:px-24">
          Our{" "}
          <span className="text-customPink" style={{ color: " #ed51c2" }}>
            comprehensive services
          </span>{" "}
          <br />
          will cover all your needs.
        </h1>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto  px-6 lg:px-24">
          We don&apos;t just help with your IT needs. We focus on the entire
          ecosystem surrounding it. Bringing together people, process, and
          technology, we pride ourselves on delivering solutions that work in
          reality. Not theory.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8  px-6 md:px-12 lg:px-24 mt-6">
        {/* Information Systems Strategy */}
        <div
          className="flex flex-col items-center text-center pb-6 "
          style={{ borderBottom: "2px solid #ed51c2" }}
        >
          <FaNetworkWired className="text-brandBlue text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Consultating</h3>
          <p className=" font-normal mb-2">
            At ODD Network, we believe strategic IT consulting can unlock your
            business’s potential, driving growth and efficiency through tailored
            solutions in technology and cybersecurity.
          </p>
          <a
            href="/services"
            className="text-brandBlue text-sm hover:underline"
          >
            Learn More &gt;
          </a>
        </div>

        {/* Custom Software */}
        <div
          className="flex flex-col items-center text-center pb-6 "
          style={{ borderBottom: "2px solid #ed51c2" }}
        >
          <FaCode className="text-brandBlue text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Custom Software Devlopment
          </h3>
          <p className=" font-normal mb-2">
            At ODD Network, we specialize in custom software development,
            delivering tailored solutions that streamline operations, enhance
            efficiency, and drive growth for your business.
          </p>
          <a
            href="/services"
            className="text-brandBlue text-sm hover:underline"
          >
            Learn More &gt;
          </a>
        </div>

        {/* Integration Services */}
        <div
          className="flex flex-col items-center text-center pb-6 "
          style={{ borderBottom: "2px solid #ed51c2" }}
        >
          <MdIntegrationInstructions className="text-brandBlue text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Website Development</h3>
          <p className=" font-normal mb-2">
            At ODD Network, we create custom websites that are visually
            stunning, user-friendly, and optimized for performance, helping your
            business make a lasting online impact.
          </p>
          <a
            href="/services"
            className="text-brandBlue text-sm hover:underline"
          >
            Learn More &gt;
          </a>
        </div>

        {/* Web, E-commerce & Mobile Apps */}
        <div
          className="flex flex-col items-center text-center pb-6 "
          style={{ borderBottom: "2px solid #ed51c2" }}
        >
          <FaMobileAlt className="text-brandBlue text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Web Apps, E-commerce & Mobile Apps
          </h3>
          <p className=" font-normal mb-2">
            At ODD Network, we create custom web Applications ,E-commerce sites
            and Mobile Applications that are not just visually stunning,
            user-friendly, optimized for performance and high coversion rate,
            helping your business make a lasting online impact.
          </p>
          <a
            href="/services"
            className="text-brandBlue text-sm hover:underline"
          >
            Learn More &gt;
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
