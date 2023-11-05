import { useState, useEffect } from "react";
import axios from "axios";

const useStockData = () => {
  const [stockData, setStockData] = useState([]);
  const TWELVE_API_KEY = "fde6ea0976ef45abad2a364f198f9c8c";
  const symbols = "TSLA,AMZN,NVDA,MSFT,BTC/USD,ETH/USD,XRP/USD,USDC/USD";
  const url = `https://api.twelvedata.com/price?symbol=${symbols}&apikey=${TWELVE_API_KEY}`;

  function updateStockData(newStockData) {
      const formattedStockData = Object.keys(newStockData).map((ticker) => {
      const currentPrice = parseFloat(stockData[ticker]?.price) ?? 0;
      const newPrice = parseFloat(newStockData[ticker]?.price) ?? 0;

      const percentageDiff =
        isFinite(currentPrice) && isFinite(newPrice)
          ? ((newPrice - currentPrice) / currentPrice) * 100
          : 0;

      console.log({ currentPrice, newPrice, percentageDiff });

      let tickerSign;
      if (percentageDiff > 0) {
        tickerSign = "positive";
      } else if (percentageDiff < 0) {
        tickerSign = "negative";
      } else {
        tickerSign = "neutral";
      }

      return {
        ticker: ticker,
        percentage: `${percentageDiff.toFixed(2)}%`,
        sign: tickerSign,
        value: new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        }).format(newStockData[ticker]?.price),
      };
    });

    console.log(formattedStockData);
    setStockData(formattedStockData);
    if (formattedStockData.length) {
      localStorage.setItem("stocks", JSON.stringify(formattedStockData));
    }
  }

  async function fetchPrices(url) {
    let response;

    axios(url).then((res) => {
      response = res.data;
      if (response.code === 429 && response.status === "error") {
        const storedData = JSON.parse(localStorage.getItem("stocks") || null);
        if (storedData) {
          updateStockData(storedData);
        }
        return;
      }
      updateStockData(response);
    });
  }
  useEffect(() => {
    fetchPrices(url);
    // const interval = setTimeout(() => {
    //     fetchPrices(url);
    // }, 15000);

    // return () => {
    //   clearInterval(interval);
    // };
  }, []);
  return stockData;
};

export default useStockData;
