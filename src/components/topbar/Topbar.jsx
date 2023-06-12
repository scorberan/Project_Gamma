import "./topBar.scss";
import HomeIcon from "../icons/Home-icon";
import ToggleButton from "../tooglebtn/ToogleBtn";

function Topbar() {
  return (
    <>
      <div className="nav-bar">
        <p className="logo-bold">
          SARAH<span className="logo-thin">CORBERAN</span>
        </p>
        <div className="nav-btn">
          <li>
            <a href="/">
              {" "}
              <HomeIcon></HomeIcon>
            </a>
          </li>
          <a className="nav-btn" href="#portfolio">
            Portfolio
          </a>
          <a className="nav-btn" href="#contact">
            Contact
          </a>
          <ToggleButton></ToggleButton>
        </div>
      </div>
    </>
  );
}

export default Topbar;
