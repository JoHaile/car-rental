"use server";

import { APIError } from "better-auth/api";
import { auth } from "./auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export const logInAction = async (prevState: unknown, formData: FormData) => {
  const { email, password } = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
        // callbackURL: "/dashboard",
      },
    });
  } catch (error) {
    if (error instanceof APIError) {
      return {
        email,
        password,
        errorMessage: error.message,
      };
    }
  }

  redirect("/dashboard");
};
export const signUpAction = async (prevState: unknown, formData: FormData) => {
  const { fullName, email, password } = {
    fullName: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  try {
    await auth.api.signUpEmail({
      body: {
        name: fullName,
        email,
        password,
      },
      headers: await headers(),
    });
  } catch (error) {
    if (error instanceof APIError) {
      return {
        fullName,
        email,
        password,
        errorMessage: error.message,
      };
    }
  }

  redirect("/dashboard");
};

export const signOutAction = async () => {
  try {
    await auth.api.signOut({ headers: await headers() });
  } catch (error) {
    if (error instanceof APIError) {
      console.log(error.message);
    }
  }

  redirect("/login");
};
