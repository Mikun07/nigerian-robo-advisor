import React from "react";
import StarSvg from "../Icons/star";

function ReviewCard({ Text, Name, From, Rating }) {
  return (
    <>
      <div className="bg-[#222222] shadow shadow-Dark-Gray rounded-md lg:w-[450px] px-2 py-4 h-[150px] justify-between text-White flex flex-col">
        <p className="font-medium leading-5 tracking-tight">{Text}</p>

        <div className="flex items-center gap-2">
          <div className=" h-[50px] w-[50px] border-2 border-Black rounded-full"></div>
          <div className="flex flex-col gap-1">
            <p>{Name}</p>
            <div className="flex items-center gap-1 ">
              <span className="flex items-center gap-2">
                <StarSvg /> {Rating}
                <p className="list-disc list-outside capitalize">
                 {From}
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
