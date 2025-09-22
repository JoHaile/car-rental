import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function ContactForm() {
  return (
    <div>
      <form className="flex flex-col gap-4">
        <Label htmlFor="name">Name</Label>
        <Input name="name" type="text" placeholder="Your Name" required />
        <Label htmlFor="email">Email</Label>
        <Input name="email" type="email" placeholder="Your Email" required />
        <Label htmlFor="message">Message</Label>
        <Textarea
          name="message"
          placeholder="Your Message"
          rows={10}
          required
        />
        <Button type="submit" className="mt-2 font-bold">
          Send Message
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
