import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Implementing Zero-Trust Architecture in Modern DevOps",
    excerpt: "Explore the principles and implementation strategies of Zero-Trust security models in contemporary DevOps environments.",
    date: "2024-03-20",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "The Future of Infrastructure as Code",
    excerpt: "Discover emerging trends and best practices in Infrastructure as Code (IaC) and how it's shaping the future of DevOps.",
    date: "2024-03-15",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "Cloud Native Security Patterns",
    excerpt: "Learn about essential security patterns and practices for building robust cloud-native applications.",
    date: "2024-03-10",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2000"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">
          Latest Insights
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="group relative bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden hover:border-red-500/50 transition-colors"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-red-400 group-hover:text-red-300 transition-colors">
                  Read More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}