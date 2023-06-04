import "./contact.scss";
import ButtonMedium from "../../components/buttons/ButtonMedium";
import LinkedinIcon from "../../components/icons/LinkedinIcon";
import InstagramIcon from "../../components/icons/InstagramIcon";
function Contact() {
  return (
    <>
      <section className="contact">
        <div className="gradient-circle">
          <div className="content">
            <h3>
              Feel free to reach out to me with any inquiries, collaborations,
              or opportunities - I'm here to help!
            </h3>

            <div className="icons">
              <LinkedinIcon></LinkedinIcon>
              <InstagramIcon></InstagramIcon>
            </div>
          </div>
          <ButtonMedium className="btn">Get in touch</ButtonMedium>
        </div>
      </section>
    </>
  );
}

export default Contact;
