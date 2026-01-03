'use client';

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Car Rentals: Electric Vehicles Leading the Way",
    excerpt: "Explore how electric vehicles are revolutionizing the car rental industry and what it means for environmentally conscious travelers.",
    content: "The automotive industry is undergoing a massive transformation with electric vehicles at the forefront...",
    author: "Sarah Johnson",
    date: "2024-12-15",
    category: "Technology",
    readTime: "5 min read",
    imageUrl: "/images/hero-bg.jpg"
  },
  {
    id: 2,
    title: "Top 10 Road Trip Destinations for 2025",
    excerpt: "Discover most breathtaking road trip routes that should be on every traveler's bucket list for the coming year.",
    content: "As we look ahead to 2025, road trips continue to be one of the most popular ways to explore...",
    author: "Mike Chen",
    date: "2024-12-10",
    category: "Travel",
    readTime: "8 min read",
    imageUrl: "/images/hero-bg.jpg"
  },
  {
    id: 3,
    title: "How to Choose the Perfect Rental Car for Your Needs",
    excerpt: "A comprehensive guide to selecting the right vehicle for your next adventure, considering budget, space, and fuel efficiency.",
    content: "Choosing the right rental car can make or break your travel experience...",
    author: "Emily Rodriguez",
    date: "2024-12-05",
    category: "Tips",
    readTime: "6 min read",
    imageUrl: "/images/hero-bg.jpg"
  },
  {
    id: 4,
    title: "The Rise of Subscription-Based Car Services",
    excerpt: "Learn about the growing trend of car subscription services and how they're changing traditional car ownership.",
    content: "Car subscription services are emerging as a flexible alternative to traditional car ownership...",
    author: "David Park",
    date: "2024-11-28",
    category: "Industry",
    readTime: "7 min read",
    imageUrl: "/images/hero-bg.jpg"
  },
  {
    id: 5,
    title: "Sustainable Travel: Eco-Friendly Car Rental Options",
    excerpt: "Discover how car rental companies are embracing sustainability and offering green alternatives for conscious travelers.",
    content: "Sustainability is no longer just a buzzword in the travel industry...",
    author: "Lisa Green",
    date: "2024-11-20",
    category: "Sustainability",
    readTime: "5 min read",
    imageUrl: "/images/hero-bg.jpg"
  },
  {
    id: 6,
    title: "Navigating International Car Rentals: What You Need to Know",
    excerpt: "Essential tips and considerations for renting cars abroad, from insurance requirements to driving regulations.",
    content: "Renting a car in a foreign country can be both exciting and challenging...",
    author: "Tom Wilson",
    date: "2024-11-15",
    category: "Travel",
    readTime: "9 min read",
    imageUrl: "/images/hero-bg.jpg"
  }
];

const categories = ["All", "Technology", "Travel", "Tips", "Industry", "Sustainability"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="text-center">
            <div className="text-sm font-semibold text-blue-900">Our Blog</div>
            <h1 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">Stories & Insights</h1>
            <div className="mt-2 text-xs text-gray-600">Home / Blog</div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          {/* Search and Filter */}
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border border-gray-300 text-gray-800 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="aspect-video w-full bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">
                        {post.category === 'Technology' && '⚡'}
                        {post.category === 'Travel' && '✈️'}
                        {post.category === 'Tips' && '💡'}
                        {post.category === 'Industry' && '🏭'}
                        {post.category === 'Sustainability' && '🌱'}
                      </div>
                      <div className="text-lg font-medium">Blog Post</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                        <span>{post.author}</span>
                      </div>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500">No articles found matching your criteria.</div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
