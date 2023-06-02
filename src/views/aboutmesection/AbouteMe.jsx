import "./aboutme.scss";
import GradientTitle from "../../components/titles/GradientTitle";
import ImgAbout from "../../assets/images/AboutMe-img.jpg";
import { SectionSkillsContent } from "../skills/SectionSkills";

function AboutMe() {
  return (
    <>
      <section className="section-about">
        <div className="section-img-about">
          <img
            src={ImgAbout}
            alt="Black and White of Sarah Corberan, where she isturn backwards and slightly looking backwards into the camera "
          />
        </div>
        <div className="about-content">
          <div className="sub-title-about">
            <GradientTitle>My About me details</GradientTitle>
            <h3 className="about-title">About me </h3>
          </div>
          <p className="short-intro-about">
            I’m a 23 year old passionate and creative developer. Someone who is
            a out of the box thinker. Currently based Valencia where I just
            finished my Master degree. I enjoy every of the design process, from
            discussion and collaboration.
          </p>
          <SectionSkillsContent></SectionSkillsContent>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
