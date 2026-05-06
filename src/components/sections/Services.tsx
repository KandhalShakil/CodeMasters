import { motion } from "framer-motion";
import { SERVICES } from "../../utils/data";
import * as Icons from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tighter">OUR EXPERTISE</h2>
          <p className="text-white/50 text-xl max-w-2xl">
            We provide a comprehensive range of services designed to scale your business and engage your audience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = (Icons as any)[service.icon] || Icons.Code;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl group border-white/5 hover:border-accent/30 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:text-accent transition-all">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
