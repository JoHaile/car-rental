import React from "react";
import Form from "./Form";
import getServerSession from "@/lib/auth/get-server-session";
import UnauthorizedPage from "@/app/(auth)/unauthorized/page";
import { Role } from "@/app/generated/prisma";
import Forbidden from "@/app/(auth)/unauthorized/Forbidden";
import BookingTable from "@/app/dashboard/bookings/BookingTable";
import Header from "../_components/Header";

async function page() {
  const session = await getServerSession();

  if (!session) return <UnauthorizedPage />;
  if (session.user.role.includes(Role.Customer)) return <Forbidden />;

  return (
    <>
      <Header title="Reception" />
      <div className="min-h-screen md:max-w-4xl m-auto">
        <Form />
        <BookingTable />
      </div>
    </>
  );
}

export default page;
