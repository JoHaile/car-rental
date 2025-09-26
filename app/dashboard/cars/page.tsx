import React from "react";
import Header from "../_components/Header";
import CarTable from "./CarTable";
import { H1 } from "@/components/Typography";
import { Role } from "@/app/generated/prisma";
import getServerSession from "@/lib/auth/get-server-session";
import { redirect } from "next/navigation";
import Forbidden from "@/app/(auth)/unauthorized/Forbidden";
import UnauthorizedPage from "@/app/(auth)/unauthorized/page";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import CarInfo from "./CarInfo";
import Charts from "../_components/CarTypeCharts";
import prisma from "@/prisma";
import CarTypeStatus from "../_components/CarTypeStatus";

async function page() {
  const session = await getServerSession();

  if (!session) return <UnauthorizedPage />;

  if (session.user?.role.includes(Role.Customer)) return <Forbidden />;

  // Fetch car type distribution from Prisma
  const carTypes = await prisma.features.groupBy({
    by: ["carType"],
    _count: { carType: true },
  });

  const carTypeDistribution = carTypes.map((type) => ({
    name: type.carType,
    value: type._count.carType,
  }));

  return (
    <div>
      <Header title="Cars" />
      <div className="flex items-center justify-between px-5 mb-4">
        <div>
          <H1>Cars Management</H1>
          <p className="opacity-70 mb-10 mt-4">
            Manage your fleet of rental cars
          </p>
        </div>
        <Button>
          <Link
            href={"/dashboard/upload"}
            className="size-full flex items-center gap-2"
          >
            <Plus /> Add New Car
          </Link>
        </Button>
      </div>

      <CarInfo />

      <CarTable />

      <div className="my-[100px] text-center">
        <H1 className="mb-5">A Car Type Distribution Chart</H1>

        <Charts data={carTypeDistribution} />
      </div>

      <div className="m-auto max-w-3xl mb-[100px]">
        <H1 className="mb-5 text-center">Fleet Status</H1>
        <h3 className="font-medium"> Fleet Status</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Current status of your car fleet
        </p>
        <CarTypeStatus />
      </div>
    </div>
  );
}

export default page;
