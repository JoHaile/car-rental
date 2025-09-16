import Booking from "@/components/landing/Booking";
import CarDetailsCard from "@/components/shared/CarDetailsCard";
import { H1 } from "@/components/Typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { auth } from "@/lib/auth/auth";
import getServerSession from "@/lib/auth/get-server-session";
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
  const user = await getServerSession();

  return (
    <div>
      <div className="my-8 w-full grid grid-cols-3 justify-items-center">
        <div className="col-span-3 md:col-span-2 text-center justify-items-center my-auto">
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

        <div className="flex w-5/6 col-span-3 md:w-full md:col-span-1 ">
          <CarDetailsCard car={car} feature={car?.features} />
        </div>
      </div>

      <Booking
        pricePerDay={car?.pricePerDay}
        carId={car?.id}
        user={user?.user}
      />

      <div id="additional" className="min-h-screen bg-emerald-800 mt-[80px]">
        <H1>Additional Information</H1>
      </div>
    </div>
  );
}

export default page;
