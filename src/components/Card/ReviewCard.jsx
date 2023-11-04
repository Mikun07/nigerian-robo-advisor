import React from "react";
import StarSvg from "../Icons/star";
import AvatarSvg from "../Icons/avatar";

function ReviewCard({ Text, Name, From, Rating }) {
  return (
    <>
      <div className="bg-[#222222] shadow shadow-Dark-Gray rounded-md lg:w-[450px] px-2 py-4 h-[150px] justify-between text-White flex flex-col">
        <p className="font-medium leading-5 tracking-tight">{Text}</p>

        <div className="flex items-center gap-2">
          <div>
            <AvatarSvg />
          </div>
          <div className="flex flex-col gap-1 text-xs items-center">
            <p className=" capitalize">{Name}</p>
            <div className="flex items-center ml-3 gap-1">
              <StarSvg /> {Rating}
              <p className="capitalize">{From}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
