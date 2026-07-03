import { SolutionCategory } from "@/components/solutions/SolutionCategory";

const aiSolutions = [
  "AI Documentation Support",
  "Predictive Insights",
  "Workflow Intelligence",
  "Operational Automation",
] as const;

export function AISolutions() {
  return (
    <SolutionCategory
      id="ai"
      eyebrow="AI Solutions"
      title="AI Solutions"
      description="Intelligent capabilities that help healthcare teams reduce manual effort and make faster, better-informed decisions."
      items={aiSolutions}
    />
  );
}
