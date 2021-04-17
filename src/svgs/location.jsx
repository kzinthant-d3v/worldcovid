import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 349.661 349.661"
      {...props}
    >
      <path
        d="M174.831 0C102.056 0 42.849 59.207 42.849 131.981c0 30.083 21.156 74.658 62.881 132.485 30.46 42.215 61.363 76.607 61.671 76.95l7.429 8.245 7.429-8.245c.309-.342 31.211-34.734 61.671-76.95 41.725-57.828 62.881-102.402 62.881-132.485C306.812 59.207 247.605 0 174.831 0zm-.001 319.617C137.772 276.925 62.85 180.569 62.85 131.981 62.849 70.235 113.084 20 174.831 20s111.981 50.235 111.981 111.981c0 48.559-74.924 144.934-111.982 187.636z"
        fill="white"
      />
      <circle cx={174.831} cy={131.982} r={49.696} fill="#ffffff" />
    </svg>
  );
}

export default SvgComponent;
