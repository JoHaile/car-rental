import { H2 } from "@/components/Typography";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import prisma from "@/prisma";
import Link from "next/link";
import React from "react";

async function CarTable() {
  const cars = await prisma.car.findMany({
    take: 10,
    include: {
      features: true,
      bookings: true,
    },
  });

  return (
    <div>
      <Table className="pl-2 md:pl-0">
        <TableCaption>Some of the car</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Car</TableHead>
            <TableHead className="hidden md:inline">License plate</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Price/Day</TableHead>
            <TableHead className="hidden md:inline">Mileage</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {cars.map((car) => (
            <TableRow key={car.id}>
              <TableCell className="font-medium">
                <Link href={`/vehicles/${car.id}`}>
                  <span>{car.manufacture}</span> <span>{car.model}</span>
                  <p className="opacity-70">{car.year}</p>
                </Link>
              </TableCell>
              <TableCell className="font-medium hidden md:block">
                {car.licensePlate}
              </TableCell>
              <TableCell className="font-medium">
                {car.features.carType}
              </TableCell>
              <TableCell className="font-medium">{car.pricePerDay}</TableCell>
              <TableCell className="font-medium hidden md:block">
                {car.mileage} mile
              </TableCell>
              <TableCell className="font-medium">
                {car.isAvailable ? (
                  <Badge>Available</Badge>
                ) : (
                  <Badge variant={"destructive"}>Booked</Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default CarTable;
