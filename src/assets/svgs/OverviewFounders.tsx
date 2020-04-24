import React from 'react';

function Icon({ className }: any) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#AFAFAF"
        fillRule="evenodd"
        d="M8 12c-1.31 0-2.476-.76-2.961-1.6h5.928C10.495 11.243 9.348 12 8 12zm4-3.2H4a.8.8 0 00-.8.8c0 2.093 2.287 4 4.8 4 2.511 0 4.8-1.907 4.8-4a.8.8 0 00-.8-.8z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#AFAFAF"
        fillRule="evenodd"
        d="M8 0C3.589 0 0 3.589 0 8c0 4.412 3.589 8 8 8s8-3.588 8-8c0-4.411-3.589-8-8-8zM1.6 8c0 3.528 2.871 6.4 6.4 6.4 3.529 0 6.4-2.872 6.4-6.4 0-3.53-2.871-6.4-6.4-6.4A6.407 6.407 0 001.6 8z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#AFAFAF"
        fillRule="evenodd"
        d="M6.4 3.999H4.8v3.2h1.6v-3.2zM11.2 3.999H9.6v3.2h1.6v-3.2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
