"use client";

import { useState } from "react";
import Image from "next/image";

type Blog = {
  title: string;
  image: string;
  category: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  role: string;
  featured?: boolean;
};

export default function BlogSection() {
  const [email, setEmail] = useState("");

  const calculateReadingTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.split(" ").length;
    return `${Math.ceil(words / wordsPerMinute)} min read`;
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const blogs: Blog[] = [
    {
      title: "5 Mistakes First-Time Authors Make",
      image: "/Blog4.png",
      category: "Writing Craft",
      excerpt:
        "Avoid the most common early mistakes and build stronger habits from the beginning of your writing journey.",
      content:
        "Avoid the most common early mistakes and build stronger habits from the beginning of your writing journey. Learn how to improve clarity, structure, pacing, and confidence with practical editorial insights.",
      date: "2026-03-12",
      author: "Emma Collins",
      role: "Senior Editor",
      featured: true,
    },
    {
      title: "How to Get Your Book Published",
      image: "/Blog3.png",
      category: "Publishing",
      excerpt:
        "A clear guide to navigating the publishing process, from manuscript preparation to finding the right path forward.",
      content:
        "A clear guide to navigating the publishing process, from manuscript preparation to finding the right path forward. Explore traditional publishing, submission expectations, and how to present your work professionally.",
      date: "2026-03-08",
      author: "Daniel Reed",
      role: "Publishing Consultant",
      featured: true,
    },
    {
      title: "Writing a Bestseller in 2026",
      image: "/Blog5.png",
      category: "Marketing",
      excerpt:
        "Discover how strong storytelling and smart positioning can help your book reach the right audience.",
      content:
        "Discover how strong storytelling and smart positioning can help your book reach the right audience. Learn how branding, discoverability, and reader expectations shape a book’s success today.",
      date: "2026-03-05",
      author: "Sophia Turner",
      role: "Content Strategist",
    },
    {
      title: "Mastering the Art of Storytelling",
      image: "/Blog4.png",
      category: "Writing Craft",
      excerpt:
        "Learn how pacing, character depth, and narrative voice come together to create unforgettable stories.",
      content:
        "Storytelling is the heart of every successful book. Learn how pacing, character depth, and narrative voice come together to create unforgettable stories that engage readers from beginning to end.",
      date: "2026-03-12",
      author: "Emma Collins",
      role: "Senior Editor",
    },
    {
      title: "Building Your Author Platform",
      image: "/Blog3.png",
      category: "Marketing",
      excerpt:
        "A practical look at how authors can grow visibility, trust, and long-term connection with readers.",
      content:
        "A practical look at how authors can grow visibility, trust, and long-term connection with readers through content, consistency, and meaningful audience engagement.",
      date: "2026-03-02",
      author: "Lena Brooks",
      role: "Brand Advisor",
    },
  ];

  const featuredPosts = blogs.filter((b) => b.featured).slice(0, 2);
  const normalPosts = blogs.filter((b) => !b.featured);

  const handleSubscribe = () => {
    if (!email) return alert("Please enter your email");
    alert("Subscribed successfully!");
    setEmail("");
  };

  return (
    <section
      id="blog"
      className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-blue-50/70"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="uppercase tracking-[0.24em] text-[11px] md:text-xs text-blue-600 mb-3 font-medium">
            Insights
          </p>

          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
            Writing Tips & Insights
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Practical guidance on writing, publishing, and book marketing from
            editors, consultants, and publishing professionals.
          </p>

          <div className="w-20 md:w-24 h-[3px] bg-blue-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Featured Posts */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 mb-16 md:mb-20">
          {featuredPosts.map((post, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-[32px] shadow-xl min-h-[460px] md:min-h-[520px]"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

              <div className="absolute top-5 left-5 flex flex-wrap gap-2 z-10">
                <span className="inline-flex rounded-full bg-blue-600 px-3 py-1 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] text-white">
                  Featured
                </span>
                <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] text-gray-900">
                  {post.category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white z-10">
                <h3 className="text-2xl md:text-3xl font-serif leading-snug max-w-xl">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm md:text-base text-white/85 leading-relaxed max-w-xl">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm text-white/80">
                  <span className="font-medium text-white">
                    By {post.author}
                  </span>
                  <span>{post.role}</span>
                  <span>{formatDate(post.date)}</span>
                  <span>{calculateReadingTime(post.content)}</span>
                </div>

                <div className="mt-5">
                  <span className="inline-flex items-center text-sm md:text-base font-medium text-blue-200 group-hover:text-white transition">
                    Read Article →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-14">
          {["Publishing", "Writing Craft", "Marketing"].map((item) => (
            <span
              key={item}
              className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs md:text-sm font-medium text-slate-700 shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Regular Posts */}
        <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-20 md:mb-24">
          {normalPosts.map((blog, index) => (
            <article
              key={index}
              className="group bg-white border border-slate-200/80 rounded-[28px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={320}
                  className="w-full h-[230px] object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-6 md:p-7">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] text-blue-700 border border-blue-100">
                    {blog.category}
                  </span>

                  <span className="text-[11px] md:text-xs text-gray-400">
                    {calculateReadingTime(blog.content)}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-serif text-gray-900 leading-snug group-hover:text-blue-700 transition">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm md:text-[15px] leading-7 min-h-[84px]">
                  {blog.excerpt}
                </p>

                <div className="mt-5 pt-5 border-t border-slate-100">
                  <p className="text-sm font-medium text-gray-900">
                    By {blog.author}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{blog.role}</p>
                  <p className="text-xs text-gray-400 mt-2">
                    {formatDate(blog.date)}
                  </p>
                </div>

                <div className="mt-5">
                  <span className="text-sm font-medium text-blue-600 group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 md:p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-blue-500/20 blur-2xl" />

          <div className="relative z-10">
            <p className="uppercase tracking-[0.24em] text-[11px] md:text-xs text-blue-200 mb-3 font-medium">
              Newsletter
            </p>

            <h3 className="text-2xl md:text-4xl font-serif">
              Get Writing Tips Weekly
            </h3>

            <p className="mt-4 text-blue-100 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Join our newsletter for editorial advice, publishing strategies,
              and practical insights for authors building their next book.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-5 py-3.5 rounded-full text-white w-full sm:w-80 outline-none shadow-md bg-white/10 placeholder-white/70 border border-white/20"
              />

              <button
                onClick={handleSubscribe}
                className="bg-white text-blue-600 px-6 py-3.5 rounded-full font-semibold hover:bg-blue-100 transition shadow-lg"
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