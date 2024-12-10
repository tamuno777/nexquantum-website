'use client'
import React, { useEffect } from "react";
import { FaNetworkWired, FaCode, FaDesktop } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';
const Card = ({ Icon, title, description }: { Icon: React.ElementType; title: string; description: string }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: 'ease-out-cubic', 
      once: true, 
    });
  }, []);
  
  return (
    <div className="relative flex flex-col items-center bg-gradient-to-b from-[#6125B2] to-[#1A0F40] rounded-xl text-center shadow-lg max-w-[16rem] p-4">
      {/* Icon */}
      <div className="bg-[#6A2ED3] p-3 rounded-full shadow-md -mt-10 flex items-center justify-center">
        <Icon className="text-3xl text-white" />
      </div>
      {/* Card Body */}
      <div className="mt-4">
        <h3 className="text-md font-bold text-white">{title}</h3>
        <p className="text-gray-300 mt-2 text-sm">{description}</p>
      </div>
      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#1A0F40] to-transparent rounded-b-xl"></div>
    </div>
  );
};

const CardsSection = () => {
  return (
    <div className="w-full py-10">
      <div className="flex flex-wrap justify-center gap-6">
        {/* Cards */}
        <Card
        data-aos="fade-up"
          Icon={FaNetworkWired}
          title="Consulting"
          description="At ODD Network, we believe strategic IT consulting can unlock your business’s potential, driving growth and efficiency through tailored solutions in technology ."
        />
        <Card
        data-aos="fade-up"
          Icon={FaCode}
          title="Software Development"
          description="At ODD Network, we specialize in custom software development including website creation, delivering tailored solutions that streamline operations, enhance efficiency, and drive growth for your business."
        />
        <Card
        data-aos="fade-up"
          Icon={FaDesktop}
          title="Website Devlopment"
          description= "At ODD Network, we harness the power of technology in creating custom websites  to deliver scalable, efficient, high converting  and secure solutions that empower your business to operate seamlessly from anywhere, ensuring productivity and innovation without boundaries."
          // "At ODD Network, we create custom websites that are visually stunning, user-friendly, and optimized for performance, helping your business make a lasting online impact."
        />
      </div>
    </div>
  );
};

export default CardsSection;
