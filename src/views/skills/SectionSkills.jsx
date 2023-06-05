import "./skills.scss";
import { useState } from "react";
import SpainflagIcon from "../../components/icons/Spainflag-icon";
import GermanflagIcon from "../../components/icons/Germanflag-icon";
import EnglishflagIcon from "../../components/icons/Englishflag-icon";
import HtmlIcon from "../../components/icons/Html-icon";
import JavascriptIcon from "../../components/icons/Javascript-icon";
import CssIcon from "../../components/icons/Css-icon";
import PowerpointIcon from "../../components/icons/Powerpoint-icon";
import WordtIcon from "../../components/icons/Word-icon";
import ExcelIcon from "../../components/icons/Excel-icon";
import IndesignIcon from "../../components/icons/Indesign-icon";
import IllustratorIcon from "../../components/icons/Illustrator";
import PhotoshopIcon from "../../components/icons/Photoshop-icon";
import ResearchIcon from "../../components/icons/Research";
import PencilRulerIcon from "../../components/icons/PencilRulerIcon";

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
        <div className="hardskills-content">
          <div className="container-hardskills">
            <div>
              <div className="hardskills-info">
                {" "}
                <div className="content">
                  <div className="hardskills-title"> Trilingual</div>
                  <div>
                    <SpainflagIcon></SpainflagIcon>{" "}
                    <GermanflagIcon></GermanflagIcon>
                    <EnglishflagIcon></EnglishflagIcon>
                  </div>
                </div>
              </div>
              <div className="hardskills-info">
                <div className="content">
                  <div className="hardskills-title">Frond-End</div>
                  <div>
                    <HtmlIcon></HtmlIcon> <JavascriptIcon></JavascriptIcon>{" "}
                    <CssIcon></CssIcon>
                  </div>
                </div>
              </div>
              <div className="hardskills-info">
                <div className="content">
                  <div className="hardskills-title">Microsoft </div>
                  <div>
                    <PowerpointIcon></PowerpointIcon> <WordtIcon></WordtIcon>{" "}
                    <ExcelIcon></ExcelIcon>
                  </div>
                </div>
              </div>
              <div className="hardskills-info">
                <div className="content">
                  <div className="hardskills-title">Adobe creative</div>
                  <div>
                    <IndesignIcon></IndesignIcon>
                    <IllustratorIcon></IllustratorIcon>
                    <PhotoshopIcon></PhotoshopIcon>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="content-small">
                <div className="hardskills-info-small">
                  <div className="inside-content">
                    <div className="hardskills-small-title">Research</div>{" "}
                    <ResearchIcon></ResearchIcon>
                  </div>
                </div>
                <div className="hardskills-info-small">
                  <div className="inside-content">
                    <div className="hardskills-small-title">Wire framing</div>{" "}
                    <PencilRulerIcon></PencilRulerIcon>
                  </div>
                </div>
              </div>
              <div className="content-small">
                <div className="hardskills-info-small">
                  <div className="inside-content">
                    <div className="hardskills-small-title">Prototying</div>{" "}
                    <PencilRulerIcon></PencilRulerIcon>
                  </div>
                </div>
                <div className="hardskills-info-small">
                  <div className="inside-content">
                    <div className="hardskills-small-title">
                      Visual communications
                    </div>{" "}
                    <PencilRulerIcon></PencilRulerIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {contentToShow === "softSkills" && (
        <div className="softskills-content">
          {" "}
          <div className="container ">
            <button className="softskills-info"> Active listener</button>
            <button className="softskills-info">Autodidacticism</button>
            <button className="softskills-info">Open-minded</button>
            <button className="softskills-info">Team-player</button>
            <button className="softskills-info">Communicative</button>
            <button className="softskills-info">Empathetic</button>
            <button className="softskills-info">Adaptability</button>
            <button className="softskills-info">Organized</button>
          </div>
        </div>
      )}
      {contentToShow === "education" && (
        <div className="education-content">
          <button className="edu-info">
            {" "}
            <span className="bold">BA</span>
            Graphic Design ( Visual communications & Illustrations){" "}
            <span className="bold">UWL</span>{" "}
          </button>
          <button className="edu-info">
            MA UX/UI, Digital Marketing and Frond-End Web development{" "}
            <span className="bold"> ESAT</span>
          </button>
        </div>
      )}
    </>
  );
};
