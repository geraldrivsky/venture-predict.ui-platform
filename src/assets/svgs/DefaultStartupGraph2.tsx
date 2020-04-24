import React from "react";

function Icon(props: any) {
  return (
    <svg
      {...props}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="438"
      fill="none"
      viewBox="0 0 784 438"
    >
      <path
        fill="#004AAE"
        d="M0 420.821V434a4 4 0 004 4h776a4 4 0 004-4V4.107c0-4.728-6.759-5.545-7.885-.953l-15.674 63.918a4.204 4.204 0 00-.086.46c-.599 4.563-10.597 76.194-52.335 113.222-43.124 38.257-88.301 118.729-203.299 150.39-114.997 31.662-111.644 42.247-175.267 55.86-62.772 13.431-143.147 21.33-145.288 21.539-.068.007-.078.006-.146.009L3.817 416.825A4 4 0 000 420.821z"
        opacity="0.5"
      ></path>
    </svg>
  );
}

export default Icon;