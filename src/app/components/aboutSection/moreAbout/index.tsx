"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MoreAbout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <section className="bg-gray-100 text-black pb-16">
      <h2
        data-aos="fade-right"
        className="faq-title text-sm uppercase text-left tracking-widest mb-4 text-customPink px-6 md:px-12 lg:px-24  "
        style={{ color: " #ed51c2" }}
      >
        01 |About Us
      </h2>
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-24">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug ">
            At <span className="text-customPink">ODD Network ,</span>
          </h1>
          <p className="mt-4 text-black leading-relaxed ">
            we are a team of passionate technology experts committed to driving innovation and delivering impactful solutions. With deep industry knowledge and a forward-thinking mindset, we empower businesses to unlock the full potential of the digital world.
          </p>
          <p className="mt-4 text-black leading-relaxed ">
            Collaboration is at the heart of everything we do. We partner closely with our clients to craft custom strategies and technologies tailored to their unique challenges and goals. Combining creativity, precision, and cutting-edge expertise, ODD Network is your trusted ally in navigating today’s fast evolving digital landscape.
          </p>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center ">
          <img
            data-aos="zoom-in"
            src="/images/about.png"
            alt="Creative Designer"
            className="rounded-lg  "
            style={{ width: "70%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default MoreAbout;
