import { Role } from "@/app/generated/prisma";
import getServerSession from "@/lib/auth/get-server-session";
import { redirect } from "next/navigation";
import React from "react";
import Header from "./_components/Header";
import Dashboard from "./_components/Dashboard";

async function DashboardPage() {
  const session = await getServerSession();

  if (!session) return redirect("/signup");

  if (session.user?.role.includes(Role.Customer))
    return redirect("/unauthorized");

  return (
    <div>
      <Header title="Dashboard" />

      <Dashboard />
    </div>
  );
}

export default DashboardPage;
