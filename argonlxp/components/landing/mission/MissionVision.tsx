import React from 'react';

const MissionVision: React.FC = () => {
  return (
    <div className="animate-fade-in mt-20 text-center">
      <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#10b98c]/10 border border-[#10b98c]/20 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-[#10b98c]"></span>
        <span className="text-xs uppercase tracking-wider text-[#10b98c] font-semibold">Our Vision</span>
      </div>
      
      <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
        Empowering <span className="text-[#34d3a9] font-medium">1 million learners</span> by 2026
      </h3>
      
      <p className="text-[#a7f3df] max-w-2xl mx-auto">
        Through innovative technology and partnerships, we're building a future where quality education is a right, not a privilege.
      </p>
    </div>
  );
};

export default MissionVision;