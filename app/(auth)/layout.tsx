import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children: Readonly<ReactNode>;
}

function layout({ children }: Props) {
  return (
    <div>
      <Link href="/">
        <Button className="absolute top-5 left-5">
          <span>
            <ArrowLeft />
          </span>
          Back
        </Button>
      </Link>

      {children}
    </div>
  );
}

export default layout;
