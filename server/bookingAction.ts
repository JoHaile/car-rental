export const bookingAction = (prevState: unknown, formData: FormData) => {
  const rawFormData = {
    fullName: formData.get("name") as string,
    email: formData.get("email") as string,
    startingDate: formData.get("date") as string,
    days: formData.get("day") as string,
  };

  const { fullName, email, startingDate, days } = rawFormData;
  try {
    // try to create the booking
    // and set the isAvailable to false

    // throw new Error();
    return {
      id: "makerTheTaker",
      success: "Your Booking is Successful.",
    };
  } catch (error) {
    return {
      error: "Something went wrong. Please try again.",
      fullName,
      email,
      startingDate,
      days,
    };
  }
};
