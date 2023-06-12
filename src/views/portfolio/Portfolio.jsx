import GradientTitle from "../../components/titles/GradientTitle";
import "./portfolio.scss";
//import ButtonMedium from "../../components/buttons/ButtonMedium";
import ProjectButtom from "../../components/buttons/ProjectMediumButtom";
import SwiperGallery from "../../components/gallery/SwiperGallery";
function Portfolio() {
  return (
    <>
      <section id="portfolio" className="gape-container">
        <div className="section-portfolio">
          <div className="titles-content">
            <GradientTitle>My case studies</GradientTitle>
            <h3 className="title">Portfolio</h3>
          </div>
          <div className="swiper-content">
            <SwiperGallery></SwiperGallery>
          </div>
          <div className="btn-content">
            <ProjectButtom className="inside-content">See more!</ProjectButtom>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
