import React from 'react';
import { Swords } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-md border-b border-red-500/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Swords className="w-8 h-8 text-red-500" />
          <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-rose-700 bg-clip-text text-transparent">
            Jedi Labs
          </span>
        </div>
        <nav>
          <a
            href="https://yeetum.com/contact"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-rose-700 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}