"use client";

import Image from "next/image";

export default function LatestBooks() {
  const books = [
    { 
      title: "Dianna's Vision", 
      image: "/Book1.avif", 
      price: "$55.00",
      tag: "Bestseller",
      desc: "A powerful story of ambition and destiny."
    },
    { 
      title: "Final Countdown", 
      image: "/Book2.avif", 
      price: "$60.00",
      tag: "New Release",
      desc: "A gripping thriller with unexpected twists."
    },
    { 
      title: "Beyond The Fog", 
      image: "/Book3.avif", 
      price: "$50.00",
      tag: "Drama",
      desc: "An emotional journey through uncertainty."
    },
    { 
      title: "Hidden Truths", 
      image: "/Book4.avif", 
      price: "$50.00",
      tag: "Mystery",
      desc: "Secrets unfold in a chilling narrative."
    },
    { 
      title: "Silent Echo", 
      image: "/Book5.avif", 
      price: "$50.00",
      tag: "Fiction",
      desc: "A haunting tale of memory and silence."
    },
    { 
      title: "Lost Horizon", 
      image: "/Book6.avif", 
      price: "$50.00",
      tag: "Adventure",
      desc: "A journey beyond limits and imagination."
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="uppercase tracking-[0.2em] text-xs md:text-sm text-blue-600 mb-3">
            Collection
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Latest Book Releases
          </h2>

          <p className="text-gray-500 mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Explore our newest titles crafted by talented authors worldwide
          </p>

          <div className="w-20 md:w-24 h-[3px] bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">

          {books.map((book, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer transition duration-300 hover:-translate-y-2"
            >

              {/* Image (ENHANCED) */}
              <div className="relative overflow-hidden rounded-2xl shadow-md group-hover:shadow-2xl transition duration-500">

                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition duration-500 z-10"></div>

                <div className="aspect-[3/4]">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                </div>
              </div>

              {/* Tag */}
              <span className="inline-block mt-4 text-xs font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                {book.tag}
              </span>

              {/* Title */}
              <h3 className="mt-3 text-base md:text-lg font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition">
                {book.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 mt-2 text-sm line-clamp-2 px-2">
                {book.desc}
              </p>

              {/* Price */}
              <p className="text-gray-700 mt-2 font-medium">
                {book.price}
              </p>

              {/* CTA */}
<div className="mt-5 flex justify-center">
  <button className="relative overflow-hidden px-5 py-2.5 text-sm font-medium rounded-full border border-blue-500 text-blue-600 transition-all duration-300 group">

    {/* Hover Background */}
    <span className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>

    {/* Text */}
    <span className="relative z-10 group-hover:text-white transition">
      View Book →
    </span>

  </button>
</div>

            </div>
          ))}

        </div>

        {/* View All Books CTA */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-lg">
            View All Books
          </button>
        </div>

      </div>
    </section>
  );
}