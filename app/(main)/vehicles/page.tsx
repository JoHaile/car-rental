import CarCard from "@/components/shared/CarCard";
import { H1 } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

function vehiclesPage() {
  return (
    <div className="min-h-screen">
      <H1 className="mt-32 pb-10">Our Fleets</H1>

      <div className="grid grid-cols-5 gap-x-4">
        <div className="col-span-1 ">
          <div className="flex justify-between py-5">
            <span className="font-semibold text-lg tracking-wide">Filter</span>
            <Button variant={"secondary"}>
              Clear All <X />
            </Button>
          </div>
          <div className="bg-emerald-500">Put all filters here.</div>
        </div>

        <div className="col-span-4 px-2 md:px-4">
          <div className="py-5 flex justify-between">
            <span>115 Results</span>
            <div>sort by: put a clickable filter here</div>
          </div>

          <div className="flex flex-wrap justify-between">
            <Link
              href={"/"}
              className="hover:scale-102 transition-all duration-300"
            >
              <CarCard />
            </Link>

            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default vehiclesPage;
