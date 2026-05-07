import type { Metadata } from "next";
import { AboutHero } from "@/components/pages/about/about-hero";
import { AboutJourney } from "@/components/pages/about/about-journey";
import { AboutExpertise } from "@/components/pages/about/about-expertise";
import { AboutValues } from "@/components/pages/about/about-values";
import { AboutCta } from "@/components/pages/about/about-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Ilham Prima Y — a software engineer building MES, IoT systems, and real-time dashboards for manufacturing.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutJourney />
      <AboutExpertise />
      <AboutValues />
      <AboutCta />
    </main>
  );
}
