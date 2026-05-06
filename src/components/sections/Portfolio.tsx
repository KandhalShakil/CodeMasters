import { motion } from "framer-motion";
import { PORTFOLIO } from "../../utils/data";
import { ExternalLink, Globe } from "lucide-react";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tighter uppercase">Selected Works</h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto">
            A showcase of our best work, from complex SaaS platforms to high-performance e-commerce engines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {PORTFOLIO.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-8">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a href={project.demo} className="p-4 rounded-full bg-white text-black hover:bg-accent hover:text-white transition-all transform translate-y-10 group-hover:translate-y-0 duration-500">
                    <Globe />
                  </a>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs uppercase tracking-widest text-white/40 font-bold">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="text-right hidden md:block">
                  <p className="text-white/40 max-w-xs text-sm">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
