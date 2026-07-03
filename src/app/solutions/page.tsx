import { CTASection } from "@/components/solutions/CTASection";
import { FAQSection } from "@/components/solutions/FAQSection";
import { SolutionCategory } from "@/components/solutions/SolutionCategory";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { WhyChooseCodiCare } from "@/components/solutions/WhyChooseCodiCare";
import { solutionCategories } from "@/lib/data/solutions";

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      {solutionCategories.map((category) => (
        <SolutionCategory
          key={category.id}
          id={category.id}
          title={category.title}
          description={category.description}
          services={category.services}
        />
      ))}
      <WhyChooseCodiCare />
      <FAQSection />
      <CTASection />
    </>
  );
}
