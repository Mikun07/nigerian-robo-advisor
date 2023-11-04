import React, { useEffect, useState } from "react";

import DoughnutChart from "../../../components/Chart/DoughnutChart";
import axios from "axios";
import BarChart from "../../../components/Chart/BarChart";

function RightGrid() {
  const [loadingState, setLoadingState] = useState(false);
  const [max, setMax] = useState(0);
  const [stockData, setStockData] = useState(null);
  const [selectedStock, setSelectedStockData] = useState(null);
  const [labels, setLabels] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    setLoadingState(true);
    axios
      .get("https://vast-gray-seahorse-garb.cyclic.app/stocks")
      .then((res) => {
        const { data } = res;
        setMax(data.data?.length - 1 || 0);
        setLabels(Object.keys(data.data[0]).slice(2));
        setStockData(data.data);
      })
      .catch((err) => {
        console.log({ err });
      })
      .finally(() => {
        setLoadingState(false);
      });
  }, []);

  useEffect(() => {
    if (stockData) {
      setSelectedStockData(
        Object.values(stockData[sliderValue])
          .slice(2)
          .map((val) => Number(val.split("%")[0]))
      );
    }
  }, [sliderValue]);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  useEffect(() => {
    const rangeThumb = document.getElementById("rangeThumb");
    const rangeNumber = document.getElementById("rangeNumber");
    const rangeLine = document.getElementById("rangeLine");
    const rangeInput = document.getElementById("rangeInput");

    rangeNumber.textContent = sliderValue;
    const thumbPosition = Number(sliderValue / rangeInput.max);
    const space = rangeInput.offsetWidth - rangeThumb.offsetWidth;
    rangeThumb.style.left = thumbPosition * space + "px";
    rangeLine.style.width = rangeThumb.style.left;
  }, [sliderValue]);

  return (
    <>
      {loadingState ? (
        <div className="flex flex-col gap-[100px] items-center justify-center w-full">
          <div className="flex items-center justify-center h-screen">
            <div className="w-16 h-16 rounded-full border-t-4 border-blue-500 border-solid animate-pulse"></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex w-full justify-center lg:mt-[100px]">
            <div className="range">
              <div className="rangeContent">
                <div className="rangeSlider">
                  <div className="rangeSliderLine" id="rangeLine"></div>
                </div>

                <div className="rangeThumb" id="rangeThumb">
                  <div className="rangeValue">
                    <span className="rangeValueNumber" id="rangeNumber">
                      {sliderValue}
                    </span>
                  </div>
                </div>

                <input
                  type="range"
                  className="rangeInput"
                  id="rangeInput"
                  min="0"
                  max={max}
                  value={sliderValue}
                  onChange={handleSliderChange}
                />
              </div>
            </div>
          </div>

          <DoughnutChart labels={labels} values={selectedStock} />
          {/* <BarChart labels={labels} values={selectedStock}/> */}
        </div>
      )}
    </>
  );
}

export default RightGrid;
