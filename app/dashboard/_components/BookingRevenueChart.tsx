"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Define the data structure for monthly trends
export type MonthlyTrendData = {
  month: string;
  revenue: number;
  bookings: number;
}[];

interface ChartsProps {
  data: MonthlyTrendData;
}

export default function RevenueBookingsTrendChart({ data }: ChartsProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Revenue & Bookings Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#6366f1" name="Revenue" /> 
            <Bar dataKey="bookings" fill="#22d3ee" name="Bookings" /> 
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
