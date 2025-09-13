"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface CarTypeFilterProps {
  allCarTypes: { carType: string }[];
}

function CarTypeFilter({ allCarTypes }: CarTypeFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCarTypes = searchParams.getAll("carType");

  function handleFilterChange(e: CheckedState, carType: string) {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (e) {
      newSearchParams.append("carType", carType);
    } else {
      const currentValues = newSearchParams.getAll("carType");
      newSearchParams.delete("carType");
      currentValues
        .filter((v) => v !== carType)
        .forEach((v) => newSearchParams.append("carType", v));
    }

    router.push(`/vehicles?${newSearchParams.toString()}`);
  }

  return (
    <div>
      {allCarTypes.map((type) => (
        <div key={type.carType} className="flex gap-4 items-center ">
          <Checkbox
            id={type.carType}
            checked={selectedCarTypes.includes(type.carType)}
            onCheckedChange={(e) => handleFilterChange(e, type.carType)}
          />
          <label htmlFor={type.carType} className="capitalize">
            {type.carType.toLowerCase()}
          </label>
        </div>
      ))}
    </div>
  );
}

export default CarTypeFilter;
