import { motion } from "framer-motion";
import { TEAM_MEMBERS, STATS } from "../../utils/data";
import { Globe, Briefcase, Mail } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tighter">THE MINDS BEHIND</h2>
          <p className="text-white/50 text-xl max-w-3xl mx-auto">
            A dynamic duo of full-stack developers committed to creating exceptional digital products that combine form and function.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl group relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-accent/20 flex-shrink-0">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                  <p className="text-accent font-medium mb-6 uppercase tracking-widest text-sm">{member.role}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {member.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/70 border border-white/5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Background Accent */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all" />
            </motion.div>
          ))}
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/40 uppercase tracking-widest text-xs font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
