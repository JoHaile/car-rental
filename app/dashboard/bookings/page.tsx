import React from "react";
import Header from "../_components/Header";
import BookingTable from "./BookingTable";
import { H1 } from "@/components/Typography";
import { Role } from "@/app/generated/prisma";
import getServerSession from "@/lib/auth/get-server-session";
import Forbidden from "@/app/(auth)/unauthorized/Forbidden";
import UnauthorizedPage from "@/app/(auth)/unauthorized/page";
import { formatDate } from "date-fns";
import prisma from "@/prisma";
import BookingInfo from "./BookingInfo";
import RevenueBookingsTrendChart from "../_components/BookingRevenueChart";

async function page() {
  const session = await getServerSession();

  if (!session) return <UnauthorizedPage />;

  if (session.user?.role.includes(Role.Customer)) return <Forbidden />;

  const bookingCharts = await prisma.booking.findMany({
    select: {
      createdAt: true,
      totalPrice: true,
    },
  });

  const dailyMap: Record<string, { revenue: number; bookings: number }> = {};

  bookingCharts.forEach(({ createdAt, totalPrice }) => {
    const day = formatDate(createdAt, "yyyy-MM-dd"); // e.g., "2025-09-24"
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
    <div>
      <Header title="Bookings" />
      <H1>Bookings Management</H1>
      <p className="opacity-70 mb-10">Track and manage all rental bookings</p>

      <BookingInfo />

      <BookingTable />

      <div className="my-[100px] text-center">
        <H1 className="mb-5">Monthly Revenue & Bookings</H1>

        <RevenueBookingsTrendChart data={dailyTrendData} />
      </div>
    </div>
  );
}

export default page;
