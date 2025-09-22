import getServerSession from "@/lib/auth/get-server-session";
import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: Promise<{ bookingID: string }>;
}

export async function PATCH(request: NextRequest, { params }: Params) {
  const { bookingID } = await params;

  const session = await getServerSession();
  //todo: check if the user have a valid session

  const body = await request.json();

  const isAvailable = body.status === "Returned" ? true : false;

  const booking = await prisma.booking.update({
    where: {
      id: bookingID,
    },
    data: {
      status: body.status,
      car: {
        update: {
          isAvailable: isAvailable,
        },
      },
    },
  });

  return NextResponse.json(booking);
}
