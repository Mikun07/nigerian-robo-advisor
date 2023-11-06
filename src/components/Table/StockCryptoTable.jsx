import React, { useState, useEffect } from "react";
import TSLA from "../../assets/Tesla.jpg";
import AMZN from "../../assets/Amazon.jpg";
import NVDA from "../../assets/NVIDIA.jpg";
import MSFT from "../../assets/Microsoft.jpg";
import BTC from "../../assets/Bitcoin.jpg";
import ETH from "../../assets/Ethereum.jpg";
import XRP from "../../assets/Ripple.jpg";
import USDC from "../../assets/USDC.jpg";
import useStockData from "../../hooks/useStockData";

const StocksAndCryptoTable = () => {
  const stockData = useStockData();
  const [stockList, setStockList] = useState([]);
  const tickerContent = {
    TSLA: { img: TSLA, title: "Tesla, Inc" },
    AMZN: { img: AMZN, title: "Amazon" },
    NVDA: { img: NVDA, title: "NVIDIA Corporations" },
    MSFT: { img: MSFT, title: "Microsoft" },
    "BTC/USD": { img: BTC, title: "Bitcoin" },
    "ETH/USD": { img: ETH, title: "Ethereum" },
    "XRP/USD": { img: XRP, title: "Ripple" },
    "USDC/USD": { img: USDC, title: "US Dollar Coin" },
  };

  const [test, x]= useState([1, 2, 3])

  useEffect(() => {
    setStockList(stockData);
  }, []);
  console.log("IN HERE: ", stockData);

  return (
    <>
      <div>
        {stockData.length > 0 ? <p>{stockData[3].key}</p> : "no"}
        {stockList?.map((stock, index) => {
            <li
              key={stock.key}
              className="flex px-8 border-4 border-Gray py-2 items-center justify-between rounded-md"
            >
              <div className="flex gap-4 items-center ">
                <img
                      src={tickerContent[stock?.ticker]?.img}
                      alt={stock?.ticker}
                      className="lg:w-[70px] w-[40px] rounded-full"
                    />

                <div className="flex flex-col">
                      <h2 className=" text-Black lg:text-xl text-xs capitalize">{stock?.ticker}</h2>
                      <p className="lg:text-xl text-xs text-Dark-Gray capitalize">
                        {tickerContent[stock?.ticker]?.title}
                      </p>
                    </div>
              </div>

              <div>
                <h2 className=" text-Black">{stock?.value}</h2>
                {stock?.sign === "positive" ? (
                  // style green
                  <p className="text-[#22C55E] text-xs">{stock?.percentage}</p>
                ) : (
                  <>
                    {stock?.sign === "negative" ? (
                      // style red
                      <p className="text-[#CC3333] text-xs">
                        {stock?.percentage}
                      </p>
                    ) : (
                      <p className="text-xs text-Dark-Gray">
                        {stock?.percentage}
                      </p>
                    )}
                  </>
                )}
              </div>
            </li>;
          })}

        {/* {stockList?.map((stock) => {
          <p
            key={stock.key}
            className="flex px-8 border-4 border-Gray py-2 items-center justify-between rounded-md"
          >
            hello
          </p>;
        })} */}
      </div>
    </>
  );
};

export default StocksAndCryptoTable;
