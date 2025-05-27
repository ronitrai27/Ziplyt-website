"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import {
  Wind,
  Wrench,
  Sparkles,
  //   Laptop,
  Printer,
  Heart,
  //   Car,
  Paintbrush,
  Zap,
  //   Home,
  //   Smartphone,
  //   Camera,
  //   Star,
  //   ArrowRight,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "TapFix Plumbing",
    description:
      "Quick and reliable plumbing solutions for leaking taps, faucets, and kitchen fittings.",
    icon: Wrench,
    price: "From $49",
    rating: 4.8,
    reviews: 201,
    popular: true,
    image: "/tapfix.jpg",
    category: "Home Services",
  },
  {
    id: 2,
    title: "Electrical Wiring",
    description:
      "Safe and certified electrical wiring installations and repairs for your home or office.",
    icon: Zap,
    price: "From $79",
    rating: 4.7,
    reviews: 178,
    popular: true,
    image: "/wiring.jpg",
    category: "Electrical",
  },
  {
    id: 3,
    title: "AC Repair & Maintenance",
    description:
      "Restore cooling comfort with professional AC inspections, gas refilling, and repairs.",
    icon: Wind,
    price: "From $89",
    rating: 4.9,
    reviews: 256,
    popular: true,
    image: "/acrepair.jpg",
    category: "Cooling Services",
  },
  {
    id: 4,
    title: "Wardrobe Fix & Hinges",
    description:
      "Skilled carpentry services for broken doors, hinges, and wardrobe adjustments.",
    icon: Wrench,
    price: "From $59",
    rating: 4.6,
    reviews: 143,
    popular: true,
    image: "/wardrobefix.jpg",
    category: "Furniture Repair",
  },
  {
    id: 5,
    title: "Deep Bathroom Cleaning",
    description:
      "Disinfected, spotless, and odor-free bathrooms with our expert cleaning crew.",
    icon: Sparkles,
    price: "From $49",
    rating: 4.9,
    reviews: 312,
    popular: true,
    image: "/bathroomclean.jpg",
    category: "Cleaning",
  },
  {
    id: 6,
    title: "Printer Repair",
    description:
      "Get your inkjet or laser printers running like new with our multi-brand support.",
    icon: Printer,
    price: "From $55",
    rating: 4.7,
    reviews: 120,
    popular: true,
    image: "/printerrepair.jpg",
    category: "Technology",
  },
  {
    id: 7,
    title: "Dog Grooming",
    description:
      "Gentle pet grooming with shampooing, haircuts, nail trimming, and more.",
    icon: Heart,
    price: "From $95",
    rating: 4.9,
    reviews: 267,
    popular: true,
    image: "/doggroom.jpg",
    category: "Pet Care",
  },
  {
    id: 8,
    title: "Wall Painting Services",
    description:
      "Freshen up your home with expert wall painting—interior, exterior & feature walls.",
    icon: Paintbrush,
    price: "From $120",
    rating: 4.8,
    reviews: 198,
    popular: true,
    image: "/wallpainter.jpg",
    category: "Home Improvement",
  },
];

export default function ServicesCarousel() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text] font-poppins mb-4 text-[42px] font-medium tracking-tight leading-tight min-[820px]:text-left text-center">
          Browse Our Popular Services
        </h1>
        <p className="text-[20px] font-inter mb-6 text-light min-[820px]:max-w-[35rem] text-balance w-full min-[820px]:text-left text-center">
          Discover our most requested professional services, trusted by
          thousands of customers
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {services.map((service) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCard === service.id;

            return (
              <CarouselItem
                key={service.id}
                className="pl-2 md:pl-4 basis-[280px] md:basis-[320px] lg:basis-[350px]"
              >
                <Card
                  className={`h-[420px] transition-all duration-500 ease-out cursor-pointer border-0 shadow-lg hover:shadow-2xl overflow-hidden group bg-primary-blue/10 `}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-0 h-full relative">
                    {/* Background Image */}
                    <div className="absolute inset-0 ">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl "
                      />
                      {/* Image Overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>

                    {/* Always Visible Content */}
                    <div className="relative h-full flex flex-col justify-between p-6 text-white z-10">
                      {/* Top Section - Always Visible */}
                      <div className="flex items-start justify-between">
                        <div className="p-2 rounded-lg bg-white text-primary-blue backdrop-blur-sm">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        {service.popular && (
                          <Badge className="bg-gradient-to-l from-primary-blue/90 via-indigo-500/70 to-primary-blue/40 text-white border-white/30 backdrop-blur-sm text-[16px]">
                            Popular
                          </Badge>
                        )}
                      </div>

                      {/* Bottom Section - Always Visible */}
                      <div>
                        <h3 className="font-inter font-medium text-white text-[20px] tracking-tight mb-2">
                          {service.title}
                        </h3>
                        {/* <div className="flex items-center gap-2 text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{service.rating}</span>
                          </div>
                          <span className="text-white/80">•</span>
                          <span className="text-white/80">
                            {service.reviews} reviews
                          </span>
                        </div> */}
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/70 to-primary-blue/40 transition-all duration-500 ease-out ${
                        isHovered ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="h-full flex flex-col justify-center p-6 text-white">
                        {/* Middle Section - Description */}
                        <div
                          className={`transition-all duration-500 ${
                            isHovered
                              ? "translate-y-0 opacity-100"
                              : "translate-y-4 opacity-0"
                          }`}
                        >
                          <h3 className="mt-8 mb-2 font-poppins font-semibold text-white text-[24px] tracking-tight text-center">
                            {service.title}
                          </h3>
                          <p className="text-gray-200 font-inter text-[16px] text-center text-balance">
                            {service.description}
                          </p>
                          {/* <div className="flex items-center gap-3 mb-4">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-semibold">
                                {service.rating}
                              </span>
                              <span className="text-white/80 text-sm">
                                ({service.reviews} reviews)
                              </span>
                            </div>
                          </div> */}
                        </div>

                        {/* Bottom Section - Price and CTA */}
                        {/* <div
                          className={`transition-all duration-500 delay-100 ${
                            isHovered
                              ? "translate-y-0 opacity-100"
                              : "translate-y-4 opacity-0"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-2xl font-bold">
                                {service.price}
                              </div>
                              <div className="text-white/80 text-sm">
                                Starting price
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium hover:bg-white/30 transition-colors duration-300">
                                Learn More
                              </button>
                              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                <ArrowRight className="w-5 h-5" />
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-transform duration-1000 ${
                        isHovered ? "translate-x-full" : "-translate-x-full"
                      }`}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Navigation Buttons */}
        {/* <div className="flex justify-center gap-4 mt-8">
          <CarouselPrevious className="relative inset-auto translate-y-0 bg-primary-blue/80 backdrop-blur-sm border-0 shadow-lg hover:bg-blue-800 hover:scale-110 transition-all duration-300 text-white" />
          <CarouselNext className="relative inset-auto translate-y-0 bg-primary-blue/80 backdrop-blur-sm border-0 shadow-lg hover:bg-blue-800 hover:scale-110 transition-all duration-300 text-white" />
        </div> */}
      </Carousel>
    </div>
  );
}
