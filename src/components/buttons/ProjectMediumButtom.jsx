import { Link } from 'react-router-dom';
import './buttons.scss';

const ProjectButtom = (props) => {
  return (
    <div className="link-projects">
      <li>
        <Link className="Medium-btn" to="/projects">
          See more
        </Link>
      </li>
    </div>
  );
};

export default ProjectButtom;
