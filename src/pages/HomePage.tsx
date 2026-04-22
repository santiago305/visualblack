import {
  HeroSection,
  MetricsSection,
  ServicesPreviewSection,
} from "@/features/home";
import { PageSeo } from "@/components/seo";
import { homePageSeo } from "@/lib/seo";

export function HomePage() {
  return (
    <>
      <PageSeo metadata={homePageSeo} />
      <HeroSection />
      <MetricsSection />
      {/* <FeaturedPortfolioSection /> */}
      <ServicesPreviewSection />
    </>
  );
}
