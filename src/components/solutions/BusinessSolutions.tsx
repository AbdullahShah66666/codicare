import { SolutionCategory } from "@/components/solutions/SolutionCategory";

const businessSolutions = [
  "Revenue Cycle Management",
  "Claims Workflow Automation",
  "Practice Operations",
  "Financial Reporting",
] as const;

export function BusinessSolutions() {
  return (
    <SolutionCategory
      id="business"
      eyebrow="Business Solutions"
      title="Business Solutions"
      description="Operational tools that help healthcare organizations improve billing visibility, manage workflows, and support business performance."
      items={businessSolutions}
    />
  );
}
