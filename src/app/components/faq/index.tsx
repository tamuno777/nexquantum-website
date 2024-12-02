"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a variety of services, including web development, app design, and digital marketing.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact support by emailing sales@nexqunatum.co.uk or calling us directly at +1 (483) 299 1400.",
    },
    {
      question: "What are your business hours?",
      answer: "Our business hours are Monday to Friday, 9 AM to 5:30 PM.",
    },
    {
      question: "Do you provide custom solutions?",
      answer:
        "Yes, we specialize in creating tailored solutions to meet your specific needs.",
    },
    {
      question: "How can I request a quote?",
      answer:
        "You can request a quote by filling out the form on our Contact Us page.",
    },
  ];

  return (
    <section className="bg-gray-100 text-black faq-section pb-16">
      <h2
        data-aos="fade-right"
        className="faq-title text-sm uppercase text-left tracking-widest mb-4 text-customPink px-6 md:px-12 lg:px-24  "
        style={{ color: " #ed51c2" }}
      >
        01 |Frequently Asked Questions
      </h2>
      <div className="faq-container px-6 md:px-12 lg:px-24">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "active" : ""}`}
          >
            <button
              className="faq-question text-customPink p-3"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-icon">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            <div
              className="faq-answer p-3"
              style={{
                maxHeight: openIndex === index ? "300px" : "0",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
