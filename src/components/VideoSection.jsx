import React from "react";
import ReactPlayer from "react-player";
import videoBg from "../assets/videoBg.mp4";

const VideoSection = () => {
  return (
    <div className="flex items-center gap-2 px-10 bg-[#EAEDED]">
      <div className="max-w-[380px]">
        <h1 className="text-[3rem] leading-snug tracking-tighter font-bold">
          Bring your couch to the front row
        </h1>
        <p className="text-sm text-slate-700">
          It's a long established fact that a reader will be restricrted by the
          readable content
        </p>
      </div>
      <div className="">
        <ReactPlayer
          width="100%"
          height="100vh"
          playing
          loop
          muted
          url={videoBg}
        />
      </div>
    </div>
  );
};

export default VideoSection;
