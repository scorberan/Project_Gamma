import "./topBar.scss";
import HomeIcon from "../icons/Home-icon";

function Topbar() {
  return (
    <>
      <div className="nav-bar">
        <p className="logo-bold">
          SARAH<span className="logo-thin">CORBERAN</span>
        </p>
        <HomeIcon></HomeIcon>
        <button className="nav-btn">Portfolio</button>
        <button className="nav-btn">Contact</button>
      </div>
    </>
  );
}

export default Topbar;
