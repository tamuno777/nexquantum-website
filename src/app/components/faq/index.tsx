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
    question: "What services does ODD Network offer?",
    answer:
      "We specialize in website design and development, mobile app development, and contract-based web application solutions. We also offer consultation and support to help bring your digital vision to life.",
  },
  {
    question: "How can I reach your team for support or inquiries?",
    answer:
      "You can contact us directly at oddnetwork.tech@gmail.com or reach out via the contact form on our website. We typically respond within 24 hours.",
  },
  {
    question: "What are your working hours?",
    answer:
      "Our team is available Monday through Friday, from 9:00 AM to 5:30 PM (WAT). For urgent project needs, extended support can be arranged.",
  },
  {
    question: "Do you provide custom-built solutions?",
    answer:
      "Absolutely. Every project at ODD Network is tailored to the client's needs from strategy to deployment ensuring you get a solution that fits your brand and goals perfectly.",
  },
  {
    question: "How long does it take to deliver a project?",
    answer:
      "Project delivery time varies based on scope. Simple websites take 1–2 weeks, while mobile apps and web applications typically require 5–8 weeks. We provide a detailed timeline after your initial consultation.",
  },
  {
    question: "How do I request a project quote?",
    answer:
      "Visit our Contact page and fill out the project inquiry form with your details. A member of our team will get in touch with a tailored proposal.",
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
