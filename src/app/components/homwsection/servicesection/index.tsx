"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <section className="bg-white text-black mt-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2
          data-aos="fade-right"
          className=" text-sm uppercase text-left tracking-widest mb-4 text-customPink bg-white pt-16 px-6 lg:px-24"
        // style={{ color: " white" }}
        >
          02 |  Featured Projects
        </h2>
        <h1 className="text-2xl md:text-4xl font-bold leading-snug  px-6 md:px-12 lg:px-24">
          Showcasing{" "}
          <span className="text-customPink" style={{ color: " #ed51c2" }}>
            real results
          </span>{" "}
          <br />
          from our clients
        </h1>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto  px-6 lg:px-24">
          From custom websites and mobile apps to powerful web platforms, we’ve helped brands across industries bring their digital vision to life. Here’s a glimpse at some of the solutions we&apos;ve crafted at ODD Network.

        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-6 md:px-12 lg:px-24 mt-6">
        {/* Project 1 - Zana Cosmetics */}
        <div
          className="flex flex-col items-center text-center pb-6"
          style={{ borderBottom: "2px solid #ed51c2" }}
        >
          <img
            src="/images/ethy.png"
            alt="Zana Cosmetics"
            className="w-[70%]  object-fill rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Echy Community</h3>
          <p className="font-normal mb-2">
            A vibrant landing page for a tech and design community. Built to foster collaboration, showcase member projects, and host virtual meetups all in one sleek, modern interface.
          </p>


          <a href="https://echy.vercel.app/" className="text-brandBlue text-sm hover:underline">
            View Project &gt;
          </a>
        </div>

        {/* Project 2 - FinCore Dashboard */}
        <div
          className="flex flex-col items-center text-center pb-6"
          style={{ borderBottom: "2px solid #ed51c2" }}
        >
          <img
            src="/images/earthy.png"
            alt="FinCore Dashboard"
            className="w-[70%]  object-fill rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Earthly</h3>
          <p className="font-normal mb-2">
            Earthly is a dynamic e-commerce platform designed for modern online retail. It offers seamless product browsing, secure checkout, and a mobile-friendly shopping experience that boosts engagement and sales.
          </p>

          <a href="https://hubtask.vercel.app/" target="_blank"
            rel="noopener noreferrer"
            className="text-brandBlue text-sm hover:underline">
            View Project &gt;
          </a>
        </div>

        {/* Project 3 - CreativEdge App */}
        <div
          className="flex flex-col items-center text-center pb-6"
          style={{ borderBottom: "2px solid #ed51c2" }}
        >
          <img
            src="/images/restfood.png"
            // src="/images/projects/creativedge-app.png"
            alt="CreativEdge App"
            className="w-[70%]  object-fill rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Rest Food</h3>
          <p className="font-normal mb-2">
            Rest Food is a stylish restaurant landing page designed for seamless online food orders. From browsing the menu to placing orders, customers enjoy a fast, user-friendly experience built to boost cravings and conversions.
          </p>

          <a href="https://restfood-eta.vercel.app/" target="_blank"
            rel="noopener noreferrer"
            className="text-brandBlue text-sm hover:underline">
            View Project &gt;
          </a>
        </div>

        {/* Project 4 - CampusConnect */}
        <div
          className="flex flex-col items-center text-center pb-6"
          style={{ borderBottom: "2px solid #ed51c2" }}
        >
          <img
            src="/images/oddfundz.png"
            alt="CampusConnect"
            className="w-[70%]  object-fill rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">ODDFund</h3>
          <p className="font-normal mb-2">
            ODDFund is a modern charity platform (currently under development) that empowers individuals and organizations to create fundraising campaigns, accept donations securely, and track their impact in real-time. Built to support causes that matter.
          </p>

          <a href="https://odd-funds.vercel.app/" target="_blank"
            rel="noopener noreferrer"
            className="text-brandBlue text-sm hover:underline">
            View Project &gt;
          </a>
        </div>
      </div>

    </section>
  );
};

export default ServicesSection;
