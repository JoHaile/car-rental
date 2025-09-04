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
import { Mail, ShieldIcon, UserCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";

async function NavBar() {
  const session = await getServerSession();
  const user = session?.user;

  return (
    <header className=" h-16 flex items-center justify-between px-8">
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
                <div className="bg-muted flex gap-2 items-center px-2 py-1 rounded-sm cursor-pointer">
                  <Avatar className="size-10">
                    <AvatarImage src={user?.image ? user?.image : undefined} />
                    <AvatarFallback>
                      <UserCircle2 className="size-3/4" />
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
                  Customer
                </DropdownMenuItem>

                <DropdownMenuLabel className="pt-5">Language</DropdownMenuLabel>
                <DropdownMenuSeparator className="mb-2" />
                <span className="pl-1">
                  <Button variant={"outline"}>EN</Button>
                </span>

                <DropdownMenuLabel className="pt-5">Themes</DropdownMenuLabel>
                <DropdownMenuSeparator className="mb-2" />
                <span className="pl-1">
                  <ModeToggle />
                </span>

                <span className="flex flex-col pt-4">
                  <SignOut />
                </span>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <Button variant={"outline"}>EN</Button>

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
