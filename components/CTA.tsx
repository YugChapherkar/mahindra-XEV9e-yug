import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onContactClick: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onContactClick }) => {
  return (
    <section className="min-h-screen flex items-center py-12 md:py-20 bg-page snap-start">
      <div className="container mx-auto px-6">
        <div className="bg-accent rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden flex flex-col justify-center min-h-[400px]">
          
          {/* Decorative Dotted Pattern */}
          <div className="absolute top-0 right-0 p-12 opacity-20 hidden md:block">
            <div className="grid grid-cols-6 gap-2">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-black rounded-full"></div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12 relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-dark leading-tight tracking-tight">
                Ready to prepare your electric future?
              </h2>
            </div>
            
            <button 
              onClick={onContactClick}
              className="bg-white text-dark pl-6 pr-2 py-2 md:pl-8 rounded-full flex items-center gap-3 md:gap-4 hover:bg-gray-50 transition-transform hover:scale-105 shadow-lg group whitespace-nowrap"
            >
              <span className="font-bold text-base md:text-lg">Contact us</span>
              <div className="bg-dark text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center group-hover:bg-accent group-hover:text-dark transition-colors">
                 <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};