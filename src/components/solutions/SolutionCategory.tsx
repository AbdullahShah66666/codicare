import { Container } from "@/components/ui/Container";

type SolutionCategoryProps = {
  id: string;
  title: string;
  description: string;
  services: readonly SolutionService[];
};

export function SolutionCategory({
  id,
  title,
  description,
  services,
}: SolutionCategoryProps) {
  const columnCount = Math.min(services.length, 4);

  return (
    <section className="bg-white" aria-labelledby={`${id}-heading`}>
      <Container className="py-16 lg:py-20">
        <div className="max-w-3xl">
          <h2
            id={`${id}-heading`}
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
        </div>

        <ul
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:[grid-template-columns:repeat(var(--solution-columns),minmax(0,1fr))]"
          style={{ ["--solution-columns" as "--solution-columns"]: `${columnCount}` }}
        >
          {services.map((service) => (
            <li
              key={service.id}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-950">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

type SolutionService = {
  id: string;
  title: string;
  description: string;
};
