"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/hero1.jpg",
    title: "Discover Stories That Inspire",
    subtitle: "Explore books from emerging authors worldwide",
  },
  {
    image: "/hero2.jpg",
    title: "Where Authors Become Legends",
    subtitle: "Publish your story with confidence",
  },
  {
    image: "/hero3.jpg",
    title: "Your Next Favorite Book Awaits",
    subtitle: "Browse our curated collection",
  },
];

export default function HeroCarousel() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative w-full h-screen">

      {/* 🔥 HEADER */}
      <header className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-6 md:px-12 py-4 text-white">
        
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold">
          GrowingPages
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex gap-8 text-lg">
          <a href="#" className="hover:text-gray-300 transition">Home</a>
          <a href="#books" className="hover:text-gray-300 transition">Books</a>
          <a href="#authors" className="hover:text-gray-300 transition">Authors</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </header>

  {/* 📱 MOBILE MENU */}
{menuOpen && (
  <div className="absolute top-0 left-0 w-full h-screen bg-black/95 z-30 flex flex-col">

    {/* Top Bar (Logo + Close Button) */}
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

    {/* Menu Links */}
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
              className="w-full h-screen bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>

              {/* Content */}
              <div className="relative z-10 text-center text-white px-6 max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6">
                  {slide.subtitle}
                </p>

                <button className="bg-[#c5a47e] text-white px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}