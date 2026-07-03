import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { HeroCards } from "@/components/ui/HeroCards";

const solutionHeroCards = [
  {
    title: "Clinical Solutions",
    description:
      "Electronic Health Records, patient engagement, and clinical workflow optimization.",
    className: "absolute left-0 top-6 -rotate-3",
  },
  {
    title: "Business Solutions",
    description:
      "Medical billing, revenue cycle management, and operational efficiency.",
    className: "absolute right-0 top-24 rotate-2",
  },
  {
    title: "AI Solutions",
    description: "Intelligent automation and AI-powered healthcare assistance.",
    className: "absolute left-8 bottom-24 rotate-2",
  },
  {
    title: "Care Programs",
    description:
      "Comprehensive patient care programs designed for better long-term outcomes.",
    className: "absolute right-6 bottom-0 -rotate-2",
  },
];

export function Hero() {
  return (
    <section
      className="border-b border-subtle bg-surface"
      aria-labelledby="solutions-hero-heading"
    >
      <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-16 py-20 lg:grid-cols-[1fr_1fr] lg:py-24">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full border border-primary-light bg-primary-light px-4 py-1.5 text-sm font-medium text-accent">
            Clinical, Business, AI, and Care solutions
          </p>

          <h1
            id="solutions-hero-heading"
            className="mt-6 text-5xl font-semibold tracking-tight text-primary lg:text-6xl lg:leading-[1.05]"
          >
            A complete healthcare solutions suite built for modern operations.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-secondary">
            Explore the full range of CodiCare solutions designed to support
            healthcare teams with clarity, scalability, and confidence.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-on-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            >
              Get Started
            </Link>
            <a
              href="#clinical"
              className="inline-flex h-12 items-center justify-center rounded-full border border-subtle px-6 text-sm font-semibold text-secondary transition-colors duration-200 hover:bg-surface-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            >
              Explore Solutions
            </a>
          </div>
        </div>

        <HeroCards cards={solutionHeroCards} />
      </Container>
    </section>
  );
}
