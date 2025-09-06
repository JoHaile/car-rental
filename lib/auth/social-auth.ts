import { redirect } from "next/navigation";
import { authClient } from "./auth-client";

type SocialProviders = "google" | "github";

export const signInSocial = async (provider: SocialProviders) => {
  const { data, error } = await authClient.signIn.social({
    provider,
    callbackURL: "/",
  });

  if (!error) redirect("/");

  console.log(error.message);
};
