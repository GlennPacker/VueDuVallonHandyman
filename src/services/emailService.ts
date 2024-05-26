import { ContactFormModel } from "@/types/contactFormModel";

export function sendEmail(data: ContactFormModel) {
  fetch('/api/email', {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .catch(err => console.log(err));
}
