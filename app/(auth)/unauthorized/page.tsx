import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

function UnauthorizedPage() {
  return (
    <div className="h-screen w-screen grid place-content-center">
      <Card>
        <CardContent>
          <h1 className="text-2xl pb-10 px-5">
            You are not Authorized to Visit This Page!
          </h1>
          <Button className="w-full">
            <Link className="w-full" href="/">
              Back to Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default UnauthorizedPage;
