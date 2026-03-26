"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/Background3.jpg",
    title: (
      <>
        Where New Authors <br /> Find Their Place
      </>
    ),
    tag: "Emerging Writers",
    cta: "Submit Manuscript",
  },
  {
    image: "/Background1.avif",
    title: (
      <>
        Stories That Stay <br /> Long After the Last Page
      </>
    ),
    tag: "Literary Fiction",
    cta: "Read Feature",
  },
  {
    image: "/Background2.avif",
    title: (
      <>
        Voices That Shape <br /> Contemporary Thought
      </>
    ),
    tag: "New & Noteworthy",
    cta: "Browse Collection",
  },
];

export default function HeroCarousel() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="top" className="relative w-full h-screen">

      {/* 🔥 HEADER */}
      <header className="absolute top-0 left-0 w-full z-20 px-6 md:px-12 py-4 text-white bg-gradient-to-b from-black/60 to-transparent">

  <div className="flex items-center justify-between">

    {/* ✅ LOGO (slightly pushed down for balance) */}
    <div className="flex items-center mt-1 md:mt-2">
      <Image
        src="/logo4.png"
        alt="Growing Pages"
        width={140}
        height={40}
        priority
        className="object-contain"
      />
    </div>

    {/* ✅ DESKTOP NAV (slightly up) */}
    <nav className="hidden md:flex gap-10 text-sm tracking-[0.15em] uppercase font-medium -mt-1">
      <a href="#top" className="hover:text-[#b39b6d] transition">Home</a>
      <a href="#author" className="hover:text-[#b39b6d] transition">Author profiles</a>
      <a href="#books" className="hover:text-[#b39b6d] transition">Latest Releases</a>
      <a href="#manu" className="hover:text-[#b39b6d] transition">Submit Manuscript</a>
      <a href="#blog" className="hover:text-[#b39b6d] transition">Blogs</a>
    </nav>

    {/* ✅ MOBILE MENU BUTTON */}
    <div className="md:hidden">
      <button onClick={() => setMenuOpen(true)} className="text-2xl mt-1">
        ☰
      </button>
    </div>

  </div>
</header>

      {/* 📱 MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/95 z-30 flex flex-col">

          <div className="flex items-center justify-between px-6 py-5 border-b border-white/20">
            <Image
              src="/logo4.png"
              alt="Growing Pages"
              width={120}
              height={40}
            />

            <button
              onClick={() => setMenuOpen(false)}
              className="text-3xl text-white"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-10 text-white text-xl uppercase tracking-[0.2em]">

            <a href="#top" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#author" onClick={() => setMenuOpen(false)}>
              Author profiles
            </a>

            <a href="#books" onClick={() => setMenuOpen(false)}>
              Latest Releases
            </a>

            <a href="#manu" onClick={() => setMenuOpen(false)}>
              Submit Manuscript
            </a>
            <a href="#blog" onClick={() => setMenuOpen(false)}>
              Blogs
            </a>

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

                {/* Tag */}
                <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-[#b39b6d] mb-4">
                  {slide.tag}
                </p>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-serif font-medium leading-[1.1] tracking-tight mb-6">
                  {slide.title}
                </h1>

                {/* CTA */}
                <button className="text-sm tracking-[0.2em] border-b border-white pb-1 hover:text-gray-300 transition">
                  {slide.cta}
                </button>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}