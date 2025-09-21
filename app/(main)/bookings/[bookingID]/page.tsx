import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Car, User2, Mail, KeyRound, ArrowLeft } from "lucide-react";
import Link from "next/link";
import prisma from "@/prisma";
import StatusChange from "../../reception/[bookingID]/StatusChange";
import { Role } from "@/app/generated/prisma";

interface Params {
  params: Promise<{ bookingID: string }>;
}

async function Page({ params }: Params) {
  const { bookingID } = await params;
  const booking = await prisma.booking.findFirst({
    where: { id: bookingID },
    include: { car: true, user: true },
  });
  const car = await prisma.car.findFirst({
    where: {
      id: booking?.carId,
    },
    include: {
      features: true,
    },
  });

  const adminRole = booking?.user?.role.includes(Role.Admin);

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <CardTitle>Booking Not Found</CardTitle>
          <CardDescription>
            We couldn&apos;t find a booking with ID{" "}
            <span className="font-mono">{bookingID}</span>.
          </CardDescription>
          <Link href="/bookings">
            <Button className="mt-4">Back to Bookings</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted px-4 py-12">
      <Card className="w-full max-w-3xl shadow-2xl border-0 bg-white/90 dark:bg-zinc-900/90 animate-in fade-in zoom-in-50">
        <CardHeader className="flex flex-col items-center gap-2">
          <CardTitle className="text-3xl font-extrabold text-center mb-2 text-green-600 dark:text-green-400">
            Booking Confirmation
          </CardTitle>
          <CardDescription className="text-center text-base">
            Your booking is confirmed! Here are all the details.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-8">
          {/* Booking Info */}
          <div className="section border-b-2 border-muted pb-6 mb-6">
            <div className="info-card flex flex-col gap-5 bg-muted rounded-lg p-4 mb-4">
              <h3 className="font-bold text-lg mb-2 text-primary">
                Booking Information
              </h3>
              <p className="flex justify-between px-4">
                <span className="font-semibold pr-4">Booking ID:</span>{" "}
                <span className="font-mono select-all">{booking.id}</span>
              </p>
              <div className="flex justify-between px-4">
                <span className="font-semibold pr-4">Status:</span>{" "}
                <div className="flex gap-4">
                  <Badge
                    variant={
                      booking.status === "Canceled" ? "destructive" : "default"
                    }
                  >
                    {booking.status}
                  </Badge>
                </div>
              </div>
              <p className="flex justify-between px-4">
                <span className="font-semibold pr-4">Start Date:</span>{" "}
                {new Date(booking.startingDate).toLocaleDateString()}
              </p>
              <p className="flex justify-between px-4">
                <span className="font-semibold pr-4">Duration:</span>{" "}
                {booking.days} days
              </p>
              <p className="flex justify-between px-4">
                <span className="flex justify-between w-full font-semibold pr-4">
                  Total Price:
                </span>{" "}
                <span className="text-green-700 dark:text-green-300 text-nowrap font-bold">
                  {booking.days * booking.car?.pricePerDay} Birr
                </span>
              </p>
            </div>
          </div>

          {/* Car Details */}
          <div className="section border-b-2 border-muted pb-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Car Details</h2>
            <div className="car-details flex flex-col md:flex-row gap-6 items-center">
              <img
                src={car?.imageUrls?.[2] || "/car-placeholder.png"}
                alt="Car Image"
                className="car-image w-full md:w-1/2 max-h-64 object-cover rounded-lg shadow"
              />
              <div className="car-info w-full md:w-1/2">
                <p>
                  <span className="font-semibold text-lg">Vehicle : </span>
                  <span className="capitalize">
                    {booking.car?.manufacture} {booking.car?.model}{" "}
                    {booking.car?.year}
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-lg">License Plate:</span>{" "}
                  {booking.car?.licensePlate}
                </p>
                <div className="info-card bg-background flex flex-col gap-4 border border-muted rounded-md p-3 mt-4">
                  <h3 className="font-bold text-base mb-1">Features</h3>
                  <p>
                    <span className="font-semibold">Type:</span>{" "}
                    {car?.features.carType || "-"}
                  </p>
                  <p>
                    <span className="font-semibold">Transmission:</span>{" "}
                    {car?.features.transmission || "-"}
                  </p>
                  <p>
                    <span className="font-semibold">Seating Capacity:</span>{" "}
                    {car?.features.seatingCapacity || "-"} seats
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Renter Details */}
          <div className="section">
            <h2 className="text-xl font-bold mb-4">Renter Details</h2>
            <div className="info-card bg-muted rounded-lg p-4">
              <p>
                <span className="font-semibold">Full Name: </span>
                {booking.fullName}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {booking.email}
              </p>
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <Link href="/vehicles">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="size-4" /> Back to Bookings
              </Button>
            </Link>
            <Link href="/">
              <Button>Go Home</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Page;
