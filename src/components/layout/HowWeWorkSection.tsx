import type { LucideIcon } from "lucide-react";
import { ClipboardCheck, Files, Shield, Workflow } from "lucide-react";

import { Container } from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    icon: Files,
    title: "Collect Information",
    description:
      "Gather the necessary patient and operational details into a structured starting point.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Review and Validate",
    description:
      "Confirm accuracy before work moves forward to keep the process stable and reliable.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Coordinate Actions",
    description:
      "Route tasks across the right teams so billing and care operations stay aligned.",
  },
  {
    number: "04",
    icon: Shield,
    title: "Finalize and Secure",
    description:
      "Close the loop with clear outcomes, accountability, and protected records.",
  },
] as const;

export function HowWeWorkSection() {
  return (
    <section className="bg-slate-50" aria-labelledby="how-we-work-heading">
      <Container className="py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            How We Work
          </p>
          <h2
            id="how-we-work-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl"
          >
            A simple four-step workflow for medical billing teams.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The process is designed to stay clear and connected from the first input to the final outcome.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <ProcessCard
              key={step.number}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

type ProcessCardProps = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

function ProcessCard({ number, icon: Icon, title, description }: ProcessCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold tracking-[0.2em] text-slate-500">
          {number}
        </span>
        <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
          <Icon className="size-5" aria-hidden="true" />
        </div>
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
