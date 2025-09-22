import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeaturedCars from "@/components/shared/FeaturedCars";
import CallToAction from "@/components/shared/CallToAction";
import Contact from "../contact/page";
import Testimonial from "@/components/landing/Testimonial";

// About Page for Car Rental Company
const COMPANY_NAME = "Your Company Name";

// Main About component
function About() {
  return (
    <div>
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12 mt-[150px]">
        {/* Hero Section */}
        <section className="w-full max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
            Drive Your Perfect Rental Car.
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Welcome to Gondar Rentals, where your adventure begins.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-2">
            Gondar Car Rentals is a premier car rental service based in Gondar,
            Ethiopia, offering a wide range of vehicles for both local and
            international travelers. Our fleet includes economy cars, SUVs,
            luxury vehicles, and electric cars, all maintained to the highest
            standards of safety and comfort.
          </p>
        </section>

        {/* Key Features Section */}
        <section className="w-full max-w-4xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="shadow-sm">
              <CardContent className="py-8 flex flex-col items-center">
                <h3 className="text-lg font-bold mb-2">
                  Our Fleet, Your Freedom
                </h3>
                <p className="text-center text-muted-foreground">
                  Choose from economy to luxury—our cars are meticulously
                  maintained for your comfort and safety.
                </p>
              </CardContent>
            </Card>
            {/* Feature 2 */}
            <Card className="shadow-sm">
              <CardContent className="py-8 flex flex-col items-center">
                <h3 className="text-lg font-bold mb-2">Seamless Booking</h3>
                <p className="text-center text-muted-foreground">
                  Book your ride in minutes with our intuitive online platform
                  and instant confirmation.
                </p>
              </CardContent>
            </Card>
            {/* Feature 3 */}
            <Card className="shadow-sm">
              <CardContent className="py-8 flex flex-col items-center">
                <h3 className="text-lg font-bold mb-2">
                  24/7 Customer Support
                </h3>
                <p className="text-center text-muted-foreground">
                  Our support team is here for you 24/7, ensuring a smooth and
                  enjoyable rental experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <FeaturedCars />
      </div>

      <Testimonial />
      <CallToAction />
      <Contact />
    </div>
  );
}

export default About;
