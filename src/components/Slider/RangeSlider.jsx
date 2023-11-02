import React, { useState, useEffect } from "react";
import axios from "axios";

function RangeSlider({ max = 0 }) {
  const [sliderValue, setSliderValue] = useState(0);
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  useEffect(() => {
    const rangeThumb = document.getElementById("rangeThumb");
    const rangeNumber = document.getElementById("rangeNumber");
    const rangeLine = document.getElementById("rangeLine");
    const rangeInput = document.getElementById("rangeInput");

    rangeNumber.textContent = sliderValue;
    const thumbPosition = sliderValue / rangeInput.max;
    const space = rangeInput.offsetWidth - rangeThumb.offsetWidth;
    console.log({space})
    rangeThumb.style.left = thumbPosition * space + "px";
    rangeLine.style.width = rangeThumb.style.left;
  }, [sliderValue]);

  return (
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
  );
}

export default RangeSlider;