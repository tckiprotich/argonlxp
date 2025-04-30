import React from 'react';
import { ArrowDown } from 'lucide-react';
import MissionHeader from './mission/MissionHeader';
import MissionPillars from './mission/MissionPillars';
import MissionVision from './mission/MissionVision';

const MissionSection: React.FC = () => {
  return (
    <section className="relative bg-[#022c21] py-24 md:py-32 overflow-hidden">
      {/* Premium dark background elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,185,140,0.03)_1.5px,transparent_1.5px),linear-gradient(to_right,rgba(10,185,140,0.03)_1.5px,transparent_1.5px)] bg-[length:30px_30px]"></div>
        
        {/* Animated gradient blob */}
        <div className="absolute top-40 -left-64 w-[500px] h-[500px] rounded-full bg-[#059670] opacity-[0.07] blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-0 -right-96 w-[800px] h-[800px] rounded-full bg-[#10b98c] opacity-[0.05] blur-[100px] animate-pulse"></div>
        
        {/* Top and bottom borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#10b98c]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#10b98c]/30 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Mission Header Component */}
        <MissionHeader />
        
        {/* Mission Pillars Component */}
        <MissionPillars />        
        
        {/* Vision Statement */}
        <MissionVision />
        
        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <div className="animate-bounce bg-[#10b98c]/10 p-2 rounded-full">
            <ArrowDown size={20} className="text-[#10b98c]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;