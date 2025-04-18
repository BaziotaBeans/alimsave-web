"use client";

import Image from "next/image";
import Link from "next/link";
import { HeaderActions } from "./HeaderActions";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left- z-[9999] w-full h-20 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? "bg-green-dark shadow-lg" : "bg-green"
      }`}
    >
      <button
        className="lg:hidden pl-4 text-white relative z-[10000] cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="h-6 w-6 transition-all duration-300" />
        ) : (
          <Menu className="h-6 w-6 transition-all duration-300" />
        )}
      </button>

      <nav className="hidden lg:block py-4 pr-8 pl-[10%]">
        <ul className="flex items-center gap-6 text-white font-semibold">
          <li>
            <Link href="/" className="hover:text-yellow transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow transition-colors duration-300">
              Quem somos
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow transition-colors duration-300">
              Contact-nos
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className={`fixed inset-0 bg-green z-[9999] pt-20 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <ul className="flex flex-col items-center gap-6 text-white font-semibold p-8">
          <li>
            <Link
              href="#"
              className="text-xl hover:text-yellow transition-colors duration-300"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-xl hover:text-yellow transition-colors duration-300"
              onClick={closeMenu}
            >
              Quem somos
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-xl hover:text-yellow transition-colors duration-300"
              onClick={closeMenu}
            >
              Contact-nos
            </Link>
          </li>
          <li className="mt-6">
            <button
              className="bg-green-dark px-8 py-3 rounded-md text-white font-bold cursor-pointer transition-all hover:bg-opacity-80"
              onClick={closeMenu}
            >
              Entrar
            </button>
          </li>
        </ul>
      </div>

      <Link href="/" aria-label="alimsave" className="absolute left-1/2 transform -translate-x-1/2">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={178}
          height={42}
          className={cn(
            "max-w-[140px] md:max-w-[178px] w-full object-cover transition-all duration-300",
            `${isScrolled ? "md:max-w-[148px]" : "md:max-w-[178px]"}`,
          )}
        />
      </Link>

      <HeaderActions isMenuOpen={isMenuOpen} isScrolled={isScrolled} />
    </header>
  );
}
