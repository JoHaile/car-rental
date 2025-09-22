import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

function Header({ title = "Dashboard" }: { title?: string }) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1 cursor-pointer" />
        <div className="h-4 w-px bg-sidebar-border" />
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
    </header>
  );
}

export default Header;
