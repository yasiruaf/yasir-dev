import dynamic from "next/dynamic";

import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillSection from "./components/sections/SkillSection";
import ProjectSection from "./components/sections/ProjectSection";
import ContactSection from "./components/sections/ContactSection";

const ExperienceSection = dynamic(
  () => import("./components/sections/ExperienceSection"),
  { ssr: false }
);
const EducationSection = dynamic(
  () => import("./components/sections/EducationSection"),
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <ProjectSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}
