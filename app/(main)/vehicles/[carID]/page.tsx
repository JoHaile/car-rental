import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import prisma from "@/prisma";
import Image from "next/image";
import React from "react";

interface Params {
  params: Promise<{ carID: string }>;
}
async function page({ params }: Params) {
  const { carID } = await params;
  const car = await prisma.car.findFirst({
    where: {
      id: carID,
    },
    include: {
      features: true,
    },
  });

  return (
    <div className="my-8 w-full grid grid-cols-3 8 md:gap-0 justify-items-center">
      <div className="col-span-3 md:col-span-2 text-center justify-items-center">
        <Carousel
          className="max-w-3/4 lg:max-w-5/6"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {car?.imageUrls.map((img) => (
              <CarouselItem key={img}>
                {
                  <Image
                    src={img ? img : "/car-image.jpg"}
                    className="object-cover aspect-[16/9]"
                    alt="image of a car"
                    width={1000}
                    height={1000}
                  />
                }
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>

      <div className="">{car?.description}</div>
    </div>
  );
}

export default page;
