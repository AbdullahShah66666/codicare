import { Hero } from "@/components/layout/Hero";
import { TrustedStats } from "@/components/layout/TrustedStats";
import { SolutionsSection } from "@/components/layout/SolutionsSection";
import { WhyChooseUsSection } from "@/components/layout/WhyChooseUsSection";
import { CTASection } from "@/components/layout/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionsSection />
      <TrustedStats />
      <WhyChooseUsSection />
      <CTASection />
    </>
  );
}
