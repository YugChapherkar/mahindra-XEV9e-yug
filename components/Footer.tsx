import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer className="bg-primary text-white min-h-screen flex flex-col justify-center snap-start py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 h-full flex flex-col justify-between">
        
        {/* Huge Wordmark */}
        <div className="w-full flex flex-col justify-center flex-grow items-center relative py-12 md:py-0">
           <h1 className="font-display font-bold text-[20vw] leading-none tracking-tighter text-white select-none text-center">
             XEV 9e
           </h1>
           <span className="text-xl md:text-2xl lg:text-3xl font-sans font-medium text-gray-400 tracking-wide mt-2 md:mt-4">
              Electric Origin
           </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-end border-b border-gray-800 pb-8 md:pb-12 mb-8 md:mb-12 gap-8 md:gap-0 w-full">
           <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-wide text-center md:text-left w-full md:w-auto">Unlimit Love.</h2>
           
           <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
              {/* Action Badge */}
              <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
                 <div className="text-right hidden md:block">
                    <p className="font-bold text-sm">Experience</p>
                    <p className="font-bold text-sm">Suave Indulgence</p>
                 </div>
                 <button 
                    onClick={onContactClick}
                    className="bg-white text-dark px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors w-full md:w-auto justify-center"
                 >
                    Book Test Drive <div className="bg-dark text-white rounded-full p-1"><ArrowUpRight className="w-3 h-3" /></div>
                 </button>
              </div>
           </div>
        </div>

        {/* Bottom Bar - Reduced Content */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500 pb-8 md:pb-4 gap-4">
           <div className="flex items-center justify-center md:justify-start">
              <span className="text-white opacity-50">© Mahindra XEV 9e™</span>
           </div>

           <div className="flex items-center justify-center md:justify-end">
             {/* Scroll Top Button */}
             <button onClick={() => {
                const main = document.querySelector('main');
                if (main) main.scrollTo({top: 0, behavior: 'smooth'});
                else window.scrollTo({top: 0, behavior: 'smooth'});
             }} className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors group" aria-label="Scroll to top">
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
             </button>
           </div>
        </div>
      </div>
    </footer>
  );
};