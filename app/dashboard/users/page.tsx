import React from "react";
import Header from "../_components/Header";
import UserTable from "./UserTable";
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
      <Header title="Users" />
      <H1>All Users</H1>
      <p className="mb-10">Complete list of all registered users</p>
      <UserTable />
    </div>
  );
}

export default page;
