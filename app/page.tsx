import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillSection from "./components/sections/SkillSection";
import ProjectSection from "./components/sections/ProjectSection";
import ContactSection from "./components/sections/ContactSection";
import ClientSectionsWrapper from "./components/ClientSectionsWrapper";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ClientSectionsWrapper />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
