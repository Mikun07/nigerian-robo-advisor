import React from "react";

function InputWithButton() {
  return (
    <>
      <div className=" flex gap-[16px]">
        <input
          className=" py-[14px] px-[12px] w-full h-[48px] border-2 border-Dark-Gray shadow rounded-md font-medium text-lg text-Black"
          placeholder="Email Here"
        />
        <button type="" className="bg-gradient-to-tr from-Dark-Blue from-60% to-Blue via-40% px-6 rounded-xl py-2 capitalize hover:scale-105 duration-200 text-White">
          Subscribe
        </button>
      </div>
    </>
  );
}

export default InputWithButton;
