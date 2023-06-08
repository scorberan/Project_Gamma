import "./projects.scss";
import GradientTitle from "../../components/titles/GradientTitle";
import Topbar from "../../components/topbar/Topbar";
import ImgReseluta from "../../assets/images/iphone-mockup.png";
//import ImgGraphic from "../../assets/images/Illustrations.png";

function Projects() {
  return (
    <>
      <section>
        <Topbar></Topbar>
        <div>
          <GradientTitle>My case studies</GradientTitle>
          <h1 className="title">Portfolio</h1>

          <div className="project-container">
            <div className="project">
              <img
                src={ImgReseluta}
                alt="colorfull picture of phone screens, shoeing how Reseluta (the website) will look like"
              />
              <div className="project-content">
                <h3>Mi projecto de gatos</h3>
                <p>
                  lorem ipsuumlorem ipsuumlorem ipsuumlorem ipsuumlorem
                  ipsuumlorem ipsuumlorem ipsuumlorem ipsuumlorem ipsuumlorem
                  ipsuumlorem ipsuumlorem ipsuumlorem ipsuumlorem ipsuumlorem
                  ipsuumlorem ipsuumlorem ipsuumlorem ipsuum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
