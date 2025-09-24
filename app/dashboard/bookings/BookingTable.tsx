import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/prisma";
import Link from "next/link";
import React from "react";

async function BookingTable() {
  const booking = await prisma.booking.findMany({
    include: {
      car: true,
      user: true,
    },
    take: 10,

    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <Table>
        <TableCaption>Latest Bookings</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Booking ID </TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Car</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Total Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {booking.map((book) => (
            <TableRow key={book.id}>
              <TableCell className="font-medium ">
                <Link href={`/reception/${book.id}`}>{book.id}</Link>
              </TableCell>
              <TableCell>
                <p>{book.user?.name}</p>
                <p className="opacity-70">{book.user?.email}</p>
              </TableCell>
              <TableCell className="font-medium">
                <span>{book.car.manufacture}</span>{" "}
                <span>{book.car.model}</span>
                <p className="opacity-70">{book.car.year}</p>
              </TableCell>
              <TableCell>
                <Badge>{book.status}</Badge>
              </TableCell>
              <TableCell>{book.totalPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default BookingTable;
