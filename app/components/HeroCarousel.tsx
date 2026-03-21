"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/Background1.avif",
    title: (
      <>
        Discover Stories <br /> That Inspire
      </>
    ),
  },
  {
    image: "/Background2.avif",
    title: (
      <>
        Where Authors <br /> Become Legends
      </>
    ),
  },
];

export default function HeroCarousel() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative w-full h-screen">

      {/* 🔥 HEADER */}
      <header className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-6 md:px-12 py-4 text-white bg-gradient-to-b from-black/60 to-transparent">
        
        <div className="text-xl md:text-2xl font-bold">
          GrowingPages
        </div>

        <nav className="hidden md:flex gap-8 text-lg">
          <a href="#" className="hover:text-gray-300 transition">Home</a>
          <a href="#books" className="hover:text-gray-300 transition">Books</a>
          <a href="#authors" className="hover:text-gray-300 transition">Authors</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </header>

      {/* 📱 MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/95 z-30 flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/20">
            <div className="text-xl font-bold text-white">
              GrowingPages
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="text-3xl text-white"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-8 text-white text-2xl">
            <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#books" onClick={() => setMenuOpen(false)}>Books</a>
            <a href="#authors" onClick={() => setMenuOpen(false)}>Authors</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}

      {/* 🎞️ CAROUSEL */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-screen bg-cover bg-center relative flex justify-center pt-40 md:pt-52"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">

                {/* Small Tagline */}
                <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-gray-200 mb-4">
                  The Award-Winning Book
                </p>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-6">
                  {slide.title}
                </h1>

                {/* Minimal Button */}
                <button className="text-sm tracking-widest border-b border-white pb-1 hover:text-gray-300 transition">
                  BUY NOW
                </button>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}