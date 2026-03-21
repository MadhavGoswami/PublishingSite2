"use client";

import Image from "next/image";

export default function LatestBooks() {
  const books = [
    {
      title: "Dianna's Vision",
      image: "/Book1.avif",
      price: "$55.00",
    },
    {
      title: "Final Countdown",
      image: "/Book2.avif",
      price: "$60.00",
    },
    {
      title: "Beyond The Fog",
      image: "/Book3.avif",
      price: "$50.00",
    },
    {
      title: "Hidden Truths",
      image: "/Book4.avif",
      price: "$50.00",
    },
    {
      title: "Silent Echo",
      image: "/Book5.avif",
      price: "$50.00",
    },
    {
      title: "Lost Horizon",
      image: "/Book6.avif",
      price: "$50.00",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-widest text-sm text-blue-600 mb-3">
            Collection
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Latest Book Releases
          </h2>

          <p className="text-gray-500 mt-4 text-sm md:text-base max-w-xl mx-auto">
            Explore our newest titles crafted by talented authors worldwide
          </p>

          <div className="w-24 h-[3px] bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">

          {books.map((book, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer transition duration-300 hover:-translate-y-2"
            >

              {/* Image Wrapper */}
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

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500"></div>

                {/* Hover CTA Center */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <span className="text-white text-sm tracking-widest border-b border-white pb-1">
                    VIEW BOOK
                  </span>
                </div>

              </div>

              {/* Title */}
              <h3 className="mt-6 text-base md:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                {book.title}
              </h3>

              {/* Price */}
              <p className="text-gray-500 mt-2 text-sm">
                {book.price}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}