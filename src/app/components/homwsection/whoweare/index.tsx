"use client";
import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import why from "../../../../../public/images/whyus.png";
// import signature from "../../../../../public/images/signature.png";

import AOS from "aos";
import "aos/dist/aos.css";
const WhoWeAreSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <section className="bg-gray-100 text-black  pb-16">
      <div className="flex flex-col items-center  md:items-start md:text-left md:flex-row gap-8">
        <div className="md:w-1/2 pt-16 px-6 lg:ps-24">
          <h2
            data-aos="fade-right"
            className=" text-sm uppercase text-left tracking-widest mb-4 text-customPink  "
            style={{ color: " #ed51c2" }}
          >
            01 | Who We Are
          </h2>
          <h1 className="text-2xl md:text-4xl font-bold leading-snug ">
            At{" "}
            <span className="text-customPink" style={{ color: " #ed51c2" }}>
              ODD Network
            </span>
            , we are a collective of forward thinking technologists, designers, and
            strategists committed to building impactful digital experiences that
            redefine what&apos;s possible.
          </h1>
          <p className="mt-4 text-gray-400 leading-relaxed ">
            In a rapidly evolving digital world, we empower ambitious businesses to stay
            ahead through tailored solutions that blend creative vision with cutting edge
            technology. From sleek websites to scalable apps, our approach is rooted in
            excellence, innovation, and an obsession with quality ,turning complex ideas
            into seamless, smart, and stunning digital realities.
          </p>
        </div>
        {/* Image Section */}
        <div className="relative md:w-1/2 ">
          <img
            ata-aos="zoom-in"
            src={why.src}
            alt="Why ODD Network"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-12 px-6 md:px-12 lg:px-24">
        {/* Check List */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-2">
              <FaCheckCircle
                className="text-lg"
                style={{ color: "rgb(0, 8, 135)" }}
              />
              <p>
                We believe in your vision and engineer technology that turns goals into scalable results.

              </p>
            </div>
            <div className="flex items-start gap-2">
              <FaCheckCircle
                className="text-lg"
                style={{ color: "rgb(0, 8, 135)" }}
              />
              <p>
                From stunning UI designs to powerful websites, web apps, and mobile solutions — we deliver with precision and passion.

              </p>
            </div>
            <div className="flex items-start gap-2">
              <FaCheckCircle
                className="text-lg"
                style={{ color: "rgb(0, 8, 135)" }}
              />
              <p>
                Collaboration is at our core. We work closely with you to create solutions that are as unique as your business.

              </p>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="flex flex-col gap-3">
          <div className="text-center md:text-left">
          <p className="text-lg font-bold">Winnie Davis</p>
          <p className="text-gray-400">Founder, ODD Network</p>
          {/* <div className="mt-4 flex items-center">
            <p
              className="text-customPink font-handwriting text-2xl"
              style={{ color: " #ed51c2" }}
            >
              Winnie Davis
            </p>
            <img
              src={signature.src}
              alt="signature"
              className="ml-4 w-16 h-auto object-contain"
            />
          </div> */}
        </div>
        <div className="text-center md:text-left">
          <p className="text-lg font-bold">Mercy Abani</p>
          <p className="text-gray-400">Lead Designer, ODD Network</p>
          {/* <div className="mt-4 flex items-center">
            <p
              className="text-customPink font-handwriting text-2xl"
              style={{ color: " #ed51c2" }}
            >
              Winnie Davis
            </p>
            <img
              src={signature.src}
              alt="signature"
              className="ml-4 w-16 h-auto object-contain"
            />
          </div> */}
        </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
