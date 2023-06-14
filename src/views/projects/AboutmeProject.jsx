import "./projects.scss";
import CoverImgAboutMe from "../../assets/images/CoverImgAboutMe.png";

function AboutMeProject(props) {
  return (
    <div
      className={`project-card ${
        props.sliderMode ? "project-card-slider" : ""
      }`}
    >
      <div className="card">
        <img
          src={CoverImgAboutMe}
          className="card-img"
          alt="colorfull picture of phone screens, shoeing how Reseluta (the website) will look like"
        />
        <div className="card-body">
          <h1 className="card-title">About me</h1>
          <p className="card-subtitle">Project Alpha</p>
          <p className="card-info">
            The light is shining, and this time is on me. Come get a glimpse
            into my world and get to know me.
          </p>
          <div className="card-btn-container">
            <li>
              <a href="/resoluta" className="card-btn">
                See more
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeProject;
