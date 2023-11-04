import React from "react";

function ShieldSvg() {
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
        stroke="#222"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.875}
        d="M24.583 43.5s14.584-9.583 14.584-20.833M24.583 43.5S10 33.917 10 22.667M24.583 43.5V6m14.584 16.667V12.583a1.06 1.06 0 0 0-.952-1.054 25.404 25.404 0 0 1-11.63-4.185L24.583 6m14.584 16.667H10m0 0V12.583a1.058 1.058 0 0 1 .952-1.052 25.393 25.393 0 0 0 11.63-4.187L24.582 6"
      />
    </svg>
  );
}

export default ShieldSvg;
