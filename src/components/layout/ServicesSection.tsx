import type { LucideIcon } from "lucide-react";
import {
  ActivitySquare,
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  HeartPulse,
  ShieldPlus,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";

const services = [
  {
    icon: Stethoscope,
    title: "Clinical Coordination",
    description:
      "Streamline care delivery across teams with a clear operational view of every patient journey.",
  },
  {
    icon: ClipboardList,
    title: "Claims Management",
    description:
      "Organize billing workflows and reduce friction with dependable claims oversight.",
  },
  {
    icon: BadgeCheck,
    title: "Compliance Tracking",
    description:
      "Keep requirements visible and manageable with a system designed for healthcare accountability.",
  },
  {
    icon: HeartPulse,
    title: "Care Monitoring",
    description:
      "Stay aligned on client status with structured monitoring and operational clarity.",
  },
  {
    icon: ShieldPlus,
    title: "Patient Safety",
    description:
      "Support safer decisions with dependable information and consistent process controls.",
  },
  {
    icon: ActivitySquare,
    title: "Revenue Analytics",
    description:
      "Understand financial performance at a glance with practical reporting and visibility.",
  },
] as const;

export function ServicesSection() {
  return (
    <section className="bg-slate-50" aria-labelledby="services-section-heading">
      <Container className="py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Services Overview
          </p>
          <h2
            id="services-section-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl"
          >
            Primary healthcare services designed for dependable operations.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            CodiCare brings the core workflows together in one place so healthcare teams can move with clarity.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <article className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
        <Icon className="size-5" aria-hidden="true" />
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>

      <Link
        href="/services"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:text-slate-600"
      >
        Learn More
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
