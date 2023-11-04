import React from "react";
import PhoneViewOneSvg from "../../../assets/Phone.jpg"
import GoalSvg from "../../../components/Icons/goal";
import ClickSvg from "../../../components/Icons/Click";
import BankSvg from "../../../components/Icons/bank";

function BottomGrid() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* image */}
        <div className="relative lg:w-[50%] w-full rounded flex justify-center items-center">
          <img src={PhoneViewOneSvg} alt=""/>
        </div>

        {/* info */}
        <div className=" flex flex-col gap-10">
          <div className=" flex flex-col gap-6">
            <div className=" bg-Gray flex justify-center item-center py-2 w-[115px] px-1 rounded-lg">
              <p className="gradientText">Our Features</p>
            </div>

            <div className=" flex flex-col gap-3">
              <h1 className=" font-bold">
                Plan your investment <b>according to your goals</b>
              </h1>

              <p className=" text-Dark-Gray">
                Goal setting helps calculate and monitor your target funds so
                that you can achieve your investment goals according to your
                plan.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex gap-3">
              {/* image */}
              <div>
                <GoalSvg />
              </div>
              {/* info */}
              <div className=" w-[90%] flex flex-col gap-1">
                <h3 className=" text-Black font-semibold">Set Your Goals</h3>
                <p className=" text-Dark-Gray">
                  Set targets according to your needs. Give your portfolio a
                  name and fill in your targets. Congratulations on creating
                  your portfolio.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              {/* image */}
              <div>
                <ClickSvg />
              </div>
              {/* info */}
              <div className=" w-[90%] flex flex-col gap-1">
                <h3 className=" text-Black font-semibold">Choose Product</h3>
                <p className=" text-Dark-Gray">
                  Search and select stocks according to your desired criteria.
                  Choose the one you want from hundreds of available
                  investments.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              {/* image */}
              <div>
                <BankSvg />
              </div>
              {/* info */}
              <div className="flex w-[90%] flex-col gap-1">
                <h3 className="text-Black font-semibold">
                  Sync Your Bank account
                </h3>
                <p className=" text-Dark-Gray">
                  We integrate with your banks and accounting services so you
                  can easily and securely connect your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomGrid;
