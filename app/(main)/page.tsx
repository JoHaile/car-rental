import Hero from "@/components/landing/Hero";
import FeaturedCars from "@/components/shared/FeaturedCars";
import { main } from "@/prisma/seed";

export default async function Home() {
  // try {
  //   main();
  //   console.log("successful.");
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedCars />
    </div>
  );
}
