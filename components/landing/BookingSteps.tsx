import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { H1 } from "../Typography";

function BookingSteps() {
  return (
    <div className="text-center flex flex-col items-center w-full">
      <div className="mt-[80px]">
        <H1>Simple and Easy Steps</H1>
        <p className="mt-5 mb-[100px] max-w-md">
          Check out our wide range of cars and choose the one that best suits
          your needs and desires.
        </p>
      </div>

      <div className="grid grid-cols-2 max-w-5xl gap-2 md:gap-10 px-2 md:px-5 mb-[200px]">
        <div className="hidden sm:block sm:col-span-1 relative h-[300px]">
          <Image
            src={"/landing/car-selections.jpg"}
            alt="Car selection Image"
            fill
            className="object-cover "
          />
        </div>

        <div className="col-span-2 sm:col-span-1">
          <span className="font-bold text-lg md:text-2xl">Pick A Car</span>
          <p className="mt-4">
            Select from our extensive variety of the newest car models.
          </p>
          <ul className="mt-10 pl-5 space-y-4 text-left">
            <li className="flex gap-4">
              <CheckCircle className="text-emerald-500" />
              Apply filters to match your requirements.
            </li>
            <li className="flex gap-4">
              <CheckCircle className="text-emerald-500" />
              Choose a car that suits your lifestyle and needs
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 max-w-4xl gap-2 md:gap-10 px-2 md:px-5 ">
        <div className="col-span-2 sm:col-span-1">
          <span className="font-bold text-lg md:text-2xl ">
            Fill out the application
          </span>
          <p className="mt-4">
            Choose the size of the deduction, the planned monthly mileage and
            the rental period.
          </p>
          <ul className="mt-10 pl-5 space-y-4 text-left">
            <li className="flex gap-4">
              <CheckCircle className="text-emerald-500" />
              Select the desired options.
            </li>
            <li className="flex gap-4">
              <CheckCircle className="text-emerald-500" />
              Complete the application by filling out the form
            </li>
            <li className="flex gap-4">
              <CheckCircle className="text-emerald-500" />
              Get Your Booking ID.
            </li>
          </ul>
        </div>

        <div className="hidden sm:block sm:col-span-1 relative h-[500px]">
          <Image
            src={"/landing/booking-details.jpg"}
            alt="Car selection Image"
            fill
            className="object-cover "
          />
        </div>
      </div>

      <div className="mt-[200px] w-full flex flex-col items-center">
        <span className="font-bold text-lg md:text-4xl">Pick Up Your Car</span>
        <p className="mt-5">
          Go to Nearest Branch and Pick Your Car With your Booking ID.
        </p>

        <div className="relative w-3/4 md:w-1/2 h-[500px] md:h-[700px] m-auto ">
          <Image
            src={"/landing/pick-up-car-1.png"}
            alt="car image "
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default BookingSteps;
