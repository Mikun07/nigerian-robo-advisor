import React from "react";

function GridSvg() {
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
        fill="#1A1A1A"
        fillRule="evenodd"
        d="M34 14h-9v10h10v-9a1 1 0 0 0-1-1Zm1 12H25v10h9a1 1 0 0 0 1-1v-9Zm-12-2V14h-9a1 1 0 0 0-1 1v9h10Zm-10 2v9a1 1 0 0 0 1 1h9V26H13Zm1-14a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V15a3 3 0 0 0-3-3H14Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default GridSvg;
