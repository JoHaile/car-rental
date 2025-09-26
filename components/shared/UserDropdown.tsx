import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import {
  UserCircle2,
  Mail,
  ShieldIcon,
  LucideBookmark,
  LucideBookmarkPlus,
} from "lucide-react";
import SignOut from "../auth/SignOut";
import { ModeToggle } from "../theme/dark-mode";
import { Role, User } from "@/app/generated/prisma";

interface Props {
  user: User | null | undefined;
  bookings?: number;
}

function UserDropdown({ user, bookings }: Props) {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="px-3 h-10 rounded-full">
            <Avatar>
              <AvatarImage
                src={user?.image ? user?.image : undefined}
                className="size-8 rounded-full overflow-hidden"
              />
              <AvatarFallback>
                <UserCircle2 className="size-3/4" />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span>{user?.name}</span>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <UserCircle2 />
            {user?.name}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Mail /> {user?.email}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShieldIcon />
            {user?.role}
            {user?.role.includes(Role.Admin) && (
              <Link href="/dashboard" className="text-primary hover:underline">
                {" "}
                Dashboard
              </Link>
            )}
          </DropdownMenuItem>

          {user?.role.includes(Role.Admin) && (
            <DropdownMenuItem>
              <Link href={"/dashboard/reception"} className="flex gap-2">
                <LucideBookmark />
                Reception
              </Link>
            </DropdownMenuItem>
          )}

          <DropdownMenuItem>
            <Link href="/bookings" className="flex gap-2">
              <LucideBookmarkPlus />
              Total Bookings: {bookings}
            </Link>
          </DropdownMenuItem>

          <DropdownMenuLabel className="pt-5">General</DropdownMenuLabel>
          <DropdownMenuSeparator className="mb-2" />
          <div className="px-2 flex justify-between">
            {/* <Button variant={"outline"}>EN</Button> */}
            <ModeToggle />
          </div>
          <span className="flex flex-col pt-4">
            <SignOut />
          </span>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default UserDropdown;
