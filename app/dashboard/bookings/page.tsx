import React from "react";
import Header from "../_components/Header";
import BookingTable from "./BookingTable";
import { H1 } from "@/components/Typography";
import { Role } from "@/app/generated/prisma";
import getServerSession from "@/lib/auth/get-server-session";
import { redirect } from "next/navigation";

async function page() {
  const session = await getServerSession();

  if (!session) return redirect("/signup");

  if (session.user?.role.includes(Role.Customer))
    return redirect("/unauthorized");
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
