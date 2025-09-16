"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import React from "react";

function CopyButton({ bookingID }: { bookingID: string }) {
  return (
    <Button
      size="icon"
      variant="ghost"
      className="ml-1"
      onClick={() => navigator.clipboard.writeText(bookingID)}
      aria-label="Copy Booking ID"
    >
      <Copy className="size-4" />
    </Button>
  );
}

export default CopyButton;
