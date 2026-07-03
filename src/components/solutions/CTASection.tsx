import Link from "next/link";

import { Container } from "@/components/ui/Container";

export function CTASection() {
  return (
    <section className="bg-primary" aria-labelledby="solutions-cta-heading">
      <Container className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="solutions-cta-heading"
            className="text-3xl font-semibold tracking-tight text-on-primary lg:text-4xl"
          >
            Ready to explore CodiCare for your healthcare organization?
          </h2>
          <p className="mt-4 text-lg leading-8 text-[color:var(--color-text-inverse-muted)]">
            Contact our team to discuss the solution mix that best supports your clinical, operational, and care goals.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-surface px-6 text-sm font-semibold text-accent shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface-secondary hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
            >
              Contact CodiCare
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
