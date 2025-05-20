<div className="bg-primary-blue w-full py-10 px-4 mt-5">
  <div className=" flex items-center gap-5 justify-evenly">
    {/* BOX -1  */}
    <div className="flex flex-col items-center bg-white border-l-8 border-light ticker-shadow  min-w-[12rem] max-w-[20rem] p-2 rounded-md">
      <div className="flex items-center justify-center gap-5 w-full">
        <div className="bg-gray-200 w-9 h-9 flex items-center justify-center rounded-md">
          <Eye size={20} className="text-primary-blue" />
        </div>
        <NumberTicker
          value={100}
          className="text-[48px] font-medium tracking-tighter text-light"
        />
        <span className="text-[32px] text-light -ml-4">%</span>
      </div>
      <h1 className="font-poppins text-[22px] mb-3 font-medium text-light tracking-tighter">
        Transparency
      </h1>
      <p className="font-inter text-[16px] font-light  text-deep tracking-tighter text-center">
        Experience unmatch transparency
      </p>
    </div>
    {/* BOX -2  */}
    <div className="flex flex-col items-center bg-white border-l-8 border-light ticker-shadow min-w-[12rem] max-w-[20rem] p-2 rounded-md">
      <div className="flex items-center justify-center gap-5 w-full">
        <div className="bg-gray-200 w-9 h-9 flex items-center justify-center rounded-md">
          <ShieldCheck size={20} className="text-primary-blue" />
        </div>
        <NumberTicker
          value={100}
          className="text-[48px] font-medium tracking-tighter text-light"
        />
        <span className="text-[32px] text-light -ml-4">%</span>
      </div>
      <h1 className="font-poppins text-[22px] mb-3 font-medium text-light tracking-tighter">
        Transparency
      </h1>
      <p className="font-inter text-[16px] font-light  text-deep tracking-tighter text-center">
        Experience unmatch transparency
      </p>
    </div>
    {/* BOX -3  */}
    <div className="flex flex-col items-center bg-white border-l-8 border-light ticker-shadow min-w-[12rem] max-w-[20rem] p-2 rounded-md">
      <div className="flex items-center justify-center gap-5 w-full">
        <div className="bg-gray-200 w-9 h-9 flex items-center justify-center rounded-md">
          <Wallet size={20} className="text-primary-blue" />
        </div>
        <NumberTicker
          value={100}
          className="text-[48px] font-medium tracking-tighter text-light"
        />
        <span className="text-[32px] text-light -ml-4">%</span>
      </div>
      <h1 className="font-poppins text-[22px] mb-3 font-medium text-light tracking-tighter">
        Transparency
      </h1>
      <p className="font-inter text-[16px] font-light  text-deep tracking-tighter text-center">
        Experience unmatch transparency
      </p>
    </div>
    {/* BOX -4 */}
    <div className="hidden min-[1000px]:flex flex-col items-center bg-white border-l-8 border-light ticker-shadow min-w-[12rem] max-w-[20rem] p-2 rounded-md">
      <div className="flex items-center justify-center gap-5 w-full">
        <div className="bg-gray-200 w-9 h-9 flex items-center justify-center rounded-md">
          <Users size={20} className="text-primary-blue" />
        </div>
        <NumberTicker
          value={100}
          className="text-[48px] font-medium tracking-tighter text-light"
        />
        <span className="text-[32px] text-light -ml-4">%</span>
      </div>
      <h1 className="font-poppins text-[22px] mb-3 font-medium text-light tracking-tighter">
        Transparency
      </h1>
      <p className="font-inter text-[16px] font-light  text-deep tracking-tighter text-center">
        Experience unmatch transparency
      </p>
    </div>
  </div>
</div>;
