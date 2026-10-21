import content from "@/content/de.json";
import { CONTACT_EMAIL } from "./contact";

// Placeholders: replace every value in [brackets] in content/de.json with the real details before going live
export const LEGAL_DETAILS = {
  ownerName: content.business.ownerName,
  businessName: content.business.businessName,
  ...content.legalDetails,
  email: CONTACT_EMAIL,
};
