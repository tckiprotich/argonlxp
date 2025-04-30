
import React from 'react';
import { CircleCheck, CircleUser, CircleDollarSign } from 'lucide-react';

interface PillarProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const Pillar: React.FC<PillarProps> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className="group hover-scale"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-full p-6 bg-[#022c21]/60 backdrop-blur-sm border border-white/5 hover:border-[#10b98c]/40 rounded-lg transition-all duration-500 shadow-lg hover:shadow-[#10b98c]/10 hover:shadow-xl">
        <div className="w-12 h-12 rounded-lg bg-[#10b98c]/10 flex items-center justify-center text-[#34d3a9] mb-5">
          {icon}
        </div>
        <h3 className="text-xl text-white font-medium mb-3">{title}</h3>
        <p className="text-[#a7f3df]">{description}</p>
      </div>
    </div>
  );
};

const MissionPillars: React.FC = () => {
  const pillars = [
    {
      title: "Personalized Learning",
      description: "Custom education pathways adapted to individual learning styles, pace, and goals.",
      icon: <CircleUser size={24} strokeWidth={1.5} />,
      delay: 100
    },
    {
      title: "Universal Accessibility",
      description: "Breaking down barriers to education through technology and innovative delivery methods.",
      icon: <CircleCheck size={24} strokeWidth={1.5} />,
      delay: 200
    },
    {
      title: "Career-Driven Outcomes",
      description: "Directly connecting education to real-world skills and employment opportunities.",
      icon: <CircleDollarSign size={24} strokeWidth={1.5} />,
      delay: 300
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {pillars.map((pillar, i) => (
        <Pillar
          key={i}
          title={pillar.title}
          description={pillar.description}
          icon={pillar.icon}
          delay={pillar.delay}
        />
      ))}
    </div>
  );
};

export default MissionPillars;