import { useLocation } from 'react-router-dom';
import HeaderTitle from '../../components/titles/HeaderTitle';
import ButtonLarge from '../../components/buttons/ButtonLarge';
import Topbar from '../../components/topbar/Topbar';
import AboutMe from '../aboutmesection/AbouteMe';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './landing.scss';
import { useEffect } from 'react';

const Landing = () => {
  const { hash } = useLocation();

  useEffect(() => {
    const section = hash ? document.querySelector(hash) : null;

    if (section) {
      section.scrollIntoView();
    }
  }, [hash]);

  return (
    <div id="home">
      <div className="landing-content">
        <div className="landing-background">
          <Topbar></Topbar>
          <div className="main-content">
            <HeaderTitle>Hi! I'm Sarah, UX/UI Designer</HeaderTitle>
            <ButtonLarge>Check it out!</ButtonLarge>
          </div>
        </div>
      </div>

      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Landing;
