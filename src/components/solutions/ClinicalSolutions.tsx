import { SolutionCategory } from "@/components/solutions/SolutionCategory";

const clinicalSolutions = [
  "Electronic Health Records",
  "Specialty EHR",
  "Patient Portal",
  "Mobile Healthcare Access",
] as const;

export function ClinicalSolutions() {
  return (
    <SolutionCategory
      id="clinical"
      eyebrow="Clinical Solutions"
      title="Clinical Solutions"
      description="Technology-driven clinical solutions designed to improve patient care and streamline healthcare operations."
      items={clinicalSolutions}
    />
  );
}
