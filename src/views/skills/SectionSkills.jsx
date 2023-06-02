import "./skills.scss";
import { useState } from "react";

export const SectionSkillsContent = (props) => {
  const [contentToShow, setContentToShow] = useState("hardSkills");
  return (
    <>
      <div className="skills-content">
        <button
          onClick={() => setContentToShow("hardSkills")}
          className={contentToShow === "hardSkills" ? "btn-purple" : ""}
        >
          Hard skills
        </button>
        <button
          onClick={() => setContentToShow("softSkills")}
          className={contentToShow === "softSkills" ? "btn-green" : ""}
        >
          Soft skills
        </button>
        <button
          onClick={() => setContentToShow("education")}
          className={contentToShow === "education" ? "btn-blue" : ""}
        >
          Education
        </button>
      </div>
      {contentToShow === "hardSkills" && <div>Estas son mis hard skills</div>}
      {contentToShow === "softSkills" && <div>Estas son mis soft skills</div>}
      {contentToShow === "education" && <div>Estas son mis education</div>}
    </>
  );
};
