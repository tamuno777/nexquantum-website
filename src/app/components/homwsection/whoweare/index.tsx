"use client";
import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa"; // Replace with your preferred check icon
import why from "../../../../../public/images/whyus.png";
import signature from "../../../../../public/images/signature.png";

import AOS from "aos";
import "aos/dist/aos.css";
const WhoWeAreSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false, 
      mirror: true,    });
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
              NexQuantum
            </span>
            , we are a team of dedicated technology professionals passionate
            about driving innovation and creating meaningful solutions.
          </h1>
          <p className="mt-4 text-gray-400 leading-relaxed ">
            With a commitment to excellence and a deep understanding of the
            ever-changing digital landscape, we empower businesses to harness
            the full potential of technology. Through expertise, creativity, and
            attention to detail, we’ve become a trusted partner for businesses
            looking to thrive in the modern digital era.
          </p>
        </div>
        {/* Image Section */}
        <div className="relative md:w-1/2 ">
          <img
          ata-aos="zoom-in"
            src={why.src}
            alt="Why NexQuantum"
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
                We believe in your success and tailor technology to help achieve
                your goals.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <FaCheckCircle
                className="text-lg"
                style={{ color: "rgb(0, 8, 135)" }}
              />
              <p>
                Whether it’s custom websites, mobile apps, or cybersecurity, we
                deliver excellence.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <FaCheckCircle
                className="text-lg"
                style={{ color: "rgb(0, 8, 135)" }}
              />
              <p>
                We take pride in collaborating closely with clients for tailored
                solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="text-center md:text-left">
          <p className="text-lg font-bold">Jon Leposky</p>
          <p className="text-gray-400">CEO, NexQuantum</p>
          <div className="mt-4 flex items-center">
            <p
              className="text-customPink font-handwriting text-2xl"
              style={{ color: " #ed51c2" }}
            >
              Jon Leposky
            </p>
            <img
              src={signature.src}
              alt="signature"
              className="ml-4 w-16 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
