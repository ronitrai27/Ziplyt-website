import React from "react";
import { Eye, ShieldCheck, Wallet } from "lucide-react";
import { NumberTicker } from "@/components/magicui/number-ticker";
const LogoTicker = () => {
  return (
    <section className="bg-white w-full py-5 px-4 mb-20">
      <div className="hidden min-[1000px]:flex items-center gap-5 justify-evenly">
        {/* BOX 1 */}
        <div className="flex flex-col min-w-[12rem] max-w-[20rem] p-2 rounded-md">
          <div className="flex items-center justify-baseline gap-2 w-full">
            <div className="bg-gray-200 w-9 h-9 flex items-center justify-center rounded-md">
              <Eye size={20} className="text-primary-blue" />
            </div>
            <NumberTicker
              value={100}
              className="text-[56px] font-bold tracking-tighter text-light"
            />
            <span className="text-[32px] text-light -ml-1">%</span>
          </div>
          <h1 className="font-poppins italic text-[20px] ml-16 -mt-3 font-medium text-deep/80 tracking-tighter">
            Transparency
          </h1>
        </div>
        {/* 2 */}
        <div className="flex flex-col items-center   border-l-8 border-primary-blue min-w-[12rem] max-w-[20rem] p-2 rounded-md">
          <div className="flex items-center justify-baseline gap-2 w-full">
            <div className="bg-gray-200 w-9 h-9 flex items-center justify-center rounded-md">
              <ShieldCheck size={20} className="text-primary-blue" />
            </div>
            <NumberTicker
              value={10.0}
              startValue={0.0}
              decimalPlaces={2}
              direction="down"
              className="text-[56px] font-bold tracking-tighter text-light"
            />
            <span className="text-[32px] text-light -ml-1">%</span>
          </div>
          <h1 className="font-poppins italic text-[20px] ml-16 -mt-3 font-medium text-deep/80 tracking-tighter">
            hidden charges
          </h1>
        </div>
        {/* 3 */}
        <div className="flex flex-col items-center   border-l-8 border-primary-blue min-w-[12rem] max-w-[20rem] p-2 rounded-md">
          <div className="flex items-center justify-baseline gap-2 w-full">
            <div className="bg-gray-200 w-9 h-9 flex items-center justify-center rounded-md">
              <Wallet size={20} className="text-primary-blue" />
            </div>
            <NumberTicker
              value={100}
              className="text-[56px] font-bold tracking-tighter text-light"
            />
            <span className="text-[32px] text-light -ml-1">%</span>
          </div>
          <h1 className="font-poppins italic text-[20px] ml-16 -mt-3 font-medium text-deep/80 tracking-tighter">
            Damage cover
          </h1>
        </div>
        {/* 4 */}
        {/* <div className="flex flex-col items-center   border-l-8 border-primary-blue min-w-[12rem] max-w-[20rem] p-2 rounded-md">
          <div className="flex items-center justify-baseline gap-2 w-full">
            <div className="bg-gray-200 w-9 h-9 flex items-center justify-center rounded-md">
              <ShieldCheck size={20} className="text-primary-blue" />
            </div>
            <NumberTicker
              value={10.0}
              startValue={0.0}
              decimalPlaces={2}
              direction="down"
              className="text-[56px] font-bold tracking-tighter text-light"
            />
            <span className="text-[32px] text-light -ml-1">%</span>
          </div>
          <h1 className="font-poppins italic text-[20px] ml-16 -mt-3 font-medium text-deep/80 tracking-tighter"></h1>
        </div> */}
      </div>

      {/* Mobile View (Marquee for screen < 1000px) */}
      <div className="min-[1000px]:hidden tmarquee-container w-full h-[190px]">
        <div className="flex gap-5 w-max tmarquee">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex gap-5">
              {/* BOX 1 */}
              <div className="flex flex-col min-w-[12rem] max-w-[20rem] p-2 rounded-md">
                <div className="flex items-center justify-baseline gap-2 w-full">
                  <div className="bg-gray-200 w-9 h-9 flex items-center justify-center rounded-md">
                    <Eye size={20} className="text-primary-blue" />
                  </div>
                  <NumberTicker
                    value={100}
                    className="text-[56px] font-bold tracking-tighter text-light"
                  />
                  <span className="text-[32px] text-light -ml-1">%</span>
                </div>
                <h1 className="font-poppins italic text-[20px] ml-16 -mt-3 font-medium text-deep/80 tracking-tighter">
                  Transparency
                </h1>
              </div>
              {/* 2 */}
              <div className="flex flex-col items-center  min-w-[12rem] max-w-[20rem] p-2 rounded-md">
                <div className="flex items-center justify-baseline gap-2 w-full">
                  <div className="bg-gray-200 w-9 h-9 flex items-center justify-center rounded-md">
                    <ShieldCheck size={20} className="text-primary-blue" />
                  </div>
                  <NumberTicker
                    value={10.0}
                    startValue={0.0}
                    decimalPlaces={2}
                    direction="down"
                    className="text-[56px] font-bold tracking-tighter text-light"
                  />
                  <span className="text-[32px] text-light -ml-1">%</span>
                </div>
                <h1 className="font-poppins italic text-[20px] ml-16 -mt-3 font-medium text-deep/80 tracking-tighter">
                  hidden charges
                </h1>
              </div>
              {/* 3 */}
              <div className="flex flex-col items-center  min-w-[12rem] max-w-[20rem] p-2 rounded-md">
                <div className="flex items-center justify-baseline gap-2 w-full">
                  <div className="bg-gray-200 w-9 h-9 flex items-center justify-center rounded-md">
                    <Wallet size={20} className="text-primary-blue" />
                  </div>
                  <NumberTicker
                    value={100}
                    className="text-[56px] font-bold tracking-tighter text-light"
                  />
                  <span className="text-[32px] text-light -ml-1">%</span>
                </div>
                <h1 className="font-poppins italic text-[20px] ml-16 -mt-3 font-medium text-deep/80 tracking-tighter">
                  Damage cover
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
