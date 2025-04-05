import Link from "next/link";
import { SurpriseBagsCarousel } from "./SurpriseBagsCarousel";

export function SurpriseBags() {
  return (
    <div className="bg-white flex flex-col">
      <div className="flex flex-col py-16 gap-28 w-[80%] mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex flex-col space-y-2">
            <span className="bg-yellow text-xs py-1 px-2 rounded-[4px] font-medium text-blue self-start">
              TODOS SURPRISEBAGS ONLINE
            </span>
            <h1 className="text-5xl font-montserrat font-extrabold  text-blue">Surprise Bags</h1>
            <p className="text-base font-montserrat text-blue font-medium">
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
