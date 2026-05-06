import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { CONTACT_INFO, TEAM_MEMBERS } from "../../utils/data";
import { useForm, ValidationError } from '@formspree/react';

export function Contact() {
  const [state, handleSubmit] = useForm("mdabdkqp");

  return (
    <section id="contact" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter uppercase leading-none">
              Let's craft <br /> your <span className="text-accent italic">vision.</span>
            </h2>
            <p className="text-white/60 text-xl mb-12 max-w-lg font-light leading-relaxed">
              We're currently accepting new projects and collaborations. Whether you have a fully-formed idea or just a spark, let's talk.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {TEAM_MEMBERS.map((member, i) => (
                <div key={member.name} className="p-6 rounded-3xl glass border-white/5 hover:border-accent/20 transition-all group">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3 font-bold">{member.role}</p>
                  <h3 className="text-xl font-bold mb-4">{member.name}</h3>
                  <div className="space-y-3">
                    <a href={`mailto:${CONTACT_INFO.emails[i]}`} className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors">
                      <Mail size={14} className="text-accent" />
                      {CONTACT_INFO.emails[i]}
                    </a>
                    <a href={`tel:${CONTACT_INFO.phones[i].replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors">
                      <Phone size={14} className="text-accent" />
                      {CONTACT_INFO.phones[i]}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center border-white/10 group-hover:bg-accent transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-lg font-bold">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full flex flex-col justify-center"
          >
            <div className="glass p-8 md:p-12 rounded-[3rem] border-white/10 relative z-10 bg-black/40 backdrop-blur-3xl h-fit overflow-hidden">
              <AnimatePresence mode="wait">
                {state.succeeded ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <CheckCircle2 size={64} className="text-accent mb-6" />
                    <h3 className="text-4xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-white/50 text-lg">
                      Thank you for reaching out. We'll get back to you <br /> as soon as possible.
                    </p>
                    <button 
                      onClick={() => window.location.reload()}
                      className="mt-8 text-accent font-bold uppercase tracking-widest hover:text-white transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form">
                    <h3 className="text-3xl font-bold mb-10 tracking-tight">Project Inquiry</h3>
                    <form className="space-y-8" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label htmlFor="full-name" className="text-xs uppercase tracking-[0.2em] font-bold text-white/40 ml-1">Your Name</label>
                          <input 
                            id="full-name"
                            type="text" 
                            name="name"
                            placeholder="Jane Cooper"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-accent transition-all placeholder:text-white/20"
                          />
                        </div>
                        <div className="space-y-3">
                          <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] font-bold text-white/40 ml-1">Email Address</label>
                          <input 
                            id="email"
                            type="email" 
                            name="email"
                            placeholder="jane@company.com"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-accent transition-all placeholder:text-white/20"
                          />
                          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <label htmlFor="subject" className="text-xs uppercase tracking-[0.2em] font-bold text-white/40 ml-1">Subject</label>
                        <input 
                          id="subject"
                          type="text" 
                          name="subject"
                          placeholder="E.g. Web Development, SaaS, Mobile App"
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-accent transition-all placeholder:text-white/20"
                        />
                      </div>

                      <div className="space-y-3">
                        <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] font-bold text-white/40 ml-1">Your Message</label>
                        <textarea 
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Tell us about your project, timeline and goals..."
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-3xl py-4 px-6 outline-none focus:border-accent transition-all resize-none placeholder:text-white/20"
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                      </div>

                      <button 
                        type="submit" 
                        disabled={state.submitting}
                        className="w-full bg-accent text-white font-black py-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all transform active:scale-[0.98] shadow-lg shadow-accent/20 group disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {state.submitting ? "SENDING..." : "ESTABLISH CONTACT"}
                        {!state.submitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Background Decorative Card */}
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-[3.5rem] blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
