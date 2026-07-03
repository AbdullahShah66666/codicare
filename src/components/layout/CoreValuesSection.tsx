import type { LucideIcon } from "lucide-react";
import {
  Award,
  Scale,
  Brain,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Container } from "@/components/ui/Container";

const values = [
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "We build with reliability, transparency, and a strong sense of responsibility.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We work alongside healthcare teams and design for real operational needs.",
  },
  {
    icon: Scale,
    title: "Integrity",
    description:
      "We make decisions with care, consistency, and respect for the people we support.",
  },
  {
    icon: Brain,
    title: "Clarity",
    description:
      "We reduce complexity so teams can understand and act on what matters most.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We aim for thoughtful execution and dependable outcomes in every solution.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "We evolve continuously to support modern healthcare operations with confidence.",
  },
] as const;

export function CoreValuesSection() {
  return (
    <section className="bg-surface" aria-labelledby="core-values-heading">
      <Container className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Core Values
          </p>
          <h2
            id="core-values-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-primary lg:text-4xl"
          >
            The principles that guide how we build and support CodiCare.
          </h2>
          <p className="mt-4 text-lg leading-8 text-secondary">
            These values shape our decisions, our product direction, and the way
            we work with every healthcare organization we serve.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

type ValueCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <article className="rounded-[2rem] border border-subtle bg-surface-secondary p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-inverse text-on-primary">
        <Icon className="size-5" aria-hidden="true" />
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-primary">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-secondary">{description}</p>
    </article>
  );
}
