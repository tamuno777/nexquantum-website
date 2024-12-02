"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./mobilemenu";

export type NavLink = {
  label: string;
  href: string;
  dropdown?: NavLink[];
};

export type HeaderProps = {
  navLinks: NavLink[];
};

export const Header: React.FC<HeaderProps> = ({  navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const pathname = usePathname();
  const isActiveLink = (href: string) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 px-6  sm:px-8 lg:px-12 ${
        isSticky ? "bg-brandBlue text-white shadow-md" : "bg-transparent"
      }`} 
    >
      <div className="flex justify-between items-center   w-[100%]">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={100} height={25} />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
  {navLinks.map((link, index) => (
    <div key={index} className="relative">
      <Link
        href={link.href}
        className={`text-lg font-medium relative transition-all duration-300 ${
          isActiveLink(link.href)
            ? "text-gray-300 pb-3 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-1 after:bg-gray-300"
            : "text-white after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-1 after:bg-gray-300 hover:after:w-full hover:text-gray-300"
        }`}
      >
        {link.label}
      </Link>
      {link.dropdown && (
        <ul className="absolute left-0 hidden group-hover:block bg-gray-800 text-white shadow-lg p-4 rounded-md">
          {link.dropdown.map((sublink, subIndex) => (
            <li key={subIndex}>
              <Link
                href={sublink.href}
                className="block px-4 py-2 hover:bg-gray-700 rounded-md"
              >
                {sublink.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  ))}
</nav>


        {/* Icons & Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Icons */}
          {/* <Link href="/wishlist" className="hidden md:block">
            <Image
              src="/path/to/heart-icon.png"
              alt="Wishlist"
              width={24}
              height={24}
            />
          </Link>
          <Link href="/cart" className="hidden md:block">
            <Image
              src="/path/to/cart-icon.png"
              alt="Cart"
              width={24}
              height={24}
            />
          </Link> */}

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="relative z-10">
              <div className="space-y-2">
                <span className="block w-8 h-1 bg-white"></span>
                <span className="block w-8 h-1 bg-white"></span>
                <span className="block w-8 h-1 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <MobileMenu
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          navLinks={navLinks}
        />
      )}
    </header>
  );
};
