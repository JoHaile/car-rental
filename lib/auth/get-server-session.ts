import { cache } from "react";
import { auth } from "./auth";
import { headers } from "next/headers";

const getServerSession = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
});

export default getServerSession;
