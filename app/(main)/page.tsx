import Hero from "@/components/landing/Hero";
import CarType from "@/components/shared/CarType";
import FeaturedCars from "@/components/shared/FeaturedCars";
import Services from "@/components/shared/Services";

export default async function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* <FeaturedCars /> */}
      <Services />
      <CarType />
    </div>
  );
}
