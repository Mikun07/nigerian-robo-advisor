import React from "react";
import LightningSvg from "../../../components/Icons/Lightning";
import GridSvg from "../../../components/Icons/grid";
import ShieldSvg from "../../../components/Icons/shield";
import CopySvg from "../../../components/Icons/copy";

function TopGrid() {
  return (
    <>
      <div className="flex items-center justify-between">
        {/* info */}
        <div className=" flex flex-col gap-10">
          <div className=" flex flex-col gap-6">
            <div className=" bg-Gray flex justify-center item-center py-2 w-[100px] px-1 rounded-lg">
              <p className="gradientText">why invest</p>
            </div>

            <div>
              <h1 className=" font-bold">
                Save and invest from <b>one easy app.</b>
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex gap-3">
              {/* image */}
              <div className="">
                <LightningSvg />
              </div>
              {/* info */}
              <div className="flex w-[90%] flex-col gap-1">
                <h3 className=" text-Black font-semibold">
                  Create account in minutes
                </h3>
                <p className=" text-Dark-Gray">
                  Just register your email address and verification in minutes.
                  don't hesitate to register now!
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              {/* image */}
              <div>
                <GridSvg />
              </div>
              {/* info */}
              <div className="flex w-[90%] flex-col gap-1">
                <h3 className=" text-Black font-semibold">
                  Various Investments
                </h3>
                <p className=" text-Dark-Gray">
                  With our investment services, you'll have access to a variety
                  of investment products, including stocks, and market.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              {/* image */}
              <div>
                <ShieldSvg />
              </div>
              {/* info */}
              <div className="flex w-[90%] flex-col gap-1">
                <h3 className=" text-Black font-semibold">Security System</h3>
                <p className=" text-Dark-Gray">
                  Our app is equipped with high level of security. We really
                  prioritize the security of your account.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              {/* image */}
              <div>
                <CopySvg />
              </div>
              {/* info */}
              <div className="flex w-[90%] flex-col gap-1">
                <h3 className=" text-Black font-semibold">Fast Transaction</h3>
                <p className=" text-Dark-Gray">
                  Fast and reliable platform that is trusted by big company,
                  leading brands, and publicly traded companies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* image */}
        <div></div>
      </div>
    </>
  );
}

export default TopGrid;
