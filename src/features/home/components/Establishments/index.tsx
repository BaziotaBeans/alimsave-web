"use client";

import Link from "next/link";
import { EstablishmentCarousel } from "../EstablishmentCarousel";

export function Establishments() {
  return (
    <section className="flex flex-col gap-10 mt-14">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-2">
          <span className="bg-yellow text-xs py-1 px-2 rounded-[4px] font-medium text-blue self-start">
            TODOS ESTABELECIMENTOS ONLINE{" "}
          </span>
          <h1 className="text-5xl font-montserrat font-extrabold  text-white">Estabelecimentos</h1>
          <p className="text-base font-montserrat text-white font-medium">
            Obtenha já a sua sacola surpresa
          </p>
        </div>

        <Link className="font-montserrat font-medium text-sm text-white" href="">
          Ver Tudo
        </Link>
      </div>

      <EstablishmentCarousel />
    </section>
  );
}
