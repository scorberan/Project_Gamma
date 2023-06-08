import "./alpha.scss";
import GradientTitle from "../../components/titles/GradientTitle";
import Topbar from "../../components/topbar/Topbar";
import ProjectBackgroundTop from "../../components/projects-background/ProjectBackground_Top";
import ProjectBackgroundBottom from "../../components/projects-background/ProjectBackground_Bottom";

function ProjectAlpha() {
  return (
    <>
      <section>
        <Topbar></Topbar>

        <GradientTitle>Project Alpha</GradientTitle>
        <h1 className="title">About me </h1>
        <div className="content-aplha">
          <ProjectBackgroundTop></ProjectBackgroundTop>
          <ProjectBackgroundBottom></ProjectBackgroundBottom>
        </div>
      </section>
    </>
  );
}

export default ProjectAlpha;
