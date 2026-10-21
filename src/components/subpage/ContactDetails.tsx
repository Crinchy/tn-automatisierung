import { type LucideIcon, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { LEGAL_DETAILS } from "@/config/legal";
import content from "@/content/de.json";

type ContactDetailsProps = {
  showAddress: boolean;
};

type ContactDetailProps = {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
};

function ContactDetail({ icon: Icon, label, children }: ContactDetailProps) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-xs bg-signal text-white">
        <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <div className="pt-0.5">
        <p className="text-sm font-semibold tracking-[0.08em] text-signal uppercase">
          {label}
        </p>
        <div className="mt-1">{children}</div>
      </div>
    </li>
  );
}

export default function ContactDetails({ showAddress }: ContactDetailsProps) {
  return (
    <ul className="grid gap-8">
      {showAddress && (
        <ContactDetail icon={MapPin} label={content.contactDetails.address}>
          <address className="not-italic">
            {LEGAL_DETAILS.ownerName}
            <br />
            {LEGAL_DETAILS.businessName}
            <br />
            {LEGAL_DETAILS.street}
            <br />
            {LEGAL_DETAILS.postalCodeAndCity}
          </address>
        </ContactDetail>
      )}
      <ContactDetail icon={Phone} label={content.contactDetails.phone}>
        {LEGAL_DETAILS.phone}
      </ContactDetail>
      <ContactDetail icon={Mail} label={content.contactDetails.email}>
        <a
          className="underline decoration-signal decoration-2 underline-offset-4 wrap-anywhere motion-safe:transition-colors hocus:text-signal"
          href={`mailto:${LEGAL_DETAILS.email}`}
        >
          {LEGAL_DETAILS.email}
        </a>
      </ContactDetail>
    </ul>
  );
}
