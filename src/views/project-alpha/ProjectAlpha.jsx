import "./alpha.scss";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../footer/Footer";
import ImgAboutUsResoluta from "../../assets/images/illustrations_resoluta/AboutUs-Illustration.png";

function ProjectAlpha() {
  return (
    <>
      <section className="background-linear-gradient">
        <Topbar></Topbar>
        <div className="title-container">
          <h2 className="gradient-title">Project Alpha</h2>
          <p className="subtitle">
            Unlock your Business's full potential with Resoluta's expert
            Problem-Solving solutions and unwavering dedication to your success.
          </p>
        </div>
        <div className="beta-content">
          <div className="background-beta-purple">
            <div className="beta-container">
              <div className="info-title">
                <div className="beta-title-container">
                  <h1 className="number-title">01</h1>
                  <h2 className="beta-title">Resoluta</h2>
                </div>
                <div className="beta-info-container">
                  <div className="info-purple">
                    <h3 className="text-title">Who are we?</h3>
                    <p className="beta-text">
                      We are a professional web development company, with
                      various services. Providing customised solutions to meet
                      our user's needs.
                    </p>
                    <p className="beta-text">
                      Our team of experienced professionals are dedicated to
                      keeping up to date with the latest trends and technologies
                      to deliver exceptional results.
                    </p>
                  </div>
                  <div className="info-purple">
                    <h3 className="text-title">What we provide</h3>
                    <p className="beta-text">
                      We offer a 24hr service, where any type of customer can
                      contact our customer can contact our experts to help them
                      with all their help them with all their emergencies
                      related with UI&UX, Front-End, WordPress and Marketing.
                    </p>
                    <p className="beta-text">
                      With the guarantee that all your problems will be solved
                      with maximum speed and above all high quality of work.
                    </p>
                  </div>
                </div>
                <div className="beta-disclaimer-container">
                  <div className="disclaimer-info">
                    <p className="disclaimer-text">
                      {" "}
                      "DISCLAIMER" This is a personal project in which I came up
                      with a service idea and built a website to sell it.
                      Produced the idea, developing the brand, the illustrations
                      and the development of the website.
                    </p>
                  </div>
                </div>
              </div>
              <div></div>
              <div className="img-container">
                <img
                  src={ImgAboutUsResoluta}
                  className="card-img"
                  alt="mockups of the about me website in different devices"
                />
              </div>
            </div>
          </div>
          <div className="background-beta-green"></div>
          <div className="background-beta-blue"></div>
        </div>
        <Footer></Footer>
      </section>
    </>
  );
}

export default ProjectAlpha;
