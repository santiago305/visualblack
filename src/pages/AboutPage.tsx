import {
  AboutIntroSection,
  AboutMissionVisionSection,
  AboutProcessSection,
  // AboutTeamSection,
  // AboutTimelineSection,
  AboutValuesSection,
} from "@/features/about";
import { PageSeo, StructuredData } from "@/components/seo";
import { aboutPageSeo, createAboutBreadcrumbSchema } from "@/lib/seo";

export function AboutPage() {
  return (
    <>
      <PageSeo metadata={aboutPageSeo} />
      <StructuredData id="about-breadcrumb" data={createAboutBreadcrumbSchema()} />
      <AboutIntroSection />
      <AboutMissionVisionSection />
      {/* <AboutTimelineSection /> */}
      <AboutValuesSection />
      <AboutProcessSection />
      {/* <AboutTeamSection /> */}
    </>
  );
}
