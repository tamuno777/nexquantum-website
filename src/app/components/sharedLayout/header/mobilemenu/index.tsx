import React from "react";
import Link from "next/link";

export interface NavLink {
  label: string;
  href: string;
  dropdown?: NavLink[];
}

export interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  navLinks: NavLink[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  toggleMenu,
  navLinks,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-900 text-white z-20 flex flex-col space-y-4 p-6 md:hidden">
      <button onClick={toggleMenu} className="self-end text-lg">
        X
      </button>
      <ul className="space-y-4">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href} onClick={toggleMenu}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
