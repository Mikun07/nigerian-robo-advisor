import React from "react";

function LeftGrid() {
  return (
    <>
      <div className=" flex items-center">
        <div className=" flex flex-col gap-6">
          <div className=" bg-Gray flex justify-center item-center py-2 w-[145px] px-1 rounded-lg">
            <p className="gradientText">Smart Innovation</p>
          </div>

          <div>
            <h1 className="font-bold">
              Want to know the advice of <b>Robo Advisor</b>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftGrid;
