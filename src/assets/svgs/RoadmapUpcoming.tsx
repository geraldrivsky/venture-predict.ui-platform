import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <circle cx="10" cy="10" r="10" fill="#D8D8D8"></circle>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 14L10 6"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 10L14 10"
      ></path>
    </svg>
  );
}

export default Icon;