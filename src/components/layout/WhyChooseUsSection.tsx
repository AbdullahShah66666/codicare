import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  Headset,
  ChartColumnIncreasing,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/ui/Container";

const benefits = [
  {
    icon: ShieldCheck,
    title: "HIPAA-Compliant Security",
    description:
      "We use safe, legal healthcare solutions based on industry standards to safeguard patient data.",
  },
  {
    icon: Headset,
    title: "Dedicated Expert Support",
    description:
      "Get immediate assistance from skilled professionals who are proficient in healthcare operations.",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Revenue Growth",
    description:
      "Enhance financial performance and boost collections with effective revenue cycle management.",
  },
] as const;

type WhyChooseUsSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  placeholderLabel?: string;
  placeholderBadge?: string;
  benefits?: readonly Benefit[];
};

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function WhyChooseUsSection({
  eyebrow = "Why Choose Codicares",
  title = "Helping Healthcare Providers To Work Smarter Every Day",
  description = "We offer a targeted operational framework that supports teams in maintaining organization, knowledge, and self-assurance in their daily tasks.",
}: WhyChooseUsSectionProps) {
  return (
    <section className="bg-surface" aria-labelledby="why-choose-us-heading">
      <Container className="py-16 lg:py-20">
        <div>
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-muted">
            {eyebrow}
          </p>
          <h2
            id="why-choose-us-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-primary lg:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-secondary">
            {description}
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <WhyChooseUsCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
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

type WhyChooseUsCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function WhyChooseUsCard({
  icon: Icon,
  title,
  description,
}: WhyChooseUsCardProps) {
  return (
    <article className="group rounded-[1.75rem] border border-subtle bg-surface p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
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
