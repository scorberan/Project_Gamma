import "./icons.scss";
function HomeIcon() {
  return (
    <>
      <svg
        className="icon-home"
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="none"
      >
        <g clip-path="url(#a)">
          <path
            fill="#301854"
            d="M15 30v-9h6v9h7.5V18H33L18 4.5 3 18h4.5v12H15Z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h36v36H0z" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
export default HomeIcon;
