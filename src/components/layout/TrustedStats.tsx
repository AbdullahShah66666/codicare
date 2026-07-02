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
    <section className="bg-white" aria-labelledby="trusted-stats-heading">
      <Container className="py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Trusted Statistics
          </p>
          <h2
            id="trusted-stats-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl"
          >
            Credibility that supports confident healthcare decisions.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-4xl font-semibold tracking-tight text-slate-950">
                {stat.value}
              </p>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {stat.label}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
