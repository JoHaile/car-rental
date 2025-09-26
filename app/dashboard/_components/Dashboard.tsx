import prisma from "@/prisma";
import {
  Car,
  LucideBadgeDollarSign,
  LucideBookmarkCheck,
  UserCheck2,
} from "lucide-react";
import React from "react";
import CarTypeStatus from "./CarTypeStatus";
import LatestBookings from "./LatestBookings";
import Charts from "./CarTypeCharts";
import { format } from "date-fns";
import RevenueBookingsTrendChart from "./BookingRevenueChart";

async function Dashboard() {
  const user = await prisma.user.findMany();
  const bookings = await prisma.booking.findMany();
  const cars = await prisma.car.findMany();
  // Fetch car type distribution from Prisma
  const carTypes = await prisma.features.groupBy({
    by: ["carType"],
    _count: { carType: true },
  });

  const carTypeDistribution = carTypes.map((type) => ({
    name: type.carType,
    value: type._count.carType,
  }));

  const bookingCharts = await prisma.booking.findMany({
    select: {
      createdAt: true,
      totalPrice: true,
    },
  });

  const dailyMap: Record<string, { revenue: number; bookings: number }> = {};

  bookingCharts.forEach(({ createdAt, totalPrice }) => {
    const day = format(createdAt, "yyyy-MM-dd"); // e.g., "2025-09-24"
    if (!dailyMap[day]) {
      dailyMap[day] = { revenue: 0, bookings: 0 };
    }
    dailyMap[day].revenue += totalPrice;
    dailyMap[day].bookings += 1;
  });

  const dailyTrendData = Object.entries(dailyMap).map(([day, stats]) => ({
    month: day, // keep prop name for chart compatibility
    revenue: stats.revenue,
    bookings: stats.bookings,
  }));

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-2">
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
            Total Users <UserCheck2 />
          </h3>
          <p className="text-xl font-extrabold mt-5">
            {user.length} users registered.
          </p>
        </div>
        <div className="aspect-auto rounded-xl bg-muted p-4">
          <h3 className="font-semibold flex items-center justify-between gap-2">
            Total Cars <Car />
          </h3>
          <p className="text-xl font-extrabold mt-5">
            {cars.length} cars available.
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

      <div className="min-h-[80vh] flex-1 rounded-xl bg-muted p-4">
        <h2 className="text-xl font-semibold mb-4">Fleet Status</h2>
        <p className="text-muted-foreground">
          An Overview of the company details.
        </p>

        <div className="mt-6 space-y-4 grid grid-cols-2 gap-3">
          <div className="col-span-2 md:col-span-1 rounded-lg bg-background/50 p-4">
            <h3 className="font-medium"> Fleet Status</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Current status of your car fleet
            </p>
            <CarTypeStatus />
          </div>
          <div className="col-span-2 md:col-span-1 rounded-lg bg-background/50 p-4">
            <h3 className="font-medium"> Recent Bookings</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Latest booking activity from Our customers.
            </p>
            <LatestBookings />
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-3">
        <Charts data={carTypeDistribution} />
        <RevenueBookingsTrendChart data={dailyTrendData} />
      </div>
    </div>
  );
}

export default Dashboard;
