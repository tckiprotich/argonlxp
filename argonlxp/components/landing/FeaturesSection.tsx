"use client"
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';

// Define our features
const features = [
  {
    title: "AI-Powered Learning Paths",
    description: "Personalized education journeys that adapt to your unique learning style and goals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    )
  },
  {
    title: "Conversational AI Tutor",
    description: "24/7 access to an intelligent mentor that answers questions and provides guidance when you need it.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    )
  },
  {
    title: "Adaptive Quizzes & Assessments",
    description: "Smart evaluations that identify knowledge gaps and adjust difficulty in real-time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Career Trajectory Simulator",
    description: "Visualize how your learning choices shape your professional path and future opportunities.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    )
  },
  {
    title: "Gamified Learning Economy",
    description: "Earn skill coins as you learn, validating your progress through blockchain-backed credentials.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Collaborative Learning Spaces",
    description: "Join virtual study groups and collaborate in real-time with peers on projects and challenges.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    )
  }
];

const FeaturesSection = () => {
  // State for animated features
  const [visibleFeatures, setVisibleFeatures] = React.useState<number[]>([]);

  React.useEffect(() => {
    // Simple progressive reveal of features
    const timer = setTimeout(() => {
      const allFeatures = Array.from({ length: features.length }, (_, i) => i);
      setVisibleFeatures(allFeatures);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        {/* Subtle dark grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1.5px,transparent_1.5px),linear-gradient(to_right,rgba(16,185,129,0.02)_1.5px,transparent_1.5px)] bg-[length:40px_40px]"></div>
        
        {/* Gradient spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full radial-gradient opacity-[0.07]"></div>
        
        {/* Glowing line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header with subtle animation */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-emerald-900/30 border border-emerald-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#34d3a9]"></span>
            <span className="text-xs uppercase tracking-wider text-[#a7f3df] font-medium">Core Features</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Learning <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ee7c7] to-[#10b98c]">
              Experience
            </span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Our platform leverages cutting-edge technology to deliver a truly personalized 
            education journey tailored to your unique needs and goals.
          </p>
        </div>
        
        {/* Hexagonal feature grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ease-out ${
                visibleFeatures.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms` 
              }}
            >
              <Card className="relative h-full overflow-hidden bg-gray-800 border border-emerald-900/50 hover:border-emerald-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1">
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/10 via-emerald-700/5 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                
                <CardContent className="p-6 relative">
                  {/* Icon with glow effect */}
                  <div className="mb-4 text-emerald-500 group-hover:text-emerald-400 transition-colors duration-300 relative">
                    <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {feature.icon}
                  </div>
                  
                  {/* Title with animated underline */}
                  <h3 className="text-xl font-semibold text-white mb-3 relative inline-block">
                    {feature.title}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </h3>
                  
                  {/* Description with slight fade-in */}
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>        
        
        {/* CTA banner */}
        <div className="mt-20 relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-90"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1.5px,transparent_1.5px),linear-gradient(to_right,rgba(16,185,129,0.03)_1.5px,transparent_1.5px)] bg-[size:16px_16px]"></div>
          
          {/* Accent glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-emerald-500/20 rounded-full blur-[80px]"></div>
          
          <div className="relative py-10 px-8 md:py-16 md:px-12 text-center z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to transform your learning journey?
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Join thousands of learners already benefiting from our innovative platform
              and start your personalized learning path today.
            </p>
            <Link href="/waitlist" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20">
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;