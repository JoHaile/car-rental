"use server";

import prisma from "@/prisma";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export const carActions = async (searchParams: any) => {
  let selectedManufacturers = searchParams.manufacturers;

  if (typeof selectedManufacturers === "string") {
    selectedManufacturers = [selectedManufacturers];
  } else if (!selectedManufacturers) {
    selectedManufacturers = [];
  }

  let selectedCarTypes = searchParams.carType;

  if (typeof selectedCarTypes === "string") {
    selectedCarTypes = [selectedCarTypes];
  } else if (!selectedCarTypes) {
    selectedCarTypes = [];
  }

  const selectedEngineType = searchParams.engineType;

  // Dynamically build the where clause based on active filters
  const whereClause: any = {};

  if (selectedManufacturers.length > 0) {
    whereClause.manufacture = {
      in: selectedManufacturers,
    };
  }

  // This block handles filters on the features table
  //! remember in database "engineType" is called "fuelType"
  if (selectedEngineType || selectedCarTypes.length > 0) {
    whereClause.features = {};

    if (selectedEngineType) {
      whereClause.features.fuelType = selectedEngineType;
    }

    if (selectedCarTypes.length > 0) {
      whereClause.features.carType = {
        in: selectedCarTypes,
      };
    }
  }

  // Use the single, dynamically built whereClause in the query
  const cars = await prisma.car.findMany({
    where: whereClause,
    include: {
      features: true,
    },
  });

  const allManufactures = await prisma.car.findMany({
    select: {
      manufacture: true,
    },
    distinct: ["manufacture"],
  });

  const allCarTypes = await prisma.features.findMany({
    select: {
      carType: true,
    },
    distinct: ["carType"],
  });

  return { cars, allCarTypes, allManufactures };
};
