import './projects.scss';
//import GradientTitle from "../../components/titles/GradientTitle";
import ImgReseluta from '../../assets/images/iphone-mockup.png';

function ResolutaProject(props) {
  return (
    <div className={`project-card ${props.sliderMode ? 'project-card-slider' : ''}`}>
      <div className="card">
        <img
          src={ImgReseluta}
          className="card-img"
          alt="colorfull picture of phone screens, shoeing how Reseluta (the website) will look like"
        />
        <div className="card-body">
          <h1 className="card-title">Resoluta</h1>
          <p className="card-subtitle">Project Beta</p>
          <p className="card-info">
            Unlock your Business's full potential with Resoluta's expert Problem-Solving solutions and unwavering
            dedication to your success.
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

export default ResolutaProject;
