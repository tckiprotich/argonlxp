"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from "lucide-react";
import Link from 'next/link';

const Hero = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
                <img 
                    src="https://img.freepik.com/free-photo/study-group-african-people_23-2149156390.jpg?t=st=1745996262~exp=1745999862~hmac=3aed1db814d7b77725e2b6ebfe0ca9b243004f3996453e15bd73b4bb9e38802e&w=1380" 
                    alt="Students collaborating" 
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content container */}
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="max-w-3xl">
                    {/* Tag */}
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-x-2 py-1.5 px-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-sm">
                            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                            <span className="text-xs font-medium text-emerald-300 tracking-wide uppercase">Enterprise Learning Platform</span>
                        </div>
                    </motion.div>
                    
                    {/* Main heading */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl mb-6"
                    >
                        <span className="block text-white mb-2">Transform Skills with</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">
                            Argon Learning
                        </span>
                    </motion.h1>
                    
                    {/* Description */}
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-gray-300 text-lg mb-8 font-light leading-relaxed max-w-2xl"
                    >
                        Curated learning experiences with expert guidance, designed to build practical, 
                        in-demand skills for today's competitive workplace.
                    </motion.p>
                    
                    {/* CTA buttons */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="flex flex-wrap gap-4 sm:gap-6 items-center"
                    >
                        <Link
                            href="/waitlist"
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98]"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <span className="relative flex items-center gap-2">
                                Get Started
                                <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                            </span>
                        </Link>
                        
                        
                    </motion.div>
                    
                    {/* Trust indicator */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex items-center gap-2 mt-12"
                    >
                        <span className="text-sm font-medium text-gray-400">Trusted by industry leaders</span>
                        <div className="h-px bg-white/20 w-20"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;