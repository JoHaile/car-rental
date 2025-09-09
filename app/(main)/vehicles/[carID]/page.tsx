import prisma from "@/prisma";
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
    <div>
      car Id: {carID}
      <ul>
        <li>{car?.manufacture}</li>
        <li>{car?.model}</li>
        <li>{car?.features.enginePower}</li>
      </ul>
    </div>
  );
}

export default page;
