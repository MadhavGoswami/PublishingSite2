"use client";

import { useState } from "react";
import Image from "next/image";

export default function AuthorSection() {
  const [selectedAuthor, setSelectedAuthor] = useState<any>(null);

  const authors = [
    {
      name: "John Carter",
      image: "/author1.avif",
      bookImage: "/Book1.avif",
      bio: "Award-winning fiction writer known for immersive storytelling.",
      description:
        "John Carter is a bestselling author whose novels have captivated readers worldwide. His latest book explores deep human emotions and gripping narratives.",
    },
    {
      name: "Emma Watson",
      image: "/author2.avif",
      bookImage: "/Book2.avif",
      bio: "Contemporary author with a modern voice and storytelling style.",
      description:
        "Emma writes powerful stories about identity and growth. Her latest release has topped charts globally.",
    },
    {
      name: "Michael Lee",
      image: "/author3.avif",
      bookImage: "/Book3.avif",
      bio: "Master of thrillers and suspense-driven narratives.",
      description:
        "Michael Lee delivers edge-of-the-seat thrillers. His newest book is a must-read for suspense lovers.",
    },
  ];

  return (
    <section id="authors" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="uppercase tracking-[0.2em] text-xs md:text-sm text-blue-600 mb-3">
            Our Writers
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Meet Our Authors
          </h2>

          <p className="text-gray-500 mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Discover the voices behind our stories and explore their journeys
          </p>

          <div className="w-20 md:w-24 h-[3px] bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {authors.map((author, index) => (
            <div
              key={index}
              onClick={() => setSelectedAuthor(author)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >

              {/* Image */}
              <Image
                src={author.image}
                alt={author.name}
                width={400}
                height={400}
                className="w-full h-[300px] sm:h-[320px] md:h-[340px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-5 md:p-6 text-white">

                <h3 className="text-lg md:text-xl font-semibold tracking-wide">
                  {author.name}
                </h3>

                <p className="text-xs md:text-sm text-gray-300 mt-2 leading-relaxed line-clamp-2">
                  {author.bio}
                </p>

                <span className="inline-block mt-3 text-sm text-blue-300 group-hover:underline">
                  View Profile →
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      {selectedAuthor && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center px-4 py-6 md:py-10 overflow-y-auto">

          <div className="bg-white max-w-5xl w-full rounded-3xl shadow-2xl relative overflow-hidden">

            {/* Close */}
            <button
              onClick={() => setSelectedAuthor(null)}
              className="absolute top-4 right-4 md:top-5 md:right-5 text-gray-400 hover:text-black text-xl"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2">

              {/* Book Image */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6 md:p-8">
                <Image
                  src={selectedAuthor.bookImage}
                  alt={selectedAuthor.name}
                  width={400}
                  height={500}
                  className="rounded-xl shadow-xl object-cover w-[220px] sm:w-[260px] md:w-auto"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">

                <p className="uppercase tracking-widest text-xs md:text-sm text-blue-600 mb-2">
                  Featured Author
                </p>

                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
                  {selectedAuthor.name}
                </h3>

                <div className="w-14 md:w-16 h-[3px] bg-blue-500 mt-4 mb-6 rounded-full"></div>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-8 max-w-md">
                  {selectedAuthor.description}
                </p>

                <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-lg w-full sm:w-fit">
                  Buy Bestseller
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}