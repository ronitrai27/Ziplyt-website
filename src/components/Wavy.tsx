import Image from "next/image";
import React from "react";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
const Wavy = () => {
  return (
    <div className="bg-primary-blue w-full h-[10rem] min-[750px]:mt-[15rem] max-[749px]:mt-[12rem] max-[500px]:mt-[6rem] relative mb-10">
      {/* Center image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
        <Image
          src="/effectPic.png"
          alt="image"
          width={500}
          height={500}
          className=""
        />
      </div>

      <div className="h-full flex items-center justify-center ">
        <VelocityScroll>FAST.TRANSPARENT.TRUST</VelocityScroll>
      </div>
    </div>
  );
};

export default Wavy;
