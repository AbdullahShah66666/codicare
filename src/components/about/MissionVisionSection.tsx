import { Target, Eye } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { InfoCard } from "@/components/about/InfoCard";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide healthcare organizations with cutting-edge technology and revenue cycle solutions that boost their financial performance and operational effectiveness.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become a trustworthy worldwide healthcare technology partner by providing clever, dependable, and patient-centered solutions.",
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
          <h2
            id="mission-vision-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-primary lg:text-4xl"
          >
            Mission &amp; Vision
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
