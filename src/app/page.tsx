import { Hero } from "@/components/home/Hero";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { TrustedStats } from "@/components/home/TrustedStats";
import { WhyChooseUsSection } from "@/components/about/WhyChooseUsSection";
import { CTASection } from "@/components/ui/CTASection";

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
