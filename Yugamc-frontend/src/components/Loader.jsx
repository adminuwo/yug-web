import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import yugLogo from '../assets/yug logo.webp';

const Loader = ({ onLoaded }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onLoaded) onLoaded();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F8F8F8]"
        >
          {/* Subtle Background Text */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.03, scale: 1.1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center text-[20vw] font-serif font-bold text-black pointer-events-none whitespace-nowrap"
          >
            YUG AMC
          </motion.div>

          <div className="relative flex flex-col items-center overflow-hidden px-8 py-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 relative z-10"
            >
              <img 
                src={yugLogo} 
                alt="YUG AMC Logo" 
                className="w-24 md:w-32 h-auto object-contain"
              />
            </motion.div>

            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="text-5xl md:text-7xl font-serif font-bold text-text tracking-[0.2em] relative z-10"
            >
              YUG<span className="text-accent underline underline-offset-8 decoration-1">AMC</span>
            </motion.div>
          </div>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="h-[1px] bg-accent mt-4 relative z-10"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 text-text/40 font-sans tracking-[0.3em] uppercase text-[10px] relative z-10"
          >
            Building Trust Since 2014
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
