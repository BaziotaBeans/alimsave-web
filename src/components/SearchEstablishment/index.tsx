import { cn } from "@/lib/utils";
import { CurrentLocationSVG } from "../shared/customIcon/currentLocation";

export function SearchEstablishment() {
  return (
    <div className="space-y-3">
      <div className="relative rounded-lg overflow-hidden">
        <input
          className="flex-1 h-16 w-[480px] bg-white rounded-lg pl-8 text-blue font-semibold"
          placeholder="Pesquisar por estabelecimento"
        />

        <button
          className={cn(
            "absolute top-0 right-0 text-blue font-semibold w-40 h-full border border-r",
            "flex items-center justify-center gap-2.5 cursor-pointer transition-all hover:bg-zinc-100",
          )}
        >
          <CurrentLocationSVG />
          Perto de si
        </button>
      </div>

      <p className="text-xl text-white pl-2.5">RESTAURANTE, PADARIAS, MERCADOS!</p>
    </div>
  );
}
