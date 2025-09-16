"use server";

import prisma from "@/prisma";

export const bookingAction = async (prevState: unknown, formData: FormData) => {
  const rawFormData = {
    fullName: formData.get("name") as string,
    email: formData.get("email") as string,
    startingDate: formData.get("date") as string,
    days: formData.get("day") as string,
    carId: formData.get("carId") as string,
    userId: formData.get("userId") as string,
  };

  const { fullName, email, startingDate, days, carId, userId } = rawFormData;

  const car = await prisma.car.findFirst({
    where: {
      id: carId,
    },
  });

  const totalPrice = (car?.pricePerDay || 0) * parseInt(days);

  try {
    const booking = await prisma.booking.create({
      data: {
        fullName,
        email,
        startingDate,
        days: parseInt(days),
        totalPrice,
        carId,
        userId,
      },
    });

    return {
      id: booking.id,
      success: "Your Booking is Successful.",
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong. Please try again.",
      fullName,
      email,
      startingDate,
      days,
    };
  }
};
