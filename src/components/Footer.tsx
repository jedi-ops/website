import React from 'react';
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: "The frontier of tomorrow belongs to those who shape it today.",
    author: "Ancient Innovator's Codex"
  },
  {
    text: "In the dance of progress, change is not our enemy, but our greatest teacher.",
    author: "Tech Oracle Scrolls"
  },
  {
    text: "The path to innovation is lit by the stars of countless failures.",
    author: "Digital Sage Chronicles"
  },
  {
    text: "Beyond the horizon of the known lies the realm of possibility.",
    author: "Quantum Wisdom Archives"
  }
];

export default function Footer() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <footer className="relative bg-black border-t border-red-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <Quote className="w-8 h-8 text-red-500" />
          <blockquote className="space-y-4">
            <p className="text-xl text-gray-300 font-medium italic">
              "{randomQuote.text}"
            </p>
            <cite className="block text-sm text-gray-500">
              — {randomQuote.author}
            </cite>
          </blockquote>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent my-8" />
          
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Eden Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}