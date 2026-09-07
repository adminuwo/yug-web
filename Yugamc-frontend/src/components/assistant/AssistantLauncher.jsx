import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

const AssistantLauncher = ({ isOpen, toggleOpen, showOnboarding }) => {
  return (
    <div className="fixed bottom-[100px] right-6 z-[9999] group">
      {/* Tooltip */}
      <AnimatePresence>
        {!isOpen && !showOnboarding && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-text font-sans text-[11px] tracking-wider uppercase whitespace-nowrap shadow-xl border border-secondary rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Chat with YUG AMC Assistant
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleOpen}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          y: [0, -8, 0],
          boxShadow: showOnboarding 
            ? ["0px 0px 0px 0px rgba(196,106,74,0)", "0px 0px 20px 10px rgba(196,106,74,0.2)", "0px 0px 0px 0px rgba(196,106,74,0)"]
            : "0px 0px 0px 0px rgba(0,0,0,0)"
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          },
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          },
          scale: { duration: 0.5 },
          opacity: { duration: 0.5 }
        }}
        whileHover={{ scale: 1.1, backgroundColor: "#F9F9F9" }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 md:w-16 md:h-16 bg-white border border-[#EDEDED] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-colors"
      >
        {/* Pulsing Glow Effect */}
        <motion.div
          animate={{ 
            scale: showOnboarding ? [1, 1.4, 1] : [1, 1.2, 1], 
            opacity: showOnboarding ? [0.2, 0.5, 0.2] : [0.1, 0.3, 0.1] 
          }}
          transition={{ duration: showOnboarding ? 2 : 4, repeat: Infinity }}
          className="absolute inset-0 bg-accent rounded-full -z-10"
        />

        {/* Rotating Sparkle Decoration */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 p-3"
        >
          <div className="absolute top-1 left-1 opacity-40">
            <Sparkles size={12} className="text-accent" />
          </div>
        </motion.div>

        {isOpen ? (
          <X size={24} className="text-accent" />
        ) : (
          <Sparkles size={28} className="text-accent" />
        )}
      </motion.button>
    </div>
  );
};

export default AssistantLauncher;
