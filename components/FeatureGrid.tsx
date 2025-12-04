import React from 'react';
import { ArrowUpRight, ArrowRight, Cpu, ScanEye } from 'lucide-react';
import { Button } from './ui/Button';

export const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="min-h-screen flex items-center py-12 md:py-20 bg-page snap-start">
      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        
        {/* Header Block */}
        <div className="mb-12 md:mb-16 max-w-3xl">
           <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 md:mb-8 text-dark leading-tight">
            The Fastest Mind in the Automotive World
           </h3>
           <Button variant="primary" className="group pl-6 pr-2 py-2 md:pl-8 rounded-full flex items-center gap-3 md:gap-4 w-fit">
              <span className="font-medium text-base md:text-lg ml-2 md:ml-4">Meet MAIA</span> 
              <div className="bg-white text-dark rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </div>
           </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 - MAIA */}
          <div className="bg-card p-6 md:p-8 rounded-2xl shadow-soft flex flex-col justify-between min-h-[180px] md:min-h-[220px] group cursor-pointer hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                 <Cpu className="w-6 h-6 text-dark mb-2" />
                 <h3 className="text-lg md:text-xl font-bold max-w-[150px]">MAIA Intelligence</h3>
              </div>
              <div className="bg-dark text-white p-2 rounded-full group-hover:bg-accent group-hover:text-dark transition-colors">
                 <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <p className="text-sm text-muted">Powered by Qualcomm Snapdragon 8295. 51 TOPS NPU.</p>
          </div>

          {/* Card 2 - ADAS */}
          <div className="bg-card p-6 md:p-8 rounded-2xl shadow-soft flex flex-col justify-between min-h-[180px] md:min-h-[220px] group cursor-pointer hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                 <ScanEye className="w-6 h-6 text-dark mb-2" />
                 <h3 className="text-lg md:text-xl font-bold max-w-[150px]">Level 2+ ADAS</h3>
              </div>
              <div className="bg-dark text-white p-2 rounded-full group-hover:bg-accent group-hover:text-dark transition-colors">
                 <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
             <p className="text-sm text-muted">5 Radars, 12 Sensors, 1 Camera. Secure360 Surveillance.</p>
          </div>

          {/* Metric Tile (Dark) - Range */}
          <div className="bg-metric-tile p-6 md:p-8 rounded-2xl shadow-soft flex flex-col justify-between min-h-[180px] md:min-h-[220px] relative overflow-hidden text-white">
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
            
            <div className="relative z-10 flex justify-between items-start">
              <h3 className="text-accent text-lg font-medium">Real-world Range</h3>
              <div className="bg-accent text-dark p-2 rounded-full">
                 <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            
            <div className="relative z-10 mt-auto pt-8">
              <div className="flex items-baseline">
                <span className="text-5xl md:text-6xl font-display font-bold">656</span>
                <span className="text-3xl md:text-4xl font-display font-bold text-accent ml-2">KM</span>
              </div>
              <p className="text-gray-400 text-xs mt-2 uppercase tracking-wider">MIDC P1 + P2 Range</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};