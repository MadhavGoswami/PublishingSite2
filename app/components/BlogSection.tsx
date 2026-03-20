"use client";

import { useState } from "react";

export default function BlogSection() {
  const [email, setEmail] = useState("");

  const blogs = [
    {
      title: "5 Mistakes First-Time Authors Make",
      image: "/blog1.jpg",
      category: "Writing Tips",
      excerpt: "Avoid common pitfalls and improve your writing journey.",
    },
    {
      title: "How to Get Your Book Published",
      image: "/blog2.jpg",
      category: "Publishing",
      excerpt: "A step-by-step guide to getting your book into the world.",
    },
    {
      title: "Writing a Bestseller in 2026",
      image: "/blog3.jpg",
      category: "Success",
      excerpt: "Learn proven strategies to write books people love.",
    },
  ];

  const handleSubscribe = () => {
    if (!email) return alert("Please enter your email");
    alert("Subscribed successfully!");
    setEmail("");
  };

  return (
    <section className="py-24 bg-[#f8f6f2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* 🔥 BLOG HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Writing Tips & Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover expert advice, publishing insights, and tips to elevate your writing journey.
          </p>
        </div>

        {/* 🔥 BLOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-500 cursor-pointer"
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />

                {/* Category */}
                <span className="absolute top-4 left-4 bg-[#c5a47e] text-white text-xs px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#c5a47e] transition">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {blog.excerpt}
                </p>

                <span className="text-sm font-medium text-[#c5a47e]">
                  Read More →
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* 🔥 NEWSLETTER */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md text-center max-w-3xl mx-auto">

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            📩 Get Writing Tips Weekly
          </h3>

          <p className="text-gray-600 mb-6">
            Join our newsletter and receive exclusive writing tips, publishing insights, and updates.
          </p>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-5 py-3 rounded-full border border-gray-300 w-full sm:w-auto flex-1 outline-none focus:border-[#c5a47e]"
            />

            <button
              onClick={handleSubscribe}
              className="bg-[#c5a47e] text-white px-6 py-3 rounded-full hover:scale-105 transition"
            >
              Subscribe
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}