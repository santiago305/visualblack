import {
  AboutIntroSection,
  AboutMissionVisionSection,
  AboutProcessSection,
  // AboutTeamSection,
  // AboutTimelineSection,
  AboutValuesSection,
} from "@/features/about";

export function AboutPage() {
  return (
    <>
      <AboutIntroSection />
      <AboutMissionVisionSection />
      {/* <AboutTimelineSection /> */}
      <AboutValuesSection />
      <AboutProcessSection />
      {/* <AboutTeamSection /> */}
    </>
  );
}
