import { HeroSection } from "@/components/pages/home/hero-section";
import { ExperienceSection } from "@/components/pages/home/experience-section";
import { ProjectsSection } from "@/components/pages/home/projects-section";
import { ContactSection } from "@/components/pages/home/contact-section";
import { Footer } from "@/components/pages/home/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
