import { motion } from "framer-motion";
import { TECH_STACK } from "../../utils/data";

export function TechStack() {
  return (
    <section className="py-24 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-4">Our Technology Stack</h2>
          <p className="text-3xl md:text-5xl font-bold tracking-tighter">POWERING MODERN APPS</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {TECH_STACK.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, color: "#007aff" }}
              className="px-8 py-4 glass rounded-2xl text-xl font-bold text-white/60 cursor-default border-white/5 transition-all"
            >
              {tech}
            </motion.div>
          ))}
        </div>
        
        {/* Decorative Elements */}
        <div className="mt-20 flex justify-center opacity-20">
          <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
