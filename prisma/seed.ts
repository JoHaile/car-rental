import prisma from "./index";
import carData from "../car-model.json";

export async function main() {
  for (const car of carData) {
    // 1. Create Features record
    const features = await prisma.features.create({
      data: {
        enginePower: car.features.enginePower,
        seatingCapacity: car.features.seatingCapacity,
        transmission: car.features.transmission,
        fuelType: car.features.fuelType,
        carType: car.features.carType,
      },
    });

    // 2. Create Car record, linking to Features
    await prisma.car.create({
      data: {
        manufacture: car.manufacture,
        model: car.model,
        year: car.year,
        licensePlate: car.licensePlate,
        pricePerDay: car.pricePerDay,
        isAvailable: car.isAvailable,
        description: car.description,
        mileage: car.mileage,
        imageUrls: car.imageUrls,
        featuresId: features.id,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
