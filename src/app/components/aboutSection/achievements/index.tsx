"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

  

const Achievement = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <section className="bg-white  mt-6">
     
      <h2
              data-aos="fade-right"

        className=" text-sm uppercase text-left tracking-widest mb-4 text-customPink bg-white pt-16 px-6 lg:px-24"
        style={{ color: " #ed51c2" }}
      >
        03 | Our Achievement
      </h2>
      <div className="container mx-auto text-center px-6 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            {
              title: "30+",
              subtitle: "Qualified employees",
              text: "Not only is our team full of professionals – we're a fun bunch, too.",
            },

            {
              title: "300+",
              subtitle: "Projects Delivered",
              text: "Last year, we successfully completed over 100 individual projects worldwide.",
            },
            {
              title: "8.9",
              subtitle: "Client Rating",
              text: "Not only is our team full of professionals – we're a fun bunch, too.",
            },
            {
              title: "10",
              subtitle: "Key industries",
              text: "We have specialist experience in a handful of industries.",
            },
          ].map((achievement, index) => (
            <div key={index} className="text-center">
              <h3 className="text-5xl font-bold text-customPink">
                {achievement.title}
              </h3>
              <p className="text-brandBlue font-bold mt-1 ">
                {achievement.subtitle}
              </p>
              <p className="text-black text-lg mt-2">{achievement.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
