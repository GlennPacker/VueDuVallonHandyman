import { ContactFormModel } from "@/types/contactFormModel";
import { ReviewFormModel } from "@/types/reviewFormModel";
import { ReviewRequestFormModel } from "@/types/reviewRequestFormModel";

export function sendEmail(data: ContactFormModel | ReviewFormModel | ReviewRequestFormModel) {
  fetch('/api/email', {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .catch(err => console.log(err));
}
