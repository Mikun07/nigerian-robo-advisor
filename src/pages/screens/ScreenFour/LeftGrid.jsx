import React from "react";
import RangeSlider from "../../../components/Slider/RangeSlider";
import BarChart from "../../../components/Chart/BarChart";

function LeftGrid() {
  return (
    <>
      <div className=" flex items-center w-full py-10">
        <div className=" flex flex-col justify-center gap-6">
          <div className=" bg-Gray flex justify-center item-center py-2 w-[145px] px-1 rounded-lg">
            <p className="gradientText">Smart Innovation</p>
          </div>

          <div>
            <h1 className="font-bold">
              Want to know the advice of <b>Robo Advisor</b>
            </h1>
          </div>

          <div>
            <p className="text-justify pb-6 lg:pb-0">
              The Robo Advisor offers a diverse array of features aimed at
              simplifying the investment process. Specifically designed to
              facilitate a seamless entry into the world of investing, it
              prominently features our innovative risk score assessment model.
              This model is a robust tool that evaluates your risk tolerance and
              helps guide your investment decisions. With the Robo Advisor's
              assistance, you can make your financial resources work more
              efficiently, empowering you to build a more secure and prosperous
              future. This ensures that your investments align with your goals
              and comfort level, contributing to your financial well-being.
            </p>
          </div>
        </div>

        {/* <BarChart /> */}
      </div>
    </>
  );
}

export default LeftGrid;
