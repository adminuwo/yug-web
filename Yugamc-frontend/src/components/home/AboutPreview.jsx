import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ss2 from '../../assets/Screenshot 2026-03-20 080543.png';

const AboutPreview = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="text-accent tracking-[0.4em] text-[10px] uppercase font-bold mb-6 block">The YUG Legacy</span>
            <h2 className="text-5xl md:text-7xl font-serif text-text mb-8 leading-tight">
              More Than <span className="italic font-light">Construction.</span> <br /> 
              We Build <span className="text-accent">Trust.</span>
            </h2>
            <p className="text-lg text-text font-bold font-sans leading-relaxed mb-10 font-light max-w-xl">
              YUGAMC is not just in the business of constructing buildings. We create residential and commercial spaces that shape lifestyles, support business growth, and generate long-term value. With over a decade of real estate experience in Jabalpur, our focus has always remained the same — quality construction, strategic locations, timely delivery, and trust that lasts beyond possession.
            </p>
            <Link to="/about" className="group flex items-center gap-4 text-xs font-sans tracking-[0.3em] uppercase text-text font-bold hover:text-accent transition-colors duration-500">
               Know Our Story
               <div className="w-10 h-px bg-text/20 group-hover:bg-accent group-hover:w-16 transition-all duration-500"></div>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-3xl">
              <img 
                src={ss2} 
                alt="Yash Heights" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-110" 
              />
            </div>
            {/* Aesthetic Thin Line Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-accent/20 -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
