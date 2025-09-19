"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

function Form() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    inputValue ? router.push("/bookings/" + inputValue) : null;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-10 max-w-xl m-auto my-20"
    >
      <div>
        <label htmlFor="booking-id">Booking ID</label>
        <Input
          className="mt-4"
          id="booking-id"
          placeholder="Enter your Booking ID"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <Button>Submit</Button>
    </form>
  );
}

export default Form;
