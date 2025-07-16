"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

 
const Servicess = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);
  const services = [
  {
    title: "Website Design & Development",
    span: "Services",
    description:
      "At ODD Network, we craft modern, responsive websites tailored to reflect your brand and drive user engagement. From sleek landing pages to dynamic CMS-driven platforms, we blend clean UI design with performance optimized code to create digital experiences that convert. Whether you're launching a startup or scaling a business, our design-to-deployment process ensures speed, security, and scalability every step of the way.",
    stats: {
      developers: "5+ Expert Developers",
      projects: "20+ Projects Delivered",
    },
    image: "/images/websitedev.avif",
    bgColor: "",
  },
  {
    title: "Mobile Development",
    span: "Solutions",
    description:
      "ODD Network builds high performance mobile apps for iOS and Android that help you connect with customers on the go. We specialize in custom, cross-platform development that ensures fast, secure, and visually compelling user experiences. From MVPs to full-scale products, our team handles design, development, testing, and deployment , delivering intuitive apps that meet business goals and exceed user expectations.",
    stats: {
      engineers: "4 Dedicated Engineers",
      platforms: "iOS & Android Supported",
    },
    image: "/images/appdev.jpeg",
    bgColor: "",
  },
  {
    title: "Web App Development (Contract-Based)",
    span: "Development",
    description:
      "ODD Network offers contract-based web app development for businesses seeking robust, scalable digital platforms. Whether you're building a client dashboard, internal tool, or SaaS product, our team delivers fully customized solutions using modern frameworks and APIs. We collaborate closely to understand your objectives and deliver secure, high-performing applications that integrate seamlessly with your workflow all on your terms.",
    stats: {
      developers: "5 In-House Developers",
      contracts: "16+ Contract Projects Delivered",
    },
    image: "/images/visualmahine.jpeg",
    bgColor: "",
  },
];


  return (
    <section className="bg-white text-black pb-16 ">
      <div className="text-center mb-16 ">
        <h2
                data-aos="fade-right"

          className="faq-title text-sm uppercase text-left tracking-widest mb-4 text-customPink bg-white pt-16 px-6 md:px-12 lg:px-24  "
        >
          02 |Our Services
        </h2>

        <p className="mt-4 text-black max-w-3xl mx-auto  px-6 lg:px-24">
          We Provide Truly Prominent{" "}
          <span className="text-customPink" style={{ color: " #ed51c2" }}>
            {" "}
            IT Solution
          </span>
        </p>
      </div>
      <main className="px-6 lg:px-24 mt-12">
        <div className="flex flex-col space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center md:items-stretch gap-6 md:gap-12`}
              style={{ backgroundColor: service.bgColor }}
            >
              {/* Service Image */}
              <div className="relative w-full md:w-1/2 h-64 ">
                <img
                        data-aos="zoom-in"

                  src={service.image}
                  alt={`${service.title} Image`}
                  className=" object-cover shadow-lg "
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "30px",
                    // height: "auto",
                    // clipPath:
                    // index % 3 === 0
                    //   ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" // Diamond Shape
                    //   : index % 2 === 0
                    //   ? "ellipse(70% 50% at 50% 50%)" // Moon/Elliptical
                    //   : "polygon(0 100%, 50% 0%, 100% 100%)", // Wavy Triangle
                  }}
                />
              </div>

              {/* Service Content */}
              <div
                className="bg-brandBlue text-white p-10"
                // className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 md:p-8 rounded-lg shadow-lg"
                style={{
                  clipPath: `polygon(0 0, 95% 0, 100% 20%, 100% 100%, 10% 100%, 0 80%)`,
                }}
              >
                <h3 className="text-4xl font-semibold mb-4">
                  {service.title}{" "}
                  <span className="text-customPink">{service.span}</span>
                </h3>
                <p className="mb-4 text-lg">{service.description}</p>
                <ul className="space-y-2">
                  {Object.values(service.stats).map((stat, statIndex) => (
                    <li
                      key={statIndex}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <span className="text-cyan-200">•</span> {stat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Servicess;
