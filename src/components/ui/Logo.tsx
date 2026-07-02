import Link from "next/link";

import { siteConfig } from "@/config/site";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <span className="flex size-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold tracking-tight text-white shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5">
        C
      </span>
      <span className="text-lg font-semibold tracking-tight text-slate-950">
        {siteConfig.name}
      </span>
    </Link>
  );
}
