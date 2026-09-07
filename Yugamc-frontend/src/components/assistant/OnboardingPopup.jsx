import React from 'react';
import { motion } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

const OnboardingPopup = ({ onChatNow, onDismiss }) => {
  return (
    <>
      {/* Backdrop Backdrop Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onDismiss}
        className="fixed inset-0 bg-black/40 backdrop-blur-[8px] z-[10001] popup-overlay"
      />
      
      {/* Popup Container */}
      <motion.div
        initial={{ opacity: 0, x: "-50%", y: "-60%", scale: 0.9 }}
        animate={{ opacity: 1, x: "-50%", y: "-50%", scale: 1 }}
        exit={{ opacity: 0, x: "-50%", y: "-60%", scale: 0.9 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-[360px] bg-white rounded-[24px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)] z-[10002] border border-secondary/50 popup-container"
      >
        <button 
          onClick={onDismiss}
          className="absolute top-4 right-4 p-2 hover:bg-primary rounded-full transition-all text-text/30 hover:text-text hover:rotate-90 close-btn"
        >
          <X size={20} />
        </button>

        <div className="space-y-6 text-center">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
            <Sparkles size={32} className="text-accent" />
          </div>
          
          <div className="space-y-2">
            <h4 className="font-serif text-2xl font-bold text-text">Need Assistance?</h4>
            <p className="text-[14px] text-text/60 leading-relaxed font-sans mt-2">
              Connect with our <b>YUG AMC Assistant</b> to explore Premium Luxury Real Estate in Jabalpur.
            </p>
          </div>

          <button
            onClick={onChatNow}
            className="w-full py-4 bg-text text-white rounded-2xl font-bold text-xs uppercase tracking-[0.2em] shadow-xl shadow-text/10 hover:bg-accent hover:scale-[1.02] active:scale-[0.98] transition-all group overflow-hidden relative"
          >
            <span className="relative z-10">Start Conversation</span>
            <motion.div 
               className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            />
          </button>
          
          <p className="text-[10px] text-text/30 uppercase tracking-widest font-bold">
            Real-time Property Guidance
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default OnboardingPopup;
