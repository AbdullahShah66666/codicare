export type LegalContent = {
  id: string;
  title: string;
  lastUpdated: string;
  introduction?: string;
  sections: LegalSection[];
  footer?: SectionContent[];
};

export type LegalSection = {
  id: string;
  heading: string;
  content: SectionContent[];
};

export type SectionContent =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "subheading";
      title: string;
    };

export const privacyPolicy: LegalContent = {
  id: "privacy-policy",
  title: "Privacy Policy",
  lastUpdated: "June 26, 2026",
  introduction:
    "Codicares provides software development and information technology services. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit codicares.com or otherwise interact with us. By using the Site, you agree to the practices described in this Privacy Policy.",
  sections: [
    {
      id: "information-we-collect",
      heading: "1. Information We Collect",
      content: [
        {
          type: "subheading",
          title: "Information You Provide to Us",
        },
        {
          type: "paragraph",
          text: "We collect information you voluntarily submit through our contact and inquiry forms, including:",
        },
        {
          type: "list",
          items: [
            "Name",
            "Email address",
            "Phone number",
            "Company name",
            "Message content and any project or service details you choose to share",
          ],
        },
        {
          type: "subheading",
          title: "Information Collected Automatically",
        },
        {
          type: "paragraph",
          text: "When you visit the Site, certain information is collected automatically through cookies, analytics tools, and similar technologies, including:",
        },
        {
          type: "list",
          items: [
            "IP address and approximate geographic location",
            "Browser type, device type, and operating system",
            "Pages visited, time spent on pages, and referring/exit URLs",
            "Click and scroll behavior used to understand how visitors use the Site",
          ],
        },
        {
          type: "subheading",
          title: "Information from Third-Party Tools",
        },
        {
          type: "paragraph",
          text: "We use HubSpot and Mailchimp to manage inquiries, communications, and email correspondence. These platforms may collect and store information you provide, such as your contact details and engagement with our emails (for example, opens and link clicks), in accordance with their own privacy policies.",
        },
      ],
    },
    {
      id: "how-we-use-information",
      heading: "2. How We Use Information",
      content: [
        {
          type: "paragraph",
          text: "We use the information we collect to:",
        },
        {
          type: "list",
          items: [
            "Respond to inquiries submitted through our contact forms",
            "Provide, maintain, and improve our software development and IT services",
            "Communicate with you about projects, proposals, and service updates",
            "Send marketing or informational emails where you have consented to receive them",
            "Analyze Site traffic and usage patterns to improve content, performance, and user experience",
            "Maintain the security and proper functioning of the Site",
            "Comply with applicable legal obligations",
          ],
        },
      ],
    },
    {
      id: "cookies-and-tracking",
      heading: "3. Cookies",
      content: [
        {
          type: "paragraph",
          text: "The Site uses cookies and similar tracking technologies (such as web beacons and local storage) to operate the Site, remember preferences, and analyze how visitors interact with our content. We use the following general categories of cookies:",
        },
        {
          type: "list",
          items: [
            "Essential cookies – required for core Site functionality, such as page navigation and form submission",
            "Analytics cookies – used by Google Analytics to understand how visitors use the Site",
            "Functional and marketing cookies – used by tools such as HubSpot to recognize returning visitors and support marketing communications",
          ],
        },
        {
          type: "paragraph",
          text: "You can control or disable cookies through your browser settings at any time. Please note that disabling certain cookies may affect the functionality of the Site. Where required by applicable law, we will request your consent before placing non-essential cookies.",
        },
      ],
    },
    {
      id: "third-party-services",
      heading: "4. Third-Party Services",
      content: [
        {
          type: "paragraph",
          text: "We use the following third-party services to operate and improve the Site. Each provider processes data according to its own privacy policy, which we encourage you to review:",
        },
        {
          type: "list",
          items: [
            "WordPress – the content management system used to build and host the Site",
            "Google Analytics – used to collect aggregated and anonymized statistics about Site traffic and visitor behavior",
            "HubSpot – used for customer relationship management, marketing communications, and contact form processing",
            "Mailchimp – used to send email newsletters and marketing communications to subscribers",
          ],
        },
        {
          type: "paragraph",
          text: "These third parties may receive information automatically through their integration with the Site or information you directly provide to them. We do not control the privacy practices of these third parties and are not responsible for their independent data handling practices.",
        },
      ],
    },
    {
      id: "data-security",
      heading: "5. Data Security",
      content: [
        {
          type: "paragraph",
          text: "We implement reasonable administrative, technical, and organizational measures designed to protect the information we collect from unauthorized access, disclosure, alteration, or destruction. These measures include restricting access to personal information to authorized personnel and using reputable, security-conscious third-party platforms for hosting and data processing.",
        },
        {
          type: "paragraph",
          text: "However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to protect your information, we cannot guarantee its absolute security.",
        },
        {
          type: "subheading",
          title: "Data Retention",
        },
        {
          type: "paragraph",
          text: "We retain personal information collected through contact forms and related inquiries for as long as necessary to respond to your request and maintain a record of our business communications, and in any case for no longer than thirty-six (36) months from your last interaction with us, unless a longer retention period is required to comply with legal, accounting, or contractual obligations. Information held in HubSpot or Mailchimp for marketing purposes is retained until you unsubscribe or request deletion, or in accordance with those providers' own retention practices.",
        },
      ],
    },
    {
      id: "user-rights",
      heading: "6. User Rights",
      content: [
        {
          type: "paragraph",
          text: "Depending on your location, you may have certain rights regarding your personal information.",
        },
        {
          type: "subheading",
          title: "California Residents (CCPA)",
        },
        {
          type: "paragraph",
          text: "If you are a California resident, you may have the right to:",
        },
        {
          type: "list",
          items: [
            "Know what personal information we have collected about you and how it has been used and disclosed",
            "Request deletion of personal information we have collected from you, subject to certain exceptions",
            "Correct inaccurate personal information",
            "Opt out of the sale or sharing of personal information (Codicares does not sell personal information)",
            "Not be discriminated against for exercising your privacy rights",
          ],
        },
        {
          type: "paragraph",
          text: "To exercise any of these rights, please contact us using the information in Section 7. We may need to verify your identity before processing your request.",
        },
        {
          type: "subheading",
          title: "General Rights for All Users",
        },
        {
          type: "paragraph",
          text: "Regardless of your location, you may:",
        },
        {
          type: "list",
          items: [
            "Request access to, correction of, or deletion of your personal information",
            "Unsubscribe from marketing emails at any time using the unsubscribe link included in those emails",
            "Disable cookies through your browser settings",
            "Ask questions about how your information is used by contacting us directly",
          ],
        },
      ],
    },
    {
      id: "contact-information",
      heading: "7. Contact Information",
      content: [
        {
          type: "paragraph",
          text: "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:",
        },
        {
          type: "list",
          items: [
            "Website: https://www.codicares.com",
            "Email: info@codicares.com",
          ],
        },
        {
          type: "subheading",
          title: "Changes to This Privacy Policy",
        },
        {
          type: "paragraph",
          text: 'We may update this Privacy Policy from time to time to reflect changes in our practices, services, or applicable law. The "Effective Date" at the top of this page indicates when this Privacy Policy was last revised. We encourage you to review this page periodically.',
        },
      ],
    },
  ],
};

export const termsAndConditions: LegalContent = {
  id: "terms-and-conditions",
  title: "Terms & Conditions",
  lastUpdated: "June 26, 2026",
  introduction:
    "These Terms and Conditions govern your access to and use of codicares.com, operated by us, which provides information about our software development, IT consulting, and digital services. By accessing or using the Site, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Site.",
  sections: [
    {
      id: "website-usage",
      heading: "1. Website Usage",
      content: [
        {
          type: "paragraph",
          text: "The Site and its content are made available for informational purposes related to our software development, IT consulting, and digital services. By using the Site, you agree to:",
        },
        {
          type: "list",
          items: [
            "Use the Site only for lawful purposes and in a manner consistent with these Terms",
            "Provide accurate and truthful information when submitting any contact, inquiry, or request form",
            "Not interfere with, disrupt, or attempt to gain unauthorized access to the Site, its servers, or any connected networks",
            "Not use any automated system, bot, or scraper to access the Site without our prior written consent",
            "Not introduce viruses, malware, or other harmful code through the Site",
          ],
        },
        {
          type: "paragraph",
          text: "We reserve the right to restrict or terminate your access to the Site, at our discretion, if we believe you have violated these Terms.",
        },
      ],
    },
    {
      id: "intellectual-property",
      heading: "2. Intellectual Property",
      content: [
        {
          type: "paragraph",
          text: 'All content on the Site, including but not limited to text, graphics, logos, icons, images, software, page layouts, and the overall look and feel of the Site (the "Content"), is the property of Codicares or its licensors and is protected by applicable copyright, trademark, and other intellectual property laws.',
        },
        {
          type: "paragraph",
          text: "Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to view and access the Content for your own personal or internal business reference in connection with evaluating our services. You may not, without our prior written consent:",
        },
        {
          type: "list",
          items: [
            "Reproduce, distribute, modify, or create derivative works from any Content",
            "Use any Content for commercial purposes other than evaluating our services",
            "Remove or alter any copyright, trademark, or other proprietary notices",
            "Use the Codicares name, logo, or branding in any manner that suggests endorsement or affiliation without authorization",
          ],
        },
        {
          type: "paragraph",
          text: "Nothing in these Terms transfers any ownership rights in the Content to you.",
        },
      ],
    },
    {
      id: "limitation-of-liability",
      heading: "3. Limitation of Liability",
      content: [
        {
          type: "paragraph",
          text: 'The Site and its Content are provided on an "as is" and "as available" basis, without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or accuracy of information. We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components.',
        },
        {
          type: "paragraph",
          text: "To the fullest extent permitted by applicable law, Codicares and its officers, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or business opportunity, arising out of or in connection with your access to or use of (or inability to access or use) the Site, even if we have been advised of the possibility of such damages.",
        },
        {
          type: "paragraph",
          text: "This Section 3 does not apply to liability arising from actual service agreements entered into separately between Codicares and a client, which are governed by the terms of those individual agreements.",
        },
      ],
    },
    {
      id: "third-party-links",
      heading: "4. Third-Party Links",
      content: [
        {
          type: "paragraph",
          text: "The Site may contain links to third-party websites or services that are not owned or controlled by Codicares. We provide these links for convenience only and do not endorse, and are not responsible for, the content, privacy practices, or terms of use of any third-party site. Accessing any linked third-party site is done at your own risk, and we encourage you to review the applicable terms and privacy policy of any third-party site you visit.",
        },
      ],
    },
    {
      id: "changes-to-terms",
      heading: "5. Changes to Terms",
      content: [
        {
          type: "paragraph",
          text: 'We may revise these Terms from time to time to reflect changes in our services, business practices, or applicable law. The "Effective Date" at the top of this page indicates when these Terms were last updated. Your continued use of the Site after any changes take effect constitutes your acceptance of the revised Terms. We encourage you to review this page periodically.',
        },
      ],
    },
    {
      id: "governing-law",
      heading: "6. Governing Law",
      content: [
        {
          type: "paragraph",
          text: "These Terms are governed by and construed in accordance with the laws of the United States, without regard to conflict-of-law principles. Any disputes arising out of or relating to these Terms or your use of the Site shall be subject to the jurisdiction of the courts of the United States, except where applicable law requires otherwise.",
        },
      ],
    },
    {
      id: "contact-information",
      heading: "7. Contact Information",
      content: [
        {
          type: "paragraph",
          text: "If you have questions about these Terms, please contact us at:",
        },
        {
          type: "list",
          items: [
            "Website: https://www.codicares.com",
            "Email: info@codicares.com",
          ],
        },
      ],
    },
  ],
};
