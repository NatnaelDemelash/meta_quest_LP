import React from "react";

import spec from "../assets/specification.png";
import cubes from "../assets/cubes.png";
import lens from "../assets/lens.png";
import layers from "../assets/layers.png";
import weight from "../assets/weight.png";

function Specifications() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1 className="text-4xl text-center mt-5 font-bold">Specification</h1>

      <div className="w-[70%] py-4">
        <img src={spec} alt="" />
      </div>

      <div className="flex items-center gap-20 py-10">
        <div className="flex items-center gap-6">
          <div>
            <img src={cubes} alt="" width={60} />
          </div>
          <div>
            <h3 className="text-[#d4fe75]  bg-black p-4 rounded-full text-xs font-bold">
              Field of View
            </h3>
            <h2 className="text-2xl">180deg</h2>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div>
            <img src={lens} alt="" width={60} />
          </div>
          <div>
            <h3 className="text-[#d4fe75]  bg-black p-4 rounded-full text-xs font-bold">
              HD Lens Diameter
            </h3>
            <h2 className="text-2xl">38mm</h2>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div>
            <img src={layers} alt="" width={60} />
          </div>
          <div>
            <h3 className="text-[#d4fe75]  bg-black p-4 rounded-full text-xs font-bold">
              Focal Adjustment
            </h3>
            <h2 className="text-2xl">0 to 300deg</h2>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div>
            <img src={weight} alt="" width={60} />
          </div>
          <div>
            <h3 className="text-[#d4fe75]  bg-black p-4 rounded-full text-xs font-bold">
              Weight
            </h3>
            <h2 className="text-2xl">241g</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specifications;
