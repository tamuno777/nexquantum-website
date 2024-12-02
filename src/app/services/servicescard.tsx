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
      title: "Cybersecurity ",
      span: "Services",
      description:
        "NexQuantum provides comprehensive cybersecurity services designed to protect your business from digital threats. We offer real-time threat detection and prevention, network and data protection, vulnerability assessments, and incident response support. Additionally, we provide tailored employee cybersecurity training to help your team recognize and respond to security risks. With NexQuantum, you can have peace of mind knowing that your business is secure and resilient against evolving cyber threats.",
      stats: {
        consultants: "5 Professional Consultants",
        clients: "~150 Consultations made",
      },
      image: "/images/cybersecurity.jpeg",
      bgColor: "",
    },
    {
      title: "Website & Application ",
      span: "Development",
      description:
        "At NexQuantum, we specialize in creating custom websites and applications that are designed to meet your business needs and drive success. Our team of experts combines the latest technologies with innovative design to deliver high-quality, user-friendly solutions. Whether you're looking to build a responsive website, a mobile app, or a complex enterprise application, we focus on delivering seamless experiences that engage users and enhance functionality. From concept to launch, we ensure every project is optimized for performance, security, and scalability, helping your business stay ahead in the digital world.",
      stats: {
        developers: "5+ Expert Developers",
        projects: "16 Ongoing Projects",
      },
      image: "/images/websitedev.avif",
      bgColor: " ",
    },
    {
      title: "Software ",
      span: "Development",
      description:
        "At NexQuantum, we provide tailored software development solutions to help businesses streamline operations and achieve their goals. Our team of skilled developers creates custom software applications that are robust, scalable, and user-centric. Whether you need a desktop application, enterprise software, or cloud-based solution, we focus on building systems that improve efficiency, drive innovation, and support your business growth. By using the latest technologies and best development practices, we ensure that every solution is secure, reliable, and optimized for performance, helping your business stay competitive in today’s fast-paced digital landscape.",
      stats: {
        developers: "5 In-House Developers",
        companies: "45 Supported Companies",
      },
      image: "/images/appdev.jpeg",
    },
    {
      title: "Virtual Machines",
      span: "Machines",
      description:
        "NexQuantum offers Virtual Machine (VM) solutions to enhance your business’s IT infrastructure by providing flexible, scalable, and cost-efficient environments. Our VM services allow you to run multiple operating systems and applications on a single physical machine, optimizing resource usage and improving efficiency. We handle the setup, management, and scaling of your virtual environments to meet your business needs. Whether you require virtualized servers, storage, or isolated environments for testing, our team ensures high performance, security, and seamless integration with your existing systems. With NexQuantum, you can maximize your IT capabilities while reducing costs and complexity.",
      stats: {
        technicians: "5 Advanced Technicians",
        support: "24/7 Availability",
      },
      image: "/images/visualmahine.jpeg",
      bgColor: " ",
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
