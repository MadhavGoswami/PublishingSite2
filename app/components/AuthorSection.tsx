"use client";

import { useState } from "react";
import Image from "next/image";

type Author = {
  name: string;
  image: string;
  bookImage: string;
  role: string;
  genre: string;
  status: string;
  bio: string;
  description: string;
  primaryCta: string;
};

export default function AuthorSection() {
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);

  const authors: Author[] = [
    {
      name: "John Carter",
      image: "/Trial4.png",
      bookImage: "/Book1.avif",
      role: "Fiction Author",
      genre: "Literary Storytelling",
      status: "Award-Winning",
      bio: "John Carter crafts emotionally rich literary fiction centered on human complexity, memory, and resilience.",
      description:
        "John Carter is a master of literary fiction, known for crafting emotionally rich narratives that linger long after the final page. His storytelling blends introspection with powerful human themes, drawing readers into deeply immersive worlds. His latest novel explores love, loss, and resilience through unforgettable characters.",
      primaryCta: "View Books",
    },
    {
      name: "Emma Watson",
      image: "/Trial2.png",
      bookImage: "/Book2.avif",
      role: "Contemporary Writer",
      genre: "Modern Fiction",
      status: "Global Bestseller",
      bio: "Emma Watson brings a fresh voice to contemporary fiction with stories about identity, growth, and modern life.",
      description:
        "Emma Watson brings a fresh and compelling voice to modern fiction, exploring identity, transformation, and the complexities of contemporary life. Her writing resonates with a global audience, offering stories that are both intimate and universally relatable. Her latest release continues to redefine modern storytelling.",
      primaryCta: "View Books",
    },
    {
      name: "Michael Lee",
      image: "/Trial3.png",
      bookImage: "/Book3.avif",
      role: "Thriller Author",
      genre: "Suspense Fiction",
      status: "Award Winner Thriller",
      bio: "Michael Lee is known for sharp, high-stakes thrillers filled with suspense, tension, and unexpected turns.",
      description:
        "Michael Lee is renowned for his gripping thrillers that keep readers on the edge of their seats. With sharp pacing and unexpected twists, his stories deliver intense suspense and psychological depth. His latest book is a high-stakes journey filled with tension, intrigue, and unforgettable moments.",
      primaryCta: "View Books",
    },
  ];

  return (
    <section
      id="author"
      className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-blue-50/60"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="uppercase tracking-[0.24em] text-[11px] md:text-xs text-blue-600 mb-3 font-medium">
            Our Writers
          </p>

          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
            Meet Our Authors
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Discover the voices behind our stories and explore the books, ideas,
            and journeys shaping our publishing house.
          </p>

          <div className="w-20 md:w-24 h-[3px] bg-blue-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Author Grid */}
        <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {authors.map((author, index) => (
            <article
              key={index}
              className="group rounded-[28px] overflow-hidden bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              {/* Image Wrap */}
              <div className="relative overflow-hidden bg-slate-100">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={author.image}
                    alt={author.name}
                    fill
                    className="object-cover object-center grayscale-[8%] group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-90" />

                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-gray-800">
                    Featured Author
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <h3 className="text-xl md:text-2xl font-serif text-gray-900">
                  {author.name}
                </h3>

                {/* Consistent meta format */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.16em] px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                    {author.role}
                  </span>
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.16em] px-3 py-1 rounded-full bg-slate-50 text-slate-700 border border-slate-200">
                    {author.genre}
                  </span>
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.16em] px-3 py-1 rounded-full bg-slate-50 text-slate-700 border border-slate-200">
                    {author.status}
                  </span>
                </div>

                <p className="mt-4 text-sm md:text-[15px] text-gray-600 leading-7 min-h-[84px]">
                  {author.bio}
                </p>

                {/* CTA Row */}
                <div className="mt-6 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedAuthor(author)}
                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition shadow-md"
                  >
                    {author.primaryCta}
                  </button>

                  <button
                    onClick={() => setSelectedAuthor(author)}
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedAuthor && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center px-4 py-6 md:py-10 overflow-y-auto">
          <div className="relative w-full max-w-6xl rounded-[32px] overflow-hidden bg-white shadow-2xl">
            {/* Close */}
            <button
              onClick={() => setSelectedAuthor(null)}
              className="absolute top-4 right-4 md:top-5 md:right-5 z-20 h-10 w-10 rounded-full bg-white/90 text-gray-500 hover:text-black shadow-md transition"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2">
              {/* Left Side */}
              <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100/70 p-6 md:p-10 lg:p-12">
                <div className="flex flex-col items-center">
                  {/* Uniform author photo */}
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                    <Image
                      src={selectedAuthor.image}
                      alt={selectedAuthor.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Book image */}
                  <div className="relative group">
                    <div className="absolute -inset-3 bg-blue-200/40 blur-2xl rounded-[28px] opacity-70 group-hover:opacity-100 transition duration-500" />
                    <Image
                      src={selectedAuthor.bookImage}
                      alt={selectedAuthor.name}
                      width={380}
                      height={520}
                      className="relative rounded-[24px] shadow-2xl object-cover w-[240px] sm:w-[280px] md:w-[300px] lg:w-[340px] h-[340px] sm:h-[400px] md:h-[430px] lg:h-[500px] transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                <p className="uppercase tracking-[0.22em] text-[11px] md:text-xs text-blue-600 mb-3 font-medium">
                  Featured Author
                </p>

                <h3 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
                  {selectedAuthor.name}
                </h3>

                {/* Same structured bio format */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.16em] px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                    {selectedAuthor.role}
                  </span>
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.16em] px-3 py-1 rounded-full bg-slate-50 text-slate-700 border border-slate-200">
                    {selectedAuthor.genre}
                  </span>
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.16em] px-3 py-1 rounded-full bg-slate-50 text-slate-700 border border-slate-200">
                    {selectedAuthor.status}
                  </span>
                </div>

                <div className="w-16 h-[3px] bg-blue-500 mt-6 mb-6 rounded-full" />

                <p className="text-gray-600 leading-8 text-sm md:text-base mb-8 max-w-xl">
                  {selectedAuthor.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-lg">
                    View Books
                  </button>

                  <button className="border border-slate-300 text-slate-700 px-6 py-3 rounded-full font-medium hover:bg-slate-50 transition">
                    Read Interview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}