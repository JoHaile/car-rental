import { Role } from "@/app/generated/prisma";
import getServerSession from "@/lib/auth/get-server-session";
import { redirect } from "next/navigation";
import React from "react";
import AdminDashboard from "./AdminDashboard";

async function DashboardPage() {
  const session = await getServerSession();
  const user = session?.user;

  if (!session) return redirect("/signup");

  if (user?.role.includes(Role.Customer)) return redirect("/unauthorized");

  return (
    <div className="h-screen">
      <AdminDashboard />
    </div>
  );
}

export default DashboardPage;
