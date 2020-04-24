import React from 'react';

function Icon({ color }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M12 3.415L2.667 10.88v10.452h6.666V16h5.334v5.333h6.666v-9.81a1.334 1.334 0 00-.5-1.042L12 3.415zM12 0l10.499 8.4A4.001 4.001 0 0124 11.521v9.812A2.667 2.667 0 0121.333 24H2.667A2.667 2.667 0 010 21.333V10.881A2.667 2.667 0 011 8.8L12 0z"
      ></path>
    </svg>
  );
}

export default Icon;
