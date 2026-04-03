import teamData from '../data/team.json';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  university: string;
  role: string;
  avatar: string;
  website?: string;
}

export default function Team() {
  const team = teamData as TeamMember[];

  return (
    <section id="team" className="py-24 bg-quanta-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-quanta-violet/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-quanta-navy/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-quanta-navy mb-6">Meet the Team</h2>
          <p className="text-lg text-quanta-gray leading-relaxed">
            The founding members driving Quanta's research initiatives across Cairo University, Ain Shams University, and the NRC.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <motion.div 
              key={member.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center"
            >
              <div className="relative mb-8">
                {/* Avatar Container */}
                <div className="w-48 h-48 rounded-[2.5rem] overflow-hidden relative z-10 shadow-2xl shadow-quanta-navy/10 group-hover:-translate-y-2 transition-transform duration-500">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Website Link Overlay (Only for members with website) */}
                  {member.website && (
                    <a 
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-quanta-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-white text-quanta-navy flex items-center justify-center hover:bg-quanta-violet hover:text-white transition-colors shadow-lg">
                        <ExternalLink size={20} />
                      </div>
                    </a>
                  )}
                </div>
                {/* Decorative background shape */}
                <div className="absolute inset-0 bg-quanta-violet/10 rounded-[2.5rem] rotate-6 scale-95 group-hover:rotate-12 transition-transform duration-500"></div>
              </div>

              <div className="text-center">
                <h3 className="font-serif font-bold text-2xl text-quanta-navy mb-2 group-hover:text-quanta-violet transition-colors">
                  {member.name}
                </h3>
                <p className="text-quanta-violet font-semibold text-sm uppercase tracking-widest mb-3">
                  {member.role}
                </p>
                <div className="flex items-center justify-center gap-2 text-quanta-gray text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-quanta-gray/30"></div>
                  {member.university}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
