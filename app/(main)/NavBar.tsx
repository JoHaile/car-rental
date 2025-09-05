import { ModeToggle } from "@/components/dark-mode";
import SignOut from "@/components/SignOut";
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
import { Mail, ShieldIcon, User2, UserCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";

async function NavBar() {
  const session = await getServerSession();
  const user = session?.user;

  return (
    <header className="h-16 flex items-center justify-between px-8 py-2">
      <div>Brand</div>

      <ul className="flex gap-8">
        {pageLinks.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="hover:text-primary transition-all duration-200"
          >
            {page.label}
          </Link>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        {session ? (
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex gap-4 items-center px-3 py-1 outline-1 outline-muted rounded-sm cursor-pointer hover:bg-muted">
                  <Avatar className="size-10">
                    <AvatarImage
                      src={user?.image ? user?.image : "/hero.webp"}
                    />
                    <AvatarFallback>
                      <UserCircle2 />
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <span>{user?.name}</span>
                  </div>
                </div>
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
                </DropdownMenuItem>

                <DropdownMenuLabel className="pt-5">General</DropdownMenuLabel>
                <DropdownMenuSeparator className="mb-2" />
                <div className="px-2 flex justify-between">
                  <Button variant={"outline"}>EN</Button>
                  <ModeToggle />
                </div>

                <span className="flex flex-col pt-4">
                  <SignOut />
                </span>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <Button variant={"outline"}>EN</Button>
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
  { label: "Vehicles", href: "/Vehicles" },
  { label: "Company", href: "/Company" },
  { label: "About Us", href: "/About" },
  { label: "Contact", href: "/contact" },
  // { label: "Business", href: "/business" },
];

export default NavBar;
