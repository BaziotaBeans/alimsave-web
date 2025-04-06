import Link from "next/link";
import { SurpriseBagsCarousel } from "./SurpriseBagsCarousel";

export function SurpriseBags() {
  return (
    <div className="bg-white flex flex-col">
      <div className="flex flex-col pt-4 pb-10 sm:pt-16 sm:pb-16 gap-10 w-full sm:w-[80%] mx-auto px-3 sm:px-0">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 sm:gap-4">
          <div className="flex flex-col space-y-2">
            <span className="bg-yellow text-xs py-1 px-2 rounded-[4px] font-medium text-blue self-start">
              TODOS SURPRISEBAGS ONLINE
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-extrabold  text-blue">
              Surprise Bags
            </h1>
            <p className="text-sm sm:text-base font-montserrat text-blue font-medium">
              Surprise Bags, Mista, Salgados e Doces
            </p>
          </div>

          <Link className="font-montserrat font-medium text-sm text-blue" href="">
            Ver Tudo
          </Link>
        </div>

        <SurpriseBagsCarousel />
      </div>
    </div>
  );
}
