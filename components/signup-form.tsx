"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { useActionState, useEffect } from "react";
import { signUpAction } from "@/lib/auth/action";
import OAuthProviders from "./OAuthProviders";
import { toast, Toaster } from "sonner";

export function SignUpForm() {
  const initialState = {
    fullName: "",
    email: "",
    password: "",
    errorMessage: "",
  };
  const [state, formAction, isPending] = useActionState(
    signUpAction,
    initialState
  );

  useEffect(() => {
    state?.errorMessage && toast.error(state.errorMessage);
  }, [state?.errorMessage]);

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form action={formAction} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome</h1>
                <p className="text-muted-foreground text-balance">
                  Sign up to your account
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="text">Full Name</Label>
                <Input
                  id="name"
                  type="name"
                  name="name"
                  placeholder="Full Name"
                  defaultValue={state?.errorMessage ? state.fullName : ""}
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  defaultValue={state?.errorMessage ? state.email : ""}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" name="password" required />
              </div>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Loading..." : "Sign Up"}
              </Button>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>
              <OAuthProviders />
              <div className="text-center text-sm">
                Have an account ?{" "}
                <Link href="/login" className="underline underline-offset-4">
                  Log In
                </Link>
              </div>
            </div>
          </form>

          <div className="bg-muted relative hidden md:block">
            <Image
              src="/placeholder.jpg"
              width={20}
              height={20}
              alt="Image"
              className="size-full"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service </a>
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
