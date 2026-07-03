import { Target, Eye } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { InfoCard } from "@/components/layout/InfoCard";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To help healthcare organizations operate with greater clarity, improve coordination across teams, and deliver more dependable experiences for patients and staff.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become the trusted foundation for modern healthcare operations, giving every organization a scalable platform that supports growth and better outcomes.",
  },
] as const;

export function MissionVisionSection() {
  return (
    <section
      className="bg-surface-secondary"
      aria-labelledby="mission-vision-heading"
    >
      <Container className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Mission &amp; Vision
          </p>
          <h2
            id="mission-vision-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-primary lg:text-4xl"
          >
            The principles guiding how we build for healthcare.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <InfoCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
