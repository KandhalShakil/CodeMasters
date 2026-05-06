import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "../../utils/data";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl mb-8 tracking-tighter uppercase font-bold">
              Why partner <br /> <span className="text-accent">with us?</span>
            </h2>
            <p className="text-white/50 text-xl mb-12 leading-relaxed">
              We don't just write code; we build solutions that drive growth. Our methodology focuses on scalability, security, and superior user experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WHY_CHOOSE_US.slice(0, 4).map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle2 className="text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-white/40 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square glass rounded-full flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-accent/5 animate-pulse-slow" />
               <div className="text-center z-10">
                 <div className="text-8xl font-black text-white/10 mb-2">100%</div>
                 <div className="text-xl font-bold text-accent">Commitment</div>
               </div>
               
               {/* Orbital elements */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-4 border border-white/5 rounded-full"
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-12 border border-accent/20 rounded-full"
               />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
