"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

interface Service {
  slug: string;
  category: string;
  title: string;
  description: string;
  href: string;
}

interface ServiceCarouselProps {
  services: Service[];
}

export function ServiceCarousel({ services }: ServiceCarouselProps) {
  const swiperRef = useRef<SwiperType>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative group/carousel px-1">
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        centeredSlides={true}
        loop={true}
        speed={800}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView="auto"
        spaceBetween={-16} // Subtle overlap for mobile
        breakpoints={{
          640: {
            spaceBetween: -24, // Tablet overlap
          },
          1024: {
            spaceBetween: -32, // Desktop overlap
          },
        }}
        className="w-full !overflow-hidden py-10" // Hidden overflow to clip sides, py-10 for hover/scale room
        grabCursor
      >
        {services.map((service, index) => (
          <SwiperSlide 
            key={service.slug} 
            className="!w-[85vw] sm:!w-[500px] lg:!w-[700px] xl:!w-[850px] !h-auto flex"
          >
            {({ isActive }) => {
              // Active card sits on top of neighboring cards
              const zIndex = isActive ? 30 : 10;
              
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" as const }}
                  className="h-full flex w-full relative"
                  style={{ zIndex }}
                >
                  <motion.div
                    className="w-full h-full"
                    animate={{
                      scale: isActive ? 1 : 0.85,
                      opacity: isActive ? 1 : 0.4,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <Link
                      href={service.href}
                      className={`card card-padded flex flex-col gap-3 group w-full h-full bg-white transition-all duration-300 hover:shadow-2xl ${
                        isActive 
                          ? "border-gray-200 shadow-xl" 
                          : "border-gray-100 shadow-sm pointer-events-none" // prevent clicking side cards
                      }`}
                      aria-labelledby={`service-${service.slug}`}
                      tabIndex={isActive ? 0 : -1}
                    >
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {service.category}
                      </span>
                      <h3
                        id={`service-${service.slug}`}
                        className="text-lg font-bold text-ink-900"
                      >
                        {service.title}
                      </h3>
                      <p className="text-body text-gray-500 flex-1">{service.description}</p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-ink-900 group-hover:text-accent transition-colors mt-2">
                        Learn more 
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          →
                        </motion.span>
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
              );
            }}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons (Desktop mostly) */}
      <div className="absolute top-1/2 -left-2 md:left-4 -translate-y-1/2 z-40 hidden sm:block">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={`w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-ink-900 hover:text-accent hover:border-accent transition-all duration-200 ${
            isBeginning ? "opacity-0 pointer-events-none" : "opacity-0 group-hover/carousel:opacity-100"
          }`}
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute top-1/2 -right-2 md:right-4 -translate-y-1/2 z-40 hidden sm:block">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={`w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-ink-900 hover:text-accent hover:border-accent transition-all duration-200 ${
            isEnd ? "opacity-0 pointer-events-none" : "opacity-0 group-hover/carousel:opacity-100"
          }`}
          aria-label="Next slide"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
