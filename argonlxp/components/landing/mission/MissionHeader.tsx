import React from 'react';
import { cn } from '@/lib/utils';

const MissionHeader: React.FC = () => {
  return (
    <div className="animate-fade-in text-center mb-16">
      <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#10b98c]/10 border border-[#10b98c]/20 mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-[#10b98c]"></span>
        <span className="text-xs uppercase tracking-wider text-[#10b98c] font-semibold">Our Mission</span>
      </div>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light mb-8 leading-tight">
        Making education 
        <span className={cn(
          "relative ml-3 font-medium",
          "text-transparent bg-clip-text bg-gradient-to-r from-[#34d3a9] to-[#059670]",
        )}>
          personalized
        </span>{" "}
        for everyone
      </h2>
      
      <p className="text-[#a7f3df] text-lg md:text-xl max-w-3xl mx-auto">
        We're transforming the way people learn with technology at the intersection of AI and human potential, creating pathways to opportunity for millions worldwide.
      </p>
    </div>
  );
};

export default MissionHeader;