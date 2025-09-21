import { ModeToggle } from "@/components/theme/dark-mode";
import SignOut from "@/components/auth/SignOut";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import getServerSession from "@/lib/auth/get-server-session";
import {
  ChevronDown,
  LucideBookmark,
  Mail,
  Menu,
  ShieldIcon,
  UserCircle2,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import prisma from "@/prisma";
import UserDropdown from "@/components/shared/UserDropdown";

async function NavBar() {
  const session = await getServerSession();
  // const user = session?.user;
  const user = await prisma.user.findFirst({
    where: {
      id: session?.user.id,
    },
    include: {
      bookings: true,
    },
  });

  return (
    <header className="h-16 flex items-center justify-between px-3 md:px-8 py-2">
      {/* For small screens */}
      <div className="sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <ul className="flex gap-3 flex-col p-4">
              {pageLinks.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="hover:text-primary transition-all duration-150"
                >
                  {page.label === "Company" ? (
                    <span className="flex gap-2 items-center">
                      <span>{page.label}</span> <ChevronDown />
                    </span>
                  ) : (
                    page.label
                  )}
                </Link>
              ))}
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div>Gondar</div>

      <ul className="sm:flex gap-3 md:gap-8 hidden">
        {pageLinks.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="hover:text-primary transition-all duration-150"
          >
            {page.label === "Company" ? (
              <span className="flex gap-2 items-center">
                <span>{page.label}</span> <ChevronDown />
              </span>
            ) : (
              page.label
            )}
          </Link>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        {session ? (
          <UserDropdown user={user} bookings={user?.bookings.length} />
        ) : (
          <div className="flex gap-4 items-center">
            {/* <Button variant={"outline"}>EN</Button> */}
            <ModeToggle />
            <Link href="/signup">
              <Button>Sign In/Up</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "Company", href: "/company" },
  // { label: "Business", href: "/business" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default NavBar;
