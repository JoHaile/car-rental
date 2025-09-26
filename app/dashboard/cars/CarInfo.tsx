import prisma from "@/prisma";
import { BadgeDollarSign, CarIcon } from "lucide-react";
import React from "react";

async function CarInfo() {
  const cars = await prisma.car.findMany();

  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-3 mb-[50px]">
      <div className="aspect-auto rounded-xl bg-muted p-4">
        <h3 className="font-semibold flex items-center justify-between gap-2">
          Total Cars <CarIcon />
        </h3>
        <p className="text-xl font-extrabold mt-5">
          {cars.length} cars registered.
        </p>
      </div>
      <div className="aspect-auto rounded-xl bg-muted p-4">
        <h3 className="font-semibold flex items-center justify-between gap-2">
          Available <CarIcon />
        </h3>
        <p className="text-xl font-extrabold mt-5">
          {cars.filter((car) => car.isAvailable).length} are ready for rental.
        </p>
      </div>
      <div className="aspect-auto rounded-xl bg-muted p-4">
        <h3 className="font-semibold flex items-center justify-between gap-2">
          Rented <CarIcon color="red" />
        </h3>
        <p className="text-xl font-extrabold mt-5">
          currently {cars.filter((car) => !car.isAvailable).length} cars are
          rented.
        </p>
      </div>
    </div>
  );
}

export default CarInfo;
