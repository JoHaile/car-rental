"use client";

import React, { useActionState, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { H1 } from "../Typography";
import { bookingAction } from "@/server/bookingAction";
import { toast } from "sonner";
import { router } from "better-auth/api";
import { useRouter } from "next/navigation";
import { date } from "zod";

function Booking({ pricePerDay }: { pricePerDay: number }) {
  const [day, setDay] = useState("");
  const [state, formAction, isLoading] = useActionState(
    bookingAction,
    undefined
  );
  const router = useRouter();

  useEffect(() => {
    state?.success && toast.success(state.success);
    state?.success && router.push("/confirmation");

    state?.error && toast.error(state.error);
    state?.error && setDay("");
  }, [state]);

  return (
    <div
      id="booking"
      className="min-h-screen max-w-11/12 md:max-w-5/6 m-auto bg-muted mt-[300px] text-center py-[80px]"
    >
      <H1>Brand Booking Center</H1>
      <p className="mt-6">
        Fill out the form Below and Get You Confirmation Id in minutes.
      </p>
      {state?.id && "here is your Booking ID" + state.id}
      <form
        action={formAction}
        className="max-w-3xl m-auto flex flex-col items-center"
      >
        <div className="flex flex-col gap-3 mt-[70px] w-full md:w-1/2 px-5 md:px-0 text-start">
          <label htmlFor="fullname">Full Name</label>
          <Input
            placeholder="Full Name"
            type="text"
            id="fullname"
            name="name"
            defaultValue={state?.fullName}
            required
          />
          <label htmlFor="email" className="mt-5">
            Email
          </label>
          <Input
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            defaultValue={state?.email}
            required
          />
          <label htmlFor="date" className="mt-5">
            Starting From
          </label>
          <Input
            type="date"
            id="date"
            defaultValue={state?.startingDate}
            name="date"
            className="flex justify-between"
            required
          />
          <p className="mt-5">How Many Days Are You Rent For</p>
          <div className="flex justify-between">
            <Button
              variant={"outline"}
              type="button"
              onClick={() => setDay("5")}
            >
              5 days
            </Button>
            <Button
              variant={"outline"}
              type="button"
              onClick={() => setDay("10")}
            >
              10 days
            </Button>
            <Button
              variant={"outline"}
              type="button"
              onClick={() => setDay("15")}
            >
              15 days
            </Button>
            <Button
              variant={"outline"}
              type="button"
              onClick={() => setDay("20")}
            >
              20 days
            </Button>
          </div>
          <Input
            type="number"
            max={"30"}
            min={"1"}
            defaultValue={day}
            onChange={(e) => setDay(e.target.value)}
            name="day"
            required
          />
        </div>

        <div className="mt-8">
          Total Price : {day ? parseInt(day) * pricePerDay + "Birr" : "0 Birr"}
        </div>

        <Button className="mt-10" type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Request The Car"}
        </Button>
      </form>
    </div>
  );
}

export default Booking;
