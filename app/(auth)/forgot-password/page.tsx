"use client";

import { H1 } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { passwordAction } from "@/lib/auth/action";
import React, { useActionState, useEffect } from "react";
import { toast } from "sonner";

function forgotPasswordPage() {
  const [state, formAction, isPending] = useActionState(
    passwordAction,
    undefined
  );

  useEffect(() => {
    state?.errorMessage && toast.error(state.errorMessage);
    state?.successMessage && toast.success(state.successMessage);
  }, [state]);

  return (
    <div className="h-screen max-w-3xl flex flex-col justify-center items-center gap-3 m-auto">
      <H1>Forgot Password?</H1>

      <p>Enter your email and we will send a Link to reset your password.</p>

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

export default forgotPasswordPage;
