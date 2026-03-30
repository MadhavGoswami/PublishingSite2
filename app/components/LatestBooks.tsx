"use client";

import Image from "next/image";

type Book = {
  title: string;
  image: string;
  price: string;
  tag: string;
  genre: string;
  desc: string;
};

export default function LatestBooks() {
  const books: Book[] = [
    {
      title: "Dianna's Vision",
      image: "/Book1.avif",
      price: "$55.00",
      tag: "Bestseller",
      genre: "Literary Fiction",
      desc: "A powerful story of ambition, identity, and the courage to shape one’s own destiny.",
    },
    {
      title: "Final Countdown",
      image: "/Book2.avif",
      price: "$60.00",
      tag: "New Release",
      genre: "Thriller",
      desc: "A gripping suspense novel driven by danger, urgency, and unexpected turns at every step.",
    },
    {
      title: "Beyond The Fog",
      image: "/Book3.avif",
      price: "$50.00",
      tag: "Editor's Pick",
      genre: "Drama",
      desc: "An emotional journey through uncertainty, memory, and the search for clarity.",
    },
    {
      title: "Hidden Truths",
      image: "/Book4.avif",
      price: "$50.00",
      tag: "Mystery",
      genre: "Psychological Mystery",
      desc: "Secrets begin to unravel in a chilling narrative filled with tension and revelation.",
    },
    {
      title: "Silent Echo",
      image: "/Book5.avif",
      price: "$50.00",
      tag: "Featured",
      genre: "Contemporary Fiction",
      desc: "A haunting tale of memory, silence, and the emotional traces we leave behind.",
    },
    {
      title: "Lost Horizon",
      image: "/Book6.avif",
      price: "$50.00",
      tag: "Staff Favorite",
      genre: "Adventure",
      desc: "A journey beyond limits and imagination, where discovery changes everything.",
    },
  ];

  return (
    <section
      id="books"
      className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-blue-50/70"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="uppercase tracking-[0.24em] text-[11px] md:text-xs text-blue-600 mb-3 font-medium">
            Collection
          </p>

          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
            Latest Book Releases
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Explore our newest titles, from standout literary fiction to bold
            contemporary releases crafted by exceptional authors.
          </p>

          <div className="w-20 md:w-24 h-[3px] bg-blue-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {books.map((book, index) => (
            <article
              key={index}
              className="group rounded-[28px] border border-slate-200/80 bg-white p-5 md:p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Book Cover */}
              <div className="relative mb-6">
                <div className="absolute -inset-3 rounded-[28px] bg-blue-100/40 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative overflow-hidden rounded-[24px] shadow-lg">
                  <div className="aspect-[3/4] bg-slate-100">
                    <Image
                      src={book.image}
                      alt={book.title}
                      width={500}
                      height={700}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                  </div>

                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] text-blue-700 shadow-sm">
                      {book.tag}
                    </span>
                    <span className="inline-flex rounded-full bg-black/65 backdrop-blur px-3 py-1 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] text-white">
                      {book.genre}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-serif text-gray-900 leading-snug group-hover:text-blue-700 transition">
                  {book.title}
                </h3>

                <p className="mt-3 text-sm md:text-[15px] text-gray-600 leading-7 min-h-[84px]">
                  {book.desc}
                </p>

                <p className="mt-3 text-base font-semibold text-gray-900">
                  {book.price}
                </p>

                <div className="mt-6 flex justify-center">
                  <button className="inline-flex items-center justify-center rounded-full border border-blue-500 px-5 py-2.5 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 shadow-sm">
                    View Book
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-16 md:mt-20 flex justify-center">
          <button className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 md:px-10 py-3.5 text-sm md:text-base font-medium text-white shadow-lg hover:bg-blue-700 transition duration-300">
            View All Books
          </button>
        </div>
      </div>
    </section>
  );
}