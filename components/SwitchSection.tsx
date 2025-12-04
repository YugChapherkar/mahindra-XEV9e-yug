import React from 'react';

export const SwitchSection: React.FC = () => {
  return (
    <section className="relative flex items-center py-16 md:py-24 bg-page snap-start">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Text Content */}
          <div className="w-full md:w-5/12 space-y-6 md:order-1 order-1">
            <span className="text-base md:text-lg font-bold text-accent uppercase tracking-wide">Future of Electric SUVs</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-dark leading-none uppercase tracking-tight">
              Unlimit <br/> Luxury
            </h2>
            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-md">
              Discover the future of electric SUVs today. Get behind the wheel of the XEV 9e and find out what it really means to live without limits and drive with confidence.
            </p>
          </div>

          {/* Car Image - Side Profile */}
          <div className="w-full md:w-7/12 relative md:order-2 order-2 flex justify-center md:justify-end">
             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-12 bottom-0 pointer-events-none"></div>
             <img 
              src="https://yugc.site/wp-content/uploads/2025/12/imgi_5_8.webp" 
              alt="Side profile of XEV 9e" 
              className="w-full max-h-[400px] md:max-h-[500px] object-contain drop-shadow-2xl"
             />
          </div>

        </div>
      </div>
    </section>
  );
};