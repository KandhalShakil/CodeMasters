import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
    >
      <div className="relative overflow-hidden mb-8">
        <motion.h1 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-6xl font-black tracking-tighter"
        >
          CODE<span className="text-accent">MASTERS</span>
        </motion.h1>
      </div>
      
      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-accent"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-4 text-xs font-bold tracking-[0.5em] text-white/30 uppercase">
        Initializing Experience {progress}%
      </div>
    </motion.div>
  );
}
