import React from "react";
import requirements from "./requirements.json";
import { H1 } from "@/components/Typography";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

function page() {
  return (
    <div className="min-h-screen my-20 md:my-32 px-3 md:px-8 lg:px-16 text-center">
      <div className="max-w-3xl mx-auto space-y-6 ">
        <H1>Gondar Car Rentals Requirements</H1>
        <p>
          To ensure a smooth rental experience, please review the following
          requirements.
        </p>

        <Accordion
          type="multiple"
          className="w-full bg-accent/50 p-6 rounded-lg mt-18"
        >
          {requirements.map((policy, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="mb-5">
              <AccordionTrigger className="cursor-pointer text-primary">
                {policy.policyName}
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">{policy.description}</p>
                <p className="text-sm text-muted-foreground">
                  <strong>Applies To:</strong> {policy.appliesTo}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default page;
