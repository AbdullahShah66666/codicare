import type { LucideIcon } from "lucide-react";
import {
  ReceiptText,
  ChartLine,
  LaptopMinimalCheck,
  Bot,
  BriefcaseMedical,
  Handshake,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";

const solutions = [
  {
    icon: ReceiptText,
    title: "Medical Billing Services",
    description:
      "Accurate claim filing, payment posting, denial management, and revenue optimization For healthcare providers.",
  },
  {
    icon: ChartLine,
    title: "Revenue Cycle Management",
    description:
      "End-to-end revenue cycle solutions that boost collections and decrease delays for healthcare organisations.",
  },
  {
    icon: LaptopMinimalCheck,
    title: "EHR & Practice Management",
    description:
      "Practice management software and electronic health records are integrated for effective clinical operations.",
  },
  {
    icon: Bot,
    title: "AI Healthcare Solutions",
    description:
      "AI-driven workflow automation, communication, and documentation for contemporary healthcare teams.",
  },
  {
    icon: BriefcaseMedical,
    title: "Medical Coding",
    description:
      "Accuracy, compliance, and reimbursement are all improved with certified coding assistance.",
  },
  {
    icon: Handshake,
    title: "Credentialing Services",
    description:
      "Accelerating payment reimbursements through payer contracting, provider enrolment, and credential verification.",
  },
] as const;

export function SolutionsSection() {
  return (
    <section
      className="bg-surface-secondary"
      aria-labelledby="solutions-section-heading"
    >
      <Container className="py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-muted">
            OUR SOLUTIONS
          </p>
          <h2
            id="solutions-section-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-primary lg:text-4xl"
          >
            Everything Healthcare Organisations Needs at One Spot.
          </h2>
          <p className="mt-4 text-lg leading-8 text-secondary">
            Codicares uses cutting-edge medical technology and revenue cycle
            systems to assist healthcare providers in streamlining billing,
            coding, patient management, and clinical operations.
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
    <article className="group rounded-[1.75rem] border border-subtle bg-surface p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-inverse text-on-primary">
        <Icon className="size-5" aria-hidden="true" />
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-primary">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-secondary">{description}</p>

      <Link
        href="/solutions"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-200 hover:text-accent"
      >
        Learn More
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
