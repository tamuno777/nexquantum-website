"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah L",
    feedback:
      "NexQuantum transformed our digital presence with a custom website and mobile app that perfectly fit our needs. Their team is professional, responsive, and truly understands business solutions.",
    image: "/images/upwork.svg",
  },
  {
    id: 2,
    name: "Laura M",
    feedback:
      "Working with NexQuantum was a game-changer for our operations. Their custom software development streamlined our processes, saved us time, and increased productivity across the team.",
    image: "/images/uber.svg",
  },
  // {
  //   id: 3,
  //   name: "Alex L",
  //   feedback:
  //     "Fantastic service! They took the time to understand our needs and delivered a tailored solution that worked seamlessly.",
  //   image: "/images/client3.jpg", // Replace with your image path
  // },
];

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
              <div className="bg-white rounded-full w-24 h-24 p-1 flex flex-col items-center  ">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className=" w-22 h-22rounded-full object-cover mb-6"
                />
              </div>
              <h3 className="text-xl font-semibold text-customPink">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-white text-center">
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
