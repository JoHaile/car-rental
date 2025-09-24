"use client";

import React, { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { passwordAction } from "@/lib/auth/action";
import { toast } from "sonner";

function ForgotPassword() {
  const [state, formAction, isPending] = useActionState(
    passwordAction,
    undefined
  );

  useEffect(() => {
    state?.errorMessage && toast.error(state.errorMessage);
    state?.successMessage && toast.success(state.successMessage);
  }, [state]);

  return (
    <div>
      <form
        action={formAction}
        className="flex flex-col gap-10 w-xl m-auto my-20"
      >
        <div>
          <Label className="mb-2">Email</Label>
          <Input name="email" placeholder="enter Your email Address." />
        </div>
        <Button disabled={isPending}>
          {isPending ? "Loading..." : "Send Reset Link"}
        </Button>
      </form>
    </div>
  );
}

export default ForgotPassword;
