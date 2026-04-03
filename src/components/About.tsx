import { motion } from 'motion/react';
import { Target, Eye, Rocket, Users, Shield, Zap, Globe } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Seriousness",
      description: "We show up to do the work, not to add a line to our CV.",
      icon: <Shield className="w-6 h-6 text-quanta-violet" />
    },
    {
      title: "Collaboration",
      description: "We grow through each other's knowledge and push each other forward.",
      icon: <Users className="w-6 h-6 text-quanta-violet" />
    },
    {
      title: "Continuity",
      description: "The team is bigger than any individual member.",
      icon: <Zap className="w-6 h-6 text-quanta-violet" />
    },
    {
      title: "Impact",
      description: "We target research that matters for people and the planet.",
      icon: <Globe className="w-6 h-6 text-quanta-violet" />
    }
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-quanta-violet/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Mission Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-quanta-violet/10 text-quanta-violet text-[10px] font-bold uppercase tracking-widest mb-8">
              <Target className="w-3 h-3" />
              Our Mission
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl font-extrabold text-quanta-navy mb-10 leading-tight tracking-tight">
              Bridging the gap between <br />
              <span className="text-quanta-violet">Theory & Practice.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-quanta-gray leading-relaxed font-normal opacity-90">
              <p>
                Quanta was built on a simple belief: that passionate students deserve a real research environment — not just lectures. We bring together scientifically driven students from <span className="text-quanta-navy font-semibold">Cairo University, Ain Shams University, and the National Research Center (NRC)</span>.
              </p>
              <p>
                Our mission is to build the next generation of researchers from within Egypt's universities, providing the mentorship and culture needed to publish high-impact scientific work.
              </p>
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-quanta-navy/5 text-quanta-navy text-[10px] font-bold uppercase tracking-widest mb-8">
              <Eye className="w-3 h-3" />
              Our Vision
            </div>

            <div className="space-y-6">
              {[
                {
                  year: "Year 1",
                  title: "Foundation & Culture",
                  desc: "Establish Quanta as a recognized research team with faculty advisors from Egyptian universities and the NRC. Build a consistent journal club culture and publish 2–3 review articles.",
                  active: true
                },
                {
                  year: "Year 2",
                  title: "Original Research",
                  desc: "Develop original research ideas in collaboration with professors, apply for funding from national institutions such as the NRC, and target submission of our first peer-reviewed paper.",
                  active: false
                },
                {
                  year: "Graduation",
                  title: "Global Competitive Edge",
                  desc: "Every founding member carries a real scientific track record — publications and collaborations competitive for Master's and PhD programs worldwide.",
                  active: false
                }
              ].map((step, idx) => (
                <div key={idx} className={`relative p-8 rounded-[2rem] border transition-all duration-500 ${step.active ? 'bg-quanta-light border-quanta-violet/20 shadow-lg' : 'bg-white border-gray-100 hover:border-gray-200'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${step.active ? 'text-quanta-violet' : 'text-quanta-gray/60'}`}>
                      {step.year}
                    </span>
                    {step.active && <Rocket className="w-4 h-4 text-quanta-violet animate-bounce" />}
                  </div>
                  <h3 className="font-display font-bold text-xl text-quanta-navy mb-3">{step.title}</h3>
                  <p className="text-quanta-gray text-sm leading-relaxed font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mt-40">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-extrabold text-quanta-navy mb-4 tracking-tight">Core Values</h2>
            <p className="text-quanta-gray font-light">The principles that guide every researcher in our team.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-quanta-light p-10 rounded-[2.5rem] border border-transparent hover:border-quanta-violet/10 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-quanta-navy mb-4">{value.title}</h3>
                <p className="text-quanta-gray text-sm leading-relaxed font-light opacity-80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
