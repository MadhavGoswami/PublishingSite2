"use client";

export default function LatestBooks() {
  const books = [
    {
      title: "Dianna's Vision",
      image: "/book1.jpg",
      price: "$55.00",
    },
    {
      title: "Final Countdown",
      image: "/book2.jpg",
      price: "$60.00",
    },
    {
      title: "Beyond The Fog",
      image: "/book3.jpg",
      price: "$50.00",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-lg md:text-xl tracking-[0.3em] text-gray-700 uppercase mb-4">
            Other Joel Brown Books
          </h2>

          <div className="w-3/4 mx-auto h-[1px] bg-blue-400"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {books.map((book, index) => (
            <div key={index} className="text-center group cursor-pointer">

              {/* Book Image */}
              <div className="overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-sm md:text-base tracking-widest uppercase font-medium">
                {book.title}
              </h3>

              {/* Price */}
              <p className="text-gray-600 mt-1 text-sm">
                {book.price}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}       