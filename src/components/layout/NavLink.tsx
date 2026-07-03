"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const baseClasses =
  "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]";

type NavLinkProps = {
  href: string;
  label: string;
};

export function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`${baseClasses} ${
        isActive
          ? "bg-primary-light text-accent"
          : "text-secondary hover:bg-surface-secondary hover:text-primary"
      }`}
    >
      {label}
    </Link>
  );
}
