import "./alpha.scss";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../footer/Footer";
import UserFlowAbout from "../../assets/images/AboutMeUserFlow.png";
import CoverImgAboutMe from "../../assets/images/CoverImgAboutMe.png";
import FinalDesignAbout from "../../assets/images/AboutMeFinalDesign.png";
function ProjectAlpha() {
  return (
    <>
      <section className="background-linear-gradient">
        <Topbar></Topbar>
        <div className="title-container">
          <h2 className="gradient-title">Project Alpha</h2>
          <p className="subtitle">
            The light is shining, and this time is on me. Come get a glimpse
            into my world and get to know me.
          </p>
        </div>
        <div className="alpha-content">
          <div className="background-alpha-purple">
            <div className="alpha-container">
              <div className="info-title">
                <div className="alpha-title-container">
                  <h1 className="number-title">01</h1>
                  <h2 className="alpha-title">About Me</h2>
                </div>
                <div className="alpha-info-container">
                  <div className="info-purple-summary">
                    <p className="alpha-text-summary">
                      About Me is a personal project required as part of the
                      master course. We were given a well-structured briefing
                      with set introductions of what was required and needed to
                      achieve this project.
                    </p>
                  </div>
                  <div className="alpha-info-container">
                    <div className="info-purple-description">
                      <h3 className="requirements">Description</h3>
                      <p className="alpha-text">
                        Creation of an online piece that will be your business
                        card both on a personal and professional level. personal
                        and professional level.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="project-requirements ">
                  <div className="alpha-info-container">
                    <div className="info-purple">
                      <h3 className="requirements">Objectives</h3>
                      <p className="alpha-text">
                        To develop a simple but real digital project, from start
                        to finish. (prototyping and design, digital strategy and
                        web development). To offer you a scenario where you have
                        to communicate your skills and aptitudes, presenting
                        them in a coherent and professional way.
                      </p>
                    </div>
                  </div>
                  <div className="alpha-info-container">
                    <div className="info-purple">
                      <h3 className="requirements">Requirements</h3>
                      <p className="alpha-text-requirements">
                        The website must include at least the following elements
                      </p>
                      <ul>
                        <li>A photo of yourself</li>
                        <li>Name and surname</li>
                        <li>Explanation of who you are / presentation</li>
                        <li>Explain why you do what you do and what for</li>
                        <li>Describe your strengths</li>
                        <li>Describe your strengths</li>
                        <li>Social networks</li>
                        <li>Email</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="img-container-alpha-intro">
                <img
                  src={CoverImgAboutMe}
                  className="card-img"
                  alt="mockups of the about me website in different devices"
                />
              </div>
            </div>
          </div>
          <div className="background-alpha-green">
            <div className="background-alpha-green">
              <div className="alpha-container">
                <div className="info-title">
                  <div className="alpha-title-container">
                    <h1 className="number-title-green">02</h1>
                    <h2 className="alpha-title">Process & Strategy plan</h2>
                  </div>
                  <div className="alpha-info-container">
                    <div className="info-green">
                      <p className="alpha-text">
                        Even though, we were given a well-structured briefing to
                        follow. It was quite overwhelming at first. New concepts
                        to learn. That I personally did or was taught before.
                      </p>
                      <p className="alpha-text">
                        Coming from a design background, naturally, the design
                        aspect was the least challenging. However, designing a
                        responsive website was completely out of my comfort zone
                        and something that I have never done beforehand.
                      </p>
                      <p className="alpha-text">
                        Nevertheless, I accepted the challenge. I focus on the
                        positive and saw it as a new opportunity to learn new
                        skills and strengthen my design knowledge further.
                      </p>
                    </div>
                    <div className="alpha-info-container">
                      <div className="info-green">
                        <h3 className="requirements">Defining my challenges</h3>
                        <ul>
                          <li>HML & CSS</li>
                          <li>Name and surname</li>
                          <li>
                            Designing well-structured website-both mobile and
                            desktop
                          </li>
                          <li>Explain why you do what you do and what for</li>
                          <li>
                            Finding the right strategy to portray myself-both
                            personal and professional
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="alpha-info-container">
                    <div className="info-green">
                      <h3 className="requirements">Solving my challenges</h3>
                      <p className="alpha-text">
                        Naturally, my main focus and concern at the begging was
                        the design. Once, I started to research and compare
                        other UI&UX designer's portfolios. I was able to start
                        testing the design ideas. I went through a couple of
                        rounds of testing different design approaches.
                      </p>
                      <h4 className="beta-text-solving">
                        Click{" "}
                        <a
                          href="https://www.figma.com/file/bLKEjPWXSMlnigKKFuVAt8/Sarah-Corberan-ProjectAlpha?type=design&node-id=0%3A1&t=5KyeVsHsyGrFUJ51-1"
                          target="_blank"
                        >
                          here
                        </a>{" "}
                        to see the wireframes.
                      </h4>
                      <p className="alpha-text">
                        To be able to have a clear understanding and path to
                        follow, I created a user flow.
                      </p>
                      <p className="alpha-text">
                        Once, I felt confident enough with the design that I
                        produce. I was available to focus on the development
                        part.
                      </p>
                    </div>
                    <div className="alpha-info-container">
                      <div className="img-container-alpha-user">
                        <img
                          src={UserFlowAbout}
                          className="card-img"
                          alt="mockups of the about me website in different devices"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="alpha-info-container">
                    <div className="info-green">
                      <h3 className="requirements">User Interface</h3>
                      <p className="alpha-text">
                        After defining my personal challenges, testing different
                        designs and creating a user flow. I started working with
                        the user interface.
                      </p>
                      <p className="alpha-text">
                        My main focus with this design was to showcase my
                        personality throughout the screen. From the colour,
                        space between sections, fonts and every small detail was
                        well thought chosen. I would describe myself as a
                        minimalistic, kind-hearted, hard-working/passionate
                        person. Does were the keywords that I used as
                        inspiration throughout my design process.
                      </p>
                      <p className="alpha-text">
                        I achieve that by creating a clean/minimalistic layout
                        throughout the website. I added a light version of my
                        favourite colour "lilac/purple" to the design. Just add
                        the right amount of colour to catch the user's attention
                        through the one-page website. Balancing all perfectly
                        together with the black & white pictures.
                      </p>
                      <p className="alpha-text">
                        The only reason why I choose black and white pictures
                        was because of my personal taste. It was the only thing
                        that I did for my own personal taste.
                      </p>
                      <p className="alpha-text">
                        One of the requirements of this project was to show our
                        skills. My approach to showcase my personal details and
                        soft skills was creating different organize accordions
                        for each individual skill (they are seen in the final
                        design).
                      </p>
                      <p className="alpha-text">
                        Personally, I felt that I need to add a personal
                        statement as to why I decided to study design. Attention
                        to detail has always been important to me, and that is
                        the reason I decided to add a personal touch. Hoping to
                        build a potential bond with the user.
                      </p>
                      <p className="alpha-text">
                        Lastly, I created a simple but functional contact
                        section.
                      </p>
                      <h4 className="beta-text-solving">
                        Click{" "}
                        <a
                          href="https://www.figma.com/file/bLKEjPWXSMlnigKKFuVAt8/Sarah-Corberan-ProjectAlpha?type=design&node-id=0%3A1&t=5KyeVsHsyGrFUJ51-1"
                          target="_blank"
                        >
                          here
                        </a>{" "}
                        to see futher details.
                      </h4>
                    </div>
                    <div className="alpha-info-container">
                      <div className="img-container-alpha-final">
                        <img
                          src={FinalDesignAbout}
                          className="card-img"
                          alt="mockups of the about me website in different devices"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background-alpha-blue">
            <div className="alpha-container">
              <div className="info-title">
                <div className="alpha-title-container">
                  <h1 className="number-title-blue">03</h1>
                  <h2 className="alpha-title">Lessons learned</h2>
                </div>
                <div className="conclusion-content">
                  <div className="alpha-info-container">
                    <div className="info-blue-conclusion">
                      <p className="alpha-text">
                        During this project, I was able to learn new skills and
                        strengthen my knowledge for further projects in the
                        future. Even though I had many struggles during this
                        project. I'm very pleased with the outcome.
                      </p>
                      <p className="alpha-text">
                        I went from never touching HTML, CSS and JavaScript to
                        developing my functional one-page website.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="link-projects">
          <li>
            <a className="projects-link" href="/projects">
              Go back
            </a>
          </li>
        </div>
        <Footer></Footer>
      </section>
    </>
  );
}

export default ProjectAlpha;
