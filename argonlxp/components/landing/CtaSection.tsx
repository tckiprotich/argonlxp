"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { addToWaitlist } from '@/app/actions/waitlist';

const CtaSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    organization: '',
    country: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage(null);
    
    // Basic form validation
    if (!formValues.name.trim() || !formValues.email.trim()) {
      setErrorMessage("Name and email are required fields");
      setFormStatus('error');
      return;
    }

    try {
      // Call the server action to add to waitlist
      const result = await addToWaitlist({
        name: formValues.name,
        email: formValues.email,
        organization: formValues.organization || undefined,
        country: formValues.country || undefined
      });
      
      if (result.success) {
        setFormStatus('success');
      } else {
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
      setFormStatus('error');
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-black to-gray-950 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        {/* Diagonal accent line - top */}
        <div className="absolute top-0 right-0 w-full h-px transform -rotate-[2deg] origin-left bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
        
        {/* Diagonal accent line - bottom */}
        <div className="absolute bottom-0 left-0 w-full h-px transform rotate-[1deg] origin-right bg-gradient-to-r from-emerald-500/20 via-transparent to-emerald-500/20"></div>
        
        {/* Enhanced blurred spots */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-emerald-800/10 filter blur-[120px] opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-700/10 filter blur-[100px] opacity-30"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1.5px,transparent_1.5px),linear-gradient(to_right,rgba(16,185,129,0.02)_1.5px,transparent_1.5px)] bg-[size:28px_28px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl shadow-2xl border border-gray-800 relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left content column */}
            <div className="lg:w-5/12 p-8 md:p-12 relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-900/10 rounded-full filter blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-800/10 rounded-full filter blur-xl translate-x-1/2 translate-y-1/2"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-emerald-900/30 border border-emerald-500/20 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs uppercase tracking-wider text-emerald-400 font-medium">Limited Access</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
                  Be the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">first</span> to experience the future
                </h2>
                
                <p className="text-lg text-gray-300 mb-8">
                  Join our exclusive waitlist for early access to Argon's AI-powered learning platform.
                </p>
                
                {/* Trust indicators */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Enterprise-grade security</p>
                      <p className="text-sm text-gray-400">Your data is always protected</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Priority early access</p>
                      <p className="text-sm text-gray-400">Skip the line when we launch</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Special launch pricing</p>
                      <p className="text-sm text-gray-400">Exclusive discounts for early adopters</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right form column */}
            <div className="lg:w-7/12 bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-gray-800 relative">
              {/* Form content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-medium text-white mb-6">Join the waitlist</h3>
                
                {formStatus === 'success' ? (
                  <div className="rounded-xl bg-emerald-900/20 border border-emerald-800/50 p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-900/50 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-medium text-white mb-2">You're on the list!</h4>
                    <p className="text-gray-300">Thank you for joining. We'll be in touch soon with exclusive updates.</p>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm text-gray-400 mb-1.5">Full Name</label>
                        <input 
                          id="name"
                          name="name"
                          type="text"
                          value={formValues.name}
                          onChange={handleChange}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-200"
                          disabled={formStatus === 'submitting'}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm text-gray-400 mb-1.5">Email Address</label>
                        <input 
                          id="email"
                          name="email"
                          type="email"
                          value={formValues.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-200"
                          disabled={formStatus === 'submitting'}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="organization" className="block text-sm text-gray-400 mb-1.5">Organization Name</label>
                        <input 
                          id="organization"
                          name="organization"
                          type="text"
                          value={formValues.organization}
                          onChange={handleChange}
                          placeholder="Company Inc."
                          className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-200"
                          disabled={formStatus === 'submitting'}
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm text-gray-400 mb-1.5">Country</label>
                        <input 
                          id="country"
                          name="country"
                          type="text"
                          value={formValues.country}
                          onChange={handleChange}
                          placeholder="United States"
                          className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-200"
                          disabled={formStatus === 'submitting'}
                        />
                      </div>
                    </div>
                    
                    {formStatus === 'error' && (
                      <div className="text-sm text-rose-400 bg-rose-900/20 px-4 py-2 rounded-lg">
                        {errorMessage || "Please complete all required fields to join the waitlist."}
                      </div>
                    )}
                    
                    <div>
                      <button 
                        type="submit" 
                        disabled={formStatus === 'submitting'}
                        className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-emerald-900/30 relative overflow-hidden group"
                      >
                        {formStatus === 'submitting' ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          <>
                            <span className="relative z-10">Join Waitlist</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                          </>
                        )}
                      </button>
                      <p className="text-xs text-gray-500 mt-3 text-center">
                        By joining, you agree to our <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">Terms of Service</a> and <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">Privacy Policy</a>
                      </p>
                    </div>
                  </form>
                )}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-600/10 to-cyan-600/5 rounded-full filter blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-emerald-600/10 to-cyan-600/5 rounded-full filter blur-xl"></div>
            </div>
          </div>
          
          {/* Decorative corner accent */}
          <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-emerald-500 to-transparent"></div>
          <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-emerald-500 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-32 h-1 bg-gradient-to-l from-emerald-500 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1 h-32 bg-gradient-to-t from-emerald-500 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
