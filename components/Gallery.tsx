import React from 'react';
import { Play } from 'lucide-react';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="min-h-screen flex items-center py-12 md:py-20 bg-page snap-start">
      <div className="container mx-auto px-6 space-y-6 flex flex-col justify-center h-full">
        
        {/* Large Top Image - Cockpit */}
        <div className="relative w-full h-[300px] md:h-[50vh] rounded-[2rem] overflow-hidden group flex-shrink-0">
          <img 
            src="https://yugc.site/wp-content/uploads/2025/12/imgi_8_Client_Fold-2.3.png" 
            alt="Cinematic Triple Screen Cockpit" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 md:bottom-8 left-6 md:left-12">
             <h3 className="text-white font-display text-2xl md:text-3xl font-bold mb-2">Wide Cinemascope</h3>
             <p className="text-gray-200 text-sm">Three-screen, high-definition display experience.</p>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-[35vh]">
           {/* Left Image Detail - Roof/Sky */}
           <div className="relative h-[250px] md:h-full rounded-[2rem] overflow-hidden group">
              <img 
                src="https://yugc.site/wp-content/uploads/2025/12/imgi_16_DESKTOP_RED_RED_Fold_3.2.png?q=80&w=1200&auto=format&fit=crop" 
                alt="Infinity Roof View" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                 Infinity Roof
              </div>
           </div>

           {/* Right Graphic Block */}
           <div className="relative h-[250px] md:h-full bg-metric-tile rounded-[2rem] overflow-hidden flex flex-col justify-end p-8 md:p-10">
              {/* Abstract Lines pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}></div>
              
              <div className="relative z-10">
                <p className="text-accent text-sm font-bold uppercase tracking-widest mb-2">Atmosphere</p>
                <h3 className="text-white font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
                  Live in <br/> Full Colour
                </h3>
                <p className="text-gray-400 mt-2 text-sm">16 million hues. Your personal haven.</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};