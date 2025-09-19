import React from "react";
import Form from "./Form";
import getServerSession from "@/lib/auth/get-server-session";
import UnauthorizedPage from "@/app/(auth)/unauthorized/page";
import { Role } from "@/app/generated/prisma";
import Forbidden from "@/app/(auth)/unauthorized/Forbidden";

async function page() {
  const session = await getServerSession();

  if (!session) return <UnauthorizedPage />;
  if (session.user.role.includes(Role.Customer)) return <Forbidden />;

  return (
    <div className="min-h-screen">
      <Form />
    </div>
  );
}

export default page;
