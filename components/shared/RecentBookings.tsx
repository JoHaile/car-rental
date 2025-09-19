import { User } from "@/lib/auth/auth";
import getServerSession from "@/lib/auth/get-server-session";
import prisma from "@/prisma";
import { Session } from "better-auth";
import React from "react";
import { Badge } from "../ui/badge";

async function RecentBookings() {
  const session = await getServerSession();

  if (!session) {
    return <div>Sign Up/In to see Recent Bookings.</div>;
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session?.user.id,
    },
    include: {
      bookings: true,
    },
  });

  return (
    <div className="flex flex-col gap-4 max-w-xl m-auto my-20 bg-accent rounded-lg p-5">
      <Badge className="mb-4 font-semibold">
        Total Booking: {user?.bookings.length}
      </Badge>
      {user?.bookings.map((book) => (
        <div key={book.id}>
          <p className="flex justify-between">
            <span>Date: </span>
            <span>{book.startingDate}</span>
          </p>
          <p className="flex justify-between">
            <span>Status: </span>
            <Badge
              variant={book.status === "Canceled" ? "destructive" : "default"}
            >
              {book.status}
            </Badge>
          </p>
        </div>
      ))}
    </div>
  );
}

export default RecentBookings;
