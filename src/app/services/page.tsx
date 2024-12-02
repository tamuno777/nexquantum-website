import React from "react";
import "./index.css";
import { BackgroundWrapper } from "@/app/hooks/backgroundWrapper";
import Servicess from "./servicescard";
import IndustriesSection from "./industries";

const Services = () => {
  return (
    <>
      <BackgroundWrapper>
        <div className="Contact-section relative flex flex-col items-center justify-center  pb-16 px-4 sm:px-8 lg:px-12 overflow-hidden">
          {/* Hero Content */}
          <div className="relative z-20 text-center max-w-5xl pt-32 ">
            <h1 className="font-sans font-bold tracking-tight text-4xl md:text-5xl xl:text-6xl text-white">
              What We{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Do?{" "}
              </span>
              .
            </h1>
            <p className="mt-6 text-white text-opacity-80 font-sans text-base leading-7 md:text-lg">
              We believe in your success and that big data can help you achieve
              the best results for your business, regardless of your field or
              target market.
            </p>
          </div>
        </div>
      </BackgroundWrapper>
      {/* Wave Divider */}
      <div className="wave-divider bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#6c43ab", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#6c43ab", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#6c43ab", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            fillOpacity="1"
            d="M0,96L24,112C48,128,96,160,144,149.3C192,139,240,85,288,53.3C336,21,384,11,432,16C480,21,528,43,576,80C624,117,672,171,720,165.3C768,160,816,96,864,96C912,96,960,160,1008,197.3C1056,235,1104,245,1152,218.7C1200,192,1248,128,1296,122.7C1344,117,1392,171,1416,197.3L1440,224L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          ></path>
        </svg>
      </div>
      <section>
        <IndustriesSection />
      </section>
      <section>
        <Servicess />
      </section>
    </>
  );
};

export default Services;
