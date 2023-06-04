import "./contact.scss";
import ButtonMedium from "../../components/buttons/ButtonMedium";
import LinkedinIcon from "../../components/icons/LinkedinIcon";
import InstagramIcon from "../../components/icons/InstagramIcon";
function Contact() {
  return (
    <>
      <section className="contact">
        <div className="gradient-circle">
          <div>
            <h3>Thank you for visiting my website</h3>
            <h4>
              {" "}
              If you have any inquiries, collaboration oppportunites or simply
              want to connect, please don't hesitate to reach out.
            </h4>
            <h5> I look forward to hearing from you </h5>
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
