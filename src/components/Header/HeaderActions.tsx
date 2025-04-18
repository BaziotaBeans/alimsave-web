"use client";

import Link from "next/link";
import { CartSVG } from "../shared/customIcon/cart";

interface HeaderActionsProps {
  isMenuOpen: boolean;
  isScrolled: boolean;
}

export function HeaderActions({ isMenuOpen, isScrolled }: HeaderActionsProps) {
  return (
    <>
      {/* Desktop actions */}
      <div className="hidden lg:flex items-center h-full bg-yellow transition-all">
        <Link
          href="/login"
          className="bg-orange h-full w-[112px] text-white font-bold cursor-pointer transition-all hover:brightness-90 flex items-center justify-center"
        >
          Entrar
        </Link>

        <button className="flex items-center gap-2 w-[192px] h-full bg-[#316142] hover:brightness-90 justify-center group transition-all cursor-pointer">
          <span className="bg-green rounded-full p-1 flex items-center justify-center h-12 w-12 transition-all duration-300">
            <CartSVG />
          </span>

          <div className="flex flex-col gap-1 items-start text-white">
            <span className="text-xs transition-all duration-300">MEU CARRINHO</span>
            <span className="text-sm font-bold transition-all duration-300">Total 5 item</span>
          </div>
        </button>
      </div>

      {/* Mobile floating cart button */}
      <button
        className={`lg:hidden fixed bottom-6 right-6 bg-green rounded-full p-3 shadow-lg z-[9999] transition-all duration-500 ${
          isScrolled ? "scale-100 opacity-100" : "scale-95 opacity-95"
        } ${isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} cart-float-button`}
      >
        <span className="bg-[#316142] rounded-full p-1 flex items-center justify-center h-12 w-12 cart-pulse-animation">
          <CartSVG />
          <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            5
          </span>
        </span>
      </button>
    </>
  );
}
