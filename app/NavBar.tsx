import { ModeToggle } from "@/components/dark-mode";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function NavBar() {
  const pageLinks = [
    { label: "Home", href: "/" },
    { label: "Vehicles", href: "/Vehicles" },
    { label: "Company", href: "/Company" },
    { label: "About Us", href: "/About" },
    { label: "Contact", href: "/contact" },
    // { label: "Business", href: "/business" },
  ];

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

      <div className="flex item-center gap-3">
        <Button variant={"outline"}>EN</Button>
        <ModeToggle />
        <Link href="/signup">
          <Button>Sign In/Up</Button>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
