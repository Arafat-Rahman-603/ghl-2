"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

interface Industry {
  slug: string;
  name: string;
  description: string;
  workflows: string[];
}

interface IndustryCarouselProps {
  industries: Industry[];
  basePath?: string;
}

export function IndustryCarousel({ industries, basePath = "/industries" }: IndustryCarouselProps) {
  const swiperRef = useRef<SwiperType>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative group/carousel px-1 pb-8">
      <Swiper
        modules={[Navigation, A11y]}
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
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView="auto"
        spaceBetween={-16}
        breakpoints={{
          640: { spaceBetween: -24 },
          1024: { spaceBetween: -32 },
        }}
        className="w-full !overflow-hidden py-10"
        grabCursor
      >
        {industries.map((industry, index) => (
          <SwiperSlide 
            key={industry.slug} 
            className="!w-[85vw] sm:!w-[480px] lg:!w-[650px] xl:!w-[800px] !h-auto flex"
          >
            {({ isActive }) => {
              const zIndex = isActive ? 30 : 10;
              
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="h-full flex w-full relative"
                  style={{ zIndex }}
                >
                  <motion.div
                    className="w-full h-full"
                    animate={{
                      scale: isActive ? 1 : 0.88,
                      opacity: isActive ? 1 : 0.45,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <Link
                      href={`${basePath}/${industry.slug}`}
                      className={`card card-padded flex flex-col gap-4 w-full h-full bg-white transition-all duration-300 ${
                        isActive 
                          ? "border-gray-200 shadow-xl" 
                          : "border-gray-100 shadow-sm pointer-events-none"
                      }`}
                      aria-labelledby={`industry-${industry.slug}`}
                      tabIndex={isActive ? 0 : -1}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-surface border border-gray-100 flex items-center justify-center shrink-0">
                           <span className="text-sm font-bold text-gray-500">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <h3
                          id={`industry-${industry.slug}`}
                          className="text-lg font-bold text-ink-900"
                        >
                          {industry.name}
                        </h3>
                      </div>
                      
                      <p className="text-body text-gray-500 flex-1">{industry.description}</p>
                      
                      <div className="bg-surface rounded-xl p-4 mt-2 border border-gray-100">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                          Common workflows
                        </p>
                        <ul className="flex flex-col gap-2">
                          {industry.workflows.slice(0, 3).map((wf) => (
                            <li
                              key={wf}
                              className="flex items-center gap-2 text-sm text-gray-600"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                              <span className="truncate">{wf}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm font-bold text-ink-900 group-hover:text-accent transition-colors mt-4">
                        See implementation 
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
              );
            }}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -left-2 md:-left-8 -translate-y-1/2 z-10 hidden sm:block">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={`w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-ink-900 hover:text-accent hover:border-accent transition-all duration-200 ${
            isBeginning ? "opacity-0 pointer-events-none" : "opacity-0 group-hover/carousel:opacity-100"
          }`}
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute top-1/2 -right-2 md:-right-8 -translate-y-1/2 z-10 hidden sm:block">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={`w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-ink-900 hover:text-accent hover:border-accent transition-all duration-200 ${
            isEnd ? "opacity-0 pointer-events-none" : "opacity-0 group-hover/carousel:opacity-100"
          }`}
          aria-label="Next slide"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
