import { ModeToggle } from "@/components/dark-mode";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Button>Click Me</Button>
      <ModeToggle />
    </div>
  );
}
