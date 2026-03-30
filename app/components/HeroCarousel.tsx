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
        Where Exceptional Voices 
        Become Lasting Books
      </>
    ),
    subtitle:
      "We champion emerging and established authors through thoughtful publishing and connect remarkable books with the right audience.",
    support:
      "For readers seeking depth. For writers ready to be discovered.",
    tag: "Meet Our Authors",
    cta: "Submit Manuscript",
  },
  {
    image: "/Background1.avif",
    title: (
      <>
        Stories Crafted for Purpose 
        Designed To Endure
      </>
    ),
    subtitle:
      "Discover fiction and non-fiction shaped by literary quality, emotional resonance, and ideas that stay with you beyond the final page.",
    support:
      "Read powerful voices. Explore books that leave a mark.",
    tag: "Literary Fiction",
    cta: "Read Feature",
  },
  {
    image: "/Background2.avif",
    title: (
      <>
        A Publishing Home For 
        Bold Ideas And New Perspectives
      </>
    ),
    subtitle:
      "We bring forward authors whose words challenge, inspire, and shape modern conversation across fiction and contemporary thought.",
    support:
      "Built for curious readers and aspiring authors alike.",
    tag: "New & Noteworthy",
    cta: "Browse Collection",
  },
];

export default function HeroCarousel() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="top" className="relative w-full h-screen overflow-hidden">
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
            <button
              onClick={() => setMenuOpen(false)}
              className="text-3xl text-white"
            >
              ✕
            </button>
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
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/45" />

              {/* Content wrapper */}
              <div className="relative z-10 h-full w-full px-6 md:px-12">
                <div className="mx-auto flex h-full max-w-7xl items-center">
                  {/* Fixed width text column for consistency */}
                  <div className="w-full max-w-[720px] pt-20 md:pt-24">
                    {/* Tag */}
                    <p className="mb-5 text-[11px] md:text-xs uppercase tracking-[0.35em] text-blue-400 font-medium">
                      {slide.tag}
                    </p>

                    {/* Title */}
                    <h1 className="max-w-[680px] font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-[-0.03em] text-white">
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-6 max-w-[620px] text-base md:text-lg leading-relaxed text-gray-200">
                      {slide.subtitle}
                    </p>

                    {/* Support line */}
                    <p className="mt-4 max-w-[560px] text-sm md:text-base leading-relaxed text-white/80 italic">
                      {slide.support}
                    </p>

                    {/* CTA */}
                    <div className="mt-10">
                      <button className="text-sm uppercase tracking-[0.22em] text-blue-400 border-b border-blue-400 pb-1 hover:text-white hover:border-white transition duration-300">
                        {slide.cta}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}