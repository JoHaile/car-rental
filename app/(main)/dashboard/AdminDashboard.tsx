import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PieChart, BarChart2, Users, Car, Calendar } from "lucide-react";

// Placeholder data
const stats = [
  {
    label: "Total Users",
    value: 1200,
    icon: <Users className="text-primary" />,
  },
  { label: "Total Cars", value: 320, icon: <Car className="text-primary" /> },
  {
    label: "Bookings This Month",
    value: 87,
    icon: <Calendar className="text-primary" />,
  },
];

const bookings = [
  {
    id: "BKG-001",
    user: "Alice",
    car: "Toyota Corolla",
    date: "2025-09-01",
    status: "CONFIRMED",
  },
  {
    id: "BKG-002",
    user: "Bob",
    car: "Honda Civic",
    date: "2025-09-02",
    status: "PENDING",
  },
  {
    id: "BKG-003",
    user: "Charlie",
    car: "Tesla Model 3",
    date: "2025-09-03",
    status: "CANCELLED",
  },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-muted py-10 px-4 md:px-10">
      <h1 className="text-3xl font-extrabold mb-8 text-primary">
        Admin Dashboard
      </h1>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat) => (
          <Card key={stat.label} className="flex flex-col items-center py-6">
            <CardHeader className="flex flex-col items-center gap-2">
              {stat.icon}
              <CardTitle className="text-lg font-bold">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-extrabold text-center">
              {stat.value}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <PieChart className="text-primary" />
            <CardTitle>Booking Status Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Replace with real chart */}
            <div className="w-full h-64 flex items-center justify-center bg-muted rounded-lg border border-dashed border-primary/30">
              <span className="text-muted-foreground">
                [Pie Chart Placeholder]
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <BarChart2 className="text-primary" />
            <CardTitle>Monthly Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Replace with real chart */}
            <div className="w-full h-64 flex items-center justify-center bg-muted rounded-lg border border-dashed border-primary/30">
              <span className="text-muted-foreground">
                [Bar Chart Placeholder]
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bookings Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Car</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((b) => (
                <TableRow key={b.id}>
                  <TableCell className="font-mono">{b.id}</TableCell>
                  <TableCell>{b.user}</TableCell>
                  <TableCell>{b.car}</TableCell>
                  <TableCell>{b.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        b.status === "CONFIRMED"
                          ? "default"
                          : b.status === "PENDING"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {b.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
