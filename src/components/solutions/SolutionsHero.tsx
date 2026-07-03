import Link from "next/link";

import { Container } from "@/components/ui/Container";

export function SolutionsHero() {
  return (
    <section className="border-b border-slate-200 bg-white" aria-labelledby="solutions-hero-heading">
      <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-16 py-20 lg:grid-cols-[1fr_0.95fr] lg:py-24">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-700">
            Clinical, Business, AI, and Care solutions
          </p>

          <h1
            id="solutions-hero-heading"
            className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 lg:text-6xl lg:leading-[1.05]"
          >
            A complete healthcare solutions suite built for modern operations.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Explore the full range of CodiCare solutions designed to support healthcare teams with clarity, scalability, and confidence.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Get Started
            </Link>
            <Link
              href="#clinical-solutions"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 px-6 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Explore Solutions
            </Link>
          </div>
        </div>

        <div className="relative">
          <div
            className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-200/70"
            aria-label="Healthcare technology illustration placeholder"
            role="img"
          >
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Solutions overview
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-slate-950">
                    Healthcare platform
                  </p>
                </div>
                <div className="rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
                  Enterprise
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <PlaceholderPanel label="Clinical" value="Care workflows" />
                <PlaceholderPanel label="Business" value="Operational control" />
                <PlaceholderPanel label="AI" value="Smart insights" />
                <PlaceholderPanel label="Care" value="Program support" />
              </div>

              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-600">
                    Unified solution coverage
                  </p>
                  <p className="text-sm font-semibold text-sky-700">4 pillars</p>
                </div>
                <div className="mt-4 h-3 rounded-full bg-slate-200">
                  <div className="h-3 w-[92%] rounded-full bg-sky-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

type PlaceholderPanelProps = {
  label: string;
  value: string;
};

function PlaceholderPanel({ label, value }: PlaceholderPanelProps) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-xl font-semibold text-slate-950">{value}</p>
    </div>
  );
}
