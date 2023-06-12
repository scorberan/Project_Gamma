import "./contact.scss";
import ButtonMedium from "../../components/buttons/ButtonMedium";
import LinkedinIcon from "../../components/icons/LinkedinIcon";
import InstagramIcon from "../../components/icons/InstagramIcon";
import ContactTitle from "../../components/titles/TitleContact";
function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="gradient-circle">
          <div className="content-contact">
            <ContactTitle>
              {" "}
              Feel free to reach out to me with any inquiries, collaborations,
              or opportunities - I'm here to help!
            </ContactTitle>

            <div className="icons">
              <a href="https://www.instagram.com/design_scl/" target="_blank">
                <InstagramIcon className="linkedin-icon"></InstagramIcon>
              </a>
              <a
                href="https://www.linkedin.com/in/sarah-corberan-a93a221b5/"
                target="_blank"
              >
                <LinkedinIcon></LinkedinIcon>
              </a>
            </div>
            <div className="contact-btn">
              <ButtonMedium className="btn">Get in touch</ButtonMedium>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
