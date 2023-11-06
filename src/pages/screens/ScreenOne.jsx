import React from "react";
import DP from "../../assets/DP.jpg";
import StocksAndCryptoTable from "../../components/Table/StockCryptoTable";

function ScreenOne() {
  return (
    <>
      <div className="lg:h-screen lg:px-10 px-2 flex items-center">
        <div className="flex justify-between lg:mt-0 mt-[150px] lg:flex-row flex-col">
          {/* info */}
          <div className=" flex flex-col lg:gap-10 gap-6 justify-center ">
            <h1 className=" text-5xl font-bold tracking-tighter leading-[65px]">
              The most trusted financial partner for <b>Investing</b>
            </h1>
            <p className="tracking-tighter font-medium text-Dark-Gray">
              Unleash your money's potential. Get a personalized investing plan
              and human professionals to help manage your money for you. Invest
              is built to help you achieve what you want with your money.
            </p>
            <div className="">
              <button className="bg-gradient-to-tr from-Dark-Blue from-60% to-Blue capitalize px-6 rounded-xl py-2 hover:scale-105 duration-200 text-White">
                Start invest now
              </button>
            </div>

            <div className="flex gap-8 justify-center">
              <div className=" flex flex-col gap-1">
                <h2 className=" font-semibold ">4.8</h2>
                <p className=" text-Dark-Gray text-sm">
                  Apple app store rating
                </p>
                <div className="flex items-center gap-1">
                  <ion-icon name="logo-apple-appstore" size="large"></ion-icon>
                  <p>927 Reviews</p>
                </div>
              </div>

              <div className=" flex flex-col gap-1">
                <h2 className=" font-semibold ">4.7</h2>
                <p className=" text-Dark-Gray text-sm">
                  Google play store rating
                </p>
                <div className="flex items-center gap-1">
                  <ion-icon
                    name="logo-google-playstore"
                    size="large"
                  ></ion-icon>
                  <p>1,820 Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* image */}
          <div className="relative cursor-pointer lg:mt-10 mt-[50px] lg:w-[87%] w-full rounded flex justify-center items-center">
            {/* <StocksAndCryptoTable /> */}

            <img src={DP} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ScreenOne;
