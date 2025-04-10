import { Card, CardContent } from "@/components/ui/card";
import { MdRemoveRedEye } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Clock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Establishment } from "@/features/establishments/types/Establishments";

interface EstablishmentCardProps {
  establishment: Establishment;
  viewMode: string;
}

export default function EstablishmentCard({ establishment, viewMode }: EstablishmentCardProps) {
  return (
    <Card
      className={cn(
        "bg-[#FDFDFD] shadow-none rounded-[10px] border p-4 pb-8 relative",
        viewMode === "list" && "flex gap-4 items-center",
      )}
    >
      <div className="flex items-center justify-between w-full">
        <button className="text-zinc-400 cursor-pointer">
          <MdRemoveRedEye className="w-6 h-6" />
        </button>
        <button className="text-zinc-400 cursor-pointer">
          <FaHeart className="w-5 h-5" />
        </button>
      </div>

      <div
        className={cn(viewMode === "list" ? "w-24 h-24 flex-shrink-0" : "mx-auto w-32 h-32 mb-4")}
      >
        <div className="relative w-[110px] h-[110px] rounded-full border-4 border-zinc-100 overflow-hidden">
          <Image
            src={establishment.image}
            alt={establishment.name}
            width={100}
            height={100}
            className="object-cover w-full h-full pointer-events-none"
          />
        </div>
      </div>

      <CardContent className="flex flex-col gap-4 items-center p-0">
        <div className="text-center">
          <h2 className="text-base font-semibold text-zinc-600 mb-3">{establishment.name}</h2>
          <p className="text-sm text-zinc-500 font-medium mb-4">{establishment.category}</p>

          <div className="flex items-center justify-center font-medium text-zinc-500 text-sm">
            <Clock className="mr-2 w-4 h-4" />
            <span>{establishment.openingTime}</span>
            <span className="mx-2">•</span>
            <span>{establishment.closingTime}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="small-primary">
            {establishment.price}
          </Button>
          <Button size="sm" variant="small-primary-outline">
            Retirada
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
