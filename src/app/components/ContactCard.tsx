import React from 'react';
import { Listbox, ListboxItem, cn } from "@nextui-org/react";
import { Linkedin, Mail, Phone, Github } from "lucide-react";

const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);

export default function ContactCards() {
  const contacts = [
    {
      key: "linkedin",
      icon: <Linkedin className="text-xl pointer-events-none flex-shrink-0 text-blue-500" />,
      label: "LinkedIn",
      action: () => window.open('https://www.linkedin.com/in/noahsadat', '_blank')
    },
    {
      key: "email",
      icon: <Mail className="text-xl pointer-events-none flex-shrink-0 text-red-500" />,
      label: "Email",
      action: () => window.location.href = 'mailto:noah@sadat.info'
    },
    {
      key: "phone",
      icon: <Phone className="text-xl pointer-events-none flex-shrink-0 text-green-500" />,
      label: "Call",
      disabled: true
    },
    {
      key: "github",
      icon: <Github className="text-xl pointer-events-none flex-shrink-0 text-purple-500" />,
      label: "GitHub",
      action: () => window.open('https://github.com/noahsadat', '_blank')
    },
  ];

  return (
    <ListboxWrapper>
      <Listbox
        aria-label="Contact options"
        variant="faded"
        onAction={(key) => {
          const contact = contacts.find(c => c.key === key);
          if (contact && !contact.disabled) {
            if ('action' in contact && typeof contact.action === 'function') {
              contact.action();
            }
          }
        }}
      >
        {contacts.map((contact) => (
          <ListboxItem
            key={contact.key}
            startContent={contact.icon}
            description={contact.disabled ? "Not available" : ""}
            className={contact.disabled ? "opacity-50" : ""}
          >
            {contact.label}
          </ListboxItem>
        ))}
      </Listbox>
    </ListboxWrapper>
  );
}