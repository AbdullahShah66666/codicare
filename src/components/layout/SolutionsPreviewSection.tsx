import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Banknote,
  BarChart3,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";

const solutions = [
  {
    icon: Stethoscope,
    title: "Care Coordination",
    description:
      "Bring care activities together in one clear workflow for faster team alignment.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Oversight",
    description:
      "Track healthcare requirements with structure that supports consistent accountability.",
  },
  {
    icon: HeartPulse,
    title: "Patient Monitoring",
    description:
      "Maintain visibility into patient needs with a dependable operational overview.",
  },
  {
    icon: Banknote,
    title: "Revenue Cycle Support",
    description:
      "Keep billing processes organized with practical tools for financial operations.",
  },
  {
    icon: BarChart3,
    title: "Performance Reporting",
    description:
      "Understand trends and outcomes through clear reporting designed for teams.",
  },
  {
    icon: Users,
    title: "Provider Management",
    description:
      "Support provider relationships and workload oversight with a scalable system.",
  },
] as const;

export function SolutionsPreviewSection() {
  return (
    <section className="bg-surface" aria-labelledby="solutions-preview-heading">
      <Container className="py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Solutions Preview
          </p>
          <h2
            id="solutions-preview-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-primary lg:text-4xl"
          >
            The healthcare solutions behind a more organized operation.
          </h2>
          <p className="mt-4 text-lg leading-8 text-secondary">
            Explore the core solution areas that help teams coordinate care,
            billing, and reporting with confidence.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {solutions.map((solution) => (
            <SolutionCard
              key={solution.title}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/solutions"
            className="inline-flex h-12 items-center justify-center rounded-full bg-inverse px-6 text-sm font-semibold text-on-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          >
            View Full Solutions
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

type SolutionCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function SolutionCard({ icon: Icon, title, description }: SolutionCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-subtle bg-surface-secondary p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-surface text-primary shadow-sm">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-primary">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-secondary">{description}</p>
    </article>
  );
}
