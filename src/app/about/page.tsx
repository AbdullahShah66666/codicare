import { AboutHero } from "@/components/layout/AboutHero";
import { CoreValuesSection } from "@/components/layout/CoreValuesSection";
import { MissionVisionSection } from "@/components/layout/MissionVisionSection";
import { WhyChooseUsSection } from "@/components/layout/WhyChooseUsSection";
import { StorySection } from "@/components/layout/StorySection";
import { CTASection } from "@/components/solutions/CTASection";

const storyParagraphs = [
  "CodiCare exists because healthcare teams need more than disconnected tools and manual workarounds. They need a dependable foundation that helps them stay organized, informed, and focused on care.",
  "We solve the challenge of fragmented operations by bringing clarity to the workflows that matter most across clinical, business, and patient-facing experiences.",
  "Our approach is intentionally practical: reusable, scalable, and built to support the realities of modern healthcare organizations.",
] as const;

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection title="Our Story" paragraphs={storyParagraphs} />
      <MissionVisionSection />
      <CoreValuesSection />
      <WhyChooseUsSection />
      <CTASection />
    </>
  );
}
