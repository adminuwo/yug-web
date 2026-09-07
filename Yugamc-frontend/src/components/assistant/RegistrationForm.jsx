import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const RegistrationForm = ({
  regData,
  setRegData,
  regError,
  isRegistering,
  showThankYou,
  handleRegister
}) => {
  return (
    <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
      <AnimatePresence mode="wait">
        {showThankYou ? (
          <motion.div 
            key="thankyou"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="text-center space-y-4"
          >
            <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={32} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-text">Thank You!</h2>
            <p className="text-sm text-text/60 leading-relaxed font-sans">
              Thank you for connecting with <b>YUG AMC</b>. Our luxury property assistant is now ready to help you.
            </p>
          </motion.div>
        ) : (
          <motion.div 
            key="register"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold text-text">Welcome to YUG AMC</h2>
              <p className="text-xs text-text/40 tracking-widest uppercase font-bold">Luxury Real Estate Concierge</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-text/40 ml-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your full name"
                  className="w-full bg-primary/30 border border-secondary rounded-xl py-4 px-5 outline-none focus:ring-1 focus:ring-accent transition-all text-sm font-sans"
                  value={regData.name}
                  onChange={(e) => setRegData({...regData, name: e.target.value})}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-text/40 ml-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="Your professional email"
                  className="w-full bg-primary/30 border border-secondary rounded-xl py-4 px-5 outline-none focus:ring-1 focus:ring-accent transition-all text-sm font-sans"
                  value={regData.email}
                  onChange={(e) => setRegData({...regData, email: e.target.value})}
                />
              </div>

              {regError && <p className="text-[11px] text-red-500 font-bold ml-1">{regError}</p>}

              <button 
                type="submit"
                disabled={isRegistering}
                className={`w-full py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] shadow-xl transition-all ${isRegistering ? 'bg-secondary text-text/30 cursor-wait' : 'bg-text text-white hover:bg-accent active:scale-[0.98]'}`}
              >
                {isRegistering ? 'Registering...' : 'Start Conversation'}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RegistrationForm;
