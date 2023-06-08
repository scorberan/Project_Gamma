import "./projects.scss";
import GradientTitle from "../../components/titles/GradientTitle";
import Topbar from "../../components/topbar/Topbar";
import ButtonMedium from "../../components/buttons/ButtonMedium";
import ImgReseluta from "../../assets/images/iphone-mockup.png";
//import ImgGraphic from "../../assets/images/Illustrations.png";

function Projects() {
  return (
    <>
      <section>
        <Topbar></Topbar>
        <div className="projects-page-title">
          <GradientTitle>My case studies</GradientTitle>
          <h1 className="title">Portfolio</h1>
        </div>
        <div className="projects-content">
          <div className="project-container">
            <div className="project-main">
              <div className="project">ABOUT ME</div>
              <div className="project">
                <img
                  src={ImgReseluta}
                  alt="colorfull picture of phone screens, shoeing how Reseluta (the website) will look like"
                />
              </div>
            </div>
            <div className="project-main">
              <div className="project">GRAPHIC</div>
              <div className="project">LIGHTUP!</div>
            </div>
          </div>
          <div className="btn-container">
            <ButtonMedium>Go back</ButtonMedium>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
