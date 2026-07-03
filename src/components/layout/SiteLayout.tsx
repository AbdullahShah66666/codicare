import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 bg-surface" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
