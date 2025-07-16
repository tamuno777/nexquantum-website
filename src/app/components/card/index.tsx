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
      <a
        href="/services"
        className="text-white text-sm my-2 hover:decoration-brandBlue underline underline-offset-2 decoration-white"
      >
        Learn More &gt;
      </a>
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
          title="Website Design & Development"
          description="We craft visually striking, responsive websites that blend creative design with modern code ensuring your brand stands out and performs across all platforms."
        />
        <Card
          data-aos="fade-up"
          Icon={FaCode}
          title="Mobile Development"
          description="We develop high-quality mobile apps for iOS and Android built for performance, scalability, and user engagement across the digital landscape."
        />
        <Card
          data-aos="fade-up"
          Icon={FaDesktop}
          title="Web App Development (Contract-Based)"
          description="Need a flexible dev partner? We build robust web applications under contract ideal for startups, agencies, or enterprises looking to scale fast with expert help."
        />
      </div>
    </div>
  );
};

export default CardsSection;
