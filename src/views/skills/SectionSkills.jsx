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
          className={`skill-button ${
            contentToShow === "hardSkills" ? "btn-purple" : ""
          }`}
        >
          Hard skills
        </button>
        <button
          onClick={() => setContentToShow("softSkills")}
          className={`skill-button ${
            contentToShow === "softSkills" ? "btn-green" : ""
          } `}
        >
          Soft skills
        </button>
        <button
          onClick={() => setContentToShow("education")}
          className={`skill-button ${
            contentToShow === "education" ? "btn-blue" : ""
          } `}
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
                    <SpainflagIcon></SpainflagIcon>
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
            <div className="content-info">
              <div className="softskills-info">
                <div className="softskills-title">Active listener</div>
              </div>
              <div className="softskills-info">
                <div className="softskills-title">Autodidacticism</div>
              </div>
            </div>
            <div className="content-info">
              <div className="softskills-info">
                <div className="softskills-title">Open-minded</div>
              </div>
              <div className="softskills-info">
                <div className="softskills-title">Team-player</div>
              </div>
            </div>
            <div className="content-info">
              <div className="softskills-info">
                <div className="softskills-title">Communicative</div>
              </div>
              <div className="softskills-info">
                <div className="softskills-title">Empathetic</div>
              </div>
            </div>
            <div className="content-info">
              <div className="softskills-info">
                <div className="softskills-title">Adaptability</div>
              </div>
              <div className="softskills-info">
                <div className="softskills-title">Organized</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {contentToShow === "education" && (
        <div className="education-content">
          <div className="edu-info">
            {" "}
            <div className="edu-title">
              BA Graphic Design ( Visual communications & Illustrations)- UWL{" "}
            </div>
          </div>
          <div className="edu-info">
            {" "}
            <div className="edu-title">
              MA UX/UI, Digital Marketing and Frond-End Web development-ESAT{" "}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
