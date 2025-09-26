import prisma from "@/prisma";
import {
  CheckCircle,
  LucideBadgeDollarSign,
  LucideBookmarkCheck,
} from "lucide-react";
import React from "react";

async function BookingInfo() {
  const bookings = await prisma.booking.findMany();

  return (
    <div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-2 my-[50px]">
        <div className="aspect-auto rounded-xl bg-muted p-4">
          <h3 className="font-semibold flex items-center justify-between gap-2">
            Total Bookings <LucideBookmarkCheck />
          </h3>
          <p className="text-xl font-extrabold mt-5">
            {bookings.length} bookings made.
          </p>
        </div>
        <div className="aspect-auto rounded-xl bg-muted p-4">
          <h3 className="font-semibold flex items-center justify-between gap-2">
            Active Booking <CheckCircle color="green" />
          </h3>
          <p className="text-xl font-extrabold mt-5">
            {bookings.filter((book) => book.status === "Completed").length}{" "}
            currently Active.
          </p>
        </div>
        <div className="aspect-auto rounded-xl bg-muted p-4">
          <h3 className="font-semibold flex items-center justify-between gap-2">
            Pending <LucideBookmarkCheck color="blue" />
          </h3>
          <p className="text-xl font-extrabold mt-5">
            {bookings.filter((book) => book.status === "Pending").length}{" "}
            currently Pending.
          </p>
        </div>
        <div className="aspect-auto rounded-xl bg-muted p-4">
          <h3 className="font-semibold flex items-center justify-between gap-2">
            Total Revenue <LucideBadgeDollarSign />
          </h3>
          <p className="text-xl font-extrabold mt-5">
            {bookings.reduce((acc, booking) => acc + booking.totalPrice, 0)}{" "}
            Birr earned.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookingInfo;
