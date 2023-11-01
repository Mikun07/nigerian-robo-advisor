import React from "react";
import TopGrid from "./TopGrid";
import BottomGrid from "./BottomGrid";

function ScreenTwo() {
  return (
    <>
      <div className=" h-full py-20 lg:px-10 px-2 flex flex-col gap-40">
        <TopGrid />
        <BottomGrid />
      </div>
    </>
  );
}

export default ScreenTwo;
