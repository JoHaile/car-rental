import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Car, Features } from "@/app/generated/prisma";

interface Props {
  car: Car;
  feature: Features;
}

async function CarCard({ car, feature }: Props) {
  return (
    <Card className="max-w-[300px] md:max-w-[320px] lg:max-w-[350px] pt-0 overflow-hidden relative mb-5">
      <div className="absolute top-3 left-3 space-x-3">
        <Badge variant={"destructive"}>New</Badge>
        {car?.isAvailable && <Badge className="font-semibold">Available</Badge>}
      </div>

      <Image
        src={car?.imageUrls[2] ? car?.imageUrls[2] : "/hero-2.jpg"}
        alt="Car Image"
        className="aspect-[16/9]"
        width={500}
        height={500}
      />
      <CardHeader>
        <CardTitle className="text-2xl font-extrabold">
          <div>
            <span className="pr-4">{car?.manufacture}</span>
            <span>{car?.model}</span>
          </div>
        </CardTitle>
        <CardTitle className="text-lg opacity-80">{feature?.carType}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="flex justify-between">
          <CardAction className="opacity-70">Year</CardAction>
          <CardAction>{car?.year}</CardAction>
        </div>
        <div className="flex justify-between">
          <CardAction className="opacity-70">Engine Type</CardAction>
          <CardAction>{feature?.fuelType}</CardAction>
        </div>
        <div className="flex justify-between">
          <CardAction className="opacity-70">Transmission</CardAction>
          <CardAction>{feature?.transmission}</CardAction>
        </div>
        <div className="flex justify-between">
          <CardAction className="opacity-70">Engine Power</CardAction>
          <CardAction>{feature?.enginePower} HP</CardAction>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <CardAction className="opacity-70">Price from</CardAction>
        <CardAction className="text-xl font-extrabold">
          {car?.pricePerDay} Birr / day
        </CardAction>
      </CardFooter>
    </Card>
  );
}

export default CarCard;
