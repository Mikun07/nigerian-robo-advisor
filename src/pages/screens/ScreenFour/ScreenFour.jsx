import React from "react";
import LeftGrid from "./LeftGrid";
import RightGrid from "./RightGrid";

function ScreenFour() {
  return (
    <>
      <div className="h-full lg:h-screen lg:flex-row flex-col lg:px-10 px-2 flex justify-between">
        <LeftGrid />
        <RightGrid />
      </div>
    </>
  );
}

export default ScreenFour;
