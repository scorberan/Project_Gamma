import "./projects.scss";
//import CoverImgAboutMe from "../../assets/images/CoverImgAboutMe.png";
///import ImgGraphic from "../../assets/images/Illustrations.png";
import LightUpCover from "../../assets/images/Lightup/LightUpCover.png.png";

function LightUpProject(props) {
  return (
    <div
      className={`project-card ${
        props.sliderMode ? "project-card-slider" : ""
      }`}
    >
      <div className="card">
        <img
          src={LightUpCover}
          className="card-img"
          alt="colorfull picture of phone screens, shoeing how Reseluta (the website) will look like"
        />
        <div className="card-body-landing">
          <h1 className="card-title">LightUp</h1>
          <p className="card-subtitle">ongoing project</p>
          <p className="card-info-landing">
            Fasten your seatbelts, we are on for a ride. Ready to experience the
            most captivating feature out in the market for your car?
          </p>
          <div className="card-btn-container">
            <li>
              <a href="/resoluta" className="card-btn-landing">
                On hold
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LightUpProject;
