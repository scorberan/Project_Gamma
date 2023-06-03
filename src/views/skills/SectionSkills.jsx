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
      {contentToShow === "hardSkills" && (
        <div className="hardskills-content">Estas son mis hard skills</div>
      )}
      {contentToShow === "softSkills" && (
        <div className="softskills-content">Estas son mis soft skills</div>
      )}
      {contentToShow === "education" && (
        <div className="education-content">
          <button className="ba-info">
            BA Graphic Design ( Visual communications & Illustrations) UWL
          </button>
        </div>
      )}
    </>
  );
};
