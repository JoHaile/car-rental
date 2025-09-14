import React from "react";
import { H2, H3 } from "../Typography";
import Image from "next/image";

function Services() {
  return (
    <main className="grid grid-cols-1 gap-24 max-w-4xl m-auto py-10 mt-[100px]">
      <div className="flex gap-2 md:gap-8 min-h-[300px]">
        <div className=" flex-1">
          <p className="text-2xl font-bold text-center m-auto">
            Wide selection
          </p>
          <p className="mt-10 px-2 md:px-0">
            Explore an extensive selection of vehicles, from economical city
            cars and spacious SUVs to premium sedans.
          </p>
        </div>
        <div className=" flex-1 rounded-sm overflow-hidden flex items-center relative">
          <Image
            src={"/car-image.jpg"}
            alt="Image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex gap-2 md:gap-8 min-h-[300px]">
        <div className=" col-span-1 flex-1 rounded-sm overflow-hidden flex items-center relative">
          <Image
            src={"/car-image.jpg"}
            alt="Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-1 flex-1">
          <p className="text-2xl font-bold text-center m-auto">
            Instant booking
          </p>
          <p className="mt-10 ">
            Easily book your chosen car. Our process includes quick date
            selection, immediate price confirmation and instant email
            confirmation for your reservation.
          </p>
        </div>
      </div>

      <div className="flex gap-2 md:gap-8 min-h-[300px]">
        <div className="col-span-1 flex-1">
          <p className="text-2xl font-bold text-center m-auto">
            Insurance Included
          </p>
          <p className="mt-10 px-2 md:px-0">
            we provide comprehensive insurance that ensuring a hassle-free
            experience. Whether for business or leisure, our top-tier service
            guarantees a secure, effortless, and elegant journey.
          </p>
        </div>
        <div className="bg-emerald-500 col-span-1 flex-1 rounded-sm overflow-hidden flex items-center relative">
          <Image
            src={"/car-image.jpg"}
            alt="Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}

export default Services;
