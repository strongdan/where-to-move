"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-2xl font-bold">Where to Move</h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="#about" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="#map" className="hover:text-gray-300">
                Explore
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setNav(!nav)}
          >
            {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {nav && (
          <ul className="md:hidden flex flex-col space-y-4 py-4 text-center bg-blue-700 rounded-lg">
            <li>
              <Link href="#about" className="block py-2" onClick={() => setNav(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#map" className="block py-2" onClick={() => setNav(false)}>
                Explore
              </Link>
            </li>
            <li>
              <Link href="#contact" className="block py-2" onClick={() => setNav(false)}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
