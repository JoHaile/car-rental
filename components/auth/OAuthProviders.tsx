"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { signInSocial } from "@/lib/auth/social-auth";

function OAuthProviders() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        variant="outline"
        type="button"
        className="w-full"
        onClick={() => signInSocial("github")}
      >
        <Image
          src="/github.svg"
          alt="github logo"
          className="dark:invert"
          width={30}
          height={30}
        />
        <span className="sr-only">Login with Github</span>
      </Button>

      <Button
        variant="outline"
        type="button"
        className="w-full"
        onClick={() => signInSocial("google")}
      >
        <Image
          src="/google.svg"
          alt="google logo"
          className="dark:invert"
          width={30}
          height={30}
        />
        <span className="sr-only">Login with Google</span>
      </Button>
    </div>
  );
}

export default OAuthProviders;
