"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VisionMissionSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <section className="bg-black text-white py-6  ">
      {/* Section Header */}
      <div className="text-center mb-16 ">
        <h2
          data-aos="fade-right"
          className=" text-sm uppercase text-left tracking-widest pb-10 lg:pb-0 text-customPink bg-black pt-10 px-6 lg:px-24"
          style={{ color: " #ed51c2" }}
        >
          02 | Our VIsion and mission
        </h2>{" "}
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-24">
          <div className="flex flex-col gap-10">
            {/* Vision */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
              <p className="text-white text-lg">
                To be the catalyst for digital transformation worldwide ,empowering businesses of all sizes to innovate fearlessly, unlock new opportunities, and lead their industries with cutting-edge technology and bespoke solutions.

              </p>
            </div>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center ">
            <img
              data-aos="zoom-in"
              src="/images/mission.png"
              alt="Creative Designer"
              className="rounded-lg  "
              style={{ width: "70%", height: "auto" }}
            />
          </div>

          <div className="flex flex-col gap-10">
            {/* Mission */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
              <p className="text-white text-lg">
                At ODD Network, we are dedicated to delivering innovative, tailor-made IT solutions that seamlessly integrate with your business goals. Through close collaboration, relentless pursuit of excellence, and a passion for technology, we enable our clients to accelerate growth, increase efficiency, and thrive in a rapidly evolving digital world.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
