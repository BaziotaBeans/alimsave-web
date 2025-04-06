"use client";

import type React from "react";

import { cn } from "@/lib/utils";

export default function Newsletter() {
  return (
    <div className="flex flex-col min-h-screen bg-orange">
      {/* Seção principal */}
      <main className="flex-1  flex flex-col items-center justify-center px-4 py-12">
        <div className="w-[80%] mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold font-montserrat text-white mb-16">
            Fique Atualizado
          </h1>

          <form className="w-full mb-24">
            <div className="flex flex-col md:flex-row items-center bg-white rounded-full p-2">
              <input
                type="email"
                placeholder="Teu endereço email, por favor"
                className="flex-1 px-6 py-6 text-lg text-blue font-bold bg-transparent border-none focus:outline-none w-full"
              />
              <button
                type="submit"
                className="text-xl mt-2 md:mt-0 w-full md:w-auto px-8 py-6 bg-blue hover:bg-blue-dark text-white cursor-pointer font-bold font-montserrat rounded-full transition-colors"
              >
                Inscreva-me!
              </button>
            </div>
          </form>

          {/* Logo */}
          <div className="flex justify-center mb-24">
            <img
              src="/images/logo-big.png"
              alt="logo"
              width={178}
              height={42}
              className={cn("max-w-[410px] w-full object-cover transition-all duration-300")}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-between text-white">
          <div className="mb-4 md:mb-0 font-bold text-xl">AlimSave</div>
          <div className="mb-4 md:mb-0 font-bold text-xl">Precia de ajuda?</div>
          <div className="mb-4 md:mb-0 font-bold text-xl">Jurídico</div>
          <div className="font-bold text-xl">Social</div>
        </div>
      </footer>
    </div>
  );
}
