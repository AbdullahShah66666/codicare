import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

type LogoProps = {
  className?: string;
  onClick?: () => void;
};

export function Logo({ className = "", onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`inline-flex rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/logos/codicare-logo.png"
        alt={siteConfig.name}
        width={120}
        height={60}
        priority
        className="h-14 w-auto"
      />
    </Link>
  );
}
