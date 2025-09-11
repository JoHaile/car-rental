"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import React from "react";

function CarFilters() {
  const handleFilterChange = (e: CheckedState) => {
    console.log(e);
  };

  return (
    <div className="flex flex-col gap-2 justify-between">
      <form>
        <div className="flex gap-4 items-center">
          <Checkbox
            id="available"
            defaultChecked
            onCheckedChange={(e) => handleFilterChange(e)}
          />
          <label htmlFor="available">Available</label>
        </div>
        <div className="flex gap-4 items-center">
          <Checkbox id="soon" onCheckedChange={(e) => console.log(e)} />
          <label htmlFor="soon">Coming Soon</label>
        </div>
      </form>
    </div>
  );
}

export default CarFilters;
