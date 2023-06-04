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
        <div>
          <HomeIcon></HomeIcon>
          <button className="nav-btn">Portfolio</button>
          <button className="nav-btn">Contact</button>
          <ToggleButton></ToggleButton>
        </div>
      </div>
    </>
  );
}

export default Topbar;
