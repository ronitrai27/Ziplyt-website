import React from "react";
import {
  Wrench,
  Hammer,
  Zap,
  Sparkles,
  Flower2,
  PaintBucket,
  Cpu,
  Cat,
} from "lucide-react";

const categories = [
  { id: "plumber", name: "Plumber", icon: Wrench },
  { id: "carpenter", name: "Carpenter", icon: Hammer },
  { id: "electrician", name: "Electrician", icon: Zap },
  { id: "cleaner", name: "Cleaner", icon: Sparkles },
  { id: "gardener", name: "Gardener", icon: Flower2 },
  { id: "painter", name: "Painter", icon: PaintBucket },
  { id: "technician", name: "Technician", icon: Cpu },
  { id: "pet-care", name: "Pet Care", icon: Cat },
];

const Services = () => {
  return (
    <section className="bg-white my-10 container" id="services">
      <main className="max-w-6xl mx-auto px-4">
        <h1 className="uppercase font-poppins text-center text-[42px] text-deep font-medium tracking-tight">
          Your Tasks, Our Expertise
        </h1>
        <h3 className="text-balance font-inter text-light tracking-tighter text-[20px] text-center mb-8">
          You got problem? We got ears. Services for all your needs.
        </h3>

        {/* CATEGORIES GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
          {categories.map(({ id, name, icon: Icon }) => (
            <div
              key={id}
              className="bg-white px-4 py-2 rounded-full flex items-center gap-3 border border-light w-fit"
            >
              <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-md">
                <Icon className="text-primary-blue w-5 h-5" />
              </div>
              <p className="capitalize font-inter text-[16px] font-medium tracking-tight whitespace-nowrap">
                {name}
              </p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Services;
