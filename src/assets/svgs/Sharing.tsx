import React from "react";

function Icon({className, color = '#454545'}: any) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="24"
      fill="none"
      viewBox="0 0 22 24"
    >
      <path
        fill={color}
        d="M17.111 9.143h2.445c.648 0 1.27.24 1.728.67.459.428.716 1.01.716 1.616v10.285c0 .607-.258 1.188-.716 1.617-.458.428-1.08.669-1.728.669H2.444c-.648 0-1.27-.24-1.728-.67A2.213 2.213 0 010 21.715V11.43c0-.607.258-1.188.716-1.617a2.533 2.533 0 011.728-.67H4.89v2.287H2.444v10.285h17.112V11.43H17.11V9.143zM4.278 6.286l1.728 1.616 3.772-3.527V16h2.444V4.375l3.772 3.527 1.728-1.616L11 0 4.278 6.286z"
      ></path>
    </svg>
  );
}

export default Icon;