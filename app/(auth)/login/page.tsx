import { LoginForm } from "@/components/login-form";
import getServerSession from "@/lib/auth/get-server-session";
import { redirect } from "next/navigation";

async function LoginPage() {
  const session = await getServerSession();

  if (session) return redirect("/");

  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
