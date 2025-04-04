"use client";

import { EstablishmentCard } from "@/components/shared/EstablishmentCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// interface EstablishmentCarouselProps {
//   establishments?: any[];
// }

// export function EstablishmentCarousel({ establishments = [] }: EstablishmentCarouselProps) {
export function EstablishmentCarousel() {
  const items = Array(6).fill({
    name: "Z Deli Delicatessent",
    category: "Mista, Doces & Salgados",
    openHours: "09:00 às 20:00",
    distance: "0.0 km",
    price: "2 - 500kz",
    image: "/images/food/food-1.png",
    rating: 4.9,
  });

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {items.map((item, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-auto">
            <EstablishmentCard
              name={item.name}
              category={item.category}
              openHours={item.openHours}
              distance={item.distance}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-red-600 text-blue-950 border-none hover:bg-yellow-400 hover:text-blue-950" />
      <CarouselNext className="bg-yellow-300 text-blue-950 border-none hover:bg-yellow-400 hover:text-blue-950" />
    </Carousel>
  );
}
