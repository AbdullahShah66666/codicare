export const siteConfig = {
  name: "Codicare",
  description:
    "Enterprise care coordination software designed to streamline operations, improve visibility, and support better client outcomes.",
  url: "https://codicare.com",
  contact: {
    email: "hello@codicare.com",
    phone: "+1 (555) 012-3456",
    location: "United States",
  },
  navLinks: [
    { label: "Solutions", href: "/solutions" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  solutionLinks: [
    { label: "Care Operations", href: "/solutions#care-operations" },
    { label: "Client Management", href: "/solutions#client-management" },
    { label: "Reporting & Insights", href: "/solutions#reporting-insights" },
  ],
} as const;
