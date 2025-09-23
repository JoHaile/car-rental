import { Role } from "@/app/generated/prisma";
import getServerSession from "@/lib/auth/get-server-session";
import { redirect } from "next/navigation";
import React from "react";
import Header from "./_components/Header";
import Dashboard from "./_components/Dashboard";
import Forbidden from "../(auth)/unauthorized/Forbidden";
import UnauthorizedPage from "../(auth)/unauthorized/page";

async function DashboardPage() {
  const session = await getServerSession();

  if (!session) return <UnauthorizedPage />;

  if (session.user?.role.includes(Role.Customer)) return <Forbidden />;

  return (
    <div>
      <Header title="Dashboard" />

      <Dashboard />
    </div>
  );
}

export default DashboardPage;
