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

  redirect("/");
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

  redirect("/");
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

export const passwordAction = async (
  prevState: unknown,
  formData: FormData
) => {
  const email = formData.get("email") as string;
  try {
    await auth.api.requestPasswordReset({
      body: {
        email,
        redirectTo: "/reset-password",
      },
    });

    return {
      successMessage:
        "Reset Link sent Successfully, Check your email for the reset Link.",
    };
  } catch (error) {
    if (error instanceof APIError) {
      return {
        email,
        errorMessage: error.message,
      };
    }
  }
};

export const resetPasswordAction = async (
  prevState: unknown,
  formData: FormData
) => {
  const newPassword = formData.get("password") as string;
  const token = formData.get("token") as string;
  try {
    await auth.api.resetPassword({
      body: {
        newPassword,
        token,
      },
    });

    return {
      successMessage: "Password Reset Successfully.",
    };
  } catch (error) {
    if (error instanceof APIError) {
      return {
        errorMessage: error.message,
      };
    }
  }
};
