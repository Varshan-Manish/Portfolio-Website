"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-3 md:px-10 z-[30]">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Logo Image */}
        <Link href="/" className="h-auto w-auto hidden md:flex items-center">
          <Image
            src="/logo1.png" // ✅ Replace with your actual logo path
            alt="Varshan Logo"
            width={220}
            height={40}
            className="rounded-md"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20 ml-auto">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="/#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="/#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="/#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        {/* Social Icons + Hamburger */}
        <div className="flex flex-row gap-5 ml-auto">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={32}
                height={32}
              />
            </a>
          ))}

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center ml-2">
            {menuOpen ? (
              <FiX
                className="text-white w-7 h-7 cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <FiMenu
                className="text-white w-7 h-7 cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-[#030014e6] border-t border-[#7042f861] mt-2 rounded-b-lg text-gray-200">
          <div className="flex flex-col items-center justify-center py-4 gap-4">
            <a href="#aboutme" className="cursor-pointer" onClick={toggleMenu}>
              About me
            </a>
            <a href="#skills" className="cursor-pointer" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#projects" className="cursor-pointer" onClick={toggleMenu}>
              Projects
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
