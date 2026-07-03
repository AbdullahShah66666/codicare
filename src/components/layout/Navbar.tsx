import Link from "next/link";

import { NavLink } from "@/components/layout/NavLink";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-subtle/80 bg-surface/90 backdrop-blur-xl transition-shadow duration-300 supports-[backdrop-filter]:bg-surface/75">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:rounded-full focus:bg-inverse focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-on-primary focus:outline-2 focus:outline-offset-2 focus:outline-[var(--color-primary)]"
      >
        Skip to main content
      </a>

      <Container>
        <div className="flex h-20 items-center justify-between gap-8">
          <Logo />

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Primary navigation"
          >
            {siteConfig.navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-inverse px-5 py-2.5 text-sm font-semibold text-on-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
