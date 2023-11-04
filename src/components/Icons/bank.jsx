import React from "react";

function BankSvg() {
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
        fill="#222"
        d="M12.813 22.188h2.812v7.5H13.75a.938.938 0 0 0 0 1.875h22.5a.938.938 0 0 0 0-1.875h-1.875v-7.5h2.813a.937.937 0 0 0 .49-1.736l-12.187-7.5a.938.938 0 0 0-.982 0l-12.188 7.5a.938.938 0 0 0 .492 1.735Zm4.687 0h3.75v7.5H17.5v-7.5Zm9.375 0v7.5h-3.75v-7.5h3.75Zm5.625 7.5h-3.75v-7.5h3.75v7.5ZM25 14.85l8.876 5.463H16.124L25 14.85Zm14.063 19.525a.938.938 0 0 1-.938.938h-26.25a.938.938 0 0 1 0-1.876h26.25a.938.938 0 0 1 .938.938Z"
      />
    </svg>
  );
}

export default BankSvg;
