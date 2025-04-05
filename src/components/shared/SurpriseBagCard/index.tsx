import { Plus } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

export function SurpriseBagCard() {
  return (
    <Card className="flex flex-col items-center shadow-none w-[245px] bg-[#FDFDFD] border border-[#EEEEEE] rounded-[10px] px-0 pt-10 pb-4">
      <Image
        src="/images/surprise-bag-1.png"
        alt="surprise bag"
        width={132}
        height={132}
        className="object-cover max-w-[132px] w-full h-full"
        quality={100}
      />

      <CardContent className="flex flex-col gap-2 items-center">
        <h2 className="text-base font-semibold text-zinc-500">Salgados</h2>
        <h2 className="text-base font-semibold text-zinc-500">Z Deli Delicatessent</h2>
        <p className="text-sm text-zinc-500 font-medium mb-4">3 Disponíveis</p>
      </CardContent>

      <CardFooter className="flex items-center justify-between w-full px-4">
        <h1 className="text-xl font-bold text-orange">1.200,00 kz</h1>

        <button className="bg-blue text-white p-1 rounded-[4px] cursor-pointer hover:bg-blue-dark transition-all">
          <Plus className="w-6 h-6" />
        </button>
      </CardFooter>
    </Card>
  );
}
