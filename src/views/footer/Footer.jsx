import "./footer.scss";
import HeaderTitle from "../../components/titles/HeaderTitle";

function Footer() {
  return (
    <>
      <div className="footer-background">
        {" "}
        <p className="logo-bold">
          SARAH<span className="logo-thin">CORBERAN</span>
        </p>
        <p className="copyright">&copy;SarahCorberan. All rights reserved.</p>
        <p className="links">
          {" "}
          <a
            href="https://www.linkedin.com/in/sarah-corberan-a93a221b5/"
            target="_blank"
          >
            Linkedin
          </a>
        </p>
        <div></div>
        <p className="links">
          {" "}
          <a href="https://www.instagram.com/design_scl/" target="_blank">
            Instagram
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
