import { CTASection } from "@/components/ui/CTASection";
import { FAQSection } from "@/components/solutions/FAQSection";
import { Hero as SolutionsHero } from "@/components/solutions/Hero";
import { SolutionCategory } from "@/components/solutions/SolutionCategory";
import { WhyChooseUsSection } from "@/components/about/WhyChooseUsSection";
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
      <WhyChooseUsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
