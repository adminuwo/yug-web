import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import elevation_1_2 from '../../assets/elevation_1_2.png';

const UpcomingHighlight = () => {
  return (
    <section className="py-20 bg-[#EDEDED]/20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-square overflow-hidden rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]">
              <img 
                src={elevation_1_2} 
                alt="City Plaza" 
                className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-110" 
              />
            </div>
            {/* Cinematic Accent */}
            <div className="absolute -top-12 -left-12 w-48 h-48 border-t-[1px] border-l-[1px] border-accent/30 -z-10 opacity-50"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="order-1 lg:order-2"
          >
            <span className="text-accent tracking-[0.5em] text-[10px] uppercase font-bold mb-8 block">Project Spotlight</span>
            <h4 className="text-[10px] font-sans tracking-[0.4em] uppercase text-text/40 font-bold mb-4">The Next Big Destination for Commercial Growth</h4>
            <h2 className="text-6xl md:text-8xl font-serif text-text mb-10 leading-[0.9] tracking-tighter">
              City <br /> <span className="italic font-light text-accent">Plaza.</span>
            </h2>
            <p className="text-xl text-text font-bold font-sans leading-relaxed mb-12 max-w-lg">
              City Plaza is envisioned as a high-potential commercial destination for brands, investors, retailers, and entrepreneurs looking for visibility, footfall, and future appreciation. Designed to become a key business landmark, it brings together location advantage, commercial relevance, and long-term investment value.
            </p>
            <div className="flex flex-col sm:flex-row gap-10">
               <Link to="/upcoming" className="group flex items-center gap-4 text-xs font-sans tracking-[0.3em] uppercase text-text font-bold hover:text-accent transition-colors duration-500">
                 Explore Opportunity
                 <div className="w-8 h-[1px] bg-text/20 group-hover:bg-accent group-hover:w-12 transition-all duration-500"></div>
               </Link>
               <Link to="/contact" className="group flex items-center gap-4 text-xs font-sans tracking-[0.3em] uppercase text-text font-bold hover:text-accent transition-colors duration-500">
                 Book Commercial Space
                 <div className="w-8 h-[1px] bg-text/20 group-hover:bg-accent group-hover:w-12 transition-all duration-500"></div>
               </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default UpcomingHighlight;
