"use client";
import { useState, useEffect } from "react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const industries = [
  {
    name: "Healthcare",
    description:
      "Necquantum transforms the healthcare industry by providing cutting-edge digital solutions. From secure and efficient electronic health records (EHR) to intuitive patient management systems and advanced telemedicine platforms. Our focus on compliance with healthcare regulations ensures secure and scalable solutions tailored to hospitals, clinics, and telehealth startups. Let us power the next generation of healthcare innovation.",
    icon: "💊",
    background: "bg-customPink",
  },
  {
    name: "Finance",
    description:
      "Necquantum empowers financial institutions to stay ahead in a rapidly evolving market. Our suite of secure payment systems, advanced fraud detection technologies, and predictive data analytics solutions provides the foundation for smarter, safer financial transactions. From fintech startups to established banks, our solutions are tailored to meet diverse needs, ensuring compliance with financial regulations and enhancing customer trust.",
    icon: "💰",
    background: "bg-customPink",
  },
  {
    name: "E-commerce",
    description:
      "At Necquantum, we help businesses thrive in the competitive e-commerce space by delivering custom-built, scalable platforms that cater to your unique requirements. Our services include seamless payment gateway integrations, personalized customer experiences powered by AI, and actionable analytics tools to drive growth. Whether you’re a startup or an established online retailer, we help optimize your operations and elevate your brand presence.",
    icon: "🛒",
    background: "bg-customPink",
  },
  {
    name: "Education",
    description:
      "Necquantum is revolutionizing the education sector with innovative digital tools that foster engagement and accessibility. We specialize in creating e-learning platforms, virtual classroom environments, and student management systems designed to meet the unique needs of schools, universities, and training institutions. With our solutions, learning becomes more interactive, collaborative, and effective, paving the way for the future of education.",
    icon: "📚",
    background: "bg-customPink",
  },
  {
    name: "Travel & Tourism",
    description:
      "Necquantum enhances the travel and tourism experience with state-of-the-art booking systems, intuitive travel apps, and immersive virtual tour technologies. Our solutions are designed to simplify the journey for travelers while boosting efficiency for tour operators, hotels, and travel agencies. From streamlining bookings to integrating AI-powered personalization, we create unforgettable experiences for customers while driving business growth.",
    icon: "✈️",
    background: "bg-customPink",
  },
];

const IndustriesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

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
