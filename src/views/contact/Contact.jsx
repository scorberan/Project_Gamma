import "./contact.scss";
import ButtonMedium from "../../components/buttons/ButtonMedium";
import LinkedinIcon from "../../components/icons/LinkedinIcon";
import InstagramIcon from "../../components/icons/InstagramIcon";
import ContactTitle from "../../components/titles/TitleContact";
function Contact() {
  return (
    <>
      <section className="contact">
        <div className="gradient-circle">
          <div className="content-contact">
            <ContactTitle>
              {" "}
              Feel free to reach out to me with any inquiries, collaborations,
              or opportunities - I'm here to help!
            </ContactTitle>

            <div className="icons">
              <LinkedinIcon></LinkedinIcon>
              <InstagramIcon></InstagramIcon>
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
