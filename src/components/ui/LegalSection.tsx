import type { LegalSection as LegalSectionType } from "@/lib/data/legal";

// Renders individual legal sections with support for paragraphs, lists, and subheadings
type LegalSectionProps = {
  section: LegalSectionType;
};

export function LegalSection({ section }: LegalSectionProps) {
  return (
    <article className="space-y-4">
      <h2 className="text-2xl font-semibold text-primary">{section.heading}</h2>

      <div className="space-y-4 text-base leading-7 text-secondary">
        {section.content.map((item, index) => {
          if (item.type === "paragraph") {
            return (
              <p key={index} className="text-secondary">
                {item.text}
              </p>
            );
          }

          if (item.type === "subheading") {
            return (
              <h3
                key={index}
                className="mt-6 text-lg font-semibold text-primary"
              >
                {item.title}
              </h3>
            );
          }

          if (item.type === "list") {
            return (
              <ul key={index} className="list-inside space-y-2 text-secondary">
                {item.items.map((listItem, listIndex) => (
                  <li
                    key={listIndex}
                    className="ml-2 flex gap-3 text-secondary"
                  >
                    <span className="shrink-0 text-accent">•</span>
                    <span>{listItem}</span>
                  </li>
                ))}
              </ul>
            );
          }

          return null;
        })}
      </div>
    </article>
  );
}
