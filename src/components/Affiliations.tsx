export default function Affiliations() {
  return (
    <section className="py-16 bg-quanta-white border-y border-quanta-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Cairo University Fallback */}
          <div className="flex items-center justify-center">
            <span className="font-serif font-bold text-2xl text-quanta-navy tracking-tight">Cairo University</span>
          </div>
          
          {/* Ain Shams University Fallback */}
          <div className="flex items-center justify-center">
            <span className="font-serif font-bold text-2xl text-quanta-navy tracking-tight">Ain Shams University</span>
          </div>

          {/* NRC Fallback */}
          <div className="flex items-center justify-center">
            <span className="font-serif font-bold text-2xl text-quanta-navy tracking-tight">National Research Center</span>
          </div>

          {/* Placeholder */}
          <div className="flex items-center justify-center">
            <span className="font-sans font-medium text-sm text-quanta-gray uppercase tracking-widest border border-dashed border-quanta-gray/30 px-6 py-3 rounded-full">
              More coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
