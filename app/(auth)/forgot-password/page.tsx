import { H1 } from "@/components/Typography";
import React from "react";
import ForgotPassword from "./ForgotPassword";

function forgotPasswordPage() {
  return (
    <div className="h-screen max-w-3xl flex flex-col justify-center items-center gap-3 m-auto">
      <H1>Forgot Password?</H1>

      <p>Enter your email and we will send a Link to reset your password.</p>

      <ForgotPassword />
    </div>
  );
}

export default forgotPasswordPage;
