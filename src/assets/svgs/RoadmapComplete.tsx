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
      <circle cx="10" cy="10" r="10" fill="#10CEA2"></circle>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.414 11L8 14.586"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 14.586L15.586 7"
      ></path>
    </svg>
  );
}

export default Icon;
