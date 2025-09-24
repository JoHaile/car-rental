import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Car, Features } from "@/app/generated/prisma";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface Props {
  car: Car | null;
  feature: Features | undefined;
}

function CarDetailsCard({ car, feature }: Props) {
  return (
    <div className="flex-1 text-center">
      <Card className="max-w-11/12 rounded-none m-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-extrabold">
            <div>
              <span className="pr-4">{car?.manufacture}</span>
              <span>{car?.model}</span>
            </div>
          </CardTitle>
          <CardTitle className="text-lg opacity-85">
            {feature?.carType}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5 divide-y-2 ">
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
          <div className="flex justify-between">
            <CardAction className="opacity-70">Seat Capacity</CardAction>
            <CardAction>{feature?.seatingCapacity} Seats</CardAction>
          </div>
          <div className="flex justify-between">
            <CardAction className="opacity-70">Mileage</CardAction>
            <CardAction>{car?.mileage} Miles</CardAction>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between mt-5">
          <CardAction className="">Price from</CardAction>
          <CardAction className="text-xl font-extrabold relative">
            <Badge
              variant={"destructive"}
              className="font-bold absolute right-0 -top-6"
            >
              20% off
            </Badge>
            {car?.pricePerDay} Birr / day
          </CardAction>
        </CardFooter>

        <div className="flex flex-col px-4 gap-4">
          <Button>
            <Link href={"#booking"} className="w-full h-full">
              Book This Car
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default CarDetailsCard;
