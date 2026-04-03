import sdgsData from '../data/sdgs.json';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface SDG {
  id: number;
  name: string;
  description: string;
  svg: string;
}

const sdgColors: Record<number, string> = {
  3: "#4C9F38", // Green
  4: "#C5192D", // Red
  7: "#FFB71B", // Yellow
  9: "#F36D25", // Orange
  13: "#3F7E44", // Dark Green
  17: "#19486A"  // Navy
};

const rotatingWords = ["Purpose.", "Impact.", "Sustainability.", "Innovation."];

export default function SDGs() {
  const sdgs = sdgsData as SDG[];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="sdgs" className="py-32 bg-quanta-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-quanta-violet/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-quanta-navy/5 border border-quanta-navy/10 text-quanta-navy text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-quanta-violet opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-quanta-violet"></span>
              </span>
              Global Impact Initiative
            </div>
            
            <h2 className="font-display text-5xl md:text-7xl font-extrabold text-quanta-navy mb-8 leading-[1.1] tracking-tight">
              Research with <br />
              <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="inline-block text-quanta-violet italic font-logo"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-quanta-gray leading-relaxed max-w-2xl font-normal opacity-80">
              We align our nanotechnology breakthroughs with the United Nations Sustainable Development Goals, ensuring every discovery contributes to a more sustainable and equitable future.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            className="relative group"
          >
            {/* Decorative Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-quanta-violet/20 to-quanta-navy/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-br from-quanta-navy/20 via-quanta-violet/40 to-quanta-navy/20 shadow-2xl">
              <div className="bg-white rounded-[2.45rem] px-12 py-10 text-center min-w-[240px]">
                <div className="relative inline-block mb-2">
                  <span className="text-7xl font-display font-black text-quanta-navy tracking-tighter">6</span>
                  <span className="absolute -top-1 -right-4 text-quanta-violet text-2xl font-bold">+</span>
                </div>
                <div className="h-px w-12 bg-quanta-violet/20 mx-auto mb-4"></div>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-quanta-navy/40">Strategic Goals</p>
                <p className="text-[9px] font-medium text-quanta-gray mt-2 tracking-wider">UN 2030 AGENDA</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sdgs.map((sdg, index) => {
            const accentColor = sdgColors[sdg.id] || "#6366f1";
            return (
              <motion.div 
                key={sdg.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-[2rem] p-8 border border-gray-100 hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col"
              >
                {/* Top Section: Image & Number */}
                <div className="flex justify-between items-start mb-12">
                  <div className="relative">
                    {/* Dynamic Glow Background */}
                    <div 
                      className="absolute inset-0 blur-2xl opacity-20 rounded-full transition-opacity duration-500 group-hover:opacity-40"
                      style={{ backgroundColor: accentColor }}
                    ></div>
                    
                    {/* Image Container */}
                    <div className="relative z-10 w-20 h-20 rounded-2xl overflow-hidden shadow-lg border border-white/50 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                      <img 
                        src={sdg.svg} 
                        alt={`SDG ${sdg.id}`} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <span className="text-4xl font-serif font-black text-quanta-navy/10 group-hover:text-quanta-navy/20 transition-colors">
                      {sdg.id.toString().padStart(2, '0')}
                    </span>
                    <div 
                      className="w-8 h-1 mt-2 rounded-full transition-all duration-500 group-hover:w-12"
                      style={{ backgroundColor: accentColor }}
                    ></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-grow">
                  <h3 className="font-serif font-bold text-2xl text-quanta-navy mb-4 group-hover:text-quanta-violet transition-colors">
                    {sdg.name}
                  </h3>
                  <p className="text-quanta-gray leading-relaxed font-light text-sm md:text-base">
                    {sdg.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-quanta-gray/40">
                    SDG Goal {sdg.id}
                  </span>
                  <div 
                    className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: accentColor }}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-32 relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-quanta-white px-8 text-sm font-bold uppercase tracking-[0.3em] text-quanta-gray/40">
              Quanta Global Research Initiative
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
