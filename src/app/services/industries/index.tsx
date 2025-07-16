"use client";
import { useState, useEffect } from "react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const industries = [
  {
    name: "Healthcare",
    description:
      "ODD Network empowers healthcare providers with secure, scalable, and intuitive digital solutions. From telehealth platforms and appointment systems to electronic health records, we help hospitals, clinics, and startups improve care delivery through compliant and patient centric technology.",
    icon: "💊",
    background: "bg-customPink",
  },
  {
    name: "Finance",
    description:
      "We help financial institutions modernize with robust, secure systems from smart fintech platforms to fraud detection and payment automation. ODD Network builds trusted, regulation-ready solutions that power efficiency, transparency, and innovation across banking and fintech ecosystems.",
    icon: "💰",
    background: "bg-customPink",
  },
  {
    name: "E-commerce",
    description:
      "ODD Network builds high performance, conversion focused e-commerce solutions. From seamless checkout systems to personalized shopping experiences and inventory automation, we help brands grow online with platforms tailored for speed, scale, and sales.",
    icon: "🛒",
    background: "bg-customPink",
  },
  {
    name: "Education",
    description:
      "We develop modern e-learning platforms, student portals, and virtual classrooms that elevate the learning experience. ODD Network supports schools, universities, and training organizations with engaging, accessible digital tools that scale with the future of education.",
    icon: "📚",
    background: "bg-customPink",
  },
  {
    name: "Travel & Tourism",
    description:
      "ODD Network crafts tech solutions that enhance every step of the travel experience. From custom booking engines and travel apps to virtual tours and itinerary automation, we support agencies, hotels, and tourism startups in delivering seamless journeys that convert interest into loyalty.",
    icon: "✈️",
    background: "bg-customPink",
  },
];


const IndustriesSection = () => {
  const [aosKey, setAosKey] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
useEffect(() => {
    AOS.refresh(); 
    setAosKey((prev) => prev + 1); 
  }, [selectedIndustry]);
  return (
    <section className=" bg-gray-100">
      <div className="text-center mb-16 ">
        <h2
          data-aos="fade-right"
          className="faq-title text-sm uppercase text-left tracking-widest mb-4 text-customPink  px-6 md:px-12 lg:px-24  "
          style={{ color: " #ed51c2" }}
        >
          01 | Industries We Serve
        </h2>

        <p className="mt-4 text-gray-400 max-w-3xl mx-auto  px-6 lg:px-24">
          Explore our tailored solutions for{" "}
          <span className="text-customPink" style={{ color: " #ed51c2" }}>
            {" "}
            diverse industries.{" "}
          </span>
        </p>
      </div>{" "}
      {/* Industry Cards */}
      <div className="flex flex-col md:flex-row gap-8 px-6 py-12 md:px-24">
        {/* List of Industries */}
        <div className="flex-1 flex flex-wrap gap-6 justify-center md:justify-start">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`w-full md:w-1/3 lg:w-1/4 p-3 rounded-lg text-center shadow-md text-white cursor-pointer transition-transform transform hover:scale-105 ${
                industry.background
              } ${
                selectedIndustry.name === industry.name
                  ? "ring-4 ring-offset-2 ring-gray-300"
                  : ""
              }`}
              onClick={() => setSelectedIndustry(industry)}
            >
              <div className="text-3xl mb-4 ">{industry.icon}</div>
              <h3 className="text-xl lg:text-lg font-semibold ">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Selected Industry Details */}
        <div
        key={aosKey}
          className="flex-1 bg-white p-8 rounded-lg shadow-lg"
          data-aos="flip-right"
        >
          <h3 className="text-3xl font-bold mb-4 text-customPink ">
            {selectedIndustry.name}
          </h3>
          <p className="text-gray-600 text-lg">
            {selectedIndustry.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
