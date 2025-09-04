import { signOutAction } from "@/lib/auth/action";
import { Button } from "./ui/button";

function SignOut() {
  return <Button onClick={signOutAction}>Sign Out</Button>;
}

export default SignOut;
