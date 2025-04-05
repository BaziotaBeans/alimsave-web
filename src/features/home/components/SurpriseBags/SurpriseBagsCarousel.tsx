"use client";

import { SurpriseBagCard } from "@/components/shared/SurpriseBagCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function SurpriseBagsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {Array.from({ length: 6 }).map((_, index) => {
          return (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-auto">
              <SurpriseBagCard />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="establishment-carouse-btn establishment-carouse-btn-previous" />
      <CarouselNext className="establishment-carouse-btn establishment-carouse-btn-next" />
    </Carousel>
  );
}
