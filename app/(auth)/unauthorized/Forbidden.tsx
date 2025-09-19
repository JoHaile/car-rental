import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Forbidden() {
  return (
    <div className="text-red-400 h-screen grid place-content-center gap-4">
      You don't have Enough Permission to Access This Page.
      <Button variant={"destructive"}>
        <Link href="/" className="size-full">
          Back To Home
        </Link>
      </Button>
    </div>
  );
}

export default Forbidden;
