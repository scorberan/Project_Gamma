import "./projects.scss";
//import CoverImgAboutMe from "../../assets/images/CoverImgAboutMe.png";
import ImgGraphic from "../../assets/images/Illustrations.png";

function GraphicPortfolio(props) {
  return (
    <div
      className={`project-card ${
        props.sliderMode ? "project-card-slider" : ""
      }`}
    >
      <div className="card">
        <img
          src={ImgGraphic}
          className="card-img"
          alt="colorfull picture of phone screens, shoeing how Reseluta (the website) will look like"
        />
        <div className="card-body-landing">
          <h1 className="card-title">Graphic & Illustractions design</h1>
          <p className="card-subtitle">BA portfolio</p>
          <p className="card-info-landing">
            Take a journey through the past, where you be able to see all of my
            best work during my bachelors degree
          </p>
          <div className="card-btn-container">
            <li>
              <a href="/resoluta" className="card-btn-landing">
                See more
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphicPortfolio;
