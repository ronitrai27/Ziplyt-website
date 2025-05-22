import Image from "next/image";
import React from "react";

const Wavy = () => {
  return (
    <div className="bg-primary-blue w-full h-[10rem] min-[750px]:mt-[14.6rem] max-[749px]:mt-[12rem] max-[500px]:mt-[6rem] relative">
      {/* Center image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <Image src="/effectPic.png" alt="image" width={500} height={500} />
      </div>

      {/* Text Content */}
      <div className="max-[500px]:hidden flex justify-between items-center h-full px-6 min-[800px]:px-20 text-white font-poppins text-[16px] font-medium tracking-tight">
        {/* Left Text */}
        <p className="w-[30%] min-w-[140px] text-left leading-tight ">
          Empowering homes with instant expert help.
        </p>

        {/* Right Text */}
        <p className="w-[30%] min-w-[140px] text-right leading-tight">
          Ziplyt connects you with professionals.
        </p>
      </div>
    </div>
  );
};

export default Wavy;
