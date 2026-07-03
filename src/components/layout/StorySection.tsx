import { Container } from "@/components/ui/Container";

type StorySectionProps = {
  title: string;
  paragraphs: readonly string[];
};

export function StorySection({ title, paragraphs }: StorySectionProps) {
  return (
    <section className="bg-surface" aria-labelledby="story-section-heading">
      <Container className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="story-section-heading"
            className="text-3xl font-semibold tracking-tight text-primary lg:text-4xl"
          >
            {title}
          </h2>

          <div className="mt-6 space-y-4 text-left">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-secondary">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
