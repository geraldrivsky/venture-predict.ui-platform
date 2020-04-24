import React from 'react';

function Icon({ className }: any) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="16"
      fill="none"
      viewBox="0 0 12 16"
    >
      <path
        fill="#AFAFAF"
        fillRule="evenodd"
        d="M6.002 8.873c1.654 0 3-1.346 3-3s-1.346-3-3-3c-1.655 0-3 1.346-3 3 0 1.655 1.345 3 3 3zm0-5.5c1.379 0 2.5 1.121 2.5 2.5s-1.121 2.5-2.5 2.5a2.502 2.502 0 01-2.5-2.5c0-1.379 1.121-2.5 2.5-2.5z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#AFAFAF"
        fillRule="evenodd"
        d="M6 0C2.691 0 0 2.658 0 6c0 3.5 3 7.081 5.188 9.598.008.01.359.402.793.402h.038c.434 0 .785-.393.793-.402C9.002 13.08 12.002 9.5 12.002 6c0-3.342-2.691-6-6.001-6zm.059 14.941a.607.607 0 01-.068.05c-.005-.014-.042-.043-.064-.067C4.093 12.816 1 9.257 1 6c0-2.756 2.244-5 5-5a5.006 5.006 0 015.001 5.001c0 3.256-3.094 6.814-4.942 8.94z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
