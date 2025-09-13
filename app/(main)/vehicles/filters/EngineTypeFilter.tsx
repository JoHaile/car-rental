"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

function EngineTypeFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedEngineType = searchParams.get("engineType") || "";

  function handleFilterChange(engineType: string) {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (engineType) {
      // Set the new engine type, overwriting any previous value
      newSearchParams.set("engineType", engineType.toUpperCase());
    } else {
      // Clear the engineType parameter if the value is empty
      newSearchParams.delete("engineType");
    }

    router.push(`/vehicles?${newSearchParams.toString()}`);
  }

  return (
    <div className="flex flex-col gap-2 justify-between">
      <RadioGroup value={selectedEngineType} onValueChange={handleFilterChange}>
        <div className="flex gap-4 items-center">
          <RadioGroupItem value="GASOLINE" id="GASOLINE" />
          <label htmlFor="GASOLINE">Gasoline</label>
        </div>
        <div className="flex gap-4 items-center">
          <RadioGroupItem value="HYBRID" id="HYBRID" />
          <label htmlFor="HYBRID">Hybrid</label>
        </div>
        <div className="flex gap-4 items-center">
          <RadioGroupItem value="ELECTRIC" id="ELECTRIC" />
          <label htmlFor="ELECTRIC">Electric</label>
        </div>
      </RadioGroup>
    </div>
  );
}

export default EngineTypeFilter;
