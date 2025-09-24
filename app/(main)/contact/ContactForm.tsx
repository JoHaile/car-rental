"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactActions } from "@/server/contact";
import React, { useActionState } from "react";

function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    contactActions,
    undefined
  );

  return (
    <div>
      <form action={formAction} className="flex flex-col gap-4">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          required
        />
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          required
        />
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows={10}
          required
        />
        <Button type="submit" className="mt-2 font-bold" disabled={isPending}>
          {isPending ? "Loading..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
