import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Send, PhoneCall } from 'lucide-react';

const FinalCTA = ({ onBookVisit }) => {
  return (
    <section className="py-32 bg-text relative overflow-hidden">
      {/* Cinematic Backdrop Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-transparent to-accent/30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="text-accent tracking-[0.5em] text-[10px] uppercase font-bold mb-8 block">Your Journey Begins</span>
          <h2 className="text-5xl md:text-8xl font-serif text-white mb-12 leading-none tracking-tighter">
            Your Next <span className="italic font-light">Investment</span> <br /> 
            Starts <span className="text-accent underline decoration-1 underline-offset-[12px]">Here.</span>
          </h2>
          <p className="text-xl text-white/50 font-sans mb-16 font-light max-w-2xl mx-auto leading-relaxed">
            Experience the pinnacle of luxury real estate with YUG AMC. Our team is ready to guide you to your perfect space.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
             <Link to="/contact" className="group relative px-12 py-5 bg-accent text-white font-sans tracking-[0.3em] uppercase text-[10px] font-bold rounded-full overflow-hidden transition-all duration-500 shadow-2xl active:scale-95">
               <span className="relative z-10 flex items-center gap-2 group-hover:text-text transition-colors duration-500">
                 Enquire Now <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
               </span>
               <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
             </Link>

             <button 
               onClick={onBookVisit}
               className="group relative px-12 py-5 border border-white/20 text-white font-sans tracking-[0.3em] uppercase text-[10px] font-bold rounded-full overflow-hidden transition-all duration-500 hover:border-white active:scale-95"
             >
               <span className="relative z-10 flex items-center gap-2 group-hover:text-text transition-colors duration-500">
                 Schedule Visit <PhoneCall size={14} className="group-hover:scale-110 transition-transform duration-500" />
               </span>
               <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
             </button>
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Floating Detail */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-[120px]"></div>
    </section>
  );
};

export default FinalCTA;
