import GradientTitle from "../../components/titles/GradientTitle";
import "./portfolio.scss";
import ButtonMedium from "../../components/buttons/ButtonMedium";

function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <div>
          <GradientTitle>My case studies</GradientTitle>
          <h3 className="title">Portfolio</h3>
        </div>
        <ButtonMedium>See more!</ButtonMedium>
      </section>
    </>
  );
}

export default Portfolio;
