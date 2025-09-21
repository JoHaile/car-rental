import prisma from "@/prisma";
import React from "react";
import { Card, CardTitle } from "../ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Link from "next/link";
import { Button } from "../ui/button";
import { H2 } from "../Typography";

async function CarType() {
  const allCarTypes = await prisma.features.findMany({
    select: {
      carType: true,
    },
    distinct: ["carType"],
  });

  return (
    <div className="mt-[200px] mb-[50px]  bg-muted py-10">
      <p className="pl-4">
        <span className="text-3xl font-bold">Gondar Rentals.</span>
      </p>

      <div className="flex gap-5 justify-center px-6 w-full my-10">
        <Carousel
          className="w-3/4 md:max-w-11/12"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {allCarTypes.map((feat) => (
              <CarouselItem
                key={feat.carType}
                className="md:basis-1/2 lg:basis-1/4 hover:scale-105 duration-300 mr-3"
              >
                <Link href={`/vehicles?carType=${feat.carType}`}>
                  <Card className="pt-0 ">
                    <Image
                      src={`/car-types/${feat.carType.toLowerCase()}.png`}
                      alt="car Image"
                      width={700}
                      height={700}
                    />
                    <CardTitle className="pl-5">{feat.carType}</CardTitle>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
      <p className="text-center">
        <Link href={"/vehicles"}>
          <Button>View All</Button>
        </Link>
      </p>
    </div>
  );
}

export default CarType;
