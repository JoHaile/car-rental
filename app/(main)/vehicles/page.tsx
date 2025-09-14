import CarCard from "@/components/shared/CarCard";
import { H1, H3 } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import prisma from "@/prisma";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";
import ManufactureFilter from "./filters/ManufactureFilter";
import EngineTypeFilter from "./filters/EngineTypeFilter";
import CarTypeFilter from "./filters/CarTypeFilter";
import { carActions } from "@/server/carActions";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

async function vehiclesPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const { cars, allCarTypes, allManufactures } = await carActions(searchParams);

  return (
    <>
      <div className="min-h-screen">
        <H1 className="mt-32 pb-10">Our Fleets</H1>
        <div className="grid grid-cols-5 gap-x-4">
          <div className="col-span-1 ">
            <div className="flex justify-between py-5">
              <span className="font-semibold text-lg tracking-wide">
                Filter
              </span>
              <Link href={"/vehicles"}>
                <Button variant={"secondary"}>
                  Clear All <X />
                </Button>
              </Link>
            </div>

            {/* all filters */}
            <div className="space-y-4">
              <p>Engine Type</p>
              <EngineTypeFilter />
              <p>Car Type</p>
              <CarTypeFilter allCarTypes={allCarTypes} />
              <p>Manufactures</p>
              <ManufactureFilter allManufactures={allManufactures} />
            </div>
          </div>

          <div className="col-span-4 px-2 md:px-4">
            <div className="py-5 flex justify-between">
              <span>{cars.length} Results</span>
              <div>sort by: put a clickable filter here</div>
            </div>

            <div className="flex flex-wrap justify-between">
              {cars.length === 0 && (
                <p className="text-center">
                  There are no results found . 😢 Try another filter.
                </p>
              )}
              {cars.map((car) => (
                <Link
                  key={car.id}
                  href={`/vehicles/${car.id}`}
                  className="hover:scale-103 transition-all duration-200"
                >
                  <CarCard car={car} key={car.id} feature={car.features} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default vehiclesPage;
