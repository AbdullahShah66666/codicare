import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.8fr_1fr]">
          <div className="max-w-sm">
            <Logo className="[&>span:first-child]:bg-white [&>span:first-child]:text-slate-950 [&>span:last-child]:text-white" />
            <p className="mt-5 text-sm leading-6 text-slate-300">
              {siteConfig.description}
            </p>
          </div>

          <FooterLinkGroup title="Quick links" links={siteConfig.navLinks} />
          <FooterLinkGroup title="Solutions" links={siteConfig.solutionLinks} />

          <address className="not-italic">
            <h2 className="text-sm font-semibold tracking-wide text-white">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <a
                  className="transition-colors hover:text-white"
                  href={`mailto:${siteConfig.contact.email}`}
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-white"
                  href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>{siteConfig.contact.location}</li>
            </ul>
          </address>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
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
      <h2 className="text-sm font-semibold tracking-wide text-white">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className="text-sm text-slate-300 transition-colors hover:text-white"
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
