import "./projects.scss";
//import GradientTitle from "../../components/titles/GradientTitle";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../footer/Footer";
import ImgReseluta from "../../assets/images/iphone-mockup.png";
//import ImgGraphic from "../../assets/images/Illustrations.png";

function Projects() {
  return (
    <>
      <section>
        <Topbar></Topbar>
        <div className="projects-page-title">
          <h2 className="gradient-title-projects">My case studies</h2>
          <h1 className="title-projects">Portfolio</h1>
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
        </div>
        <div>
          <a className="projects-link" href="#portfolio">
            Go back
          </a>
        </div>
        <Footer></Footer>
      </section>
    </>
  );
}

export default Projects;
