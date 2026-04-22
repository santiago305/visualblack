import {
  HeroSection,
  MetricsSection,
  ServicesPreviewSection,
} from "@/features/home";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsSection />
      {/* <FeaturedPortfolioSection /> */}
      <ServicesPreviewSection />
    </>
  );
}
