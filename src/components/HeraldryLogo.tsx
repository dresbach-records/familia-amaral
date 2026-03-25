import React from 'react';

export function HeraldryLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      role="img"
      aria-label="Brasão Família Amaral"
    >
      <path 
        d="M50 5C50 5 15 15 15 50C15 85 50 115 50 115C50 115 85 85 85 50C85 15 50 5 50 5Z" 
        className="fill-primary stroke-accent"
        strokeWidth="3"
      />
      <path 
        d="M50 15L50 105M15 50H85" 
        className="stroke-accent" 
        strokeWidth="1.5" 
        strokeDasharray="2 2"
      />
      {/* Decorative inner elements */}
      <circle cx="50" cy="50" r="15" className="stroke-accent" strokeWidth="2" fill="none" />
      <path 
        d="M50 35V65M35 50H65" 
        className="stroke-accent" 
        strokeWidth="2"
      />
      {/* Gold crown-like top */}
      <path 
        d="M35 5L40 15H60L65 5L50 10L35 5Z" 
        className="fill-accent"
      />
    </svg>
  );
}