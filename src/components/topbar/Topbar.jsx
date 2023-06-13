import './topBar.scss';
import HomeIcon from '../icons/Home-icon';
import { Link } from 'react-router-dom';
import ThemeButton from '../tooglebtn/ThemeButton';

function Topbar() {
  return (
    <>
      <div className="nav-bar">
        <p className="logo-bold">
          SARAH<span className="logo-thin">CORBERAN</span>
        </p>
        <div className="nav-btn">
          <li>
            <Link to="/">
              <HomeIcon></HomeIcon>
            </Link>
          </li>
          <Link className="nav-btn" to="/#portfolio">
            Portfolio
          </Link>
          <Link className="nav-btn" to="/#contact">
            Contact
          </Link>
          <ThemeButton />
        </div>
      </div>
    </>
  );
}

export default Topbar;
