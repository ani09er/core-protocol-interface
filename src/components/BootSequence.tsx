import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BootSequenceProps {
  onComplete: () => void;
}

const bootMessages = [
  { text: "INITIALIZING SYSTEM...", delay: 0 },
  { text: "LOADING CORE MODULES...", delay: 400 },
  { text: "PROTOCOL MATRIX ONLINE...", delay: 800 },
  { text: "AI SIMULATION READY...", delay: 1200 },
  { text: "WELCOME TO HEXAGIX", delay: 1600 },
];

export const BootSequence = ({ onComplete }: BootSequenceProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const messageTimers = bootMessages.map((msg, index) =>
      setTimeout(() => setCurrentIndex(index + 1), msg.delay)
    );

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    const completeTimer = setTimeout(onComplete, 2500);

    return () => {
      messageTimers.forEach(clearTimeout);
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      {/* Hex Grid Background */}
      <div className="hex-grid absolute inset-0 opacity-30" />
      
      {/* Central Core Animation */}
      <motion.div
        className="relative mb-12"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="h-32 w-32"
        >
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <polygon
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/30"
            />
            <polygon
              points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/50"
            />
            <polygon
              points="50,25 70,37.5 70,62.5 50,75 30,62.5 30,37.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary animate-pulse-glow"
            />
          </svg>
        </motion.div>
        
        {/* Central Dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_20px_hsl(190_100%_50%_/_0.8)]"
        />
      </motion.div>

      {/* Boot Messages */}
      <div className="mb-8 h-24 w-80 overflow-hidden">
        <AnimatePresence mode="popLayout">
          {bootMessages.slice(0, currentIndex).map((msg, index) => (
            <motion.div
              key={msg.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: index === currentIndex - 1 ? 1 : 0.4, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="font-mono text-sm text-primary"
            >
              <span className="mr-2 text-primary/50">[{String(index + 1).padStart(2, "0")}]</span>
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="relative h-1 w-64 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-accent"
          style={{ width: `${progress}%` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[scan_1s_linear_infinite]" />
      </div>

      {/* Progress Percentage */}
      <motion.p
        className="mt-4 font-mono text-xs text-muted-foreground"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        {progress}% COMPLETE
      </motion.p>
    </motion.div>
  );
};
