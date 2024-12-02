"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProcessSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);
  const steps = [
    {
      id: 1,
      title: " Consultation",
      description:
        "We start by deeply understanding your unique business needs, challenges, and objectives to ensure we deliver the right solution.",
      image: "/images/consultation.jpg", 
    },
    {
      id: 2,
      title: " Customization",
      description:
        "Our team designs and develops tailored software, websites, and cybersecurity solutions that align perfectly with your business goals and target audience.",
      image: "/images/customization.avif", 
    },
    {
      id: 3,
      title: "Implementation",
      description:
        "We integrate and deploy the solution smoothly, ensuring it works seamlessly within your existing infrastructure while minimizing disruptions.",
      image: "/images/implemtation.jpg", 
    },
    {
      id: 4,
      title: " Support & Optimization",
      description:
        "We offer ongoing support and continuous optimization, ensuring your systems remain secure, efficient, and adaptable to your evolving business needs.",
      image: "/images/supoort.webp", 
    },
  ];

  return (
    <section className="bg-black text-white mt-6">
      {/* Section Header */}
      <div className="text-center mb-16 ">
        <h2
          data-aos="fade-right"
          className=" text-sm uppercase text-left tracking-widest mb-4 text-customPink bg-black pt-16 px-6 lg:px-24"
          style={{ color: " #ed51c2" }}
        >
          03 | Our Process
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold leading-snug  px-6 lg:px-24">
          Experience the Power of
          <span className="text-customPink" style={{ color: " #ed51c2" }}>
            {" "}
            Process
          </span>
        </h1>
        <p className="mt-4 text-white max-w-3xl mx-auto  px-6 lg:px-24">
          We take a holistic approach to create solutions that work end-to-end.
        </p>
      </div>

      <div className="flex flex-col lg:gap-0 gap-8  px-6 lg:px-24">
        {steps.map((step, index) => (
          <div
          data-aos="zoom-in"
            key={step.id}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            } items-center lg:items-start gap-8`}
            style={{ width: "100%" }}
          >
            <div className="flex gap-4" style={{ width: "50%" }}>
              {/* Image */}
              <div className="lg:w-1/2 flex justify-center ">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-64 h-64 object-contain  rounded"
                />
              </div>

              {/* Text */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <span className="text-4xl font-bold text-customPink">
                    {step.id}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-customPink">
                  {step.title}
                </h3>
                <p className="text-white text-sm">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
