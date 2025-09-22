import { H1 } from "@/components/Typography";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import React from "react";
import FaqAccordion from "./FaqAccordion";

function FAQPage() {
  return (
    <div className="min-h-screen my-20 md:my-32 px-3 md:px-8 lg:px-16 text-center">
      <div className="max-w-3xl mx-auto space-y-6 ">
        <H1>Gondar Car Rentals FAQs</H1>
        <p>
          Here are some of the most frequently asked questions about our car
          rental services. If you have any other questions, feel free to contact
          us.
        </p>

        <FaqAccordion />
      </div>
    </div>
  );
}

export default FAQPage;
