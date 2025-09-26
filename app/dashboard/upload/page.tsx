"use client";

import { useActionState, useEffect, useRef } from "react";
import { createCar } from "@/server/uploadAction";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
// 💡 New: Import the Label component
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Initial state for useActionState
const initialState = {
  success: false,
  message: "",
};

export default function AdminAddCarForm() {
  const [state, formAction] = useActionState(createCar, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }

    state.success && toast.success(state.message);
    state.message && !state.success && toast.error(state.message);
  }, [state.success, state.message]);

  return (
    <div className="max-w-5xl w-full mx-auto py-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2 text-center">
          New Car & Features Registration
        </h2>
        <p className="text-muted-foreground text-center">
          Fill in the details below to add a new car to your fleet.
        </p>
      </div>
      <form ref={formRef} action={formAction} className="space-y-8">
        {/* === CAR DETAILS SECTION === */}
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold">Car Details</h3>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Manufacture */}
            <div className="space-y-1">
              <Label htmlFor="manufacture">Manufacturer *</Label>
              <Input
                type="text"
                id="manufacture"
                name="manufacture"
                required
                placeholder="e.g., Toyota"
              />
            </div>

            {/* Model */}
            <div className="space-y-1">
              <Label htmlFor="model">Model *</Label>
              <Input
                type="text"
                id="model"
                name="model"
                required
                placeholder="e.g., Camry"
              />
            </div>

            {/* Year */}
            <div className="space-y-1">
              <Label htmlFor="year">Year *</Label>
              <Input
                type="number"
                id="year"
                name="year"
                required
                min="1900"
                placeholder="e.g., 2024"
              />
            </div>

            {/* License Plate */}
            <div className="space-y-1">
              <Label htmlFor="licensePlate">License Plate * (Unique)</Label>
              <Input
                type="text"
                id="licensePlate"
                name="licensePlate"
                required
                placeholder="e.g., XYZ-123"
              />
            </div>

            {/* Price Per Day */}
            <div className="space-y-1">
              <Label htmlFor="pricePerDay">Price Per Day (Birr) *</Label>
              <Input
                type="number"
                id="pricePerDay"
                name="pricePerDay"
                required
                step="0.01"
                min="0.01"
                placeholder="e.g., 50.00"
              />
            </div>

            {/* Mileage */}
            <div className="space-y-1">
              <Label htmlFor="mileage">Mileage (km/mi) *</Label>
              <Input
                type="number"
                id="mileage"
                name="mileage"
                required
                min="0"
                placeholder="e.g., 15000"
              />
            </div>

            {/* Description */}
            <div className="sm:col-span-2 space-y-1">
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                name="description"
                rows={2}
                placeholder="Brief description of the vehicle's condition or features."
                className="w-full p-3 border rounded-md" // Keeping original Tailwind styling for textarea
              ></Textarea>
            </div>

            {/* Image URLs */}
            <div className="sm:col-span-2 space-y-1">
              <Label htmlFor="imageUrls">
                Image URLs (Comma-separated list, Optional)
              </Label>
              <Input
                type="text"
                id="imageUrls"
                name="imageUrls"
                placeholder="url1.jpg, url2.png, url3.webp"
              />
            </div>
          </div>
        </div>

        {/* === FEATURES DETAILS SECTION === */}
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold">Static Features</h3>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Seating Capacity */}
            <div className="space-y-1">
              <Label htmlFor="seatingCapacity">Seating Capacity *</Label>
              <Input
                type="number"
                id="seatingCapacity"
                name="seatingCapacity"
                required
                min="1"
                placeholder="e.g., 5"
              />
            </div>

            {/* Engine Power */}
            <div className="space-y-1">
              <Label htmlFor="enginePower">Engine Power (HP, Optional)</Label>
              <Input
                type="number"
                id="enginePower"
                name="enginePower"
                min="1"
                placeholder="e.g., 180"
              />
            </div>

            {/* Transmission */}
            <div className="space-y-1">
              <Label htmlFor="transmission">Transmission *</Label>
              <Select name="transmission" required>
                <SelectTrigger id="transmission" className="w-full">
                  <SelectValue placeholder="Select Transmission *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AUTOMATIC">Automatic</SelectItem>
                  <SelectItem value="MANUAL">Manual</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Fuel Type */}
            <div className="space-y-1">
              <Label htmlFor="fuelType">Fuel Type *</Label>
              <Select name="fuelType" required>
                <SelectTrigger id="fuelType" className="w-full">
                  <SelectValue placeholder="Select Fuel Type *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="GASOLINE">Gasoline</SelectItem>
                  <SelectItem value="ELECTRIC">Electric</SelectItem>
                  <SelectItem value="HYBRID">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Car Type */}
            <div className="sm:col-span-2 space-y-1">
              <Label htmlFor="carType">Car Type *</Label>
              <Select name="carType" required>
                <SelectTrigger id="carType" className="w-full">
                  <SelectValue placeholder="Select Car Type *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SEDAN">Sedan</SelectItem>
                  <SelectItem value="SUV">SUV</SelectItem>
                  <SelectItem value="LUXURY">Luxury</SelectItem>
                  <SelectItem value="COUPE">Coupe</SelectItem>
                  <SelectItem value="TRUCK">Truck</SelectItem>
                  <SelectItem value="MINIVAN">Minivan</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            disabled={pending}
            type="submit"
            className="px-8 py-2 text-base font-semibold"
          >
            {pending ? "Adding Car..." : "Create Car"}
          </Button>
        </div>
      </form>
    </div>
  );
}
