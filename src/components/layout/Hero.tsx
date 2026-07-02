import Link from "next/link";

import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="border-b border-slate-200 bg-white" aria-labelledby="hero-heading">
      <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-16 py-20 lg:grid-cols-[1fr_0.95fr] lg:py-24">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-700">
            Care coordination built for modern healthcare teams
          </p>

          <h1
            id="hero-heading"
            className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 lg:text-6xl lg:leading-[1.05]"
          >
            Coordinate care with clarity, confidence, and control.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            CodiCare helps care teams centralize workflows, monitor client needs,
            and make faster operational decisions with a secure healthcare
            management platform.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Get Started
            </Link>
            <Link
              href="/solutions"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 px-6 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Explore Solutions
            </Link>
          </div>
        </div>

        <div className="relative">
          <div
            className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-200/70"
            aria-label="Healthcare operations dashboard preview"
            role="img"
          >
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Patient overview
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-slate-950">
                    Care dashboard
                  </p>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                  Live
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <DashboardMetric label="Active plans" value="248" />
                <DashboardMetric label="Tasks due" value="32" />
                <DashboardMetric label="At risk" value="14" />
              </div>

              <div className="mt-6 space-y-3">
                <DashboardRow name="Medication review" status="On track" />
                <DashboardRow name="Care plan update" status="Today" />
                <DashboardRow name="Follow-up visit" status="Scheduled" />
              </div>

              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-600">
                    Weekly coordination
                  </p>
                  <p className="text-sm font-semibold text-sky-700">86%</p>
                </div>
                <div className="mt-4 h-3 rounded-full bg-slate-200">
                  <div className="h-3 w-[86%] rounded-full bg-sky-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

type DashboardMetricProps = {
  label: string;
  value: string;
};

function DashboardMetric({ label, value }: DashboardMetricProps) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-slate-950">{value}</p>
    </div>
  );
}

type DashboardRowProps = {
  name: string;
  status: string;
};

function DashboardRow({ name, status }: DashboardRowProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-100 px-4 py-3">
      <div className="flex items-center gap-3">
        <span className="size-2.5 rounded-full bg-sky-600" aria-hidden="true" />
        <span className="text-sm font-medium text-slate-700">{name}</span>
      </div>
      <span className="text-sm text-slate-500">{status}</span>
    </div>
  );
}
