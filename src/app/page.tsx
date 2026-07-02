import { Hero } from "@/components/layout/Hero";
import { TrustedStats } from "@/components/layout/TrustedStats";
import { ServicesSection } from "@/components/layout/ServicesSection";
import { WhyChooseUsSection } from "@/components/layout/WhyChooseUsSection";
import { HowWeWorkSection } from "@/components/layout/HowWeWorkSection";
import { SolutionsPreviewSection } from "@/components/layout/SolutionsPreviewSection";
import { TestimonialsSection } from "@/components/layout/TestimonialsSection";
import { CTASection } from "@/components/layout/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedStats />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowWeWorkSection />
      <SolutionsPreviewSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
