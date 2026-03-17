"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/book1.jpg",
    tag: "BESTSELLER",
    title: "The Silent Echo",
  },
  {
    image: "/book2.jpg",
    tag: "NEW RELEASE",
    title: "Whispers of Time",
  },
  {
    image: "/book3.jpg",
    tag: "AWARD WINNING",
    title: "Shadows Within",
  },
];

export default function HeroCarousel() {
  return (
    <div className="w-full h-[100vh]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 4500 }}
        loop
        effect="fade"
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Softer Overlay */}
              <div className="w-full h-full bg-gradient-to-r from-black/40 via-black/20 to-transparent flex items-center">
                
                {/* Content */}
                <div className="max-w-7xl mx-auto px-6 md:px-10 text-white">
                  
                  {/* Tag */}
                  <p className="text-xs md:text-sm tracking-[0.3em] mb-4 opacity-80">
                    {slide.tag}
                  </p>

                  {/* Title */}
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 max-w-xl">
                    {slide.title}
                  </h1>

                  {/* CTA */}
                  <button className="border border-white px-6 py-3 text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300">
                    Buy Now
                  </button>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}