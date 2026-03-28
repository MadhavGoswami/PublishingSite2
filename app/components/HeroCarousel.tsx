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
    Voices Shaping Tomorrow <br /> Modern Literature
  </>
),
    subtitle:
      "A curated space for emerging and established authors—where powerful stories find their audience.",
    tag: "Meet Our Authors",
    cta: "Submit Manuscript",
  },
  {
    image: "/Background1.avif",
    title: (
      <>
        Stories That Resonate <br /> Beyond the Final Page
      </>
    ),
    subtitle:
      "Explore narratives crafted with depth, emotion, and lasting impact.",
    tag: "Literary Fiction",
    cta: "Read Feature",
  },
  {
    image: "/Background2.avif",
    title: (
  <>
    Ideas That Challenge <br /> Modern Perspectives
  </>
),
    subtitle:
      "Discover authors who challenge perspectives and shape modern discourse.",
    tag: "New & Noteworthy",
    cta: "Browse Collection",
  },
];

export default function HeroCarousel() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="top" className="relative w-full h-screen">

      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full z-20 px-6 md:px-12 py-4 text-white bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center justify-between">

          <div className="flex items-center mt-1 md:mt-2">
            <Image src="/logo4.png" alt="Growing Pages" width={140} height={40} />
          </div>

          <nav className="hidden md:flex gap-10 text-sm tracking-[0.15em] uppercase font-medium -mt-1">
            <a href="#top">Home</a>
            <a href="#author">Author profiles</a>
            <a href="#books">Latest Releases</a>
            <a href="#manu">Submit Manuscript</a>
            <a href="#blog">Blogs</a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)} className="text-2xl mt-1">
              ☰
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/95 z-30 flex flex-col">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/20">
            <Image src="/logo4.png" alt="Growing Pages" width={120} height={40} />
            <button onClick={() => setMenuOpen(false)} className="text-3xl text-white">✕</button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-10 text-white text-xl uppercase tracking-[0.2em]">
            <a href="#top" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#author" onClick={() => setMenuOpen(false)}>Author profiles</a>
            <a href="#books" onClick={() => setMenuOpen(false)}>Latest Releases</a>
            <a href="#manu" onClick={() => setMenuOpen(false)}>Submit Manuscript</a>
            <a href="#blog" onClick={() => setMenuOpen(false)}>Blogs</a>
          </div>
        </div>
      )}

      {/* CAROUSEL */}
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

              {/* Improved Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40"></div>

             {/* Content */}
<div className="relative z-10 text-left text-white px-6 max-w-4xl mx-auto">

  {/* Tag (CENTERED) */}
  <p className="text-center uppercase tracking-[0.35em] text-[11px] md:text-xs text-blue-400 mb-6 font-sans">
    {slide.tag}
  </p>

  {/* Heading */}
  <h1 className="font-serif text-4xl md:text-6xl leading-[1.08] tracking-[-0.02em] mb-6 max-w-2xl">
    {slide.title}
  </h1>

  {/* Subheading */}
  <p className="font-sans text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-md">
    {slide.subtitle}
  </p>

  {/* CTA (CENTERED) */}
  <div className="flex justify-center">
    <button className="font-sans text-sm tracking-[0.25em] border-b border-blue-400 pb-1 text-blue-400 hover:text-white hover:border-white transition duration-300">
      {slide.cta}
    </button>
  </div>

</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}