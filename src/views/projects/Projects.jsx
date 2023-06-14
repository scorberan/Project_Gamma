import "./projects.scss";
//import GradientTitle from "../../components/titles/GradientTitle";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../footer/Footer";
//import ImgReseluta from '../../assets/images/iphone-mockup.png';
import ImgGraphic from "../../assets/images/Illustrations.png";
import LightUpCover from "../../assets/images/Lightup/LightUpCover.png.png";
import PORTFOLIO from "../../assets/portfolio.pdf";
import ResolutaProject from "./ResolutaProject";

function Projects() {
  return (
    <>
      <section>
        <Topbar></Topbar>
        <div className="projects-page-title">
          <h2 className="gradient-title-projects">My case studies</h2>
          <h1 className="title-projects">Portfolio</h1>
        </div>

        <div className="container-card">
          <div className="project-card">
            <div className="card">
              <img
                src={CoverImgAboutMe}
                className="card-img"
                alt="mockups of the about me website in different devices"
              />
              <div className="card-body">
                <h1 className="card-title">About me </h1>
                <p className="card-subtitle">Project Alpha</p>
                <p className="card-info">
                  The light is shining, and this time is on me. Come get a
                  glimpse into my world and get to know me.
                </p>
                <div className="card-btn-container">
                  <li>
                    <a href="/aboutme" className="card-btn">
                      {" "}
                      See more
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <ResolutaProject />
          <div className="project-card">
            <div className="card">
              <img
                src={ImgGraphic}
                className="card-img"
                alt="colorfull picture of phone screens, shoeing how Reseluta (the website) will look like"
              />
              <div className="card-body">
                <h1 className="card-title">Graphic & Illustractions design</h1>
                <p className="card-subtitle">BA portfolio</p>
                <p className="card-info">
                  Take a journey through the past, where you be able to see all
                  of my best work during my bachelors degree.
                </p>
                <div className="card-btn-container">
                  <a href={PORTFOLIO} target="_blank" className="card-btn">
                    See more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="card">
              <img
                src={LightUpCover}
                className="card-img"
                alt="colorfull picture of phone screens, shoeing how Reseluta (the website) will look like"
              />
              <div className="card-body">
                <h1 className="card-title">LightUp</h1>
                <p className="card-subtitle">ongoing project</p>
                <p className="card-info">
                  Fasten your seatbelts, we are on for a ride. Ready to
                  experience the most captivating feature out in the market for
                  your car?
                </p>
                <div className="card-btn-container">
                  <a className="card-btn">On hold</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="link-projects">
          <li>
            <a className="projects-link" href="/">
              Go back
            </a>
          </li>
        </div>
        <Footer></Footer>
      </section>
    </>
  );
}

export default Projects;
