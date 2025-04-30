"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Navbar = () => {
  // Initialize with proper state
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted
    setIsMounted(true);
    
    // Immediately check scroll position
    const checkScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    // Check scroll position right away
    checkScroll();
    
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Make sure we have a consistent style regardless of hydration
  const navbarStyle = !isMounted ? 
    "bg-[#022c21] py-4" : 
    scrolled ? 
      "bg-[#022c21]/90 backdrop-blur-md shadow-lg shadow-[#022c21]/50 py-3" : 
      "bg-[#022c21] py-4";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Pre-rendered static element for SSR to prevent flicker */}
      {!isMounted && (
        <div className="bg-[#022c21] py-4 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center h-8">
                {/* Static placeholder for logo */}
                <div className="h-8 w-auto aspect-auto bg-[#022c21]"></div>
              </div>
              <div className="relative inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-[#10b98c] to-[#059670] px-5 py-2">
                <span className="text-white text-sm font-medium">Get Started</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Animated navbar that takes over after hydration */}
      {isMounted && (
        <motion.header
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className={`w-full ${navbarStyle}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo - replaced with image */}
              <Link href="/" className="flex items-center">
                <div className="relative flex items-center">
                  <div className="h-8 w-auto relative">
                    <Image 
                      src="/logo/colored.png" 
                      alt="Argon Learning Logo" 
                      width={120} 
                      height={32} 
                      className="h-8 w-auto object-contain"
                      priority
                    />
                  </div>                  
                </div>
              </Link>

              {/* Call to Action Button */}
              <Link
                href="/waitlist"
                className="relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#10b98c] to-[#059670] px-5 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-[#10b98c]/30 hover:scale-[1.02] active:scale-[0.98]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative flex items-center gap-1.5">
                  Join the Waitlist
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isHovered ? 'translate-x-0.5' : ''}`} />
                </span>
              </Link>
            </div>
          </div>
          
          {/* Always show the bottom border with conditional opacity */}
          <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#10b98c]/30 to-transparent transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-40'}`}></div>
        </motion.header>
      )}
    </div>
  );
};

export default Navbar;
