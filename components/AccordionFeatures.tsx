import React, { useState } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

const features = [
  {
    id: 'f1',
    title: 'Unmatched Performance',
    content: '0-100 km/h in just 6.8 seconds. With 210 kW power and 380 Nm torque, it delivers a driving experience defined by elegance, power, and precision.',
  },
  {
    id: 'f2',
    title: 'Hyper-fast Charging',
    content: 'Charge from 20% to 80% SOC in just 20 minutes with 175kW+ DC fast charging. Power is always within reach.',
  },
  {
    id: 'f3',
    title: 'Sonic Studio',
    content: '1400 Watt, 16-Speaker Harman Kardon system with Dolby Atmos. Hear every note, feel every beat, making every drive feel like a concert.',
  }
];

export const AccordionFeatures: React.FC = () => {
  const [activeId, setActiveId] = useState('f1');

  return (
    <section id="specs" className="min-h-screen flex items-center py-12 md:py-20 bg-page snap-start">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          
          {/* Left: Heading and arrow */}
          <div className="flex flex-col justify-center h-full min-h-[auto] md:min-h-[300px] mb-8 md:mb-0">
             <div className="bg-dark text-white p-3 md:p-4 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-6 hidden md:flex">
               <ArrowDown className="w-5 h-5 md:w-6 md:h-6" />
             </div>
             <div>
                <h3 className="text-5xl md:text-6xl font-display font-bold leading-tight text-dark uppercase">
                  Untold <br/> Possibilities
                </h3>
                <p className="text-lg md:text-xl mt-4 md:mt-6 text-muted max-w-md leading-relaxed">
                   Refinement is the XEV 9e’s essence. Every detail, every angle, every surface is crafted to captivate.
                </p>
             </div>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-4">
            {features.map((feature) => {
              const isActive = activeId === feature.id;
              return (
                <div 
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`
                    cursor-pointer rounded-2xl p-5 md:p-6 transition-all duration-300
                    ${isActive ? 'bg-metric-tile text-white' : 'bg-card text-dark hover:bg-gray-200'}
                  `}
                >
                  <div className="flex justify-between items-center mb-2 gap-4">
                    <h4 className={`text-lg md:text-xl font-bold ${isActive ? 'text-accent' : 'text-dark'}`}>
                      {feature.title}
                    </h4>
                    <div className={`p-2 rounded-full shrink-0 ${isActive ? 'bg-accent text-dark' : 'bg-dark text-white'}`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-60 opacity-100 mt-2 md:mt-4' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-sm md:text-base leading-relaxed text-gray-300">
                      {feature.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};