"use client";

import React from "react";
import { Eye, ShieldCheck, Wallet } from "lucide-react";
import { NumberTicker } from "@/components/magicui/number-ticker";

const LogoTicker = () => {
  return (
    <section className="w-full py-0">
      <div className="max-w-5xl mx-auto">
        <div className="bg-primary-blue rounded-3xl shadow-lg py-8 px-6 max-[1000px]:rounded-none max-[1000px]:w-[100vw] max-[1000px]:relative max-[1000px]:left-[calc(-50vw+50%)]">
          <h4 className="text-center font-inter text-[20px] tracking-tighter font-semibold text-white mb-6">
            WHY CHOOSE US ?
          </h4>

          {/* Desktop View */}
          <div className="hidden min-[1000px]:grid grid-cols-3 gap-4">
            {/* BOX 1 */}
            <div className="flex items-center gap-4">
              <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center">
                <Eye size={26} className="text-white" />
              </div>
              <div>
                <div className="flex items-baseline">
                  <NumberTicker
                    value={100}
                    className="text-[50px] font-bold tracking-tighter text-white"
                  />
                  <span className="text-[32px] font-bold text-white ml-1">%</span>
                </div>
                <h1 className="font-poppins italic text-[18px] font-medium text-white/90 tracking-tighter">
                  Transparency
                </h1>
              </div>
            </div>

            {/* BOX 2 */}
            <div className="flex items-center gap-4">
              <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center">
                <ShieldCheck size={26} className="text-white" />
              </div>
              <div>
                <div className="flex items-baseline">
                  <NumberTicker
                    value={0.0}
                    startValue={0.0}
                    decimalPlaces={2}
                    direction="down"
                    className="text-[50px] font-bold tracking-tighter text-white"
                  />
                  <span className="text-[32px] font-bold text-white ml-1">%</span>
                </div>
                <h1 className="font-poppins italic text-[18px] font-medium text-white/90 tracking-tighter">
                  hidden charges
                </h1>
              </div>
            </div>

            {/* BOX 3 */}
            <div className="flex items-center gap-4">
              <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center">
                <Wallet size={26} className="text-white" />
              </div>
              <div>
                <div className="flex items-baseline">
                  <NumberTicker
                    value={100}
                    className="text-[50px] font-bold tracking-tighter text-white"
                  />
                  <span className="text-[32px] font-bold text-white ml-1">%</span>
                </div>
                <h1 className="font-poppins italic text-[18px] font-medium text-white/90 tracking-tighter">
                  Damage cover
                </h1>
              </div>
            </div>
          </div>

          {/* Mobile View - Infinite Scroll Animation */}
          <div className="min-[1000px]:hidden overflow-hidden w-full">
            <div className="mobile-ticker-wrapper w-full overflow-hidden">
              <div className="mobile-ticker flex animate-infinite-scroll">
                {/* First set */}
                <div className="flex items-center gap-4 ticker-item">
                  <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center">
                    <Eye size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-baseline">
                      <NumberTicker
                        value={100}
                        className="text-[42px] font-bold tracking-tighter text-white"
                      />
                      <span className="text-[28px] font-bold text-white ml-1">%</span>
                    </div>
                    <h1 className="font-poppins italic text-[16px] font-medium text-white/90 tracking-tighter">
                      Transparency
                    </h1>
                  </div>
                </div>

                <div className="flex items-center gap-4 ticker-item">
                  <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center">
                    <ShieldCheck size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-baseline">
                      <NumberTicker
                        value={0.00}
                        startValue={0.00}
                        decimalPlaces={2}
                        direction="down"
                        className="text-[42px] font-bold tracking-tighter text-white"
                      />
                      <span className="text-[28px] font-bold text-white ml-1">%</span>
                    </div>
                    <h1 className="font-poppins italic text-[16px] font-medium text-white/90 tracking-tighter">
                      hidden charges
                    </h1>
                  </div>
                </div>

                <div className="flex items-center gap-4 ticker-item">
                  <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center">
                    <Wallet size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-baseline">
                      <NumberTicker
                        value={100}
                        className="text-[42px] font-bold tracking-tighter text-white"
                      />
                      <span className="text-[28px] font-bold text-white ml-1">%</span>
                    </div>
                    <h1 className="font-poppins italic text-[16px] font-medium text-white/90 tracking-tighter">
                      Damage cover
                    </h1>
                  </div>
                </div>
                
                {/* Duplicate set for infinite loop */}
                <div className="flex items-center gap-4 ticker-item">
                  <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center">
                    <Eye size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-baseline">
                      <NumberTicker
                        value={100}
                        className="text-[42px] font-bold tracking-tighter text-white"
                      />
                      <span className="text-[28px] font-bold text-white ml-1">%</span>
                    </div>
                    <h1 className="font-poppins italic text-[16px] font-medium text-white/90 tracking-tighter">
                      Transparency
                    </h1>
                  </div>
                </div>

                <div className="flex items-center gap-4 ticker-item">
                  <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center">
                    <ShieldCheck size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-baseline">
                      <NumberTicker
                        value={0.00}
                        startValue={10.00}
                        decimalPlaces={2}
                        direction="down"
                        className="text-[42px] font-bold tracking-tighter text-white"
                      />
                      <span className="text-[28px] font-bold text-white ml-1">%</span>
                    </div>
                    <h1 className="font-poppins italic text-[16px] font-medium text-white/90 tracking-tighter">
                      hidden charges
                    </h1>
                  </div>
                </div>

                <div className="flex items-center gap-4 ticker-item">
                  <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center">
                    <Wallet size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-baseline">
                      <NumberTicker
                        value={100}
                        className="text-[42px] font-bold tracking-tighter text-white"
                      />
                      <span className="text-[28px] font-bold text-white ml-1">%</span>
                    </div>
                    <h1 className="font-poppins italic text-[16px] font-medium text-white/90 tracking-tighter">
                      Damage cover
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .mobile-ticker-wrapper {
          overflow: hidden;
          padding: 8px 0;
        }
        
        .mobile-ticker {
          display: flex;
          gap: 32px;
          width: fit-content;
        }
        
        .ticker-item {
          min-width: 240px;
          flex-shrink: 0;
        }
        
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-infinite-scroll {
          animation: infiniteScroll 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LogoTicker;
