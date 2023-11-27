"use client";

import AboutComponent from "./about";
import ExperienceComponent from "./experience";
import ProjectsComponent from "./projects";
import SkillsComponent from "./skills";
import SocialComponent from "./social";

function IndexComponent() {
  return (
    <div className="mt-12">
      <AboutComponent></AboutComponent>
      <ExperienceComponent></ExperienceComponent>
      <SkillsComponent></SkillsComponent>
      <ProjectsComponent></ProjectsComponent>
      <SocialComponent></SocialComponent>
    </div>
  );
}
export default IndexComponent;
