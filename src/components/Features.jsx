import React from "react";

const Features = ({ featureImg, feature, description }) => {
  return (
    <div className="flex items-center gap-4">
      <img src={featureImg} alt="icons" width={80} />
      <div>
        <h3>{feature}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Features;
