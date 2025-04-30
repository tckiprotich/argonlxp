import React from 'react';

const HeroImage = () => {
  return (
    <svg 
      className="w-full h-full opacity-30"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d3a9" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#047859" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      
      {/* Abstract Shapes */}
      <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="url(#gradient)" opacity="0.6" />
      
      <circle cx="50" cy="50" r="30" stroke="#a7f3df" strokeWidth="0.5" fill="none" opacity="0.7" />
      <circle cx="50" cy="50" r="20" stroke="#6ee7c7" strokeWidth="0.5" fill="none" opacity="0.5" />
      
      <path d="M30,30 L70,30 L50,70 Z" stroke="#10b98c" strokeWidth="0.5" fill="none" opacity="0.6" />
      
      <line x1="20" y1="50" x2="80" y2="50" stroke="#d1faef" strokeWidth="0.5" opacity="0.3" />
      <line x1="50" y1="20" x2="50" y2="80" stroke="#d1faef" strokeWidth="0.5" opacity="0.3" />
      
      {/* Grid pattern */}
      {Array.from({ length: 10 }).map((_, i) => (
        <line 
          key={`h-${i}`}
          x1="20" 
          y1={20 + i * 6} 
          x2="80" 
          y2={20 + i * 6} 
          stroke="#ecfdf9" 
          strokeWidth="0.2" 
          opacity="0.2" 
        />
      ))}
      
      {Array.from({ length: 10 }).map((_, i) => (
        <line 
          key={`v-${i}`}
          x1={20 + i * 6} 
          y1="20" 
          x2={20 + i * 6} 
          y2="80" 
          stroke="#ecfdf9" 
          strokeWidth="0.2" 
          opacity="0.2" 
        />
      ))}
      
      {/* Dots */}
      {Array.from({ length: 50 }).map((_, i) => {
        const x = 20 + Math.random() * 60;
        const y = 20 + Math.random() * 60;
        const radius = 0.1 + Math.random() * 0.3;
        return (
          <circle 
            key={`dot-${i}`}
            cx={x} 
            cy={y} 
            r={radius} 
            fill="#ecfdf9" 
            opacity={0.1 + Math.random() * 0.4} 
          />
        );
      })}
    </svg>
  );
};

export default HeroImage;