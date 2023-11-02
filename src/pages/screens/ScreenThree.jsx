import React from "react";
import ReviewCard from "../../components/Card/ReviewCard";

function ScreenThree() {
  return (
    <>
      <div className="bg-Black h-screen lg:px-10 px-2 flex gap-y-8 flex-col items-center text-center justify-center text-White">
        {/* info */}
        <div className="flex flex-col gap-5">
          <h1 className="lg:text-6xl text-4xl tracking-wide font-semibold">
            What others have said about Nigerian RoboAdvisor
          </h1>
          <p className=" text-Gray">
            Nigerian RoboAdvisor have been trusted by users from various circles.
            Reviews are by Nigerian RoboAdvisor clients. Clients received no form
            of compensation.
          </p>
        </div>

        {/* card */}
        <div className="flex lg:flex-row flex-col gap-6">
          <ReviewCard
            Text={
              "Performing better - east to us - good source for info. Good recommendation for your investing"
            }
            Name="Festus-olaleye Ayomikun"
            From="from apple app Store"
            Rating={4.8}
          />
          <ReviewCard
            Text={
              "Performing better - east to us - good source for info. Good recommendation for your investing"
            }
            Name="Festus-olaleye Ayomikun"
            From="from google play Store"
            Rating={4.7}
          />
        </div>

        <div>
          <p className="text-Dark-Blue cursor-pointer font-medium">See full customer stories</p>
        </div>
      </div>
    </>
  );
}

export default ScreenThree;
