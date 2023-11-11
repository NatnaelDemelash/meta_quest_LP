import React from "react";
import Features from "../components/Features";

import threeSixty from "../assets/360.png";
import simulator from "../assets/simulator.png";
import devices from "../assets/devices.png";
import coreFeature from "../assets/coreFeature.png";

const CoreFeatures = () => {
  return (
    <section className="max-w-[1200px] flex items-center gap-6 my-10 mx-auto">
      <div>
        <h1>Core Features</h1>
        <h4>
          It's a long established fact that a reader will be restricrted by the
          readable content
        </h4>
        <div>
          <Features
            feature="360 Virtual reality glass"
            description="It's a long established fact that a reader will be restricrted by the
        readable content"
            featureImg={threeSixty}
          />
          <Features
            feature="Interactive VR Simulator"
            description="It's a long established fact that a reader will be restricrted by the
        readable content"
            featureImg={simulator}
          />
          <Features
            feature="Tablet, PC Control System "
            description="It's a long established fact that a reader will be restricrted by the
        readable content"
            featureImg={devices}
          />
        </div>
      </div>

      <div>
        <img src={coreFeature} alt="" />
      </div>
    </section>
  );
};

export default CoreFeatures;
