"use client";

import dynamic from "next/dynamic";

const ExperienceSection = dynamic(
  () => import("./sections/ExperienceSection"),
  { ssr: false }
);
const EducationSection = dynamic(() => import("./sections/EducationSection"), {
  ssr: false,
});

export default function ClientSectionsWrapper() {
  return (
    <>
      <ExperienceSection />
      <EducationSection />
    </>
  );
}
