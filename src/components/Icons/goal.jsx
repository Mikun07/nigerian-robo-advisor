import React from "react";

function GoalSvg() {
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
        d="M35.215 18.438h-2.326l-5.708 5.704a2.342 2.342 0 1 1-1.325-1.325l5.706-5.706v-2.326c0-.311.124-.61.344-.83l2.163-2.162a.312.312 0 0 1 .528.16l.575 2.876 2.876.575a.31.31 0 0 1 .241.382.313.313 0 0 1-.081.145l-2.164 2.163a1.17 1.17 0 0 1-.829.343Z"
      />
      <path
        fill="#1A1A1A"
        d="M13.281 25a11.719 11.719 0 0 0 23.438 0c0-1.122-.158-2.207-.452-3.234a.938.938 0 0 1 1.802-.516c.342 1.192.525 2.45.525 3.75 0 7.508-6.087 13.594-13.594 13.594-7.508 0-13.594-6.087-13.594-13.594 0-7.508 6.086-13.594 13.594-13.594a13.59 13.59 0 0 1 3.75.524.938.938 0 1 1-.516 1.803c-1.052-.3-2.14-.453-3.234-.452A11.719 11.719 0 0 0 13.281 25Z"
      />
      <path
        fill="#1A1A1A"
        d="M18.906 25a6.093 6.093 0 1 0 12.146-.711.934.934 0 0 1 1.31-.998c.313.14.524.439.552.782a7.966 7.966 0 0 1-13.545 6.566 7.97 7.97 0 0 1 6.545-13.555.936.936 0 0 1 .73 1.392.939.939 0 0 1-.943.47A6.094 6.094 0 0 0 18.906 25Z"
      />
    </svg>
  );
}

export default GoalSvg;
