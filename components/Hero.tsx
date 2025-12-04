import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-full min-h-full overflow-hidden snap-start flex-shrink-0">
      {/* Background Image - Red SUV style */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://yugc.site/wp-content/uploads/2025/12/imgi_10_1.webp" 
          alt="XEV 9e in Tango Red" 
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col">
        {/* Top Bar */}
        <div className="flex justify-between items-center pt-6 md:pt-8">
          <div className="text-white font-display font-bold text-xl tracking-tighter">XEV 9e</div>
        </div>

        {/* Hero Text - Absolute Center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <h1 className="font-display font-bold text-[13vw] md:text-[12vw] text-white tracking-tighter leading-none text-center drop-shadow-xl select-none opacity-95 whitespace-nowrap">
            Born Electric.
          </h1>
        </div>
      </div>
    </section>
  );
};