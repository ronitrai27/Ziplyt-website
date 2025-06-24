"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import {
  Wind,
  Wrench,
  Sparkles,
  Printer,
  Heart,
  Paintbrush,
  Zap,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence, useAnimation } from "framer-motion";

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
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 17,
        delay: 0.05 * i
      }
    })
  };

  return (
    <div ref={sectionRef} className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.7, 
            ease: [0.22, 1, 0.36, 1],
            opacity: { duration: 0.4 }
          }}
          className="text-center font-inter text-[20px] tracking-tighter font-semibold text-light/50"
        >
          STAR SERVICES
        </motion.h4>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
            opacity: { duration: 0.5, delay: 0.15 }
          }}
          className="bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text] font-poppins mb-4 text-[42px] font-medium tracking-tight leading-tight min-[820px]:text-left text-center"
        >
          Browse Our Popular Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
            opacity: { duration: 0.6, delay: 0.25 }
          }}
          className="text-[20px] font-inter mb-6 text-light min-[820px]:max-w-[35rem] text-balance w-full min-[820px]:text-left text-center"
        >
          Discover our most requested professional services, trusted by
          thousands of customers
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isHovered = hoveredCard === service.id;

              return (
                <CarouselItem
                  key={service.id}
                  className="pl-2 md:pl-4 basis-[280px] md:basis-[320px] lg:basis-[350px]"
                >
                  <motion.div
                    custom={index}
                    variants={cardVariants}
                  >
                    <Card
                      className={`h-[420px] transition-all duration-500 ease-out cursor-pointer border-0 shadow-lg hover:shadow-2xl overflow-hidden group bg-primary-blue/10`}
                      onMouseEnter={() => setHoveredCard(service.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <CardContent className="p-0 h-full relative">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"
                          />
                          {/* Image Overlay for better text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        </div>

                        {/* Always Visible Content */}
                        <div className="relative h-full flex flex-col justify-between p-6 text-white z-10">
                          {/* Top Section - Always Visible */}
                          <div className="flex items-start justify-between">
                            <motion.div 
                              className="p-2 rounded-lg bg-white text-primary-blue backdrop-blur-sm"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                              <IconComponent className="w-5 h-5" />
                            </motion.div>
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
                          </div>
                        </div>

                        {/* Hover Overlay with AnimatePresence for smoother transitions */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/70 to-primary-blue/40"
                            >
                              <div className="h-full flex flex-col justify-center p-6 text-white">
                                {/* Middle Section - Description */}
                                <motion.div
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ 
                                    delay: 0.1, 
                                    duration: 0.4,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20
                                  }}
                                >
                                  <h3 className="mt-8 mb-2 font-poppins font-semibold text-white text-[24px] tracking-tight text-center">
                                    {service.title}
                                  </h3>
                                  <p className="text-gray-200 font-inter text-[16px] text-center text-balance">
                                    {service.description}
                                  </p>
                                </motion.div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Shine Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                          initial={{ x: "-100%" }}
                          animate={isHovered ? { x: "100%" } : { x: "-100%" }}
                          transition={{ 
                            duration: 0.8, 
                            ease: "easeInOut",
                            delay: isHovered ? 0 : 0.2
                          }}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </div>
  );
}
