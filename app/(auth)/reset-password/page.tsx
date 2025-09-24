"use client";

import { H1 } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { resetPasswordAction } from "@/lib/auth/action";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useActionState, useEffect } from "react";
import { Label } from "recharts";
import { toast } from "sonner";

function page() {
  const [state, formAction, isPending] = useActionState(
    resetPasswordAction,
    undefined
  );
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  if (!token) {
    return <p className="text-destructive">Token not found</p>;
  }

  useEffect(() => {
    state?.successMessage && toast.success(state.successMessage);
    state?.successMessage && router.push("/login");

    state?.errorMessage && toast.error(state.errorMessage);
  }, [state]);

  return (
    <div className="h-screen max-w-3xl flex flex-col justify-center items-center gap-3 m-auto">
      <H1>Reset Password</H1>

      <p>Enter your new Password here.</p>

      <form
        action={formAction}
        className="flex flex-col gap-10 w-xl m-auto my-20"
      >
        <Input hidden name="token" defaultValue={token} />
        <div>
          <Label className="mb-2">Password</Label>
          <Input name="password" placeholder="enter Your password" />
        </div>
        <Button disabled={isPending}>
          {isPending ? "Loading..." : "Reset Password"}
        </Button>
      </form>
    </div>
  );
}

export default page;
