import { Container } from "@/components/ui/Container";

const stats = [
  {
    value: "12+",
    label: "Years of Experience",
    description: "Supporting healthcare operations with consistent execution.",
  },
  {
    value: "48K",
    label: "Claims Processed",
    description: "Built for high-volume workflows and dependable tracking.",
  },
  {
    value: "320+",
    label: "Healthcare Providers Served",
    description: "Trusted by teams of different sizes and specialties.",
  },
  {
    value: "$180M",
    label: "Revenue Managed",
    description: "Clear visibility into financially important operations.",
  },
] as const;

export function TrustedStats() {
  return (
    <section className="bg-surface" aria-labelledby="trusted-stats-heading">
      <Container className="py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-muted">
            Trusted Statistics
          </p>
          <h2
            id="trusted-stats-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-primary lg:text-4xl"
          >
            Credibility that supports confident healthcare decisions.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-subtle bg-surface p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-4xl font-semibold tracking-tight text-primary">
                {stat.value}
              </p>
              <h3 className="mt-4 text-base font-semibold text-primary">
                {stat.label}
              </h3>
              <p className="mt-2 text-sm leading-6 text-secondary">
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
