import React from 'react';
import { ArrowRight } from 'lucide-react';
import { newsItems } from '../data/mock';

export const NewsSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center py-12 md:py-20 bg-page snap-start" id="news">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-dark">Highlights</h2>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Technology', 'Safety', 'Innovation'].map((tag, i) => (
              <span key={i} className={`px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium cursor-pointer transition-colors ${i === 0 ? 'bg-dark text-white' : 'bg-card text-muted hover:bg-gray-200'}`}>
                {tag}
              </span>
            ))}
          </div>

          <a href="#" className="hidden md:flex items-center text-sm font-bold gap-2 hover:text-accent transition-colors">
            All updates <div className="bg-dark text-white rounded-full p-1"><ArrowRight className="w-3 h-3" /></div>
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Smaller News Grid (Top on mobile) */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-12 order-2 md:order-1">
             {newsItems.map((item) => (
               <div key={item.id} className="group cursor-pointer">
                 <div className="bg-card p-6 rounded-2xl h-full flex flex-col hover:shadow-lg transition-shadow">
                    <span className="text-xs font-bold text-dark bg-white px-2 py-1 rounded w-fit mb-4">{item.category}</span>
                    <h3 className="text-lg md:text-xl font-bold mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted mb-4 line-clamp-3">{item.excerpt}</p>
                    <div className="mt-auto flex items-center text-xs text-muted gap-4">
                       <span>{item.readTime}</span>
                       <span>{item.date}</span>
                    </div>
                 </div>
               </div>
             ))}
          </div>
          
          {/* Large Featured Block - MAIA */}
          <div className="lg:col-span-12 order-1 md:order-2">
            <div className="bg-card rounded-[2rem] overflow-hidden grid grid-cols-1 md:grid-cols-2">
               <div className="h-[300px] md:h-auto bg-black relative">
                 <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" 
                  alt="Microchip Technology" 
                  className="w-full h-full object-cover opacity-80"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-50"></div>
                 <div className="absolute bottom-8 left-8 text-white">
                    <div className="text-4xl font-display font-bold tracking-widest">MAIA</div>
                 </div>
               </div>
               <div className="p-8 md:p-16 flex flex-col justify-center">
                  <span className="text-sm text-accent font-bold uppercase mb-2">The Brain</span>
                  <h3 className="text-2xl md:text-4xl font-display font-bold mb-4 md:mb-6">
                    The Fastest Mind in the Mobile World
                  </h3>
                  <p className="text-muted mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                    MAIA is the neural network of our eSUVs. Derived from Sanskrit for 'magic', powered by Qualcomm Snapdragon 8295. 
                    200K DMIPS, 46 TOPS, and 3000 GFLOPS ensure instant responsiveness and intelligence that anticipates your needs.
                  </p>
                  <button className="flex items-center gap-2 font-bold text-dark hover:text-accent transition-colors group w-fit">
                    Learn about MAIA <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
            </div>
          </div>

          <a href="#" className="flex md:hidden items-center text-sm font-bold gap-2 hover:text-accent transition-colors mt-4 order-3">
            All updates <div className="bg-dark text-white rounded-full p-1"><ArrowRight className="w-3 h-3" /></div>
          </a>

        </div>
      </div>
    </section>
  );
};