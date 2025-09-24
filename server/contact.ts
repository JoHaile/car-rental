"use server";
import { sendContactEmail } from "@/mail/sendEmail";

export async function contactActions(prevState: unknown, formData: FormData) {
  const { email, name, message } = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  //   console.log(rawFormData);

  sendContactEmail(email, name, message);
}
