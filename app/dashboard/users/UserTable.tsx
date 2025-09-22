import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import prisma from "@/prisma";
import React from "react";

async function UserTable() {
  const users = await prisma.user.findMany({
    include: {
      bookings: true,
    },
  });
  return (
    <div>
      <Table>
        <TableCaption>All Users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden md:block">User</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Bookings</TableHead>
            <TableHead>Join Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <p>{user?.name}</p>
                <p className="opacity-70">{user?.email}</p>
              </TableCell>
              <TableCell className="font-medium">{user.role}</TableCell>
              <TableCell>{user.bookings.length}</TableCell>
              <TableCell>{user.createdAt.toDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default UserTable;
