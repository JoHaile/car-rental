import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OurAddress from "@/components/landing/OurAddress";
import { H1 } from "@/components/Typography";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen my-[200px]">
      <div className="text-center my-16">
        <H1 className="mb-6">Our Address</H1>
        <p className="mb-16">
          Visit us at our main office for any inquiries or support.
        </p>
        <OurAddress />
      </div>

      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
        {/* Hero Section */}
        <section className="w-full max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Contact Us
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mt-2">
            Have a question or need assistance? Our team is here to help you
            24/7.
          </p>
        </section>

        {/* Contact Form and Info */}
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          {/* Company Info */}
          <Card className="shadow-sm flex flex-col justify-center">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 text-base">
              <div>
                <span className="font-semibold">Email:</span>{" "}
                support@yourcompany.com
              </div>
              <div>
                <span className="font-semibold">Phone:</span> +1 (555) 123-4567
              </div>
              <div>
                <span className="font-semibold">Address:</span> 123 Main St,
                City, Country
              </div>
              <div>
                <span className="font-semibold">Hours:</span> 24/7 Customer
                Support
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
