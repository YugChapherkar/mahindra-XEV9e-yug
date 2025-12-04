import React, { useEffect, useState } from 'react';
import { Home, Zap, Image, Sliders } from 'lucide-react';

export const NavigationDock: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'features', icon: Zap, label: 'Features' },
    { id: 'gallery', icon: Image, label: 'Gallery' },
    { id: 'specs', icon: Sliders, label: 'Specs' },
  ];

  useEffect(() => {
    // Find the main scrollable container
    const main = document.querySelector('main');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: main,
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-in slide-in-from-bottom-10 fade-in duration-700">
      {/* Updated to acrylic style: lower opacity background + high blur */}
      <div className="bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full px-2 py-2 flex items-center gap-1 hover:bg-black/30 transition-colors duration-300">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`
                relative group p-3 rounded-full transition-all duration-300 flex items-center justify-center
                ${isActive ? 'bg-[#F6A55D] text-primary scale-110 shadow-lg shadow-orange-500/20' : 'text-white/70 hover:text-white hover:bg-white/10'}
              `}
              aria-label={`Scroll to ${item.label}`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
              
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md text-primary text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
                {item.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/80 rotate-45 transform"></span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};