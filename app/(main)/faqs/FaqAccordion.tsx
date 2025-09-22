import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import React from "react";
import faqs from "./faqs.json";
function FaqAccordion() {
  return (
    <div>
      <Accordion
        type="single"
        className="w-full bg-accent/50 p-6 rounded-lg mt-18"
      >
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="mb-5">
            <AccordionTrigger className="cursor-pointer text-primary">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default FaqAccordion;
