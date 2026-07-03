import type { LucideIcon } from "lucide-react";
import {
  ChartNoAxesCombined,
  ShieldCheck,
  Stethoscope,
  Workflow,
} from "lucide-react";

import { Container } from "@/components/ui/Container";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Reliable Security",
    description:
      "Protect sensitive healthcare information with a platform designed around stability and trust.",
  },
  {
    icon: Workflow,
    title: "Structured Operations",
    description:
      "Keep day-to-day workflows organized with a simple system that supports consistency.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Focused",
    description:
      "Built to align with the practical needs of clinical, operational, and administrative teams.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Clear Visibility",
    description:
      "See important work in context so your teams can move with better confidence and speed.",
  },
] as const;

export function WhyChooseCodiCare() {
  return (
    <section
      className="bg-surface"
      aria-labelledby="why-choose-codicare-heading"
    >
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div
            className="rounded-[2rem] border border-subtle bg-surface-secondary p-8 shadow-sm"
            aria-label="Healthcare image placeholder"
            role="img"
          >
            <div className="flex min-h-[320px] items-center justify-center rounded-[1.5rem] border border-dashed border-subtle bg-surface p-6">
              <div className="text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-inverse text-on-primary">
                  <Stethoscope className="size-7" aria-hidden="true" />
                </div>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-muted">
                  Healthcare image placeholder
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Why Choose CodiCare
            </p>
            <h2
              id="why-choose-codicare-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-primary lg:text-4xl"
            >
              Why healthcare organizations trust CodiCare.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-secondary">
              We provide a dependable foundation that helps healthcare teams
              stay organized, informed, and ready to act.
            </p>

            <div className="mt-10 space-y-6">
              {benefits.map((benefit) => (
                <BenefitItem
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

type BenefitItemProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function BenefitItem({ icon: Icon, title, description }: BenefitItemProps) {
  return (
    <div className="flex gap-4">
      <div className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary-light text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <div>
        <h3 className="text-base font-semibold text-primary">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-secondary">{description}</p>
      </div>
    </div>
  );
}
