import { AboutHero } from "@/components/about/AboutHero";
import { CoreValuesSection } from "@/components/about/CoreValuesSection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { StorySection } from "@/components/about/StorySection";
import { WhyChooseUsSection } from "@/components/about/WhyChooseUsSection";
import { CTASection } from "@/components/ui/CTASection";

const storyParagraphs = [
  "Codicares is a healthcare technology company committed to making healthcare providers' financial and operational problems easier to handle. We assist medical practices in streamlining workflows, streamlining reimbursement procedures, and boosting overall productivity by fusing industry knowledge with creative solutions. Our mission is to give healthcare workers dependable, scalable, and secure solutions so they can devote more time to patient care and less time to administrative duties.",
] as const;

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection title="Who We Are" paragraphs={storyParagraphs} />
      <MissionVisionSection />
      <CoreValuesSection />
      <WhyChooseUsSection />
      <CTASection />
    </>
  );
}
