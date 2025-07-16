"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah L.",
    position: "Marketing Director, CreativEdge Agency",
    feedback:
      "ODD Network exceeded our expectations with a beautifully crafted website and intuitive mobile experience. Their attention to detail, design sensibility, and collaborative approach made the process seamless from start to finish.",
    image: "/images/client/MARY-ADAISO.png"
  },
  {
    id: 2,
    name: "David K.",
    position: "Product Manager, FinCore Solutions",
    feedback:
      "As a fast-moving startup, we needed a reliable dev partner. ODD Network delivered a robust web application under contract with zero compromise on quality or deadlines. Highly professional and technically sharp.",
    image: "/images/client/JOHN-NIMI.png"
  },
  {
    id: 3,
    name: "Chinaza O.",
    position: "Founder, Zana Cosmetics",
    feedback:
      "We came to ODD Network with just an idea they turned it into a stunning online store and mobile app. The team was patient, innovative, and deeply invested in our brand’s growth.",
    image: "/images/client/MARY-ADAISO.png"
  }
]


const TestimonialSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-white text-black  mt-6">
      <div className="text-center mb-16">
        <h2
          data-aos="fade-right"
          className=" text-sm uppercase text-left tracking-widest mb-4 text-customPink  pt-16 px-6 lg:px-24"
          style={{ color: " #ed51c2" }}
        >
          04 | Testimonials
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold leading-snug px-6 md:px-12 lg:px-24">
          What Our{" "}
          <span className="text-customPink" style={{ color: " #ed51c2" }}>
            Clients
          </span>{" "}
          Say
        </h1>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto px-6 md:px-12 lg:px-24">
          Hear directly from those who have experienced the value we bring.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="relative flex items-center justify-center px-6 md:px-12 lg:px-24">
        <div className="flex items-center space-x-8">
          <button
            onClick={prevTestimonial}
            className="text-customPink p-2 bg-black rounded-full hover:bg-gray-700"
          >
            &#8249;
          </button>

          <div className="w-full max-w-xl bg-black p-8 rounded-xl shadow-lg">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full w-24 h-24 p-1 flex items-center justify-center overflow-hidden">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <h3 className="text-xl font-semibold text-customPink">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-white text-sm text-center">
                {testimonials[currentIndex].position}
              </p>
              <p className="text-white mt-4 text-center">
                &quot;{testimonials[currentIndex].feedback}&quot;
              </p>
            </div>
          </div>

          <button
            onClick={nextTestimonial}
            className="text-customPink p-2 bg-black rounded-full hover:bg-gray-700"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
