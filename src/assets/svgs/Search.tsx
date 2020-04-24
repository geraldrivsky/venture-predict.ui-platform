import React from 'react';

function Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#454545"
        fillRule="evenodd"
        d="M19.677 19.675a1.106 1.106 0 01-1.565 0l-5.694-5.7a7.753 7.753 0 01-10.513-1.113A7.771 7.771 0 012.26 2.286a7.753 7.753 0 0110.564-.401 7.77 7.77 0 011.157 10.518l5.695 5.7a1.117 1.117 0 010 1.572zM11.714 3.881a5.525 5.525 0 00-6.026-1.2 5.534 5.534 0 000 10.226 5.525 5.525 0 006.026-1.2 5.522 5.522 0 000-7.826z"
        clipRule="evenodd"
        opacity="0.5"
      ></path>
    </svg>
  );
}

export default Icon;
