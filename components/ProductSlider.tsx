import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowRight as LongArrowRight } from 'lucide-react';
import { products } from '../data/mock';
import { Button } from './ui/Button';

export const ProductSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="min-h-screen flex items-center py-12 md:py-20 bg-page snap-start">
      <div className="container mx-auto px-6 h-full flex items-center">
        
        <div className="bg-card rounded-[2rem] p-8 md:p-16 relative overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center shadow-soft w-full">
          
          {/* Content Layer */}
          <div className="relative z-10 w-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              
              {/* Text Info */}
              <div className="w-full md:w-1/3 space-y-4 md:space-y-6 text-center md:text-left">
                <span className="text-xs md:text-sm font-bold text-muted uppercase tracking-wider">{products[currentIndex].name}</span>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-dark leading-tight">
                  {products[currentIndex].tagline}
                </h3>
                <div className="flex justify-center md:justify-start">
                   <Button variant="primary" className="mt-2 md:mt-4 gap-2">
                    See details <LongArrowRight className="w-4 h-4" />
                   </Button>
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-2/3">
                 <img 
                    src={products[currentIndex].image} 
                    alt={products[currentIndex].name}
                    className="w-full h-auto object-cover rounded-xl shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
                 />
              </div>

            </div>

            {/* Controls */}
            <div className="flex justify-center md:justify-start items-center gap-4 mt-8 md:mt-12 md:absolute md:bottom-12 md:left-[40%] md:-translate-x-1/2">
               {products.map((_, idx) => (
                 <button 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-dark scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                 />
               ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};