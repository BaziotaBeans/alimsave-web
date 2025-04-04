import { SearchEstablishment } from "@/components/SearchEstablishment";
import { MasonryGrid } from "./MasonryGrid";
import { Establishments } from "./Establishments";

export function Hero() {
  return (
    <section className="bg-blue min-h-dvh  flex flex-col ">
      <div className="flex flex-col py-16 gap-12 w-[80%] mx-auto">
        <div className="flex items-center justify-between gap-2">
          <h1 className="max-w-lg font-montserrat font-extrabold text-7xl text-white">
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
