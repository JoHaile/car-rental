import { ModeToggle } from "@/components/dark-mode";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import getServerSession from "@/lib/auth/get-server-session";
import Link from "next/link";
import React from "react";

async function NavBar() {
  const session = await getServerSession();

  return (
    <header className=" h-16 flex items-center justify-between px-8">
      <div>Brand</div>

      <ul className="flex gap-8">
        {pageLinks.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="hover:text-primary transition-all duration-300"
          >
            {page.label}
          </Link>
        ))}
      </ul>

      {session ? (
        // todo: make this avatar a drop down menu and show all this thing
        <Avatar>
          <AvatarImage src={"/hero.webp"} />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      ) : (
        <div className="flex item-center gap-3">
          <Button variant={"outline"}>EN</Button>
          <ModeToggle />
          <Link href="/signup">
            <Button>Sign In/Up</Button>
          </Link>
        </div>
      )}
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
