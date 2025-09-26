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
        <ResponsiveContainer width="100%" height={340}>
          <BarChart
            data={data}
            margin={{ top: 24, right: 32, left: 8, bottom: 24 }}
            style={{ filter: "drop-shadow(0 4px 16px rgba(99,102,241,0.10))" }}
            barCategoryGap={24}
          >
            <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 14, fill: "#64748b", fontWeight: 500 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 14, fill: "#64748b", fontWeight: 500 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                color: "#334155",
                fontWeight: 500,
              }}
            />
            <Legend
              iconType="circle"
              wrapperStyle={{
                paddingTop: 12,
                fontSize: 15,
                color: "#64748b",
                fontWeight: 500,
              }}
            />
            <Bar
              dataKey="revenue"
              name="Revenue"
              fill="#6366f1"
              radius={[8, 8, 0, 0]}
              maxBarSize={32}
            />
            <Bar
              dataKey="bookings"
              name="Bookings"
              fill="#22d3ee"
              radius={[8, 8, 0, 0]}
              maxBarSize={32}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
