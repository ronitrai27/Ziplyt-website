import React from "react";
import { MarqueeDemoVertical } from "@/lib/marqueDemo";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { LuCheck } from "react-icons/lu";
const Testimonial = () => {
  return (
    <section className="w-full max-h-screen my-10 px-12">
      <div className=" flex min-[700px]:flex-row flex-col items-center justify-between gap-5">
        {/* LEFT SIDE */}
        <main className="relative w-full h-[380px] min-[1000px]:h-[500px] flex flex-col gap-3 items-center justify-center  overflow-hidden">
          <h1 className="font-poppins text-center text-[38px] tracking-tight font-medium leading-snug">
            {" "}
            <span className="bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text] font-inter tracking-tighter">
              100% Satisfaction Guaranteed
            </span>
            <br /> Every Time
          </h1>
          <p className="font-inter text-[22px] font-light text-light text-center max-w-[30rem]">
            Hear from our happy customers who trust Ziplyt for their needs.
          </p>
          <DotPattern
            glow={true}
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </main>
        {/* RIGHT SIDE */}
        <div>
          <MarqueeDemoVertical />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
