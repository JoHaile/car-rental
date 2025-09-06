import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import { H1 } from "../Typography";
import Link from "next/link";
import DatePicker from "../shared/DatePicker";

function Hero() {
  return (
    <div className="relative flex flex-col items-center rounded-xl overflow-hidden">
      <div className="w-full h-screen relative">
        <Image
          className="object-cover"
          src="/hero-2.jpg"
          fill
          alt="Hero Image"
        />
        {/* <div className="absolute size-full bg-muted opacity-20" /> */}
      </div>

      <div className="gap-4 absolute text-center top-16 px-5 md:w-3/4 md:space-y-5 text-muted dark:text-white">
        <H1 className="font-extrabold text-3xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight md:leading-tight">
          Find Your Perfect Rental Car.
        </H1>
        <p className="mt-4 leading-relaxed md:text-xl opacity-80">
          Skip the hassle and get on the road faster. Whether you're planning a
          quick trip or a long road trip, we offer a wide range of reliable and
          affordable cars designed to get you where you need to go.
        </p>
        <div className="space-x-8">
          <Link href="/vehicles">
            <Button>Book Now</Button>
          </Link>
          <Button
            variant={"outline"}
            className="font-semibold text-primary dark:text-white"
          >
            Learn More <SquareArrowOutUpRight />
          </Button>
        </div>
      </div>
      <div className="absolute bottom-30 w-5/6 md:w-3/4 py-10 md:py-15 bg-muted flex gap-4 justify-center">
        <DatePicker />
        <DatePicker />
      </div>
    </div>
  );
}

export default Hero;
