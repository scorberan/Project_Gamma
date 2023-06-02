import HeaderTitle from "../../components/titles/HeaderTitle";
import ButtonLarge from "../../components/buttons/ButtonLarge";
import Topbar from "../../components/topbar/Topbar";
import AboutMe from "../aboutmesection/AbouteMe";

const Landing = () => {
  return (
    <div>
      <Topbar></Topbar>
      <HeaderTitle>Hi! I'm Sarah, UX/UI Designer</HeaderTitle>
      <ButtonLarge>Check it out!</ButtonLarge>
      <AboutMe></AboutMe>
    </div>
  );
};

export default Landing;
