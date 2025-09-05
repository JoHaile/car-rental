import { Role } from "@/app/generated/prisma";
import getServerSession from "@/lib/auth/get-server-session";
import { redirect, unauthorized } from "next/navigation";
import React from "react";

async function DashboardPage() {
  const session = await getServerSession();
  const user = session?.user;

  if (!session) return redirect("/signup");

  if (user?.role === Role.Customer) return redirect("/unauthorized");

  return <div className="h-screen"> Dashboard Page </div>;
}

export default DashboardPage;
