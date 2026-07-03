import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { HeroCards } from "@/components/ui/HeroCards";

const homeHeroCards = [
  {
    title: "Electronic Health Records",
    description:
      "Secure, centralized patient records designed for modern healthcare organizations.",
    className: "left-0 top-6 -rotate-3",
  },
  {
    title: "Medical Billing",
    description: "Efficient revenue cycle management and billing workflows.",
    className: "right-0 top-24 rotate-2",
  },
  {
    title: "AI Solutions",
    description:
      "Intelligent automation that streamlines healthcare operations.",
    className: "left-8 bottom-24 rotate-2",
  },
  {
    title: "Patient Care",
    description:
      "Technology that improves communication and long-term care outcomes.",
    className: "right-6 bottom-0 -rotate-2",
  },
];

export function Hero() {
  return (
    <section
      className="border-b border-subtle bg-surface"
      aria-labelledby="hero-heading"
    >
      <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-16 py-20 lg:grid-cols-[1fr_1fr] lg:py-24">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-xl border border-primary-light bg-primary-light px-4 py-1.5 text-sm font-medium text-accent">
            TRUSTED PARTNER FOR HEALTHCARE SOLUTIONS
          </p>
          <h1
            id="hero-heading"
            className="mt-6 text-5xl font-semibold tracking-tight text-primary lg:text-6xl lg:leading-[1.05]"
          >
            Modern Revenue Cycle Management Built for Healthcare Providers
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-secondary">
            Through safe digital solutions, Codicare assists healthcare
            organisations in increasing income, optimizing medical billing,
            streamlining coding, and improving patient engagement.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-on-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            >
              Get Started
            </Link>
            <Link
              href="/solutions"
              className="inline-flex h-12 items-center justify-center rounded-full border border-subtle px-6 text-sm font-semibold text-secondary transition-colors duration-200 hover:bg-surface-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            >
              Explore Solutions
            </Link>
          </div>
        </div>

        <HeroCards cards={homeHeroCards} />
      </Container>
    </section>
  );
}
