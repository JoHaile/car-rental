import React from "react";
import testimonials from "./testimonial.json";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { User2Icon, UserCircle2, Verified } from "lucide-react";
import { H1 } from "../Typography";

function Testimonial() {
  return (
    <div className="text-center my-[100px]">
      <H1>What Our Customers Say</H1>
      <div className="flex gap-5 px-5 my-10 justify-center flex-wrap">
        {testimonials.map((test, index) => (
          <Card key={index} className="max-w-xs shadow-md text-left">
            <CardContent>
              <CardDescription key={index}>{test.comment}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <CardAction className="flex items-center gap-4 p-0 mb-3">
                <UserCircle2 />
                {test.reviewer}
                <Verified size={16} fill="blue" />
              </CardAction>

              <p>Rating: {test.rating}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
