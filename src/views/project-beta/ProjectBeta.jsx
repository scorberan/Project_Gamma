import "./beta.scss";
//import ImgReseluta from "../../assets/images/iphone-mockup.png";
//import GradientTitle from "../../components/titles/GradientTitle";
import Topbar from "../../components/topbar/Topbar";
//import ProjectBackgroundTop from "../../components/projects-background/ProjectBackground_Top";
//import ProjectBackgroundBottom from "../../components/projects-background/ProjectBackground_Bottom";

function ProjectBeta() {
  return (
    <>
      <section className="background-linear-gradient">
        <Topbar></Topbar>
        <div className="title-container">
          <h2 className="gradient-title">Project Beta</h2>
          <p className="subtitle">
            Unlock your Business's full potential with Resoluta's expert
            Problem-Solving solutions and unwavering dedication to your success.
          </p>
        </div>
        <div className="beta-content">
          <div className="background-beta-purple">
            <div>
              <div className="info-title">
                <h3>Reseluta?Who are we?</h3>
              </div>
              <div></div>
            </div>
          </div>
          <div className="background-beta-green"></div>
          <div className="background-beta-blue"></div>
        </div>
      </section>
    </>
  );
}

export default ProjectBeta;
