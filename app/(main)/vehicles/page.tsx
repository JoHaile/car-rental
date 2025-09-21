import CarCard from "@/components/shared/CarCard";
import { H1, H3 } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";
import ManufactureFilter from "./filters/ManufactureFilter";
import EngineTypeFilter from "./filters/EngineTypeFilter";
import CarTypeFilter from "./filters/CarTypeFilter";
import { carActions } from "@/server/carActions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

async function vehiclesPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const { cars, allCarTypes, allManufactures } = await carActions(searchParams);

  return (
    <>
      <div className="min-h-screen">
        <H1 className="mt-32 pb-10">Our Fleets</H1>
        <div className="grid grid-cols-5 gap-x-2 md:gap-x-4">
          <div className="col-span-1 ">
            <div className="flex justify-between items-center py-5">
              <span className="font-semibold text-sm md:text-lg tracking-wide mr-2">
                Filter
              </span>

              <Link href={"/vehicles"}>
                <Button variant={"secondary"} className="p-3">
                  <span className="hidden md:flex">Clear All</span>{" "}
                  <X className="size-3 " />
                </Button>
              </Link>
            </div>

            {/* all filters */}
            <div className="space-y-4 hidden sm:block">
              <p>Engine Type</p>
              <EngineTypeFilter />
              <p>Car Type</p>
              <CarTypeFilter allCarTypes={allCarTypes} />
              <p>Manufactures</p>
              <ManufactureFilter allManufactures={allManufactures} />
            </div>

            {/* For Small screens */}
            <div className="sm:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"outline"}>Filters</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <div className="space-y-2">
                    <p>Engine Type</p>
                    <EngineTypeFilter />
                    <p>Car Type</p>
                    <CarTypeFilter allCarTypes={allCarTypes} />
                    <p>Manufactures</p>
                    <ManufactureFilter allManufactures={allManufactures} />
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="col-span-4 px-2 md:px-4">
            <div className="py-5 flex justify-between pl-4">
              <span>{cars.length} Results</span>
            </div>

            <div className="flex flex-wrap md:justify-between">
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
