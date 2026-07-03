import { Container } from "@/components/ui/Container";
import { HeroCards } from "@/components/ui/HeroCards";

const aboutHeroCards = [
  {
    title: "Innovation",
    description:
      "We embrace modern technology to build smarter, faster, and more efficient healthcare solutions.",
    className: "left-0 top-6 -rotate-3",
  },
  {
    title: "Security",
    description:
      "Protecting sensitive healthcare information with secure, dependable digital solutions.",
    className: "left-8 bottom-24 rotate-2",
  },
  {
    title: "Trust",
    description:
      "Strong partnerships are built through transparency, reliability, and long-term commitment.",
    className: "right-0 top-24 rotate-2",
  },
  {
    title: "Excellence",
    description:
      "We continuously improve our services to deliver meaningful outcomes for healthcare organizations.",
    className: "right-6 bottom-0 -rotate-2",
  },
];

export function AboutHero() {
  return (
    <section
      className="border-b border-subtle bg-surface"
      aria-labelledby="about-hero-heading"
    >
      <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-16 py-20 lg:grid-cols-[1fr_0.95fr] lg:py-24">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full border border-primary-light bg-primary-light px-4 py-1.5 text-sm font-medium text-accent uppercase">
            Trusted partner for healthcare solutions
          </p>

          <h1
            id="about-hero-heading"
            className="mt-6 text-5xl font-semibold tracking-tight text-primary lg:text-6xl lg:leading-[1.05]"
          >
            CodiCare helps healthcare teams work with clarity and confidence.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-secondary">
            Codicare provides healthcare technology, medical billing, coding, and revenue cycle solutions to help healthcare organisations improve their financial performance, streamline operations, and focus on delivering exceptional patient care.
          </p>
        </div>

        <HeroCards cards={aboutHeroCards} />
      </Container>
    </section>
  );
}
