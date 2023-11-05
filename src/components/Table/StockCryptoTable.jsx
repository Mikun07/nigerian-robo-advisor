import React, { useState, useEffect } from "react";
import axios from "axios";
import TSLA from "../../assets/Tesla.jpg"
import AMZN from "../../assets/Amazon.jpg"
import NVDA from "../../assets/NVIDIA.jpg";
import MSFT from "../../assets/Microsoft.jpg";
import BTC from "../../assets/Bitcoin.jpg"
import ETH from "../../assets/Ethereum.jpg"
import XRP from "../../assets/Ripple.jpg"
import USDC from "../../assets/USDC.jpg"
import useStockData from "../../hooks/useStockData";

const StocksAndCryptoTable = () => {
  const stockData = useStockData();
  const product = [
    { name: "TSLA", img: TSLA, title: "Tesla, Inc", price: "100.00"  },
    { name: "AMZN", img: AMZN, title: "Amazon", price: "100.00" },
    { name: "NVDA", img: NVDA, title: "NVIDIA Corporations", price: "100.00" },
    { name: "MSFT", img: MSFT, title: "Microsoft", price: "100.00" },
    { name: "BTC", img: BTC, title: "Bitcoin", price: "100.00"},
    { name: "ETH", img: ETH, title: "Ethereum", price: "100.00" },
    {
      name: "USDC",
      img: USDC,
      title: "US Dollar Coin",
      price: "100.00"
    },
    { name: "XRP", img: XRP,  title: "Ripple", price: "100.00" },
  ];
  const tickerContent = {
    TSLA: { img: TSLA, title: "Tesla, Inc" },
    AMZN: { img: AMZN, title: "Amazon" },
    NVDA: { img: NVDA, title: "NVIDIA Corporations" },
    MSFT: { img: MSFT, title: "Microsoft"},
    "BTC/USD": { img: BTC, title: "Bitcoin" },
    "ETH/USD": { img: ETH, title: "Ethereum" },
    "XRP/USD": { img: XRP, title: "Ripple" },
    "USDC/USD": {  img: USDC, title: "US Dollar Coin",}
  };

  return (
    <div>
      <div className="w-full  rounded-md">
        <div className="grid grid-cols-2 gap-4">
          {product.map(({ name, img, title, price }, index) => (
            <li
              key={index}
              className="flex lg:px-8 px-2 border-2 border-Dark-Gray py-2 items-center justify-between rounded-md"
            >
              <div className="flex lg:gap-4 gap-1 items-center ">
                <img
                  src={img}
                  alt={name}
                  className="lg:w-[70px] w-[40px] rounded-full"
                />

                <div className="flex flex-col">
                  <p className="text-Black lg:text-xl text-xs  ">{name}</p>
                  <p className="text-xs text-Dark-Gray">{title}</p>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p className="text-Black lg:text-xl text-xs">{price}</p>
                <p className="text-Dark-Gray text-xs">{price}</p>
              </div>
            </li>
          ))}
        </div>
        {/* <div>
          {stockData?.length > 0 ? (
            <div>
              {stockData.map((stock, index) => {
                <li
                  key={index}
                  className="flex px-8 border-4 border-Dark-Gray py-2 items-center justify-between rounded-md"
                >
                  <div className="flex gap-4 items-center ">
                    <img
                      src={tickerContent[stock?.ticker]?.img}
                      alt={stock?.ticker}
                      className="w-[100px] h-[100px] rounded-full"
                    />

                    <div className="flex flex-col">
                      <h2 className=" text-Black">{stock?.ticker}</h2>
                      <p className="text-sm text-Dark-Gray capitalize">
                        {tickerContent[stock?.ticker]?.title}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className=" text-Black">{stock?.value}</h2>
                    {stock?.sign === "positive" ? (
                      // style green
                      <p className="text-[#22C55E]">{stock?.percentage}</p>
                    ) : (
                      <>
                        {stock?.sign === "negative" ? (
                          // style red
                          <p className="text-[#CC3333]">{stock?.percentage}</p>
                        ) : (
                          <p className="text-sm text-Dark-Gray">
                            {stock?.percentage}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </li>;
              })}
            </div>
          ) : (
            <p>stock data not currently available</p>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default StocksAndCryptoTable;
