"use client";

import { useState } from "react";
import Image from "next/image";

export default function BlogSection() {
  const [email, setEmail] = useState("");

  const blogs = [
    {
      title: "5 Mistakes First-Time Authors Make",
      image: "/Blog4.png",
      category: "Writing Tips",
      excerpt: "Avoid common pitfalls and improve your writing journey.",
    },
    {
      title: "How to Get Your Book Published",
      image: "/Blog3.png",
      category: "Publishing",
      excerpt: "A step-by-step guide to getting your book into the world.",
    },
    {
      title: "Writing a Bestseller in 2026",
      image: "/Blog5.png",
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
    <section className="py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-widest text-sm text-blue-600 mb-3">
            Insights
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Writing Tips & Insights
          </h2>

          <p className="text-gray-500 mt-4 text-sm md:text-base max-w-xl mx-auto">
            Learn, grow, and publish with confidence through expert guidance
          </p>

          <div className="w-24 h-[3px] bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* BLOG GRID */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-24">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="w-full h-[230px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Category */}
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {blog.category}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {blog.excerpt}
                </p>

                {/* CTA */}
                <div className="mt-5">
                  <span className="text-sm font-medium text-blue-600 group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* NEWSLETTER */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl overflow-hidden">

          {/* Glow */}
          <div className="absolute inset-0 bg-blue-500/20 blur-2xl"></div>

          <div className="relative z-10">

            <p className="uppercase tracking-widest text-sm text-blue-200 mb-3">
              Newsletter
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold">
              Get Writing Tips Weekly ✍️
            </h3>

            <p className="mt-4 text-blue-100 text-sm md:text-base max-w-lg mx-auto">
              Join our newsletter and receive exclusive writing tips, publishing strategies, and insider insights.
            </p>

            {/* Input + Button */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-5 py-3 rounded-full  text-white w-full sm:w-80 outline-none shadow-md"
              />

              <button
                onClick={handleSubscribe}
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition shadow-lg"
              >
                Subscribe
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}