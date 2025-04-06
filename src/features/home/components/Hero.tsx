import { SearchEstablishment } from "@/components/SearchEstablishment";
import { MasonryGrid } from "./MasonryGrid";
import { Establishments } from "./Establishments";

export function Hero() {
  return (
    <section className="bg-blue min-h-dvh flex flex-col overflow-hidden">
      <div className="flex flex-col py-16 gap-12 md:w-[80%] w-full mx-auto md:px-0 px-2">
        <div
          //className="flex items-center justify-between gap-2"
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <h1
            //className="max-w-lg font-montserrat font-extrabold text-7xl text-white"
            className="max-w-xl font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white"
          >
            Você está morrendo de fome?
          </h1>

          <SearchEstablishment />
        </div>
        {/* <FoodGrid /> */}
        <MasonryGrid />
        <Establishments />
      </div>
    </section>
  );
}
