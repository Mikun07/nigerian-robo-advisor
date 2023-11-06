import { useState, useEffect } from "react";
import axios from "axios";

const useStockData = () => {
  const [stockData, setStockData] = useState([]);
  const TWELVE_API_KEY = "fde6ea0976ef45abad2a364f198f9c8c";
  const symbols = "TSLA,AMZN,NVDA,MSFT,BTC/USD,ETH/USD,XRP/USD,USDC/USD";
  const url = `https://api.twelvedata.com/price?symbol=${symbols}&apikey=${TWELVE_API_KEY}`;

  function updateStockData(newStockData) {
    // const response = JSON.parse(localStorage.getItem("response"));
    const currentStocks = JSON.parse(localStorage.getItem("currentStocks"));
    const formattedData = Object.keys(newStockData).map((key, index) => {
      const oldStock = currentStocks?.find((curr) => curr.key === key);
      const oldPrice = parseFloat(
        (oldStock?.value ?? "0")?.replace(/[^0-9.]/g, "")
      );
      const newPrice =
        parseFloat(parseFloat(newStockData[key]?.price).toFixed(2)) ?? 0;

      const percentage =
        oldPrice > 0
          ? ((newPrice - oldPrice) / oldPrice) * 100
          : 0;

      console.log({oldPrice, newPrice, percentage})
      let ticker;
      if (percentage > 0) {
        ticker = "positive";
      } else if (percentage < 0) {
        ticker = "negative";
      } else {
        ticker = "neutral";
      }
      return {
        key,
        percentage: `${percentage.toFixed(2)}%`,
        ticker,
        value: new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        }).format(newPrice),
      };
    });

    console.log(formattedData);
    setStockData(formattedData);
    localStorage.setItem("currentStocks", JSON.stringify(formattedData));
  }

  async function fetchPrices(url) {
    let response;

    axios(url).then((res) => {
      response = res.data;
      if (response.code === 429 && response.status === "error") return;
      updateStockData(response);
      localStorage.setItem("response", JSON.stringify(response));
    });
  }
  useEffect(() => {
    // ! for testing
    // updateStockData(JSON.parse(localStorage.getItem("response")));
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
