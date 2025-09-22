import React from "react";
import Header from "../_components/Header";
import UserTable from "./UserTable";
import { H1 } from "@/components/Typography";
import { redirect } from "next/navigation";
import { Role } from "@/app/generated/prisma";
import getServerSession from "@/lib/auth/get-server-session";

async function page() {
  const session = await getServerSession();

  if (!session) return redirect("/signup");

  if (session.user?.role.includes(Role.Customer))
    return redirect("/unauthorized");

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
