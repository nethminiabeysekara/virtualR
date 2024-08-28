import React from "react";
import { features } from "../constants";

function Featuresection() {
  return (
    <div className="mt-20 bordre-b realtive border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="h-6 px-2 py-1 text-sm font-medium text-orange-500 uppercase rounded bg-neutrounded-full">
          Feature
        </span>
        <h2 className="mt-10 text-3xl tracking-wide sm:text-5xl lg:text-6xl lg:mt-20">
          Easily build
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-800">
            {" "}
            your code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex items-center justify-center w-10 h-10 p-2 mx-6 text-orange-700 rounded bg-neutral-900-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="p-2 mb-20 text-md text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featuresection;
