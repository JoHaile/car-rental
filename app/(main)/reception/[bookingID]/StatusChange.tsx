"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { betterFetch } from "@better-fetch/fetch";
import { useRouter } from "next/navigation";
import React from "react";

function StatusChange({ bookingID }: { bookingID: string }) {
  const router = useRouter();

  const changeStatus = async (status: string) => {
    const { data, error } = await betterFetch(`/api/booking/${bookingID}`, {
      body: {
        status,
      },
      method: "PATCH",
    });

    if (!error) {
      router.refresh();
    }
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"}>Change The Status</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => changeStatus("Pending")}>
            Pending
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeStatus("Completed")}>
            Completed
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeStatus("Canceled")}>
            Canceled
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default StatusChange;
