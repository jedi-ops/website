import React from 'react';
import GlobeVisualization from './Globe';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-black">
      {/* Globe Visualization */}
      <GlobeVisualization />
      
      {/* Content Overlay */}
      <div className="flex-grow flex items-center justify-center relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <img 
              src="/assets/img/logo.png" 
              alt="Logo" 
              className="mx-auto w-40 h-auto animate-fade-in filter brightness-0 invert sepia hue-rotate-0 saturate-[5000%] opacity-90"
            />
            
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold relative z-10 font-tech-mono tracking-wider leading-relaxed">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent animate-pulse">
                  If we solve your problem,<br/>we will bring you the soluton
                </span>
              </h1>
              
              <p className="text-xl text-red-500/90 font-tech-mono tracking-[0.2em] animate-fade-in">
                Boutique Advisory, Consulting, and Innovation Partners
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 py-6 text-center text-red-500/70 font-tech-mono text-sm tracking-widest">
        Eden Advisory © {new Date().getFullYear()} All Rights Reserved
      </div>

      {/* Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

          .font-tech-mono {
            font-family: 'Share Tech Mono', monospace;
          }

          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }

          .animate-pulse {
            animation: pulse 3s infinite;
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }
        `}
      </style>
    </div>
  );
}
