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

        <div className="container-card">
          <div className="project-card">
            <div className="card">
              <img
                src={ImgReseluta}
                className="card-img"
                alt="colorfull picture of phone screens, shoeing how Reseluta (the website) will look like"
              />
              <div className="card-body">
                <h1 className="card-title">Reseluta</h1>
                <p className="card-subtitle">Project Beta</p>
                <p className="card-info">
                  Unlock your Business's full potential with Resoluta's expert
                  Problem-Solving solutions and unwavering dedication to your
                  success.
                </p>
                <div className="card-btn-container">
                  <button className="card-btn">See more</button>
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="card">
              <img
                src={ImgReseluta}
                className="card-img"
                alt="colorfull picture of phone screens, shoeing how Reseluta (the website) will look like"
              />
              <div className="card-body">
                <h1 className="card-title">Reseluta</h1>
                <p className="card-subtitle">Project Beta</p>
                <p className="card-info">
                  Unlock your Business's full potential with Resoluta's expert
                  Problem-Solving solutions and unwavering dedication to your
                  success.
                </p>
                <div className="card-btn-container">
                  <button className="card-btn">See more</button>
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="card">
              <img
                src={ImgReseluta}
                className="card-img"
                alt="colorfull picture of phone screens, shoeing how Reseluta (the website) will look like"
              />
              <div className="card-body">
                <h1 className="card-title">Reseluta</h1>
                <p className="card-subtitle">Project Beta</p>
                <p className="card-info">
                  Unlock your Business's full potential with Resoluta's expert
                  Problem-Solving solutions and unwavering dedication to your
                  success.
                </p>
                <div className="card-btn-container">
                  <button className="card-btn">See more</button>
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="card">
              <img
                src={ImgReseluta}
                className="card-img"
                alt="colorfull picture of phone screens, shoeing how Reseluta (the website) will look like"
              />
              <div className="card-body">
                <h1 className="card-title">Reseluta</h1>
                <p className="card-subtitle">Project Beta</p>
                <p className="card-info">
                  Unlock your Business's full potential with Resoluta's expert
                  Problem-Solving solutions and unwavering dedication to your
                  success.
                </p>
                <div className="card-btn-container">
                  <button className="card-btn">See more</button>
                </div>
              </div>
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
