import React from "react";

function ClickSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      fill="none"
    >
      <rect
        width={49.5}
        height={49.5}
        x={0.25}
        y={0.25}
        fill="#fff"
        stroke="#E3E8EF"
        strokeWidth={0.5}
        rx={9.75}
      />
      <path
        stroke="#E3E8EF"
        strokeWidth={0.5}
        d="M15.25 0v49.98M33.25 0v50M0 15.75h50M0 33.75h50"
      />
      <path
        stroke="#1A1A1A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.813}
        d="m27.063 27.063 7.5 7.5M13 13l8.438 23.438 4.687-10.313 10.313-4.688L13 13Z"
      />
    </svg>
  );
}

export default ClickSvg;
