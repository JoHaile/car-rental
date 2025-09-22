import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React, { ReactNode } from "react";
import { AppSidebar } from "./_components/app-sidebar";
import getServerSession from "@/lib/auth/get-server-session";
import prisma from "@/prisma";

interface Props {
  children: ReactNode;
}

export default async function layout({ children }: Props) {
  const session = await getServerSession();
  const user = await prisma.user.findFirst({
    where: {
      id: session?.user.id,
    },
    include: {
      bookings: true,
    },
  });
  return (
    <div>
      <SidebarProvider>
        <AppSidebar user={user} />
        <SidebarInset className="min-h-screen">{children}</SidebarInset>
      </SidebarProvider>
    </div>
  );
}
