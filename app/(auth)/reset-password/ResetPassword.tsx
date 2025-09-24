"use client";

import React, { Suspense, useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { resetPasswordAction } from "@/lib/auth/action";
import { useRouter, useSearchParams } from "next/navigation";
import { Label } from "recharts";
import { toast } from "sonner";

function ResetPassword() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [state, formAction, isPending] = useActionState(
    resetPasswordAction,
    undefined
  );

  useEffect(() => {
    state?.successMessage && toast.success(state.successMessage);
    state?.successMessage && router.push("/login");

    state?.errorMessage && toast.error(state.errorMessage);
  }, [state]);

  if (!token) {
    return <p className="text-destructive">Token not found</p>;
  }

  return (
    <div>
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

export default ResetPassword;
