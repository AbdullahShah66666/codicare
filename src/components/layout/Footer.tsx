import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-subtle bg-inverse text-inverse">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.8fr_1fr]">
          <div className="max-w-sm">
            <Logo className="[&>span:first-child]:bg-surface [&>span:first-child]:text-primary [&>span:last-child]:text-inverse" />
            <p className="mt-5 text-sm leading-6 text-inverse-muted">
              {siteConfig.description}
            </p>
          </div>

          <FooterLinkGroup title="Quick links" links={siteConfig.navLinks} />
          <FooterLinkGroup title="Solutions" links={siteConfig.solutionLinks} />

          <address className="not-italic">
            <h2 className="text-sm font-semibold tracking-wide text-inverse">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-inverse-muted">
              <li>
                <a
                  className="transition-colors hover:text-inverse"
                  href={`mailto:${siteConfig.contact.email}`}
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-inverse"
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

        <div className="mt-12 flex flex-col gap-4 border-t border-inverse pt-6 text-sm text-inverse-muted md:flex-row md:items-center md:justify-between">
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
      <h2 className="text-sm font-semibold tracking-wide text-inverse">
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className="text-sm text-inverse-muted transition-colors hover:text-inverse"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
