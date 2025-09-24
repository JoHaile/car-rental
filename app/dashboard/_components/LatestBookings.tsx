import { Badge } from "@/components/ui/badge";
import prisma from "@/prisma";
import React from "react";

async function LatestBookings() {
  const bookings = await prisma.booking.findMany({
    include: {
      user: true,
      car: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });
  return (
    <div className="flex flex-col gap-3 mt-5 justify-between">
      {bookings.map((book) => (
        <div key={book.id} className="flex justify-between items-center">
          <div>
            <span>{book.user?.name}</span>
            <p className="opacity-70">
              {book.car.manufacture} {book.car.model}
            </p>
          </div>

          <div>
            <Badge className="mr-2">{book.status}</Badge>
            <span>{book.totalPrice} Birr</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LatestBookings;
