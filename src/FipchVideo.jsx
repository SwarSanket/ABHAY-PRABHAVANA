import React from "react";
import FipchVdo from "./assets/fipch-vdo.mp4";

 export default function FipchVideo() {
    return (
      <div className="relative z-10 w-full max-h-1080px">
        <video className="w-full h-[1080px] object-cover" muted autoPlay loop>
          <source src={FipchVdo} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-[1080px] bg-black opacity-20"></div>
        <div className="absolute w-full p-4 text-center bottom-20">
          <span className="font-semibold text-white text-[50px]">Timeless Jain Values</span>
        </div>
      </div>
    );
  }


