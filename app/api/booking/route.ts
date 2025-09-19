import getServerSession from "@/lib/auth/get-server-session";
import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: "UnAuthorized ", status: 401 });
  }
  //todo: check if the user have a valid session

  const booking = await prisma.booking.findMany();

  return NextResponse.json(booking);
}
