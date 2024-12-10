"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);
  const features = [
    {
      icon: "/images/GCicon.svg",
      title: "Global Experience",
      description:
        "ODD Network leverages global experience to provide tailored, innovative IT solutions for businesses worldwide.",
    },
    {
      icon: "/images/Qicon.svg",
      title: "Quality For Value",
      description:
        "ODD Network delivers high-quality IT solutions that maximize value, ensuring businesses achieve the best results with optimal efficiency.",
    },
    {
      icon: "/images/Sicon.svg",
      title: "Support",
      description:
        "ODD Network provides unwavering support, offering expert assistance to ensure seamless integration and ongoing success for businesses worldwide.",
    },
    {
      icon: "/images/HSicon.svg",
      title: "High Standards",
      description:
        "ODD Network adheres to the highest industry standards, ensuring reliable, secure, and innovative IT solutions that meet global best practices.",
    },
  ];

  return (
    <section className="bg-gray-100 text-black mt-6 pb-16">
      <div className="text-center mb-16">
        <h2
          data-aos="fade-right"
          className="text-customPink bg-gray-100 text-sm uppercase tracking-widest mb-4 pt-16 px-6 lg:px-24 text-left"
        >
          04 | why choose us
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold leading-snug ">
          Why choose<span className="text-customPink"> Us</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto  px-6 lg:px-24">
          We believe in your success and that big data can help you achieve the
          best results for your business, regardless of your field or target
          market.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 px-6 lg:px-24">
          {" "}
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-64 feature-card flex flex-col items-center text-center shadow-lg py-6 px-3 rounded-lg bg-white hover:shadow-2xl transition-all"
            >
              <img
                src={feature.icon}
                alt="Creative Designer"
                className="rounded-lg mb-4  "
                style={{ width: "30%", height: "auto" }}
              />
              <h3 className="font-semibold text-xl text-brandBlue">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2 text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
