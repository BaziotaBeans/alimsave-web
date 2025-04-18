"use client";

import Link from "next/link";
import { EstablishmentCarousel } from "../EstablishmentCarousel";

export function Establishments() {
  return (
    <section className="flex flex-col gap-10 mt-14">
      <div
        //className="flex items-center justify-between"
        className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 sm:gap-4"
      >
        <div className="flex flex-col space-y-2">
          <span className="bg-green-light text-xs py-1 px-2 rounded-[4px] font-medium text-green self-start">
            TODOS ESTABELECIMENTOS ONLINE{" "}
          </span>
          <h1
            //className="text-5xl font-montserrat font-extrabold  text-white"
            className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-extrabold text-white"
          >
            Estabelecimentos
          </h1>
          <p
            // className="text-base font-montserrat text-white font-medium"
            className="text-sm sm:text-base font-montserrat text-white font-medium"
          >
            Obtenha já a sua sacola surpresa
          </p>
        </div>

        <Link
          className="font-montserrat font-medium text-sm text-white transition-all hover:underline"
          href=""
        >
          Ver Tudo
        </Link>
      </div>

      <EstablishmentCarousel />
    </section>
  );
}
