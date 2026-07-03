import { SolutionCategory } from "@/components/solutions/SolutionCategory";

const carePrograms = [
  "Chronic Care Programs",
  "Patient Engagement",
  "Care Coordination",
  "Remote Support Services",
] as const;

export function CarePrograms() {
  return (
    <SolutionCategory
      id="care"
      eyebrow="Care Programs"
      title="Care Programs"
      description="Flexible care program support that helps providers stay organized around patient needs and ongoing engagement."
      items={carePrograms}
    />
  );
}
