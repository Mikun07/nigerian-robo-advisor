import React, { useEffect, useState } from "react";
import RangeSlider from "../../../components/Slider/RangeSlider";
import DoughnutChart from "../../../components/Chart/DoughnutChart";
import axios from "axios";

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

  // Function to update the slider value
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  // Use useEffect to update the slider's visual representation when the value changes
  useEffect(() => {
    const rangeThumb = document.getElementById("rangeThumb");
    const rangeNumber = document.getElementById("rangeNumber");
    const rangeLine = document.getElementById("rangeLine");
    const rangeInput = document.getElementById("rangeInput");

    // Update the visual representation based on the sliderValue state
    rangeNumber.textContent = sliderValue;
    const thumbPosition = Number(sliderValue / rangeInput.max);
    const space = rangeInput.offsetWidth - rangeThumb.offsetWidth;
    rangeThumb.style.left = thumbPosition * space + "px";
    rangeLine.style.width = rangeThumb.style.left;
    // rangeLine.style.width = sliderValue + '%';
  }, [sliderValue]);

  return (
    <>
      {loadingState ? (
        <div className="flex flex-col gap-[100px] items-center justify-center w-full">
          <p>Loading</p>
        </div>
      ) : (
        <div className="flex flex-col gap-[100px] items-center justify-center w-full">
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
          <DoughnutChart labels={labels} values={selectedStock} />
        </div>
      )}
    </>
  );
}

export default RightGrid;
