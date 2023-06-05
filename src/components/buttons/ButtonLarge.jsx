import "./buttons.scss";

const ButtonLarge = (props) => {
  return (
    <a className="large-btn" href="#portfolio">
      {props.children}
    </a>
  );
};

export default ButtonLarge;
