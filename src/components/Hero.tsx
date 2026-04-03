import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1579165466991-467135ad3110?q=80&w=1170&auto=format&fit=crop"
          alt="Scientific laboratory setting"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-quanta-navy/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-quanta-navy/80 via-quanta-navy/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-quanta-navy/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-quanta-violet/20 border border-quanta-violet/30 text-quanta-white text-sm font-medium mb-6 backdrop-blur-sm">
              Student-Led Innovation
            </span>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-quanta-white leading-[1.1] mb-8 tracking-tight">
              Where Students <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-quanta-white via-quanta-white to-quanta-white/50">
                Become Researchers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-quanta-white/80 font-light mb-12 max-w-2xl leading-relaxed">
              A premier student-led nanotechnology research team bridging Cairo University, Ain Shams University, and the National Research Center (NRC).
            </p>
            
            <div className="flex flex-wrap gap-5">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#team"
                className="inline-flex items-center gap-2 bg-quanta-white text-quanta-navy px-10 py-4 rounded-full font-bold hover:bg-quanta-light transition-all shadow-xl shadow-black/10"
              >
                Meet the Team
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#research"
                className="inline-flex items-center gap-2 bg-quanta-violet text-quanta-white px-10 py-4 rounded-full font-bold hover:bg-quanta-violet/90 transition-all shadow-xl shadow-quanta-violet/20"
              >
                Our Research <ArrowRight size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats / Value Blocks */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-auto pb-16 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500">
            <p className="text-quanta-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-3">Institutions</p>
            <p className="text-quanta-white font-serif text-2xl group-hover:translate-x-1 transition-transform">Cairo, Ain Shams & NRC</p>
          </div>
          <div className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500">
            <p className="text-quanta-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-3">Established</p>
            <p className="text-quanta-white font-serif text-2xl group-hover:translate-x-1 transition-transform">April 2026</p>
          </div>
          <div className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500">
            <p className="text-quanta-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-3">Impact</p>
            <p className="text-quanta-white font-serif text-2xl group-hover:translate-x-1 transition-transform">6 SDGs We Serve</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
