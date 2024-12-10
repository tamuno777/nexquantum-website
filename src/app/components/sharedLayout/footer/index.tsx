import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-brandBlue text-white py-6 px-6 lg:px-24">
      <div className="flex justify-between flex-wrap">
        <div>
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={100} height={25} />
          </Link>{" "}
          <p className=" text-white ">
            Creating innovative solutions tailored to your <br />   business needs. 
Contact us for   <br /> website development,  
            , and web
            solutions.
          </p>
          <div className="flex mt-6 space-x-4">
            <a
              href="https://github.com/tamuno777"
              className="bg-customPink text-gray-900 p-2 rounded-full hover:bg-teal-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/niedavies"
              className="bg-customPink text-gray-900 p-2 rounded-full hover:bg-teal-500"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/winnie-davis-1aa069246"
              className="bg-customPink text-gray-900 p-2 rounded-full hover:bg-teal-500"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="bg-customPink text-gray-900 p-2 rounded-full hover:bg-teal-500"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-customPink lg:mt-4">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-white">
            <li>
              <a href="/aboutUs" className="hover:text-customPink">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-customPink">
                Services
              </a>
            </li>
            {/* <li>
              <a href="/testimonials" className="hover:text-customPink">
                Testimonials
              </a>
            </li> */}
            <li>
              <a href="/contact" className="hover:text-customPink">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Links */}
        <div>
          <h3 className="text-lg font-semibold text-customPink lg:mt-4">Contact Us</h3>
          <ul className="mt-4 space-y-4 text-white">
            <li>
              <p className="flex items-center space-x-2">
                <span></span>
              </p>
            </li>
            <li>
              <p className="flex items-center space-x-2">
                <a href="mailto:davisbeulah07@gmail.com">davisbeulah7@gmail.com</a>
              </p>
            </li>
            <li>
              <p className="flex items-center space-x-2">
                <span>
                  Remote
                  <br />
                  Worldwide.
                </span>
              </p>
            </li>
          </ul>
        </div>
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
