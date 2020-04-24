import React from 'react';

function Icon({ color }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="4"
      fill="none"
      viewBox="0 0 18 4"
    >
      <circle cx="2" cy="2" r="2" fill={color}></circle>
      <circle cx="9" cy="2" r="2" fill={color}></circle>
      <circle cx="16" cy="2" r="2" fill={color}></circle>
    </svg>
  );
}

export default Icon;
