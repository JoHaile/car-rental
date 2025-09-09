import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import CarCard from "./CarCard";
import prisma from "@/prisma";
import Link from "next/link";
import { Button } from "../ui/button";

async function FeaturedCars() {
  const cars = await prisma.car.findMany({
    take: 6,
    include: {
      features: true,
    },
  });
  return (
    <div className="my-8 w-full flex flex-col items-center justify-center mt-[200px]">
      <Carousel
        className="max-w-11/12"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {cars.map((car) => (
            <CarouselItem className="basis-1/4" key={car.id}>
              <CarCard car={car} feature={car.features} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext />
        <CarouselPrevious />
      </Carousel>

      <Link href="/vehicles">
        <Button className="px-10">View All</Button>
      </Link>
    </div>
  );
}

export default FeaturedCars;
