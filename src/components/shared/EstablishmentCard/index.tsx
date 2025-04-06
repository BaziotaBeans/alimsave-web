import { MdRemoveRedEye } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import { Clock } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface EstablishmentCardProps {
  name?: string;
  category?: string;
  openHours?: string;
  distance?: string;
  price?: string;
  image?: string;
  rating?: number;
}

export function EstablishmentCard({
  name = "Z Deli Delicatessent",
  category = "Mista, Doces & Salgados",
  openHours = "09:00 às 20:00",
  distance = "0.0 km",
  price = "2 - 500kz",
  image = "/images/food/food-1.png",
  rating = 4.9,
}: EstablishmentCardProps) {
  console.log(rating);

  return (
    <Card className="flex flex-col items-center w-[245px] bg-white rounded-[10px] px-4 pt-4 pb-8">
      <div className="flex items-center justify-between w-full">
        <button className="text-zinc-400 cursor-pointer">
          <MdRemoveRedEye className="w-6 h-6" />
        </button>
        <button className="text-zinc-400 cursor-pointer">
          <FaHeart className="w-5 h-5" />
        </button>
      </div>

      <div className="relative w-[110px] h-[110px] rounded-full border-4 border-zinc-100 overflow-hidden">
        <Image
          src={image}
          alt=""
          width={100}
          height={100}
          className="object-cover w-full h-full pointer-events-none"
        />
      </div>

      <CardContent className="flex flex-col gap-4 items-center p-0">
        <div className="text-center">
          <h2 className="text-base font-semibold text-zinc-600 mb-3">{name}</h2>
          <p className="text-sm text-zinc-500 font-medium mb-4">{category}</p>

          <div className="flex items-center justify-center font-medium text-zinc-500 text-sm">
            <Clock className="mr-2 w-4 h-4" />
            <span>{openHours}</span>
            <span className="mx-2">•</span>
            <span>{distance}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="small-primary">
            <HiShoppingBag />
            {price}
          </Button>
          <Button size="sm" variant="small-primary-outline">
            Retirada
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
