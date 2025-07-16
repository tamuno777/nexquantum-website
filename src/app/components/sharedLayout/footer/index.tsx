import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-brandBlue text-white text-left py-6 px-6 lg:px-24">
      <div className="pl-0 lg:pl-6">
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={100} height={25} />
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Logo and Description */}
        <div className="w-full lg:w-1/2 text-left">

          <p className="text-white  text-left mt-4">
            At <strong>ODD Network</strong>, we craft innovative digital solutions tailored to your unique business goals. <br />
            From custom website development to mobile and web application services, <br />
            we’re your trusted partner for future-ready, high-performance technology.
          </p>
        </div>
        <div className="flex justify-between w-full lg:w-1/3 flex-col gap-5  lg:flex-row">
          {/* Navigation Links */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-lg font-semibold text-customPink">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-left">
              <li className=""><a href="/aboutUs" className="hover:text-customPink text-base font-medium">About Us</a></li>
              <li><a href="/services" className="hover:text-customPink text-base font-medium">Services</a></li>
              <li><a href="/contact" className="hover:text-customPink text-base font-medium">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-lg font-semibold text-customPink">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-left">
              <li>
                <a href="mailto:oddnetwork.tech@gmail.com" className=" text-base font-medium hover:text-customPink">
                  oddnetwork.tech@gmail.com
                </a>
              </li>
              <li className="text-base font-medium">
                <span>Remote <br /> Worldwide.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Social Icons */}
      <div className="flex mt-10 space-x-4 pl-0 lg:pl-6">
        <a
          href="https://wa.me/2347014042999?text=Hi%2C%20I%27m%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-customPink text-gray-900 p-2 rounded-full hover:bg-teal-500"
        >
          <FaWhatsapp />
        </a>        <a href="https://x.com/niedavies" className="bg-customPink text-gray-900 p-2 rounded-full hover:bg-teal-500"><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/winnie-davis-1aa069246" className="bg-customPink text-gray-900 p-2 rounded-full hover:bg-teal-500"><FaLinkedinIn /></a>
        <a href="#" className="bg-customPink text-gray-900 p-2 rounded-full hover:bg-teal-500"><FaInstagram /></a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 border-t border-customPink pt-2 text-center">
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} ODD Network. All rights reserved.
        </p>
      </div>
    </footer>

  );
};

export default Footer;
