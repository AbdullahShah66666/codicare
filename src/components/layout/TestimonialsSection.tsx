import type { LucideIcon } from "lucide-react";
import { Quote, Star } from "lucide-react";

import { Container } from "@/components/ui/Container";

const testimonials = [
  {
    initials: "MJ",
    name: "Maya Johnson",
    role: "Operations Director, North Valley Clinic",
    quote:
      "CodiCare gave our team a cleaner way to coordinate care and billing without adding unnecessary complexity.",
  },
  {
    initials: "DR",
    name: "Daniel Reed",
    role: "Practice Manager, Summit Health Group",
    quote:
      "The platform feels built for real healthcare operations. It is simple, dependable, and easy to trust.",
  },
  {
    initials: "SP",
    name: "Sophia Patel",
    role: "Director of Revenue Cycle, ClearPath Care",
    quote:
      "We saw better visibility across teams almost immediately. The workflow structure is exactly what we needed.",
  },
] as const;

export function TestimonialsSection() {
  return (
    <section
      className="bg-surface-secondary"
      aria-labelledby="testimonials-heading"
    >
      <Container className="py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-primary lg:text-4xl"
          >
            Trusted by teams that value clarity and consistency.
          </h2>
          <p className="mt-4 text-lg leading-8 text-secondary">
            Hear how healthcare organizations describe the experience of working
            with CodiCare.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              initials={testimonial.initials}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

type TestimonialCardProps = {
  initials: string;
  name: string;
  role: string;
  quote: string;
};

function TestimonialCard({
  initials,
  name,
  role,
  quote,
}: TestimonialCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-subtle bg-surface p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div
            className="flex size-14 items-center justify-center rounded-full bg-inverse text-sm font-semibold text-on-primary"
            aria-label={`${name} photo placeholder`}
          >
            {initials}
          </div>
          <div>
            <h3 className="text-base font-semibold text-primary">{name}</h3>
            <p className="mt-1 text-sm text-muted">{role}</p>
          </div>
        </div>
        <Quote className="size-5 shrink-0 text-muted" aria-hidden="true" />
      </div>

      <div
        className="mt-6 flex gap-1 text-[color:var(--color-success)]"
        aria-hidden="true"
      >
        <Star className="size-4 fill-current" />
        <Star className="size-4 fill-current" />
        <Star className="size-4 fill-current" />
        <Star className="size-4 fill-current" />
        <Star className="size-4 fill-current" />
      </div>

      <p className="mt-4 text-sm leading-6 text-secondary">"{quote}"</p>
    </article>
  );
}
