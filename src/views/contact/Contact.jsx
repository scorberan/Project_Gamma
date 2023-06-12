import "./contact.scss";
//import ButtonMedium from "../../components/buttons/ButtonMedium";
import LinkedinIcon from "../../components/icons/LinkedinIcon";
import InstagramIcon from "../../components/icons/InstagramIcon";
import ContactTitle from "../../components/titles/TitleContact";
import ContactButtom from "../../components/buttons/ContactMediumButtom";
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
              <ContactButtom className="btn">Get in touch</ContactButtom>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
