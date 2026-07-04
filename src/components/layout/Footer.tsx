import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 border-t border-subtle bg-surface-secondary">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.8fr_0.8fr_1fr]">
          <div className="max-w-sm">
            <Logo className="[&>span:first-child]:bg-surface [&>span:first-child]:text-primary [&>span:last-child]:text-inverse" />
            <p className="mt-5 text-sm leading-6">{siteConfig.description}</p>
          </div>

          <FooterLinkGroup title="Quick links" links={siteConfig.navLinks} />
          <FooterLinkGroup title="Solutions" links={siteConfig.solutionLinks} />

          <nav aria-label="Legal">
            <h2 className="text-sm font-semibold tracking-wide">Legal</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  className="text-sm transition-colors"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm transition-colors"
                  href="/terms-and-conditions"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </nav>

          <address className="not-italic">
            <h2 className="text-sm font-semibold tracking-wide">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  className="transition-colors"
                  href={`mailto:${siteConfig.contact.email}`}
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  className="transition-colors"
                  href={`tel:${siteConfig.contact.phone.replace(
                    /[^+\d]/g,
                    ""
                  )}`}
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>{siteConfig.contact.location}</li>
            </ul>
          </address>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-inverse pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built for modern care teams.</p>
        </div>
      </Container>
    </footer>
  );
}

type FooterLinkGroupProps = {
  title: string;
  links: readonly {
    label: string;
    href: string;
  }[];
};

function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <nav aria-label={title}>
      <h2 className="text-sm font-semibold tracking-wide">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="text-sm transition-colors" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
