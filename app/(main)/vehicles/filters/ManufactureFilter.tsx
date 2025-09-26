"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface ManufactureFilterProps {
  allManufactures: { manufacture: string }[];
}

function ManufactureFilter({ allManufactures }: ManufactureFilterProps) {
  const [showAll, setShowAll] = React.useState(false);
  const visible = showAll ? allManufactures : allManufactures.slice(0, 4);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the currently selected manufacturers from the URL
  const selectedManufacturers = searchParams.getAll("manufacturers");

  function handleFilterChange(e: CheckedState, manufacture: string) {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (e === true) {
      // Add the manufacturer to the URL.
      // URLSearchParams.append() handles multiple values for the same key.
      newSearchParams.append("manufacturers", manufacture);
    } else if (e === false) {
      // To remove a specific value from a multi-value param, you must
      // delete all entries for that key and then re-append the ones you want to keep.
      const currentValues = newSearchParams.getAll("manufacturers");
      newSearchParams.delete("manufacturers");
      currentValues
        .filter((value) => value !== manufacture)
        .forEach((value) => {
          newSearchParams.append("manufacturers", value);
        });
    }

    // Push the new URL to update the page. The path is hardcoded as '/vehicles'.
    router.push(`/vehicles?${newSearchParams.toString()}`);
  }

  return (
    <div className="space-y-2">
      <div
        className={`overflow-hidden transition-all duration-300 space-y-2 ${
          showAll ? "max-h-[700px]" : "max-h-40"
        }`}
      >
        {visible.map((man) => (
          <div className="flex gap-4 items-center " key={man.manufacture}>
            <Checkbox
              id={man.manufacture}
              // Set the checked state based on the URL
              checked={selectedManufacturers.includes(man.manufacture)}
              onCheckedChange={(e) => handleFilterChange(e, man.manufacture)}
            />
            <label htmlFor={man.manufacture} className="text-sm">
              {man.manufacture}
            </label>
          </div>
        ))}
      </div>
      {allManufactures.length > 4 && (
        <Button
          variant={"ghost"}
          className="text-xs text-primary"
          onClick={() => setShowAll((v) => !v)}
        >
          {showAll ? "Show less" : `Show ${allManufactures.length - 4} more`}
        </Button>
      )}
    </div>
  );
}

export default ManufactureFilter;
