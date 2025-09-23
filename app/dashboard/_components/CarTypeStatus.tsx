import prisma from "@/prisma";
import React from "react";

async function CarTypeStatus() {
  const availableCars = await prisma.car.findMany({
    where: {
      isAvailable: true,
    },
  });
  const rentedCars = await prisma.car.findMany({
    where: {
      isAvailable: false,
    },
  });

  return (
    <div className="mt-5">
      <p className="flex justify-between">
        Available Cars <span>{availableCars.length} / 70 </span>
      </p>
      <div className="h-2 w-full my-4 bg-accent rounded-full">
        <div className={`h-2 w-[70%] my-4 bg-primary rounded-full`}></div>
      </div>
      <p className="flex justify-between">
        Rented Cars <span>{rentedCars.length} / 70 </span>
      </p>
      <div className="h-2 w-full my-4 bg-accent rounded-full">
        <div className={`h-2 w-[45%] my-4 bg-primary rounded-full`}></div>
      </div>
      <p className="flex justify-between">
        Maintenance <span>4 / 70 </span>
      </p>
      <div className="h-2 w-full my-4 bg-accent rounded-full">
        <div className={`h-2 w-[30%] my-4 bg-primary rounded-full`}></div>
      </div>
    </div>
  );
}

export default CarTypeStatus;
