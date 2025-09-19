import RecentBookings from "@/components/shared/RecentBookings";
import React from "react";
import Form from "./Form";

function page() {
  return (
    <div className="min-h-screen">
      <Form />
      <RecentBookings />
    </div>
  );
}

export default page;
