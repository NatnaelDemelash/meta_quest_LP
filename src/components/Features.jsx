import React from "react";

const Features = ({ featureImg, feature, description }) => {
  return (
    <div className="flex items-center gap-6 my-8">
      <img
        className="bg-slate-200 p-4 rounded"
        src={featureImg}
        alt="icons"
        width={80}
      />
      <div>
        <h3 className="text-xl font-bold">{feature}</h3>
        <p className="text-sm text-slate-700">{description}</p>
      </div>
    </div>
  );
};

export default Features;
