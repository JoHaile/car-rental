import React from "react";
import { H1 } from "../Typography";
import { Button } from "../ui/button";
import Link from "next/link";

function CallToAction() {
  return (
    <div className="w-full bg-primary text-center py-10 text-white">
      <div className="max-w-3/4 m-auto space-y-5">
        <H1 className="mb-5">Looking for the best solution for your needs?</H1>
        <p>
          Start your journey now: our comfortable, high-quality cars will ensure
          that you enjoy every minute.
        </p>

        <Button variant={"secondary"}>
          <Link href={"/vehicles"} className="size-full">
            Get An Offer
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default CallToAction;
