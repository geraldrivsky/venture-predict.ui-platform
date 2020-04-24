import React from "react";

function Icon({ className }: any) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="14"
      fill="none"
      viewBox="0 0 15 14"
    >
      <g
        stroke="#9B9B9B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        opacity="0.45"
      >
        <path d="M11 7.667v4A1.334 1.334 0 019.667 13H2.333A1.334 1.334 0 011 11.667V4.333A1.333 1.333 0 012.333 3h4M9 1h4v4M5.668 8.333L13.001 1"></path>
      </g>
    </svg>
  );
}

export default Icon;