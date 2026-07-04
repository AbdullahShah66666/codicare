import type { LegalContent } from "@/lib/data/legal";
import { Container } from "@/components/ui/Container";
import { LegalSection } from "@/components/ui/LegalSection";

type LegalPageProps = {
  content: LegalContent;
};

export function LegalPage({ content }: LegalPageProps) {
  return (
    <section className="bg-surface py-16 lg:py-20">
      <Container>
        {/* Page Header */}
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            {content.title}
          </h1>

          <p className="mt-4 text-sm text-text-muted">
            Last updated: {content.lastUpdated}
          </p>

          {content.introduction && (
            <p className="mt-6 text-lg leading-8 text-secondary">
              {content.introduction}
            </p>
          )}

          <div className="mt-12 border-t border-subtle" />
        </div>

        {/* Content Sections */}
        <div className="mx-auto max-w-3xl space-y-12 pt-12">
          {content.sections.map((section) => (
            <LegalSection key={section.id} section={section} />
          ))}
        </div>
      </Container>
    </section>
  );
}
