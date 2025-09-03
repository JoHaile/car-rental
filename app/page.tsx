import { ModeToggle } from "@/components/dark-mode";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Button>Click Me</Button>
      <ModeToggle />
      <h1>My Blog Post</h1>
      <article>
        <h1>My Blog Post</h1>
        <h2>My Blog Post</h2>
        <h3>My Blog Post</h3>
        <p>This is a paragraph with default typographic styles.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
      </article>
    </div>
  );
}
