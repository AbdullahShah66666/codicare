export const siteConfig = {
  name: "Codicare",
  description:
    "Enterprise care coordination software designed to streamline operations, improve visibility, and support better client outcomes.",
  url: "https://codicare.com",
  contact: {
    email: "info@codicare.com",
    phone: "+2155158007",
    location: "325 N SAINT PAUL ST STE 3100 DALLAS, TX 75201",
  },
  navLinks: [
    { label: "Solutions", href: "/solutions" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  solutionLinks: [
    { label: "Clinical Solutions", href: "/solutions#clinical" },
    { label: "Business Solutions", href: "/solutions#business" },
    { label: "AI Solutions", href: "/solutions#ai" },
    { label: "Care Programs", href: "/solutions#care" },
  ],
} as const;
