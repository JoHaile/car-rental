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

function CarCard() {
  return (
    <Card className="max-w-[300px] md:max-w-[320px] lg:max-w-[350px] pt-0 overflow-hidden relative mb-5">
      <div className="absolute top-3 left-3 space-x-3">
        <Badge variant={"destructive"}>New</Badge>
        <Badge className="font-semibold">Rented</Badge>
      </div>

      <Image
        src={"/car-image.jpg"}
        alt="Car Image"
        className="aspect-[16/9]"
        width={500}
        height={500}
      />
      <CardHeader>
        <CardTitle className="text-2xl font-extrabold">
          Toyota Rav4 Hybrid
        </CardTitle>
        <CardTitle className="text-xl">Luxury Metallic</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="flex justify-between">
          <CardAction className="opacity-70">Year</CardAction>
          <CardAction>2018</CardAction>
        </div>
        <div className="flex justify-between">
          <CardAction className="opacity-70">Engine Type</CardAction>
          <CardAction>Hybrid</CardAction>
        </div>
        <div className="flex justify-between">
          <CardAction className="opacity-70">Transmission</CardAction>
          <CardAction>Automatic</CardAction>
        </div>
        <div className="flex justify-between">
          <CardAction className="opacity-70">Engine Power</CardAction>
          <CardAction>127 HP</CardAction>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <CardAction className="opacity-70">Price from</CardAction>
        <CardAction className="text-xl font-extrabold">890 $/day</CardAction>
      </CardFooter>
    </Card>
  );
}

export default CarCard;
