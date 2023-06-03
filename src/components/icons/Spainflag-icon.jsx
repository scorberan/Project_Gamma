import "./icons.scss";
function SpainflagIcon() {
  return (
    <>
      <svg
        className="icon-spain"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="38"
        fill="none"
      >
        <g clip-path="url(#a)">
          <rect width="48" height="38" fill="#F0EB69" rx="5" />
          <path fill="#FF0909" d="M0 0h48v11.472H0zM0 26.528h48V38H0z" />
        </g>
        <defs>
          <clipPath id="a">
            <rect width="48" height="38" fill="#fff" rx="5" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
export default SpainflagIcon;
