import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillSection from "./components/sections/SkillSection";
import ContactSection from "./components/sections/ContactSection";
import ClientSectionsWrapper from "./components/ClientSectionsWrapper";
import { PortfolioSection } from "./components/sections/PortfolioSection";
import VantaBackground from "./components/VantaBackground";

export default function Home() {
  return (
    <div className="relative">
      <VantaBackground />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ClientSectionsWrapper />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}
