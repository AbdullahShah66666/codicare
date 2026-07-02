import type { LucideIcon } from "lucide-react";
import { CheckCircle2, FileHeart, Gauge, ShieldCheck, Sparkles } from "lucide-react";

import { Container } from "@/components/ui/Container";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Trusted Security",
    description:
      "Protect sensitive healthcare information with a platform built around reliability and control.",
  },
  {
    icon: Gauge,
    title: "Operational Clarity",
    description:
      "See the status of your workflows quickly and make decisions with less friction.",
  },
  {
    icon: FileHeart,
    title: "Healthcare Focused",
    description:
      "Designed specifically for care teams, billing operations, and provider support workflows.",
  },
  {
    icon: Sparkles,
    title: "Scalable Foundation",
    description:
      "A reusable system that adapts as your organization grows without adding complexity.",
  },
] as const;

export function WhyChooseUsSection() {
  return (
    <section className="bg-white" aria-labelledby="why-choose-us-heading">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div
              className="flex min-h-[320px] items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-6"
              aria-label="Healthcare illustration placeholder"
              role="img"
            >
              <div className="text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <CheckCircle2 className="size-7" aria-hidden="true" />
                </div>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                  Healthcare illustration placeholder
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Why Choose Us
            </p>
            <h2
              id="why-choose-us-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl"
            >
              Why healthcare providers trust CodiCare.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              We provide a focused operational foundation that helps teams stay organized, informed, and confident in their day-to-day work.
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
      <div className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-950">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <div>
        <h3 className="text-base font-semibold text-slate-950">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </div>
  );
}
