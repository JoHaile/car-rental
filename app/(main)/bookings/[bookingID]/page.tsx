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

interface Params {
  params: Promise<{ bookingID: string }>;
}

async function Page({ params }: Params) {
  const { bookingID } = await params;
  const booking = await prisma.booking.findFirst({
    where: { id: bookingID },
    include: { car: true, user: true },
  });

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <CardTitle>Booking Not Found</CardTitle>
          <CardDescription>
            We couldn't find a booking with ID{" "}
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
      <Card className="w-full max-w-2xl shadow-2xl border-0 bg-white/90 dark:bg-zinc-900/90 animate-in fade-in zoom-in-50">
        <CardHeader className="flex flex-col items-center gap-2">
          <CardTitle className="text-2xl md:text-3xl font-extrabold text-center mb-2">
            Booking Details
          </CardTitle>
          <CardDescription className="text-center text-base">
            Here are the details for your booking.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-8">
          {/* Booking Info */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-between">
            <div className="flex flex-col gap-2 items-center md:items-start">
              <Badge
                variant="outline"
                className="mb-1 text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700"
              >
                Booking ID
              </Badge>
              <span className="font-mono font-semibold text-lg tracking-wider select-all">
                {booking.id}
              </span>
              <div className="flex items-center gap-2 mt-2">
                <Calendar className="size-4 text-muted-foreground" />
                <span className="text-sm">
                  {new Date(booking.startingDate).toLocaleDateString()}
                </span>
                <Badge className="ml-2" variant="secondary">
                  {booking.days} days
                </Badge>
              </div>
              <Badge
                className={`mt-2 ${
                  booking.status === "CONFIRMED"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                    : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                }`}
              >
                {booking.status}
              </Badge>
            </div>

            {/* Car Info */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <Badge
                variant="outline"
                className="mb-1 text-xs px-3 py-1 bg-zinc-100 dark:bg-zinc-800/30 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700"
              >
                Car Booked
              </Badge>
              <div className="flex items-center gap-2">
                <Car className="size-5 text-primary" />
                <span className="font-semibold text-lg capitalize">
                  {booking.car?.manufacture} {booking.car?.model}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">
                License: {booking.car?.licensePlate}
              </span>
              <span className="text-sm text-muted-foreground">
                Price/Day: {booking.car?.pricePerDay} Birr
              </span>
            </div>
          </div>

          {/* User Info */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-between border-t pt-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <Badge
                variant="outline"
                className="mb-1 text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700"
              >
                Booked By
              </Badge>
              <div className="flex items-center gap-2">
                <Avatar className="size-8">
                  <AvatarImage src={booking.user?.image || undefined} />
                  <AvatarFallback>
                    <User2 className="size-5" />
                  </AvatarFallback>
                </Avatar>
                <span className="font-semibold text-base">
                  {booking.user?.name}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="size-4" />
                <span>{booking.user?.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <KeyRound className="size-4" />
                <span>User ID: {booking.user?.id}</span>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <span className="text-2xl font-bold text-primary">
                {booking.days * booking.car?.pricePerDay} Birr
              </span>
              <span className="text-xs text-muted-foreground">Total Price</span>
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
