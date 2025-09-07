import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import CarCard from "./CarCard";

function FeaturedCars() {
  return (
    <div className="my-8 w-full flex justify-center">
      <Carousel
        className="max-w-5/6"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem className="basis-1/4">
            <CarCard />
          </CarouselItem>
          <CarouselItem className="basis-1/4">
            <CarCard />
          </CarouselItem>
          <CarouselItem className="basis-1/4">
            <CarCard />
          </CarouselItem>
          <CarouselItem className="basis-1/4">
            <CarCard />
          </CarouselItem>
          <CarouselItem className="basis-1/4">
            <CarCard />
          </CarouselItem>
          <CarouselItem className="basis-1/4">
            <CarCard />
          </CarouselItem>
          <CarouselItem className="basis-1/4">
            <CarCard />
          </CarouselItem>
        </CarouselContent>

        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
}

export default FeaturedCars;
