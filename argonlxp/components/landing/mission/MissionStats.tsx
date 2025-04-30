import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, delay }) => {
  return (
    <div 
      className="animate-fade-in flex flex-col items-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="text-3xl md:text-4xl font-semibold text-white mb-2">{value}</span>
      <span className="text-sm text-[#a7f3df] uppercase tracking-wider">{label}</span>
    </div>
  );
};

const MissionStats: React.FC = () => {
  return (
    <div className="mt-20 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#10b98c]/5 backdrop-blur-sm border border-[#10b98c]/10 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem value="1M+" label="Learners" delay={100} />
            <StatItem value="150+" label="Countries" delay={200} />
            <StatItem value="92%" label="Completion Rate" delay={300} />
            <StatItem value="85%" label="Career Outcomes" delay={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionStats;