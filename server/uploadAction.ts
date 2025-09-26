"use server";

import prisma from "@/prisma";
import { revalidatePath } from "next/cache";

// Define the shape of the state returned by the action
type FormState = {
  success: boolean;
  message: string;
};

/**
 * Server Action to create a new Car record and its associated Features record.
 * @param prevState The previous state from useActionState
 * @param formData The FormData object from the form submission
 * @returns A new FormState object
 */
export async function createCar(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // 1. Extract and validate Car data
  const manufacture = formData.get("manufacture") as string;
  const model = formData.get("model") as string;
  const yearStr = formData.get("year") as string;
  const licensePlate = formData.get("licensePlate") as string;
  const pricePerDayStr = formData.get("pricePerDay") as string;
  const mileageStr = formData.get("mileage") as string;

  const description = formData.get("description") as string | null;
  const imageUrlsStr = formData.get("imageUrls") as string | null;

  // 2. Extract and validate Features data
  const enginePowerStr = formData.get("enginePower") as string | null;
  const seatingCapacityStr = formData.get("seatingCapacity") as string;
  const transmission = formData.get("transmission") as string;
  const fuelType = formData.get("fuelType") as string;
  const carType = formData.get("carType") as string;

  // --- Basic presence validation ---
  const requiredCarFields = [
    manufacture,
    model,
    yearStr,
    licensePlate,
    pricePerDayStr,
    mileageStr,
  ];
  const requiredFeatureFields = [
    seatingCapacityStr,
    transmission,
    fuelType,
    carType,
  ];

  if (
    !requiredCarFields.every(Boolean) ||
    !requiredFeatureFields.every(Boolean)
  ) {
    return {
      success: false,
      message: "All core Car and Features fields are required.",
    };
  }

  // --- Type conversion and validation ---
  const year = parseInt(yearStr);
  const pricePerDay = parseFloat(pricePerDayStr);
  const mileage = parseInt(mileageStr);
  const seatingCapacity = parseInt(seatingCapacityStr);
  const enginePower = enginePowerStr ? parseInt(enginePowerStr) : undefined; // Optional field

  if (
    isNaN(year) ||
    isNaN(pricePerDay) ||
    isNaN(mileage) ||
    isNaN(seatingCapacity)
  ) {
    return {
      success: false,
      message:
        "Invalid number format for Year, Price, Mileage, or Seating Capacity.",
    };
  }

  if (enginePowerStr && isNaN(enginePower as number)) {
    return {
      success: false,
      message: "Invalid number format for Engine Power.",
    };
  }

  // Process imageUrls: convert comma-separated string to string array
  const imageUrls = imageUrlsStr
    ? imageUrlsStr
        .split(",")
        .map((url) => url.trim())
        .filter((url) => url.length > 0)
    : [];

  try {
    // 3. CREATE THE FEATURES RECORD FIRST
    const newFeatures = await prisma.features.create({
      data: {
        enginePower,
        seatingCapacity,
        transmission,
        fuelType,
        carType,
      },
    });

    // 4. CREATE THE CAR RECORD, LINKING IT TO THE NEW FEATURES ID
    const newCar = await prisma.car.create({
      data: {
        manufacture,
        model,
        year,
        licensePlate,
        pricePerDay,
        mileage,
        description,
        imageUrls,
        // Establish the unique relationship using the ID from the newly created Features
        features: {
          connect: { id: newFeatures.id },
        },
      },
    });

    console.log(
      `New Car created: ${newCar.licensePlate} with Features ID: ${newFeatures.id}`
    );

    return {
      success: true,
      message: `Car "${newCar.manufacture} ${newCar.model}" successfully added! (Features ID: ${newFeatures.id})`,
    };
  } catch (error) {
    console.error("Car creation error:", error);

    // Handle Prisma unique constraint error for licensePlate
    if (
      (error as any).code === "P2002" &&
      (error as any).meta?.target.includes("licensePlate")
    ) {
      return {
        success: false,
        message: `License plate "${licensePlate}" is already registered.`,
      };
    }

    return {
      success: false,
      message:
        "An unexpected database error occurred during car or feature creation.",
    };
  }
}
