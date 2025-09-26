"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Modern, visually appealing color palette
const COLORS = [
  "#6366f1", // Indigo
  "#22d3ee", // Cyan
  "#f59e42", // Orange
  "#10b981", // Emerald
  "#f43f5e", // Rose
  "#fbbf24", // Amber
  "#a3e635", // Lime
  "#818cf8", // Light Indigo
  "#38bdf8", // Sky
  "#f472b6", // Pink
];

export type CarTypeDistribution = { name: string; value: number }[];

interface ChartsProps {
  data: CarTypeDistribution;
}

export default function Charts({ data }: ChartsProps) {
  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>Car Type Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart
            style={{ filter: "drop-shadow(0 4px 16px rgba(99,102,241,0.10))" }}
          >
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              innerRadius={60}
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(1)}%`
              }
              labelLine={false}
              stroke="#fff"
              strokeWidth={2}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
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
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
