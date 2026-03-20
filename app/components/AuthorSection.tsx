"use client";

import { useState } from "react";

export default function AuthorSection() {
  const [selectedAuthor, setSelectedAuthor] = useState<any>(null);

  const authors = [
    {
      name: "John Carter",
      image: "/author1.jpg",
      bookImage: "/book1.jpg",
      bio: "Award-winning fiction writer known for immersive storytelling.",
      description:
        "John Carter is a bestselling author whose novels have captivated readers worldwide. His latest book explores deep human emotions and gripping narratives.",
    },
    {
      name: "Emma Watson",
      image: "/author2.jpg",
      bookImage: "/book2.jpg",
      bio: "Contemporary author with a modern voice and storytelling style.",
      description:
        "Emma writes powerful stories about identity and growth. Her latest release has topped charts globally.",
    },
    {
      name: "Michael Lee",
      image: "/author3.jpg",
      bookImage: "/book3.jpg",
      bio: "Master of thrillers and suspense-driven narratives.",
      description:
        "Michael Lee delivers edge-of-the-seat thrillers. His newest book is a must-read for suspense lovers.",
    },

     {
      name: "Michael Lee",
      image: "/author3.jpg",
      bookImage: "/book3.jpg",
      bio: "Master of thrillers and suspense-driven narratives.",
      description:
        "Michael Lee delivers edge-of-the-seat thrillers. His newest book is a must-read for suspense lovers.",
    },
  ];

  return (
    <section id="authors" className="py-24 bg-[#f8f6f2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meet Our Authors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover talented writers who bring stories to life and inspire readers across the world.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {authors.map((author, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-500"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition duration-700"
                  style={{ backgroundImage: `url(${author.image})` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition"></div>

                {/* Button */}
                <div className="absolute inset-0 flex items-end justify-center pb-6 
  opacity-100 md:opacity-0 md:group-hover:opacity-100 transition">
  
  <button
    onClick={() => setSelectedAuthor(author)}
    className="bg-[#c5a47e] text-white px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
  >
    View Profile
  </button>
</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {author.name}
                </h3>

                <p className="text-gray-600 text-sm">
                  {author.bio}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* 🔥 MODAL */}
      {selectedAuthor && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">

          <div className="bg-white rounded-3xl max-w-5xl w-full overflow-hidden relative shadow-2xl">

            {/* Close */}
            <button
              onClick={() => setSelectedAuthor(null)}
              className="absolute top-5 right-5 text-2xl text-gray-600 hover:text-black"
            >
              ✕
            </button>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* Book Image */}
              <div
                className="h-64 md:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedAuthor.bookImage})` }}
              />

              {/* Details */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {selectedAuthor.name}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedAuthor.description}
                </p>

                <button className="bg-[#c5a47e] text-white px-6 py-3 rounded-full w-fit hover:scale-105 transition">
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