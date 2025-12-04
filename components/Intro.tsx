import React from 'react';
import { Layers, ShieldCheck } from 'lucide-react';

export const Intro: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center py-12 md:py-20 bg-page overflow-hidden snap-start">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <span className="text-[15rem] md:text-[25rem] font-bold font-display opacity-[0.02] text-dark leading-none">
          XEV
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold font-display leading-tight text-dark uppercase">
              Experience Suave <br/> Indulgence
              <span className="text-muted block mt-4 font-sans font-normal text-lg md:text-xl normal-case max-w-2xl">
                For those who move with bold confidence, the go-getters, the self-assured. The XEV 9e is an extension of your discerning taste, an embodiment of minimal sophistication and elegance in motion.
              </span>
            </h2>
          </div>

          {/* Right KPI/Badges Block */}
          <div className="lg:col-span-5 flex flex-col space-y-4 md:space-y-8 mt-4 lg:mt-0">
            {/* INGLO Badge */}
            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="bg-metric-tile text-accent p-3 rounded-full shrink-0">
                <Layers className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-dark">INGLO Platform</h4>
                <p className="text-muted text-base md:text-lg leading-relaxed mt-2">
                  Electric Origin Architecture with 152 patents. Adaptable, innovative, and built for exceptional range and handling.
                </p>
              </div>
            </div>

            {/* Safety Badge */}
            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
               <div className="bg-metric-tile text-accent p-3 rounded-full shrink-0">
                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-dark">Safety is in our DNA</h4>
                <p className="text-muted text-base md:text-lg leading-relaxed mt-2">
                  7 airbags, Level 2+ ADAS, and reinforced BIW structure for a digital fortress of protection.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};