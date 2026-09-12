"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  // Optional image or logo can be added here
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const swiperRef = useRef<SwiperType>(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

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
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView="auto"
        spaceBetween={-20} // Subtle overlap for depth
        breakpoints={{
          640: { spaceBetween: -30 },
          1024: { spaceBetween: -40 },
        }}
        className="w-full !overflow-hidden py-12"
        grabCursor
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide 
            key={testimonial.id} 
            className="!w-[85vw] sm:!w-[550px] lg:!w-[750px] xl:!w-[900px] !h-auto flex"
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
                      scale: isActive ? 1 : 0.9,
                      opacity: isActive ? 1 : 0.35,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div
                      className={`card card-padded flex flex-col gap-6 w-full h-full bg-white transition-all duration-300 ${
                        isActive 
                          ? "border-gray-200 shadow-xl" 
                          : "border-gray-100 shadow-sm pointer-events-none"
                      }`}
                    >
                      <Quote className="w-8 h-8 text-accent opacity-20" />
                      
                      <blockquote className="flex-1">
                        <p className="text-body-lg text-ink-900 font-medium leading-relaxed">
                          &quot;{testimonial.quote}&quot;
                        </p>
                      </blockquote>
                      
                      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-surface border border-gray-200 flex items-center justify-center shrink-0">
                          <span className="text-sm font-bold text-gray-500">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-ink-900">
                            {testimonial.author}
                          </p>
                          <p className="text-xs text-gray-500">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            }}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -left-2 md:left-4 -translate-y-1/2 z-40 hidden sm:block">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={`w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-ink-900 hover:text-accent hover:border-accent transition-all duration-200 ${
            isBeginning ? "opacity-0 pointer-events-none" : "opacity-0 group-hover/carousel:opacity-100"
          }`}
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute top-1/2 -right-2 md:right-4 -translate-y-1/2 z-40 hidden sm:block">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={`w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-ink-900 hover:text-accent hover:border-accent transition-all duration-200 ${
            isEnd ? "opacity-0 pointer-events-none" : "opacity-0 group-hover/carousel:opacity-100"
          }`}
          aria-label="Next testimonial"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
