import Link from "next/link";

import { Container } from "@/components/ui/Container";

export function CTASection() {
  return (
    <section className="bg-sky-700" aria-labelledby="cta-section-heading">
      <Container className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="cta-section-heading"
            className="text-3xl font-semibold tracking-tight text-white lg:text-4xl"
          >
            Ready to simplify healthcare operations with CodiCare?
          </h2>
          <p className="mt-4 text-lg leading-8 text-sky-50">
            Talk with our team about a solution that supports your care, billing, and provider workflows.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-sky-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact CodiCare
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
