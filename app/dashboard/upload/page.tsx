"use client";

import { useActionState, useEffect, useRef } from "react";
import { createCar } from "@/server/uploadAction";
import { useFormStatus } from "react-dom";

// Initial state for useActionState
const initialState = {
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full py-2 px-4 rounded-md text-white font-semibold transition-colors 
        ${
          pending
            ? "bg-indigo-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
    >
      {pending ? "Adding Car..." : "Add Car & Features"}
    </button>
  );
}

export default function AdminAddCarForm() {
  const [state, formAction] = useActionState(createCar, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset the form upon successful submission
  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        New Car & Features Registration
      </h2>

      {/* Feedback Message Area */}
      {state.message && (
        <div
          className={`p-3 mb-4 rounded-md text-sm font-medium 
            ${
              state.success
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          role="alert"
        >
          {state.message}
        </div>
      )}

      <form ref={formRef} action={formAction} className="space-y-8">
        {/* === CAR DETAILS SECTION === */}
        <fieldset className="border p-6 rounded-lg space-y-4">
          <legend className="text-xl font-semibold text-gray-700">
            Car Details
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Manufacture, Model */}
            <input
              type="text"
              name="manufacture"
              required
              placeholder="Manufacturer *"
              className="p-3 border rounded-md"
            />
            <input
              type="text"
              name="model"
              required
              placeholder="Model *"
              className="p-3 border rounded-md"
            />

            {/* Year, License Plate */}
            <input
              type="number"
              name="year"
              required
              min="1900"
              placeholder="Year *"
              className="p-3 border rounded-md"
            />
            <input
              type="text"
              name="licensePlate"
              required
              placeholder="License Plate * (Unique)"
              className="p-3 border rounded-md"
            />

            {/* Price Per Day, Mileage */}
            <input
              type="number"
              name="pricePerDay"
              required
              step="0.01"
              min="0.01"
              placeholder="Price Per Day (USD) *"
              className="p-3 border rounded-md"
            />
            <input
              type="number"
              name="mileage"
              required
              min="0"
              placeholder="Mileage (km/mi) *"
              className="p-3 border rounded-md"
            />

            {/* Image URLs */}
            <div className="sm:col-span-2">
              <textarea
                name="description"
                rows={2}
                placeholder="Description (Optional)"
                className="w-full p-3 border rounded-md"
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <input
                type="text"
                name="imageUrls"
                placeholder="Image URLs (Comma-separated: url1, url2...)"
                className="w-full p-3 border rounded-md"
              />
            </div>
          </div>
        </fieldset>

        {/* === FEATURES DETAILS SECTION === */}
        <fieldset className="border p-6 rounded-lg space-y-4">
          <legend className="text-xl font-semibold text-gray-700">
            Static Features
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Seating Capacity, Engine Power */}
            <input
              type="number"
              name="seatingCapacity"
              required
              min="1"
              placeholder="Seating Capacity *"
              className="p-3 border rounded-md"
            />
            <input
              type="number"
              name="enginePower"
              min="1"
              placeholder="Engine Power (HP, Optional)"
              className="p-3 border rounded-md"
            />

            {/* Transmission */}
            <select
              name="transmission"
              required
              className="p-3 border rounded-md bg-white"
            >
              <option value="">Select Transmission *</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>

            {/* Fuel Type */}
            <select
              name="fuelType"
              required
              className="p-3 border rounded-md bg-white"
            >
              <option value="">Select Fuel Type *</option>
              <option value="Gasoline">Gasoline</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>

            {/* Car Type */}
            <select
              name="carType"
              required
              className="p-3 border rounded-md bg-white sm:col-span-2"
            >
              <option value="">Select Car Type *</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Truck">Truck</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
        </fieldset>

        {/* Submit Button */}
        <SubmitButton />
      </form>
    </div>
  );
}
