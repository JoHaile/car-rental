import React from "react";
import Header from "../_components/Header";
import BookingTable from "./BookingTable";
import { H1 } from "@/components/Typography";
import { Role } from "@/app/generated/prisma";
import getServerSession from "@/lib/auth/get-server-session";
import Forbidden from "@/app/(auth)/unauthorized/Forbidden";
import UnauthorizedPage from "@/app/(auth)/unauthorized/page";

async function page() {
  const session = await getServerSession();

  if (!session) return <UnauthorizedPage />;

  if (session.user?.role.includes(Role.Customer)) return <Forbidden />;

  return (
    <div>
      <Header title="Bookings" />
      <H1>Bookings Management</H1>
      <p className="opacity-70 mb-10">Track and manage all rental bookings</p>
      <BookingTable />
    </div>
  );
}

export default page;
