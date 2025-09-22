import React from "react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-stone-300 dark:bg-accent py-8 px-4 mt-12 min-h-[350px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Brand and tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-2xl font-extrabold tracking-tight">
            Gondar Rentals.
          </span>
          <span className="text-sm opacity-80">
            Drive your dreams, rent with ease.
          </span>
        </div>

        {/* Navigation links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/vehicles" className="hover:underline">
            Vehicles
          </Link>
          <Link href="/bookings" className="hover:underline">
            My Bookings
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <span className="font-bold text-base mb-1">Contact Us</span>
          <span className="text-sm">support@yourcompany.com</span>
          <span className="text-sm">+1 (555) 123-4567</span>
          <span className="text-sm">123 Main St, City, Country</span>
        </div>

        {/* Call to action and copyright */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <Button variant={"ghost"} className="w-full md:w-auto">
            <Link href={"/signup"} className="size-full">
              Get Started
            </Link>
          </Button>
          <div className="flex gap-5 text-primary">
            <Facebook />
            <Twitter />
            <Instagram />
            <Youtube />
          </div>
          <span className="text-xs opacity-70 mt-2">
            &copy; {new Date().getFullYear()} Brand. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
