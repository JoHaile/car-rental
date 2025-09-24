import { H1 } from "@/components/Typography";
import React, { Suspense } from "react";
import ResetPassword from "./ResetPassword";

function page() {
  return (
    <div className="h-screen max-w-3xl flex flex-col justify-center items-center gap-3 m-auto">
      <H1>Reset Password</H1>

      <p>Enter your new Password here.</p>

      <Suspense fallback={"Loading..."}>
        <ResetPassword />
      </Suspense>
    </div>
  );
}

export default page;
