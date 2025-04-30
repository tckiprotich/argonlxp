"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Benefits data
const benefitsData = [
  {
    title: "Accelerate Learning",
    description: "Create AI-powered instructional content that adapts to learners' unique needs, accelerating knowledge retention by up to 3x.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    stat: "3x",
    statLabel: "Faster Learning"
  },
  {
    title: "Intelligent Assessment",
    description: "Deploy smart evaluations that identify knowledge gaps and adjust in real-time, reducing assessment time while increasing accuracy.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
    ),
    stat: "98%",
    statLabel: "Accuracy Rate"
  },
  {
    title: "Actionable Analytics",
    description: "Gain deep insights into learning patterns and outcomes with advanced analytics that help optimize content effectiveness.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    ),
    stat: "40%",
    statLabel: "Improved ROI"
  },
  {
    title: "Simplified Creation",
    description: "Design professional learning experiences without technical expertise using our intuitive AI-powered authoring tools.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    ),
    stat: "75%",
    statLabel: "Time Saved"
  }
];

const BenefitsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: sectionRef,
    offset: ["start end", "end start"] 
  });
  
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const yOffset = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [100, 0, 0, 100]);
  
  return (
    <motion.section 
      ref={sectionRef}
      style={{ opacity: sectionOpacity }}
      className="relative py-28 md:py-36 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      {/* Premium background elements */}
      <div className="absolute inset-0">
        {/* Subtle dark grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1.5px,transparent_1.5px),linear-gradient(to_right,rgba(16,185,129,0.02)_1.5px,transparent_1.5px)] bg-[length:40px_40px]"></div>
        
        {/* Gradient spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full radial-gradient opacity-[0.07]"></div>
        
        {/* Glowing line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Ultra-premium section header */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-emerald-900/30 border border-emerald-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-medium">Why Choose Argon</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight max-w-4xl">
              Elevate your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">instructional impact</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
              Transforming how organizations deliver learning experiences through intelligent technology
            </p>
          </motion.div>
        </div>
        
        {/* Modern staggered benefits layout */}
        <motion.div 
          style={{ y: yOffset }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-emerald-800/30 to-transparent"></div>
          </div>
          
          <div className="lg:col-span-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {benefitsData.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Premium card design */}
                  <div className="relative">
                    {/* Top highlight line */}
                    <div className="absolute -top-3 left-0 w-12 h-px bg-emerald-500 group-hover:w-20 transition-all duration-300"></div>
                    
                    {/* Icon with premium styling */}
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center border border-emerald-900/50 group-hover:border-emerald-600/50 transition-colors duration-300">
                        <div className="text-emerald-500 group-hover:text-emerald-400 transition-colors duration-300">
                          {benefit.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content with perfect spacing */}
                    <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6 pr-4">{benefit.description}</p>
                    
                    {/* Stats with sleek styling */}
                    <div className="flex items-baseline gap-2 mt-auto">
                      <span className="text-3xl font-bold text-emerald-400">{benefit.stat}</span>
                      <span className="text-sm text-gray-500 uppercase tracking-wider">{benefit.statLabel}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-emerald-800/30 to-transparent"></div>
          </div>
        </motion.div>
        
        
      </div>
    </motion.section>
  );
};

export default BenefitsSection;
