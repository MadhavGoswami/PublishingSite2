"use client";

import Image from "next/image";

export default function LatestBooks() {
  const books = [
    { title: "Dianna's Vision", image: "/Book1.avif", price: "$55.00" },
    { title: "Final Countdown", image: "/Book2.avif", price: "$60.00" },
    { title: "Beyond The Fog", image: "/Book3.avif", price: "$50.00" },
    { title: "Hidden Truths", image: "/Book4.avif", price: "$50.00" },
    { title: "Silent Echo", image: "/Book5.avif", price: "$50.00" },
    { title: "Lost Horizon", image: "/Book6.avif", price: "$50.00" },
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

              {/* Image */}
              <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition duration-500">
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

              {/* Title */}
              <h3 className="mt-5 text-base md:text-lg font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition">
                {book.title}
              </h3>

              {/* Price */}
              <p className="text-gray-500 mt-2 text-sm md:text-base">
                {book.price}
              </p>

              {/* CTA */}
<span className="mt-4 inline-block text-sm font-medium text-blue-600 group-hover:underline transition">
  View Book →
</span>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}