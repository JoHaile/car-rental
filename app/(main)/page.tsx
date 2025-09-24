import BookingSteps from "@/components/landing/BookingSteps";
import Hero from "@/components/landing/Hero";
import CallToAction from "@/components/shared/CallToAction";
import CarType from "@/components/shared/CarType";
import FeaturedCars from "@/components/shared/FeaturedCars";
import Services from "@/components/shared/Services";

export default async function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <CarType />
      <BookingSteps />
      <CallToAction />
    </div>
  );
}
