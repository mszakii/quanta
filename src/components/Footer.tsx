export default function Footer() {
  return (
    <footer className="bg-quanta-navy text-quanta-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b border-quanta-white/10 pb-12 mb-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
            <img 
              src="https://mszaki.vercel.app/quanta-logo.png" 
              alt="Quanta Logo" 
              className="w-16 h-16 object-contain"
              referrerPolicy="no-referrer"
            />
            <div>
              <h2 className="font-logo text-4xl font-bold mb-2 leading-none">Quanta</h2>
              <p className="text-quanta-white/60 text-sm max-w-xs">
                A premier student-led nanotechnology research team.
              </p>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <a 
              href="mailto:contact@quantaresearch.org" 
              className="block md:inline-block text-center bg-quanta-violet hover:bg-quanta-violet/90 text-quanta-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-quanta-violet/20"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-xs md:text-sm text-quanta-white/40 font-medium">
          <p className="text-center md:text-left order-2 md:order-1">
            &copy; {new Date().getFullYear()} Quanta Research Team. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 order-1 md:order-2">
            <span className="hover:text-quanta-white transition-colors">Cairo University</span>
            <span className="hidden md:inline text-quanta-white/20">&bull;</span>
            <span className="hover:text-quanta-white transition-colors">Ain Shams University</span>
            <span className="hidden md:inline text-quanta-white/20">&bull;</span>
            <span className="hover:text-quanta-white transition-colors">NRC</span>
            <span className="hidden md:inline text-quanta-white/20">&bull;</span>
            <span className="text-quanta-violet/60">Est. April 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
