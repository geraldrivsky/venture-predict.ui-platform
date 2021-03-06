import React from "react";

function Icon({ className }: any) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      fill="none"
      viewBox="0 0 17 16"
    >
      <path
        fill="#AFAFAF"
        d="M5.449 15.662H16.457v-.972h-1.004V7.67a.487.487 0 00-.796-.375l-3.948 3.27-.016-2.899a.486.486 0 00-.775-.386l-3.983 2.967V5a.486.486 0 00-.486-.486H3.064a.486.486 0 00-.482.43L1.44 14.69H.447v.972H5.45zm4.278-7.029l.016 2.962a.487.487 0 00.796.372l3.942-3.265v5.988H5.936V11.46l3.791-2.826zm-6.23-3.147h1.467v9.204H2.417l1.079-9.204zM3.938 4.136a.484.484 0 00.617-.302c.425-1.241 1.644-1.426 2.558-1.21 1.591.381 2.893.508 3.971-1.554a.486.486 0 00-.86-.45c-.707 1.35-1.28 1.444-2.886 1.06-1.414-.338-3.107.1-3.702 1.839a.487.487 0 00.302.617z"
      ></path>
    </svg>
  );
}

export default Icon;